"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const categories = [
    {
        name: "Video Production",
        slug: "video",
        href: "/work/video",
        count: projects.filter(p => p.type === "video").length,
        image: "/video/5.png",
        description: "Cinematic storytelling and high-impact visual production for modern brands."
    },
    {
        name: "Brand Identity",
        slug: "branding",
        href: "/work/branding",
        count: projects.filter(p => p.category === "Brand Identity").length,
        image: "/branding/7.jpeg",
        description: "Defining unique brand voices through strategic design and visual excellence."
    },
    {
        name: "Social Media",
        slug: "social",
        href: "/work/social",
        count: projects.filter(p => p.category === "Social Media").length,
        image: "/works/kinathiyil/1.jpeg",
        description: "Driving engagement and growth through creative digital campaigns."
    },
    {
        name: "Performance",
        slug: "performance",
        href: "/work/performance",
        count: 28,
        image: "/services/perfomence.jpg",
        description: "Data-driven marketing strategies focused on measurable business results."
    },
    {
        name: "Explore All",
        slug: "all",
        href: "/work/all",
        count: projects.length,
        image: "/branding/all.jpg",
        description: "Browse our complete collection of diverse and impactful creative work."
    }
];


export default function Portfolio() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [progress, setProgress] = React.useState(0);
    const scrollRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setActiveIndex((prevIdx) => (prevIdx + 1) % categories.length);
                    return 0;
                }
                return prev + (100 / 50); // 5 seconds at 100ms intervals
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        if (scrollRef.current) {
            const cardWidth = 424; // Width (400) + Gap (24)
            scrollRef.current.scrollTo({
                left: activeIndex * cardWidth,
                behavior: "smooth"
            });
        }
    }, [activeIndex]);

    return (
        <section id="works" className="py-10 md:py-20 bg-white text-black overflow-hidden font-display border-t border-gray-100">
            <div className="w-full">
                {/* Header Section */}
                <div className="px-6 md:px-16 mb-10">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">
                        <div className="max-w-3xl">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-xs font-bold tracking-[0.5em] uppercase text-gray-400 mb-6 block"
                            >
                                Our Portfolio
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-5xl md:text-8xl font-medium tracking-tighter leading-[0.85] mb-8"
                            >
                                Selected <span className=""></span>
                                <span className="text-gray-600 italic">Work.</span>
                            </motion.h2>
                            <p className="text-xl text-gray-500 font-light leading-relaxed max-w-xl mx-auto md:mx-0 font-sans">
                                Choose a category to explore our specialized impacts and creative solutions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card Selection Carousel */}
                <div className="relative group/carousel">
                    <div
                        ref={scrollRef}
                        id="portfolio-carousel"
                        className="flex overflow-x-auto md:overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] gap-6 pt-4 pb-12 px-6 md:px-16 scroll-smooth"
                    >
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={cat.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                className="shrink-0"
                            >
                                <Link
                                    href={cat.href}
                                    className={`relative group/card block w-[280px] h-[320px] md:w-[350px] md:h-[500px] overflow-hidden rounded-3xl border-[2px] border-black transition-all duration-700 hover:shadow-2xl hover:shadow-black/10 ${activeIndex === idx ? "shadow-xl scale-[1.02]" : "opacity-70"
                                        }`}
                                >
                                    {/* Background Image */}
                                    <Image
                                        src={cat.image}
                                        alt={cat.name}
                                        fill
                                        className={`object-cover transition-transform duration-1000 group-hover/card:scale-110 ${activeIndex === idx ? "opacity-100 scale-105" : "opacity-60"
                                            }`}
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-700" />

                                    {/* Content Area */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                                        <div className="flex justify-between items-start">
                                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md group-hover/card:bg-white group-hover/card:text-black transition-all duration-500">
                                                <ArrowUpRight className="w-5 h-5" />
                                            </div>
                                            <div className="text-right">
                                                <span className="text-4xl md:text-5xl font-light opacity-30 tracking-tighter">
                                                    {(idx + 1).toString().padStart(2, '0')}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <span className="px-3 py-1 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                                                    {cat.count} Projects
                                                </span>
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-medium tracking-tight">{cat.name}</h3>
                                            <p className={`text-white/60 text-base font-light leading-relaxed max-w-[340px] transition-all duration-500 font-sans ${activeIndex === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                                }`}>
                                                {cat.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Progress Bar Branding */}
                    <div className="px-6 md:px-16 mt-8">
                        <div className="relative w-full h-[1px] bg-gray-100 overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-black"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <div className="flex justify-between mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
                            <div className="flex gap-4">
                                <span className="text-black text-[15px]">{(activeIndex + 1).toString().padStart(2, '0')}</span>
                                <span className="opacity-30">/</span>
                                <span className="text-[15px]">{categories.length.toString().padStart(2, '0')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-black animate-pulse" />
                                <span className="text-black tracking-[0.5em] font-black">Click Here</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
