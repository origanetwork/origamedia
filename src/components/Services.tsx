"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
    {
        id: 1,
        title: "Digital Marketing",
        description: "Performance-driven campaigns across Meta, Google, and other platforms designed to generate leads and maximize ROI.",
        bgImage: "/services/1.png"
    },
    {
        id: 2,
        title: "Branding & Strategy",
        description: "We create strong brand identities and positioning strategies that stand out in competitive markets.",
        bgImage: "/services/branding.jpg"
    },
    {
        id: 3,
        title: "Content Production",
        description: "High-quality video production, ad creatives, and visual storytelling tailored for digital platforms.",
        bgImage: "/services/2.png"
    },
    {
        id: 4,
        title: "Social Media Management",
        description: "Consistent and engaging content that builds audience trust and brand presence.",
        bgImage: "/services/social-media.jpg"
    }
];

const rotatingTexts = ["Creative", "Strategic", "Result-Driven"];

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [textIndex, setTextIndex] = useState(0);

    // Rotate the big text every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="services"
            className="relative w-full bg-white text-black overflow-hidden py-16 md:py-24 border-t border-black/5"
            onMouseLeave={() => setHoveredIndex(null)}
        >
            {/* Background Image Layer */}
            <AnimatePresence>
                {hoveredIndex !== null && (
                    <motion.div
                        key={services[hoveredIndex].id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute inset-0 z-0 pointer-events-none"
                    >
                        <Image
                            src={services[hoveredIndex].bgImage}
                            alt={services[hoveredIndex].title}
                            fill
                            className="object-cover opacity-50"
                            quality={100}
                        />
                        {/* Soft white gradient to ensure text readability without hiding the image */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent" />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container mx-auto px-6 md:px-16 relative z-10 w-full">
                <div className="mb-4 md:mb-12">
                    <h2 className={`text-sm font-bold tracking-[0.3em] uppercase transition-colors duration-500 ${hoveredIndex !== null ? 'text-white/60' : 'text-gray-500'}`}>
                        Our Services
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-16 w-full">

                    {/* Left: Services List */}
                    <div className="w-full lg:w-1/2 flex flex-col space-y-4 md:space-y-8">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className="group cursor-pointer flex flex-col items-start w-full"
                                onMouseEnter={() => setHoveredIndex(index)}
                            >
                                <div className={`flex items-center space-x-6 text-2xl md:text-4xl font-display font-medium transition-colors duration-300 ${hoveredIndex !== null ? (hoveredIndex === index ? 'text-black' : 'text-black/20') : 'text-black'}`}>
                                    <span>{service.title}</span>
                                    <ArrowRight className={`w-6 h-6 md:w-8 md:h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${hoveredIndex === index ? 'text-black' : ''}`} />
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${hoveredIndex === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}
                                >
                                    <p className={`text-base md:text-xl font-medium leading-relaxed max-w-xl transition-colors duration-300 ${hoveredIndex === index ? 'text-gray-800' : 'text-gray-600'}`}>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Massive Typography */}
                    <div className="flex w-full lg:w-1/2 justify-end pointer-events-none select-none mt-8 lg:mt-0">
                        <div className="relative h-[60px] md:h-[200px] flex items-center justify-end w-full">
                            <AnimatePresence mode="wait">
                                <motion.h3
                                    key={textIndex}
                                    initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -40, filter: "blur(4px)" }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className={`text-4xl sm:text-5xl md:text-6xl lg:text-[8vw] font-display font-bold leading-none tracking-tighter absolute right-0 whitespace-nowrap transition-colors duration-500 ${hoveredIndex !== null ? 'text-black opacity-10' : 'text-black opacity-100'}`}
                                >
                                    {rotatingTexts[textIndex]}.
                                </motion.h3>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
