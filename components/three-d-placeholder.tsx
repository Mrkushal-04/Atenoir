"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { motion } from "framer-motion"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

interface ThreeDPlaceholderProps {
  productType: string
  color?: string
}

function AnimatedShape({ productType, color = "#10b981" }: { productType: string; color?: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  const getGeometry = () => {
    switch (productType.toLowerCase()) {
      case "dress":
      case "gown":
        return <coneGeometry args={[0.8, 1.5, 8]} />
      case "suit":
      case "blazer":
      case "jacket":
        return <boxGeometry args={[1.2, 1.5, 0.3]} />
      case "shirt":
      case "blouse":
        return <boxGeometry args={[1, 1.2, 0.2]} />
      case "sweater":
      case "hoodie":
        return <boxGeometry args={[1.1, 1.3, 0.4]} />
      case "trousers":
      case "pants":
        return <cylinderGeometry args={[0.3, 0.4, 1.5, 8]} />
      default:
        return <boxGeometry args={[1, 1, 1]} />
    }
  }

  return (
    <mesh ref={meshRef}>
      {getGeometry()}
      <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
    </mesh>
  )
}

function LoadingShape() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color="#6b7280" wireframe />
    </mesh>
  )
}

export function ThreeDPlaceholder({ productType, color }: ThreeDPlaceholderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-full min-h-[400px] bg-gray-900 rounded-lg overflow-hidden relative"
    >
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <Suspense fallback={<LoadingShape />}>
          <AnimatedShape productType={productType} color={color} />
          <OrbitControls enableZoom enablePan enableRotate />
          <Environment preset="city" />
        </Suspense>
        <ambientLight intensity={0.6} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={1} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={1} />
      </Canvas>

      {/* Overlay text */}
      <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
        <p className="text-white text-sm">3D Preview - {productType}</p>
      </div>
    </motion.div>
  )
}
