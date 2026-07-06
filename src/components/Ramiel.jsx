import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Edges } from '@react-three/drei';

function Octahedron() {
  const meshRef = useRef();
  
  // Oscillate the float position
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.z = Math.sin(t * 0.5) * 0.05;
    meshRef.current.position.y = Math.sin(t * 1.2) * 0.2;
  });

  return (
    <mesh ref={meshRef} scale={1.8}>
      <octahedronGeometry args={[1, 0]} />
      {/* Solid black core to hide back-facing wires and look solid */}
      <meshBasicMaterial color="#050505" />
      
      {/* Cyan glowing wireframe edges */}
      <Edges 
        linewidth={3} 
        threshold={15} 
        color="#00ffff" 
      />
      {/* An outer edge to simulate glow */}
      <Edges 
        linewidth={6} 
        threshold={15} 
        color="#00ffff"
        transparent
        opacity={0.3}
        scale={1.02}
      />
    </mesh>
  );
}

export default function Ramiel() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Octahedron />
    </Canvas>
  );
}
