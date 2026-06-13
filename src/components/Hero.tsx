"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically load the heavy 3D canvas and model elements on the client with a black fallback background.
// This splits all massive Three.js / R3F dependencies out of the critical main-thread bundle.
const Hero3D = dynamic(() => import("./Hero3D"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-black" />
});

export default function Hero() {
    const title = "We Build Brands That Perform.";
    const words = title.split(" ");
    const sectionRef = useRef<HTMLDivElement>(null);
    
    // Check if the Hero section is currently visible on-screen
    const isInView = useInView(sectionRef, { once: false, margin: "200px" });

    return (
        <section ref={sectionRef} className="relative w-full h-[85dvh] md:h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white px-6 group/hero">
            {/* 3D Hybrid Concept Layer - Loaded Asynchronously */}
            <div className="absolute inset-0 z-0">
                <Hero3D isInView={isInView} />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 container mx-auto text-center max-w-5xl">
                <div className="space-y-12">
                    <h1 className="text-5xl md:text-8xl font-display font-medium leading-[1.1] md:leading-[1] py-2 md:py-0 tracking-tight text-white flex flex-wrap justify-center overflow-hidden">
                        {words.map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.05,
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
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-lg md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
                    >
                        A digital marketing and production studio by <Link href="https://origanetworks.com" target="_blank" className="text-white hover:underline underline-offset-4 decoration-gray-500 transition-all font-medium">Origa Networks</Link>—focused on strategy, creativity, and measurable growth.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8"
                    >
                        <Link href="/contact" className="group relative flex items-center space-x-6 bg-white text-black px-12 py-6 text-sm font-bold tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                            <span>Start a Project</span>
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>

                        <Link href="/#works" className="group flex items-center space-x-5 border border-white/20 px-12 py-6 text-sm font-bold tracking-[0.2em] uppercase hover:bg-white/5 transition-all duration-300 active:scale-95">
                            <span className="text-white">View Our Work</span>
                            <div className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-all duration-500" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        </section>
    );
}

