"use client";

import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Environment, MeshTransmissionMaterial, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function DataCube() {
    const meshRef = useRef<THREE.Mesh>(null);
    const innerRef = useRef<THREE.Mesh>(null);
    const pointsRef = useRef<THREE.Points>(null);

    // Internal data points
    const points = useMemo(() => {
        const p = new Float32Array(500 * 3);
        const random = (seed: number) => {
            const x = Math.sin(seed) * 10000;
            return x - Math.floor(x);
        };
        for (let i = 0; i < 500; i++) {
            p[i * 3] = (random(i * 123.45) - 0.5) * 4;
            p[i * 3 + 1] = (random(i * 678.90) - 0.5) * 4;
            p[i * 3 + 2] = (random(i * 135.79) - 0.5) * 4;
        }
        return p;
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.y = t * 0.15;
            meshRef.current.rotation.x = t * 0.08;
        }
        if (innerRef.current) {
            innerRef.current.rotation.y = -t * 0.2;
            innerRef.current.rotation.z = t * 0.1;
        }
        if (pointsRef.current) {
            pointsRef.current.rotation.y = t * 0.1;
            pointsRef.current.rotation.z = -t * 0.05;
        }
    });

    return (
        <group scale={1.2}>
            {/* The Outer Media Glass Shell */}
            <mesh ref={meshRef}>
                <boxGeometry args={[4, 4, 4]} />
                <MeshTransmissionMaterial
                    samples={6}
                    thickness={1.5}
                    transmission={1}
                    roughness={0.05}
                    chromaticAberration={0.2}
                    anisotropy={0.5}
                    distortion={0.2}
                    distortionScale={0.1}
                    color="#ffffff"
                />
            </mesh>

            {/* Inner Core */}
            <mesh ref={innerRef}>
                <boxGeometry args={[2.5, 2.5, 2.5]} />
                <meshStandardMaterial color="#333333" wireframe transparent opacity={0.3} />
            </mesh>

            {/* The Internal Digital Performance Particles */}
            <Points ref={pointsRef} positions={points} stride={3}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.04}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
}

export default function Hero3D({ isInView }: { isInView: boolean }) {
    return (
        <Canvas frameloop={isInView ? "always" : "never"}>
            <color attach="background" args={["#000000"]} />
            <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={40} />
            <Environment preset="studio" />
            <Suspense fallback={null}>
                <DataCube />
            </Suspense>
        </Canvas>
    );
}
