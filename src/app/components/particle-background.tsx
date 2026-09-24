'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line } from '@react-three/drei';

/* =========================================================
   COLORS
========================================================= */

const PRIMARY = '#096B90';
const LIGHT = '#A1CCDC';
const BACKGROUND = '#040911';

/* =========================================================
   MOUSE TRACKER
========================================================= */

function useMousePosition() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x =
        (event.clientX / window.innerWidth) * 2 - 1;

      mouse.current.y =
        -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mouse;
}

/* =========================================================
   MAIN PARTICLES
========================================================= */

function MainParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const mouse = useMousePosition();

  const particles = useMemo(() => {
    // Reduced from 1800 → 700
    const count = 700;

    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const index = i * 3;

      positions[index] =
        (Math.random() - 0.5) * 20;

      positions[index + 1] =
        (Math.random() - 0.5) * 12;

      positions[index + 2] =
        (Math.random() - 0.5) * 7;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.getElapsedTime();

    const targetX = mouse.current.y * 0.12;
    const targetY = mouse.current.x * 0.18;

    pointsRef.current.rotation.x = THREE.MathUtils.lerp(
      pointsRef.current.rotation.x,
      targetX,
      0.025
    );

    pointsRef.current.rotation.y = THREE.MathUtils.lerp(
      pointsRef.current.rotation.y,
      targetY,
      0.025
    );

    pointsRef.current.position.x =
      Math.sin(time * 0.08) * 0.12;

    pointsRef.current.position.y =
      Math.cos(time * 0.12) * 0.1;

    pointsRef.current.rotation.z += 0.0001;
  });

  return (
    <Points
      ref={pointsRef}
      positions={particles}
      stride={3}
      frustumCulled
    >
      <PointMaterial
        color={LIGHT}
        size={0.045}
        sizeAttenuation
        transparent
        opacity={0.7}
        depthWrite={false}
      />
    </Points>
  );
}

/* =========================================================
   LARGE PARTICLES
========================================================= */

function LargeParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    // Reduced from 100 → 40
    const count = 40;

    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const index = i * 3;

      positions[index] =
        (Math.random() - 0.5) * 19;

      positions[index + 1] =
        (Math.random() - 0.5) * 10;

      positions[index + 2] =
        (Math.random() - 0.5) * 5;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.getElapsedTime();

    pointsRef.current.position.y =
      Math.sin(time * 0.25) * 0.15;

    pointsRef.current.rotation.z =
      Math.sin(time * 0.1) * 0.02;
  });

  return (
    <Points
      ref={pointsRef}
      positions={particles}
      stride={3}
      frustumCulled
    >
      <PointMaterial
        color={LIGHT}
        size={0.1}
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </Points>
  );
}

/* =========================================================
   NETWORK NODES
========================================================= */

function NetworkParticles() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useMousePosition();

  const nodes = useMemo(() => {
    // Reduced from 65 → 30
    return Array.from({ length: 30 }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 17,
        (Math.random() - 0.5) * 9,
        (Math.random() - 0.5) * 4
      ),
    }));
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();

    groupRef.current.rotation.y =
      Math.sin(time * 0.08) * 0.025 +
      mouse.current.x * 0.06;

    groupRef.current.rotation.x =
      Math.cos(time * 0.07) * 0.02 +
      mouse.current.y * 0.04;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, index) => (
        <React.Fragment key={index}>

          {/* NODE */}

          <mesh position={node.position}>
            <sphereGeometry args={[0.035, 6, 6]} />

            <meshBasicMaterial
              color={
                index % 4 === 0
                  ? LIGHT
                  : PRIMARY
              }
            />
          </mesh>

          {/* CONNECTION */}

          {index < nodes.length - 1 && (
            <Line
              points={[
                node.position,
                nodes[index + 1].position,
              ]}
              color={PRIMARY}
              transparent
              opacity={0.18}
              lineWidth={0.5}
            />
          )}

        </React.Fragment>
      ))}
    </group>
  );
}

/* =========================================================
   LIGHT STREAKS
========================================================= */

function LightStreaks() {
  const groupRef = useRef<THREE.Group>(null);

  const streaks = useMemo(() => {
    // Reduced from 14 → 6
    return Array.from({ length: 6 }, (_, index) => ({
      x: (Math.random() - 0.5) * 18,
      y: (Math.random() - 0.5) * 9,
      z: (Math.random() - 0.5) * 3,
      length: 0.8 + Math.random() * 1.8,
      speed: 0.08 + Math.random() * 0.08,
      offset: index * 0.7,
    }));
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();

    groupRef.current.children.forEach(
      (child, index) => {
        const streak = streaks[index];

        if (!streak) return;

        child.position.x =
          streak.x +
          ((time * streak.speed + streak.offset) % 16) -
          8;

        child.position.y = streak.y;
        child.position.z = streak.z;
      }
    );
  });

  return (
    <group ref={groupRef}>
      {streaks.map((streak, index) => (
        <Line
          key={index}
          points={[
            [0, 0, 0],
            [streak.length, 0, 0],
          ]}
          color={PRIMARY}
          transparent
          opacity={0.3}
          lineWidth={0.8}
        />
      ))}
    </group>
  );
}

/* =========================================================
   SCENE
========================================================= */

function Scene() {
  return (
    <>
      <MainParticles />

      <LargeParticles />

      <NetworkParticles />

      <LightStreaks />
    </>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ParticleBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        dpr={[1, 1.25]}
        camera={{
          position: [0, 0, 8],
          fov: 55,
          near: 0.1,
          far: 100,
        }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <color
          attach="background"
          args={[BACKGROUND]}
        />

        <Scene />
      </Canvas>
    </div>
  );
}