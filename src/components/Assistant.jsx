import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Text } from '@react-three/drei';

export default function Assistant({ position = [0, 0, 0] }) {
  const group = useRef();
  
  // Instructions for the user:
  // 1. Generate your 3D model using Tencent Hunyuan3D or similar.
  // 2. Export it as 'joe.glb'.
  // 3. Place it in 'src/assets/models/joe.glb'.
  // 4. Uncomment the lines below to load the model.
  
  // const { scene } = useGLTF('/models/joe.glb'); // Adjust path if in public folder, or import if in src

  useFrame((state) => {
    // Floating animation
    const t = state.clock.getElapsedTime();
    group.current.position.y = position[1] + Math.sin(t) * 0.1;
    group.current.rotation.y = Math.sin(t / 2) * 0.1;
  });

  return (
    <group ref={group} position={position}>
      {/* Placeholder implementation until model is added */}
      <mesh>
        <capsuleGeometry args={[0.5, 2, 4, 8]} />
        <meshStandardMaterial 
            color="#00ffff" 
            emissive="#00aaaa"
            emissiveIntensity={0.5}
            wireframe 
        />
      </mesh>
      
      <Text 
        position={[0, 1.5, 0]} 
        fontSize={0.2} 
        color="#00ffff"
        anchorX="center"
        anchorY="middle"
      >
        AWAITING MODEL
      </Text>

      {/* When you have the model, replace the mesh above with: */}
      {/* <primitive object={scene} scale={1} /> */}
    </group>
  );
}
