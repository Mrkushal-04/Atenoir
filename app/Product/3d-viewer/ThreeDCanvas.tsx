/// <reference types="@react-three/fiber" />
"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function ProductModel() {
    const meshRef = useRef<THREE.Mesh>(null);
    useFrame(() => {
        if (meshRef.current) meshRef.current.rotation.y += 0.005;
    });
    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <boxGeometry args={[2, 3, 1]} />
            <meshStandardMaterial color="#666666" />
        </mesh>
    );
}

export default function ThreeDCanvas({ cameraDistance = 5, autoRotate = true, showGrid = true, showLights = true }) {
    return (
        <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, cameraDistance]} />
            <OrbitControls autoRotate={autoRotate} />
            {showLights && (
                <>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <pointLight position={[-10, -10, -5]} intensity={0.5} />
                </>
            )}
            <ProductModel />
            {showGrid && <gridHelper args={[10, 10]} />}
            <Environment preset="studio" />
        </Canvas>
    );
} 