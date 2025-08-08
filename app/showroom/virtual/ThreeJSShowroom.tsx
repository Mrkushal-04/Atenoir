"use client"

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

function Box() {
    return (
        <mesh rotation={[0.4, 0.4, 0]} castShadow receiveShadow>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#eab308" metalness={0.5} roughness={0.2} />
        </mesh>
    );
}

export default function ThreeJSShowroom() {
    return (
        <Canvas camera={{ position: [5, 5, 5], fov: 50 }} shadows>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 10, 7]} intensity={1.2} castShadow />
            <Suspense fallback={null}>
                <Box />
                <Environment preset="city" />
            </Suspense>
            <OrbitControls enablePan enableZoom enableRotate />
        </Canvas>
    );
} 