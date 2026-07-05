"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Lightformer,
  ContactShadows,
  MeshReflectorMaterial,
  Float,
} from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { Suspense } from "react";
import Car from "./Car";

/* Fully procedural studio env (no external HDR fetch) — gives the black paint
   those signature NFS-Heat magenta + cyan reflection streaks. */
function HeatEnvironment() {
  return (
    <Environment resolution={512} frames={1}>
      <color attach="background" args={["#0a0b0e"]} />
      <Lightformer intensity={3} color="#ff3b30" position={[-5, 3, 2]} scale={[8, 3, 1]} rotation={[0, Math.PI / 3, 0]} />
      <Lightformer intensity={3.2} color="#dfe5ec" position={[5, 3, -1]} scale={[8, 3, 1]} rotation={[0, -Math.PI / 3, 0]} />
      <Lightformer intensity={2} color="#4a525c" position={[0, 5, 3]} scale={[10, 2, 1]} />
      <Lightformer intensity={1.6} color="#ffffff" position={[0, 6, -4]} scale={[6, 2, 1]} />
      <Lightformer intensity={2.2} color="#c9a15a" position={[3, 1, 4]} scale={[3, 1, 1]} />
    </Environment>
  );
}

function ReflectiveFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[60, 60]} />
      <MeshReflectorMaterial
        blur={[300, 80]}
        resolution={1024}
        mixBlur={1}
        mixStrength={40}
        roughness={0.9}
        depthScale={1.1}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.2}
        color="#07070d"
        metalness={0.6}
        mirror={0}
      />
    </mesh>
  );
}

export default function CarScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [6.5, 2.6, 6.5], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <fog attach="fog" args={["#06060c", 10, 26]} />
        <ambientLight intensity={0.35} />
        <spotLight position={[6, 10, 4]} angle={0.4} penumbra={1} intensity={120} color="#ffffff" castShadow />
        <pointLight position={[-8, 3, -4]} intensity={40} color="#ff3b30" />
        <pointLight position={[8, 3, 4]} intensity={40} color="#c8d0d8" />

        <HeatEnvironment />

        <Float speed={1.2} rotationIntensity={0} floatIntensity={0.25}>
          <Car position={[0, 0.02, 0]} />
        </Float>

        <ContactShadows position={[0, 0.01, 0]} opacity={0.75} scale={16} blur={2.6} far={5} color="#000000" />
        <ReflectiveFloor />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={0.2}
          maxPolarAngle={Math.PI / 2.05}
          autoRotate
          autoRotateSpeed={0.9}
          target={[0, 0.7, 0]}
        />

        <EffectComposer disableNormalPass>
          <Bloom mipmapBlur intensity={0.9} luminanceThreshold={0.6} luminanceSmoothing={0.3} />
          <Vignette eskil={false} offset={0.25} darkness={0.85} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
