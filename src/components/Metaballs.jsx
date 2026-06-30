import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Metaballs with a halftone shader.
 *
 * We render a single fullscreen quad in clip space (no camera dependency) and
 * compute a metaball field in the fragment shader, then quantise it into a
 * halftone dot grid — so the blobs read as newspaper print, the anime-retro
 * signature. Field = sum of r²/(d²+eps) for each moving ball centre.
 */

// Fullscreen triangle in clip space — covers the whole viewport regardless
// of camera. UVs run 0..1 across the quad.
const VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    // position already in -1..1 clip space; output directly, ignore matrices
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const FRAG = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform vec3 uInk;
  uniform vec3 uPaper;

  // Metaball field — moving centres, additive falloff.
  float field(vec2 p) {
    float f = 0.0;
    // 5 balls with looping, slightly chaotic orbits
    for (int i = 0; i < 5; i++) {
      float fi = float(i);
      float a = uTime * 0.3 + fi * 1.7;
      float r = 0.18 + 0.06 * sin(uTime * 0.5 + fi);
      vec2 c = vec2(
        0.5 + 0.32 * cos(a + fi * 2.1),
        0.5 + 0.30 * sin(a * 1.3 + fi * 1.7)
      );
      float d = distance(p, c);
      f += r * r / (d * d + 0.0001);
    }
    // gentle mouse pull
    float dm = distance(p, uMouse);
    f += 0.04 / (dm * dm + 0.0002);
    return f;
  }

  void main() {
    vec2 p = vUv;
    // keep aspect square-ish so dots stay round
    float aspect = uResolution.x / uResolution.y;
    if (aspect > 1.0) p.x *= aspect; else p.y /= aspect;

    float f = clamp(field(p), 0.0, 4.0);

    // Halftone grid
    float dots = 90.0;
    vec2 g = floor(p * dots) / dots + (0.5 / dots);
    vec2 cell = fract(p * dots);
    float dist = length(cell - 0.5);

    // sample field at cell centre, map to dot radius
    float fc = clamp(field(g), 0.0, 4.0);
    float radius = smoothstep(1.0, 2.6, fc);
    // soft edge
    float dot = 1.0 - smoothstep(radius - 0.06, radius, dist);

    // threshold the live field for crisp blob silhouette
    float mask = smoothstep(1.0, 1.05, f);

    // combine: dots inside the blob, faint dots outside for paper texture
    float inside = dot * mask;
    float outside = (1.0 - mask) * (radius * 0.15) * step(0.4, radius);

    float v = clamp(inside + outside, 0.0, 1.0);

    // subtle scanline shimmer for the retro feel
    float scan = 0.04 * sin(p.y * 800.0 + uTime * 2.0);
    v *= 1.0 + scan;

    vec3 col = mix(uPaper, uInk, v);
    // a whisper of accent inside the densest blobs
    col = mix(col, vec3(0.78, 0.25, 0.16), mask * smoothstep(2.2, 2.8, f) * 0.6);

    gl_FragColor = vec4(col, 1.0);
  }
`;

function ShaderPlane() {
  const matRef = useRef();
  const mouse = useRef(new THREE.Vector2(0.5, 0.5));

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.set(
        e.clientX / window.innerWidth,
        1.0 - e.clientY / window.innerHeight
      );
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useFrame((state) => {
    if (!matRef.current) return;
    const m = matRef.current;
    m.uniforms.uTime.value = state.clock.getElapsedTime();
    m.uniforms.uResolution.value.set(
      state.size.width,
      state.size.height
    );
    m.uniforms.uMouse.value.lerp(mouse.current, 0.08);
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={VERT}
        fragmentShader={FRAG}
        side={THREE.DoubleSide}
        uniforms={{
          uTime: { value: 0 },
          uResolution: { value: new THREE.Vector2(1, 1) },
          uMouse: { value: new THREE.Vector2(0.5, 0.5) },
          uInk: { value: new THREE.Color('#f4f1ea') },
          uPaper: { value: new THREE.Color('#0a0a0a') },
        }}
      />
    </mesh>
  );
}

export default function Metaballs() {
  return (
    <Canvas
      orthographic
      camera={{ zoom: 1, position: [0, 0, 1] }}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      gl={{ antialias: false, alpha: false }}
      dpr={[1, 1.5]}
    >
      <ShaderPlane />
    </Canvas>
  );
}