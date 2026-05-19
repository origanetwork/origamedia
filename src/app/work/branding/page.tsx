"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects, Project } from '@/data/projects';

export default function BrandingWorkPage() {
    const brandingProjects = projects.filter(p => p.category === "Brand Identity" || p.category === "Visual Designs");
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
                <div className="max-w-7xl flex flex-col md:flex-row justify-between items-center md:items-end gap-10 text-center md:text-left">
                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-white mb-6">
                            Visual Language
                        </span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-medium tracking-tighter"
                        >
                            Branding & <br /> Identity
                        </motion.h1>
                    </div>
                    <div className="md:text-right">
                        <p className="text-xl text-white/50 font-light max-w-sm mx-auto md:ml-auto leading-relaxed">
                            Crafting distinct visual worlds that define market leaders. Strategic identity systems that resonate and endure.
                        </p>
                    </div>
                </div>
            </div>

            {/* Grid - Branding Styles */}
            <div className="px-6 md:px-10 py-10 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {brandingProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer sticky top-24 md:static"
                            style={{
                                zIndex: index + 1
                            }}
                            onClick={() => openProject(project)}
                        >
                            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/4] overflow-hidden rounded-[2.5rem] bg-[#0c0c0c] border-2 border-white/50 group/card transition-all duration-700 hover:border-white/40 shadow-2xl">
                                {/* Background Image Removed for Identity Focus */}

                                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                                    {project.logo && (
                                        <div className="relative w-62 h-52 md:w-92 md:h-72 mb-8 transition-transform duration-700 group-hover:scale-110">
                                            <Image
                                                src={project.logo}
                                                alt={`${project.title} logo`}
                                                fill
                                                className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                                            />
                                        </div>
                                    )}
                                    <h3 className="text-3xl font-medium tracking-tight mb-2">{project.title}</h3>
                                    <p className="text-sm text-white/40 uppercase tracking-[0.2em]">{project.subtitle}</p>
                                </div>

                                <div className="absolute bottom-10 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white underline underline-offset-8">View Identity</span>
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
                            <div className="relative w-full max-w-[min(90vw,75vh)] aspect-[4/5] bg-black rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group/modal-media">
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

                                        {/* Image Nav */}
                                        {selectedProject.images && selectedProject.images.length > 1 && (
                                            <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover/modal-media:opacity-100 transition-opacity">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); setActiveImageIndex(p => (p - 1 + selectedProject.images!.length) % selectedProject.images!.length) }}
                                                    className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black"
                                                >
                                                    <ChevronLeft className="w-6 h-6" />
                                                </button>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); setActiveImageIndex(p => (p + 1) % selectedProject.images!.length) }}
                                                    className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black"
                                                >
                                                    <ChevronRight className="w-6 h-6" />
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
                        </div>

                        {/* Project Nav */}
                        <div className="absolute bottom-10 right-10 flex gap-4 z-[110]">
                            <button
                                onClick={() => {
                                    const idx = brandingProjects.findIndex(p => p.id === selectedProject.id);
                                    openProject(brandingProjects[(idx - 1 + brandingProjects.length) % brandingProjects.length]);
                                }}
                                className="w-14 h-14 rounded-full border border-white/20 bg-black/50 backdrop-blur-xl flex items-center justify-center hover:bg-white hover:text-black transition-all"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => {
                                    const idx = brandingProjects.findIndex(p => p.id === selectedProject.id);
                                    openProject(brandingProjects[(idx + 1) % brandingProjects.length]);
                                }}
                                className="w-14 h-14 rounded-full border border-white/20 bg-black/50 backdrop-blur-xl flex items-center justify-center hover:bg-white hover:text-black transition-all"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
