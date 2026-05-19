"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects, Project } from '@/data/projects';

export default function VideoWorkPage() {
    const videoProjects = projects.filter(p => p.type === "video");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const openProject = (project: Project) => {
        setSelectedProject(project);
    };

    const formatVideoUrl = (url: string) => {
        if (!url) return "";
        if (url.includes("instagram.com/reel/")) {
            // Extract the reel ID and create an embed URL
            const reelId = url.split("/reel/")[1].split("/")[0].split("?")[0];
            return `https://www.instagram.com/reel/${reelId}/embed`;
        }
        return url;
    };

    return (
        <main className="min-h-screen bg-black text-white relative overflow-x-clip text-left">
            {/* 1. Cinematic Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black z-10" />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>

                <div className="relative z-20 w-full max-w-7xl mt-10 px-6">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-24 text-center lg:text-left">
                        <div className="flex-1 overflow-hidden">
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-[12vw] md:text-[10vw] lg:text-[7vw] font-medium tracking-tighter leading-[0.85] whitespace-nowrap"
                            >
                                The Reels <br /> Studio
                            </motion.h1>
                        </div>

                        <div className="lg:max-w-md lg:pb-10 lg:text-right">
                            <motion.p
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl md:text-2xl text-white/40 font-light leading-relaxed"
                            >
                                Cinematic storytelling optimized for the vertical world. Every frame crafted for maximum impact.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Video Gallery Wall */}
            <div className="max-w-7xl mx-auto px-6 pb-40 md:pb-48">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {videoProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative aspect-[3/4] sticky top-28 md:relative ${project.videoUrl ? 'cursor-pointer' : 'cursor-default'}`}
                            style={{ zIndex: index + 1 }}
                            onClick={() => project.videoUrl && openProject(project)}
                        >
                            {/* The Card Container with Border - Use margin to keep border visible */}
                            <div className="absolute inset-2 border-2 border-white bg-black overflow-hidden shadow-2xl">
                                {/* Thumbnail Background */}
                                <div className="absolute inset-0">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:grayscale"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                                </div>

                                {/* Center Play Icon - INSIDE each card */}
                                {project.videoUrl && (
                                    <div className="absolute inset-0 flex items-center justify-center z-20">
                                        <div className="w-16 h-16 md:w-14 md:h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-125 group-hover:bg-white transition-all duration-700">
                                            <Play className="w-6 h-6 md:w-4 md:h-4 text-white fill-white group-hover:text-black group-hover:fill-black transition-all ml-1" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 3. Theater Mode Modal - Social Model Style */}
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
                            <div className="relative w-full max-w-[min(90vw,65vh)] aspect-[9/16] md:aspect-[3/4] bg-black rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
                                {selectedProject.videoUrl?.endsWith('.mp4') ? (
                                    <video
                                        controls
                                        autoPlay
                                        className="w-full h-full object-contain"
                                    >
                                        <source src={selectedProject.videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <iframe
                                        src={formatVideoUrl(selectedProject.videoUrl || "")}
                                        className="w-full h-full border-0 overflow-hidden"
                                        allowTransparency
                                        scrolling="no"
                                        allow="encrypted-media"
                                    />
                                )}
                            </div>

                            {/* Text content removed for minimalist focus to match social modal */}
                        </div>

                        {/* Project Nav - Unified with Social Style */}
                        <div className="fixed md:absolute bottom-12 md:bottom-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-10 flex gap-6 md:gap-4 z-[110]">
                            <button
                                onClick={() => {
                                    const idx = videoProjects.findIndex(p => p.id === selectedProject.id);
                                    openProject(videoProjects[(idx - 1 + videoProjects.length) % videoProjects.length]);
                                }}
                                className="w-16 h-16 md:w-14 md:h-14 rounded-full border border-white/20 bg-black/50 backdrop-blur-xl flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-2xl"
                            >
                                <ChevronLeft className="w-8 h-8 md:w-6 md:h-6" />
                            </button>
                            <button
                                onClick={() => {
                                    const idx = videoProjects.findIndex(p => p.id === selectedProject.id);
                                    openProject(videoProjects[(idx + 1) % videoProjects.length]);
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
