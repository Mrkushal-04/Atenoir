// React Three Fiber types
import { extend } from '@react-three/fiber'
import * as THREE from 'three'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Three.js elements
      ambientLight: import('@react-three/fiber').LightNode<THREE.AmbientLight, typeof THREE.AmbientLight>
      directionalLight: import('@react-three/fiber').LightNode<THREE.DirectionalLight, typeof THREE.DirectionalLight>
      pointLight: import('@react-three/fiber').LightNode<THREE.PointLight, typeof THREE.PointLight>
      gridHelper: import('@react-three/fiber').Object3DNode<THREE.GridHelper, typeof THREE.GridHelper>
      mesh: import('@react-three/fiber').Object3DNode<THREE.Mesh, typeof THREE.Mesh>
      boxGeometry: import('@react-three/fiber').BufferGeometryNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>
      meshStandardMaterial: import('@react-three/fiber').MaterialNode<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>
      primitive: import('@react-three/fiber').Object3DNode<THREE.Object3D, typeof THREE.Object3D>
    }
  }
} 