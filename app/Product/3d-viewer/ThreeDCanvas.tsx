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
        <primitive object={new THREE.Mesh(
            new THREE.BoxGeometry(2, 3, 1),
            new THREE.MeshStandardMaterial({ color: "#666666" })
        )} ref={meshRef} position={[0, 0, 0]} />
    );
}

export default function ThreeDCanvas({ cameraDistance = 5, autoRotate = true, showGrid = true, showLights = true }) {
    return (
        <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, cameraDistance]} />
            <OrbitControls autoRotate={autoRotate} />
            {showLights && (
                <>
                    <ambientLight intensity={0.5} {...({} as any)} />
                    <directionalLight position={[10, 10, 5]} intensity={1} {...({} as any)} />
                    <pointLight position={[-10, -10, -5]} intensity={0.5} {...({} as any)} />
                </>
            )}
            <ProductModel />
            {showGrid && <gridHelper args={[10, 10]} {...({} as any)} />}
            <Environment preset="studio" />
        </Canvas>
    );
} 