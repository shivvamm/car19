"use client";

import { useMemo, useRef } from "react";
import { RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* Canvas-drawn racing number so we need no external font file (offline-safe). */
function useNumberTexture(text = "19") {
  return useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 512;
    c.height = 512;
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 512, 512);
    ctx.fillStyle = "#ffffff";
    ctx.font = "900 300px Arial Narrow, Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 256, 260);
    // thin outline
    ctx.lineWidth = 6;
    ctx.strokeStyle = "rgba(0,0,0,0.35)";
    ctx.strokeText(text, 256, 260);
    const tex = new THREE.CanvasTexture(c);
    tex.anisotropy = 8;
    return tex;
  }, [text]);
}

function Wheel({ position }) {
  return (
    <group position={position} rotation={[Math.PI / 2, 0, 0]}>
      {/* tyre */}
      <mesh castShadow>
        <cylinderGeometry args={[0.44, 0.44, 0.34, 40]} />
        <meshStandardMaterial color="#0b0b0f" roughness={0.85} metalness={0.1} />
      </mesh>
      {/* rim */}
      <mesh position={[0, 0.18, 0]}>
        <cylinderGeometry args={[0.29, 0.29, 0.06, 32]} />
        <meshStandardMaterial color="#15151b" metalness={0.95} roughness={0.3} />
      </mesh>
      {/* spokes hint */}
      <mesh position={[0, 0.19, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.08, 12]} />
        <meshStandardMaterial color="#2a2a33" metalness={1} roughness={0.4} />
      </mesh>
      {/* red brake caliper glow */}
      <mesh position={[0, 0.05, 0.22]}>
        <boxGeometry args={[0.14, 0.05, 0.1]} />
        <meshStandardMaterial color="#ff2222" emissive="#ff1122" emissiveIntensity={2.2} />
      </mesh>
    </group>
  );
}

export default function Car(props) {
  const group = useRef();
  const numberTex = useNumberTexture("19");

  useFrame((state) => {
    // subtle breathing bob
    const t = state.clock.elapsedTime;
    if (group.current) group.current.position.y = Math.sin(t * 0.8) * 0.03;
  });

  const paint = (
    <meshPhysicalMaterial
      color="#08080e"
      metalness={1}
      roughness={0.18}
      clearcoat={1}
      clearcoatRoughness={0.08}
      envMapIntensity={2.2}
    />
  );

  return (
    <group ref={group} {...props} dispose={null}>
      {/* ---- lower body ---- */}
      <RoundedBox args={[4.5, 0.72, 1.98]} radius={0.22} smoothness={6} position={[0, 0.62, 0]} castShadow>
        {paint}
      </RoundedBox>

      {/* front wedge / hood slope */}
      <RoundedBox args={[1.3, 0.5, 1.9]} radius={0.18} smoothness={5} position={[1.75, 0.55, 0]} rotation={[0, 0, -0.06]} castShadow>
        {paint}
      </RoundedBox>

      {/* rear haunch */}
      <RoundedBox args={[1.2, 0.6, 1.94]} radius={0.2} smoothness={5} position={[-1.75, 0.6, 0]} castShadow>
        {paint}
      </RoundedBox>

      {/* ---- greenhouse / cabin (glossy black glass) ---- */}
      <RoundedBox args={[2.5, 0.62, 1.62]} radius={0.26} smoothness={6} position={[-0.15, 1.12, 0]} castShadow>
        <meshPhysicalMaterial color="#050509" metalness={0.4} roughness={0.05} clearcoat={1} envMapIntensity={2.5} />
      </RoundedBox>

      {/* roof cap paint */}
      <RoundedBox args={[1.9, 0.16, 1.5]} radius={0.1} smoothness={5} position={[-0.2, 1.42, 0]}>
        {paint}
      </RoundedBox>

      {/* ---- door numbers ---- */}
      {[0.99, -0.99].map((z, i) => (
        <mesh key={i} position={[-0.2, 0.66, z]} rotation={[0, z > 0 ? 0 : Math.PI, 0]}>
          <planeGeometry args={[0.62, 0.62]} />
          <meshBasicMaterial map={numberTex} transparent toneMapped={false} />
        </mesh>
      ))}

      {/* rocker strips (steel white) */}
      {[0.98, -0.98].map((z, i) => (
        <mesh key={`r${i}`} position={[-0.1, 0.32, z]}>
          <boxGeometry args={[3.4, 0.035, 0.03]} />
          <meshStandardMaterial color="#dfe5ec" emissive="#cdd4dc" emissiveIntensity={2.6} toneMapped={false} />
        </mesh>
      ))}

      {/* front splitter + neon lip */}
      <mesh position={[2.28, 0.32, 0]}>
        <boxGeometry args={[0.35, 0.06, 1.95]} />
        <meshStandardMaterial color="#0a0a0f" roughness={0.6} />
      </mesh>
      <mesh position={[2.45, 0.31, 0]}>
        <boxGeometry args={[0.04, 0.05, 1.7]} />
        <meshStandardMaterial color="#dfe5ec" emissive="#cdd4dc" emissiveIntensity={2.4} toneMapped={false} />
      </mesh>

      {/* headlights (cool white) */}
      {[0.62, -0.62].map((z, i) => (
        <mesh key={`h${i}`} position={[2.42, 0.62, z]}>
          <boxGeometry args={[0.08, 0.14, 0.42]} />
          <meshStandardMaterial color="#eafffb" emissive="#dff7ff" emissiveIntensity={4} toneMapped={false} />
        </mesh>
      ))}

      {/* full-width taillight bar (red) */}
      <mesh position={[-2.4, 0.72, 0]}>
        <boxGeometry args={[0.06, 0.17, 1.6]} />
        <meshStandardMaterial color="#ff3b30" emissive="#ff2a1e" emissiveIntensity={4.5} toneMapped={false} />
      </mesh>

      {/* rear spoiler */}
      <mesh position={[-2.35, 1.06, 0]}>
        <boxGeometry args={[0.5, 0.05, 1.7]} />
        <meshStandardMaterial color="#0a0a0f" metalness={0.9} roughness={0.3} />
      </mesh>
      {[0.7, -0.7].map((z, i) => (
        <mesh key={`s${i}`} position={[-2.3, 0.94, z]}>
          <boxGeometry args={[0.06, 0.2, 0.06]} />
          <meshStandardMaterial color="#0a0a0f" metalness={0.9} roughness={0.3} />
        </mesh>
      ))}

      {/* dual exhaust */}
      {[0.45, -0.45].map((z, i) => (
        <mesh key={`e${i}`} position={[-2.5, 0.3, z]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.07, 0.07, 0.14, 16]} />
          <meshStandardMaterial color="#cfd2d6" metalness={1} roughness={0.25} />
        </mesh>
      ))}

      {/* ---- wheels ---- */}
      <Wheel position={[1.5, 0.44, 1.0]} />
      <Wheel position={[1.5, 0.44, -1.0]} />
      <Wheel position={[-1.5, 0.44, 1.0]} />
      <Wheel position={[-1.5, 0.44, -1.0]} />

      {/* underglow */}
      <mesh position={[0, 0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4.2, 1.7]} />
        <meshBasicMaterial color="#ff3b30" transparent opacity={0.5} toneMapped={false} />
      </mesh>
      <pointLight position={[0, 0.1, 0]} color="#ff3b30" intensity={6} distance={4} />
    </group>
  );
}
