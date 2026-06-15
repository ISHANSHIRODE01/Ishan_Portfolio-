"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function NeuralNetwork() {
  const count = 80; // Number of glowing nodes
  const connectionDistance = 2.5; // Max distance for connections
  const mouseInteractionRadius = 3; 
  
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Generate random usage points
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        // Spread particles across a wide area (since it's a fixed background)
      positions[i * 3] = (Math.random() - 0.5) * 25; // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15; // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // Z
    }
    return positions;
  }, [count]);

  const particlesRef = useRef<THREE.Points>(null);
  const linesGeometryRef = useRef<THREE.BufferGeometry>(null);

  // Store velocities for slow floating motion
  const velocities = useMemo(() => {
      return Array.from({ length: count }, () => ({
          x: (Math.random() - 0.5) * 0.005,
          y: (Math.random() - 0.5) * 0.005,
          z: (Math.random() - 0.5) * 0.005,
      }));
  }, [count]);



  useFrame((state) => {
    if (!particlesRef.current || !linesGeometryRef.current) return;

    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
    
    // Interactions using custom mouse ref
    const mouseX = mouseRef.current.x * 12.5; 
    const mouseY = mouseRef.current.y * 7.5;

    // ... (rest of update loop unchanged)
    // Update particle positions
    for (let i = 0; i < count; i++) {
      let ix = i * 3;
      let iy = i * 3 + 1;
      let iz = i * 3 + 2;

      // Apply velocity
      positions[ix] += velocities[i].x;
      positions[iy] += velocities[i].y;
      positions[iz] += velocities[i].z;

      // Mouse repulsion/attraction (subtle)
      const dx = mouseX - positions[ix];
      const dy = mouseY - positions[iy];
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < mouseInteractionRadius) {
          const force = (mouseInteractionRadius - dist) * 0.005;
          positions[ix] -= dx * force; // Push away slightly
          positions[iy] -= dy * force;
      }
      
      // Boundary check & warp
      if (Math.abs(positions[ix]) > 12.5) velocities[i].x *= -1;
      if (Math.abs(positions[iy]) > 7.5) velocities[i].y *= -1;
      if (Math.abs(positions[iz]) > 5.0) velocities[i].z *= -1;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;

    // Connect particles
    const linePositions: number[] = [];
    
    // Simple O(N^2) check - okay for small N=80
    for (let i = 0; i < count; i++) {
        // ... (rest of inner loop unchanged)
      for (let j = i + 1; j < count; j++) {
        const x1 = positions[i * 3];
        const y1 = positions[i * 3 + 1];
        const z1 = positions[i * 3 + 2];

        const x2 = positions[j * 3];
        const y2 = positions[j * 3 + 1];
        const z2 = positions[j * 3 + 2];

        const dist = Math.sqrt((x1-x2)**2 + (y1-y2)**2 + (z1-z2)**2);

        if (dist < connectionDistance) {
          linePositions.push(x1, y1, z1);
          linePositions.push(x2, y2, z2);
        }
      }
    }

    linesGeometryRef.current.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
  });

  return (
    <group>
      <Points ref={particlesRef} positions={particlesPosition} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#00f3ff"
                size={0.15}
                sizeAttenuation={true}
                depthWrite={false}
            />
      </Points>
      <lineSegments>
        <bufferGeometry ref={linesGeometryRef} />
        <lineBasicMaterial color="#bc13fe" transparent opacity={0.15} />
      </lineSegments>
    </group>
  );
}

export default function NeuralBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none bg-[#000319]">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]} // Optimization for varying screen densities
      >
        <NeuralNetwork />
      </Canvas>
    </div>
  );
}
