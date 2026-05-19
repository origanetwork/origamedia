"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Play, ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';

export default function AllWorkPage() {
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projects : projects.slice(0, 8);

    const getCategoryPath = (category: string) => {
        switch (category) {
            case "Brand Identity":
            case "Visual Designs":
                return "/work/branding";
            case "Social Media":
                return "/work/social";
            case "Video Production":
                return "/work/video";
            default:
                return "/work/all";
        }
    };

    return (
        <main className="min-h-screen bg-[#070707] text-white">
            {/* Header Section */}
            <div className="pt-10 pb-12 px-4 md:px-10">
                <div className="max-w-7xl flex flex-col md:flex-row justify-between items-center md:items-end gap-10 text-center md:text-left">
                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-white/40 mb-6">
                            Portfolio
                        </span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-medium tracking-tighter"
                        >
                            Complete <br /> Discovery
                        </motion.h1>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-8">
                        <p className="text-xl text-white/50 font-light max-w-sm ml-auto leading-relaxed">
                            A curated archive of brand transformations and cinematic narratives.
                        </p>
                    </div>
                </div>
            </div>

            {/* Dynamic Grid Explorer */}
            <div className="px-6 md:px-10 py-10 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayedProjects.map((project, index) => (
                        <Link
                            key={project.id}
                            href={getCategoryPath(project.category)}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: (index % 4) * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-none bg-[#0c0c0c] border-2 border-white group/card transition-all duration-700 shadow-2xl">
                                    <AnimatePresence mode="wait">
                                        {project.category === "Brand Identity" ? (
                                            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                                                {project.logo && (
                                                    <div className="relative w-32 h-32 mb-8 transition-transform duration-700 group-hover:scale-110">
                                                        <Image
                                                            src={project.logo}
                                                            alt={`${project.title} logo`}
                                                            fill
                                                            className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                                                        />
                                                    </div>
                                                )}
                                                <h3 className="text-2xl font-medium tracking-tight mb-2 text-white">{project.title}</h3>
                                                <p className="text-[10px] text-white/40 uppercase tracking-[0.2em]">{project.subtitle}</p>
                                            </div>
                                        ) : project.category === "Video Production" ? (
                                            <div className="absolute inset-0 w-full h-full">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover opacity-60 transition-all duration-1000 group-hover:scale-110 group-hover:grayscale group-hover:opacity-40"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:bg-white group-hover:border-white">
                                                        <Play className="w-6 h-6 text-white fill-white group-hover:text-black group-hover:fill-black transition-colors" />
                                                    </div>
                                                </div>
                                                <div className="absolute bottom-10 left-0 right-0 text-center px-6">
                                                    <h3 className="text-xl font-medium text-white mb-1">{project.title}</h3>
                                                    <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/40">Cinematic Film</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="absolute inset-0 w-full h-full">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-90" />
                                                <div className="absolute bottom-10 left-10 right-10">
                                                    {project.logo && (
                                                        <div className="relative w-12 h-12 mb-6 transition-transform duration-700 group-hover:scale-110">
                                                            <Image
                                                                src={project.logo}
                                                                alt=""
                                                                fill
                                                                className="object-contain"
                                                            />
                                                        </div>
                                                    )}
                                                    <h3 className="text-2xl font-medium text-white mb-1">{project.title}</h3>
                                                    <p className="text-[10px] text-white/40 uppercase tracking-[0.2em]">{project.subtitle}</p>
                                                </div>
                                            </div>
                                        )}
                                    </AnimatePresence>
                                    <div className="absolute bottom-10 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 pointer-events-none">
                                        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white underline underline-offset-8">View Category</span>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {!showAll && projects.length > 8 && (
                    <div className="mt-20 flex justify-center">
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            onClick={() => setShowAll(true)}
                            className="group flex items-center gap-4 bg-white text-black px-10 py-5 rounded-none font-bold uppercase tracking-[0.3em] text-xs transition-all hover:bg-black hover:text-white hover:border-white border-2 border-transparent"
                        >
                            <span>Explore More</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                        </motion.button>
                    </div>
                )}
            </div>
        </main>
    );
}
