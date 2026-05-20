"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
    {
        id: 1,
        slug: "digital-marketing",
        title: "Digital Marketing",
        description: "Performance-driven campaigns across Meta, Google, and other platforms designed to generate leads and maximize ROI.",
        bgImage: "/services/digital-m.jpg"
    },
    {
        id: 2,
        slug: "branding-and-strategy",
        title: "Branding & Strategy",
        description: "We create strong brand identities and positioning strategies that stand out in competitive markets.",
        bgImage: "/services/Brand.jpg"
    },
    {
        id: 3,
        slug: "graphics-designing",
        title: "Graphics Designing",
        description: "Creative visual identities and social media assets that capture attention and build brand trust.",
        bgImage: "/services/graphical.jpg"
    },
    {
        id: 4,
        slug: "video-production",
        title: "Video Production",
        description: "Premium cinematic storytelling and marketing films that drive engagement and conversions.",
        bgImage: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=2070"
    },
    {
        id: 5,
        slug: "content-production",
        title: "Content Production",
        description: "High-quality visual and written content designed to tell your brand&apos;s unique story.",
        bgImage: "/services/contentt.jpg"
    }
];

const rotatingTexts = ["Creative", "Strategic", "Result-Driven"];

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [textIndex, setTextIndex] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Pause text rotation cycles when Services section is out of view
    const isSectionInView = useInView(sectionRef, { once: false, margin: "200px" });

    // Rotate the big text every 2.5 seconds
    useEffect(() => {
        if (!isSectionInView) return;

        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [isSectionInView]);

    return (
        <section
            id="services"
            ref={sectionRef}
            className="relative w-full bg-white text-black overflow-hidden py-16 md:py-24 border-t border-black/5"
            onMouseLeave={() => setHoveredIndex(null)}
        >
            {/* Background Image on Hover */}
            <AnimatePresence>
                {hoveredIndex !== null && (
                    <motion.div
                        key={services[hoveredIndex].id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 w-full h-full z-0"
                    >
                        <Image
                            src={services[hoveredIndex].bgImage}
                            alt={services[hoveredIndex].title}
                            fill
                            className="object-cover"
                            quality={100}
                            priority
                        />
                        <div className="absolute inset-0 bg-black/60" />
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
                            <Link
                                key={service.id}
                                href={`/services/${service.slug}`}
                                className="group cursor-pointer flex flex-col items-start w-full no-underline"
                                onMouseEnter={() => setHoveredIndex(index)}
                            >
                                <div className={`flex items-center space-x-6 text-3xl md:text-5xl font-display font-medium transition-colors duration-300 ${hoveredIndex !== null ? (hoveredIndex === index ? 'text-white' : 'text-white/20') : 'text-black'}`}>
                                    <span>{service.title}</span>
                                    <ArrowRight className={`w-6 h-6 md:w-8 md:h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${hoveredIndex === index ? 'text-white' : ''}`} />
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${hoveredIndex === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}
                                >
                                    <p className={`text-base md:text-xl font-medium leading-relaxed max-w-xl transition-colors duration-300 ${hoveredIndex === index ? 'text-white/80' : 'text-gray-600'}`}>
                                        {service.description}
                                    </p>
                                </div>
                            </Link>
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
                                    className={`text-6xl sm:text-5xl md:text-6xl lg:text-[8vw] font-display font-bold leading-none tracking-tighter absolute right-0 whitespace-nowrap transition-colors duration-500 ${hoveredIndex !== null ? 'text-white opacity-10' : 'text-black opacity-100'}`}
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



