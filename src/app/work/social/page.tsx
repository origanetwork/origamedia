"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Share2 } from 'lucide-react';
import { projects, Project } from '@/data/projects';

export default function SocialWorkPage() {
    const socialProjects = projects.filter(p => p.category === "Social Media");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const openProject = (project: Project) => {
        setSelectedProject(project);
        setActiveImageIndex(0);
    };

    return (
        <main className="min-h-screen bg-[#070707] text-white">
            {/* Header Section */}
            <div className="pt-10 pb-20 px-4 md:px-10 border-b border-white/5">
                <div className="max-w-7xl flex flex-col md:flex-row justify-between items-end gap-10">
                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-white mb-6">
                            Brand Architecture
                        </span>
                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-6xl md:text-8xl font-medium tracking-tighter"
                        >
                            Social Media <br /> Excellence
                        </motion.h1>
                    </div>
                    <div className="md:text-right">
                        <p className="text-xl text-white/50 font-light max-w-sm ml-auto leading-relaxed">
                            Strategic visual storytelling and high-impact brand systems designed for global digital dominance.
                        </p>
                    </div>
                </div>
            </div>

            {/* Poster Grid - Dynamic Stacking for Mobile, Grid for Desktop */}
            <div className="px-6 md:px-10 py-10 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
                    {socialProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer sticky top-24 md:static"
                            style={{
                                marginTop: index > 0 ? "calc(var(--stack-offset, 0) * 1px)" : "0",
                                zIndex: index + 1
                            }}
                            onClick={() => openProject(project)}
                        >
                            <div className="relative aspect-[2/2] md:aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#0c0c0c] border-2 border-white group/card transition-all duration-500 hover:border-[#0095f6] shadow-2xl">
                                {/* Subtle Background Brand Graphic */}
                                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                                    <Image
                                        src={project.image}
                                        alt=""
                                        fill
                                        className="object-cover blur-2xl scale-125"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/80" />

                                {/* Primary Logo View */}
                                <div className="absolute inset-0 flex items-center justify-center p-12">
                                    {project.logo ? (
                                        <div className="relative w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                                            <Image
                                                src={project.logo}
                                                alt={`${project.title} logo`}
                                                fill
                                                className="object-contain drop-shadow-[0_0_30px_rgba(0,149,246,0.3)]"
                                            />
                                        </div>
                                    ) : (
                                        <h3 className="text-3xl font-medium tracking-tight text-center">{project.title}</h3>
                                    )}
                                </div>

                                <div className="absolute bottom-10 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0095f6] mb-2 inline-block">View Works</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal - Gallery Focus */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-8 right-8 text-white hover:text-gray-400 transition-colors z-[101]"
                        >
                            <X className="w-10 h-10" />
                        </button>

                        <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-10">
                            <div className="relative w-full max-w-[min(90vw,75vh)] aspect-[4/5] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 group/modal-media">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeImageIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="w-full h-full relative"
                                    >
                                        <Image
                                            src={selectedProject.images ? selectedProject.images[activeImageIndex] : selectedProject.image}
                                            alt={selectedProject.title}
                                            fill
                                            className="object-contain"
                                        />

                                        {activeImageIndex === 0 && selectedProject.logo && (
                                            <div className="absolute top-12 left-12 z-20 w-32 h-32 flex items-center justify-center pointer-events-none">
                                                <Image
                                                    src={selectedProject.logo}
                                                    alt="Partner logo"
                                                    width={120}
                                                    height={120}
                                                    className="object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.6)]"
                                                />
                                            </div>
                                        )}

                                        {/* Image Nav */}
                                        {selectedProject.images && selectedProject.images.length > 1 && (
                                            <div className="absolute inset-0 flex items-center justify-between px-2 md:px-6 opacity-100 md:opacity-0 md:group-hover/modal-media:opacity-100 transition-opacity pointer-events-none">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); setActiveImageIndex(p => (p - 1 + selectedProject.images!.length) % selectedProject.images!.length) }}
                                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 md:bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black pointer-events-auto"
                                                >
                                                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                                                </button>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); setActiveImageIndex(p => (p + 1) % selectedProject.images!.length) }}
                                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 md:bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black pointer-events-auto"
                                                >
                                                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                                                </button>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>

                                {/* Indicators */}
                                {selectedProject.images && selectedProject.images.length > 1 && (
                                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                                        {selectedProject.images.map((_, i) => (
                                            <div key={i} className={`w-1.5 h-1.5 rounded-full ${activeImageIndex === i ? "bg-white w-4" : "bg-white/20"}`} />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Text content removed for minimalist visual focus */}
                        </div>

                        {/* Project Nav */}
                        <div className="fixed md:absolute bottom-12 md:bottom-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-10 flex gap-6 md:gap-4 z-[110]">
                            <button
                                onClick={() => {
                                    const idx = socialProjects.findIndex(p => p.id === selectedProject.id);
                                    openProject(socialProjects[(idx - 1 + socialProjects.length) % socialProjects.length]);
                                }}
                                className="w-16 h-16 md:w-14 md:h-14 rounded-full border border-white/20 bg-black/50 backdrop-blur-xl flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-2xl"
                            >
                                <ChevronLeft className="w-8 h-8 md:w-6 md:h-6" />
                            </button>
                            <button
                                onClick={() => {
                                    const idx = socialProjects.findIndex(p => p.id === selectedProject.id);
                                    openProject(socialProjects[(idx + 1) % socialProjects.length]);
                                }}
                                className="w-16 h-16 md:w-14 md:h-14 rounded-full border border-white/20 bg-black/50 backdrop-blur-xl flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-2xl"
                            >
                                <ChevronRight className="w-8 h-8 md:w-6 md:h-6" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
