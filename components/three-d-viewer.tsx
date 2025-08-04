"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { Suspense, useState } from "react"
import { motion } from "framer-motion"

interface ThreeDViewerProps {
  modelPath: string
}

function Model({ path }: { path: string }) {
  try {
    // For now, we'll just show a placeholder cube since GLB files don't exist
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#lime" />
      </mesh>
    )
  } catch (error) {
    console.warn(`Could not load model: ${path}`)
    return <FallbackCube />
  }
}

export function ThreeDViewer({ modelPath }: ThreeDViewerProps) {
  const [modelError, setModelError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-full min-h-[400px] bg-gray-900 rounded-lg overflow-hidden"
    >
      <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
        <Suspense fallback={<FallbackCube />}>
          <Model path={modelPath} />
          <OrbitControls enableZoom enablePan enableRotate />
          <Environment preset="city" />
        </Suspense>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={1} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={1} />
      </Canvas>
    </motion.div>
  )
}

// Fallback component for when the model is loading or not found
function FallbackCube() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#10b981" metalness={0.3} roughness={0.4} />
    </mesh>
  )
}
