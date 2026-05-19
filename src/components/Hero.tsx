"use client";

import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Environment, MeshTransmissionMaterial, Points, PointMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
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

export default function Hero() {
    const title = "We Build Brands That Perform.";
    const words = title.split(" ");

    return (
        <section className="relative w-full h-[85dvh] md:h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white px-6 group/hero">
            {/* 3D Hybrid Concept Layer */}
            <div className="absolute inset-0 z-0">
                <Canvas>
                    <color attach="background" args={["#000000"]} />
                    <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={40} />
                    <Environment preset="studio" />
                    <Suspense fallback={null}>
                        <DataCube />
                    </Suspense>
                </Canvas>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 container mx-auto text-center max-w-5xl">
                <div className="space-y-12">
                    <h1 className="text-5xl md:text-8xl font-display font-medium leading-[1] tracking-tight text-white flex flex-wrap justify-center overflow-hidden">
                        {words.map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    delay: i * 0.1,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                whileHover={{
                                    y: -20,
                                    color: "#9ca3af",
                                    transition: { duration: 0.3 }
                                }}
                                className={`inline-block mr-4 mb-2 ${word === "That" || word === "Perform." ? "text-gray-500 italic" : ""}`}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="text-lg md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
                    >
                        A digital marketing and production studio by <Link href="https://origanetworks.com" target="_blank" className="text-white hover:underline underline-offset-4 decoration-gray-500 transition-all font-medium">Origa Networks</Link>—focused on strategy, creativity, and measurable growth.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8"
                    >
                        <Link href="/contact" className="group relative flex items-center space-x-6 bg-white text-black px-12 py-6 text-sm font-bold tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                            <span>Start a Project</span>
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>

                        <button className="group flex items-center space-x-5 border border-white/20 px-12 py-6 text-sm font-bold tracking-[0.2em] uppercase hover:bg-white/5 transition-all duration-300 active:scale-95">
                            <span className="text-white">View Our Work</span>
                            <div className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-all duration-500" />
                        </button>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        </section>
    );
}



