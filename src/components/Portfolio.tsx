"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Performance", "Branding", "Video", "Social"];

const projects = [
    {
        id: 1,
        title: "Malabar Silks - Scaling Digital",
        subtitle: "From zero to ₹10 million a month in record time",
        category: "Performance",
        image: "https://images.unsplash.com/photo-1610030469668-93510cb2330a?q=80&w=2070&auto=format&fit=crop",
        stat: "₹10 Million+",
        statDesc: "Monthly Growth",
        type: "image"
    },
    {
        id: 2,
        title: "Walkaroo - A Trusted Footwear Brand",
        subtitle: "Generated a massive ₹20 million in 6 months",
        category: "Performance",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
        stat: "20,000,000",
        statDesc: "In Just 6 Months",
        type: "image"
    },
    {
        id: 3,
        title: "Ayurveda Wellness Resort",
        subtitle: "Scaled global bookings by 400%",
        category: "Performance",
        image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=1974&auto=format&fit=crop",
        stat: "400% Scale",
        statDesc: "Global Bookings",
        type: "image"
    },
    {
        id: 4,
        title: "Kerala Tourism - Brand Film",
        subtitle: "Cinematic performance-driven production",
        category: "Video",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2071&auto=format&fit=crop",
        stat: "Global Reach",
        statDesc: "Cinematic Film",
        type: "video"
    },
    {
        id: 5,
        title: "Malappuram United - Sports Identity",
        subtitle: "300% increase in organic reach & engagement",
        category: "Social",
        image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1972&auto=format&fit=crop",
        stat: "300K reach",
        statDesc: "Organic Engagement",
        type: "image"
    },
    {
        id: 6,
        title: "Calicut Spices - Identity",
        subtitle: "Minimalist branding for premium global export",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop",
        stat: "Pure Spice",
        statDesc: "Identity Design",
        type: "image"
    }
];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section className="py-16 md:py-24 bg-white text-black overflow-hidden font-display border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-medium tracking-tight mb-6"
                        >
                            Selected Work
                        </motion.h2>
                        <p className="text-xl text-gray-500 font-light leading-relaxed font-sans">
                            A collection of brands we&apos;ve helped grow through strategic marketing and creative execution.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat
                                    ? "bg-black text-white border-black"
                                    : "bg-transparent text-gray-400 border-gray-200 hover:border-black hover:text-black"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="group relative flex flex-col gap-6"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 rounded-2xl border border-gray-100">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Text Overlay inside Image (Reference Style) */}
                                    <div className="absolute inset-0 bg-black/5 p-8 flex flex-col justify-center items-start">
                                        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl max-w-[200px]">
                                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 leading-none">{project.statDesc}</p>
                                            <h3 className="text-2xl font-bold tracking-tighter leading-none text-black">{project.stat}</h3>
                                        </div>
                                    </div>

                                    {/* Video Icon */}
                                    {project.type === "video" && (
                                        <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                                            <Play className="w-5 h-5 text-black fill-black ml-1" />
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-xl font-bold tracking-tight">{project.title}</h4>
                                        <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors" />
                                    </div>
                                    <p className="text-sm text-gray-500 font-light leading-relaxed font-sans">{project.subtitle}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
