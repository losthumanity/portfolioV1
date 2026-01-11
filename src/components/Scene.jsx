import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
import Assistant from './Assistant';

function Rain() {
  // Simple rain effect using particles
  // In a real app, you might use a more complex shader or Drei's Sparkles customized
  return (
    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
  );
}

export default function Scene() {
  return (
    <Canvas 
      shadows
      style={{ background: '#050505', position: 'absolute', top: 0, left: 0, zIndex: 0 }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
      
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, 10, -10]} intensity={1} color="#ff00ff" />
      <spotLight 
        position={[0, 10, 0]} 
        angle={0.3} 
        penumbra={1} 
        intensity={2} 
        castShadow 
      />

      <Suspense fallback={null}>
        <Assistant position={[2, -1, 0]} />
        <Rain />
        
        {/* Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#111" metalness={0.8} roughness={0.4} />
        </mesh>
      </Suspense>
    </Canvas>
  );
}
