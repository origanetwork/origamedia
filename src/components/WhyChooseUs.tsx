"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { Target, Zap, Users, BarChart3, MessageSquare, ArrowUpRight } from "lucide-react";

const reasons = [
    {
        title: "Strategy-first approach",
        description: "We don't just execute; we build a roadmap tailored to your specific business goals and market dynamics. Not just execution, but vision.",
        icon: Target,
        gridClass: "md:col-span-8",
        color: "blue"
    },
    {
        title: "Performance Focus",
        description: "Optimized for maximum ROI and high conversion rates.",
        icon: Zap,
        gridClass: "md:col-span-4",
        color: "amber"
    },
    {
        title: "In-house Creative",
        description: "Our production team brings your brand to life with cinematic quality.",
        icon: Users,
        gridClass: "md:col-span-4",
        color: "purple"
    },
    {
        title: "Data-Driven",
        description: "Eliminating guesswork through granular analytics and real-time market insights.",
        icon: BarChart3,
        gridClass: "md:col-span-4",
        color: "emerald"
    },
    {
        title: "Transparency",
        description: "Regular reporting and direct communication every step of the way.",
        icon: MessageSquare,
        gridClass: "md:col-span-4",
        color: "rose"
    }
];

export default function WhyChooseUs() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const sectionRef = React.useRef<HTMLDivElement>(null);

    // Pause mobile slide interval when component is offscreen
    const isSectionInView = useInView(sectionRef, { once: false, margin: "200px" });

    React.useEffect(() => {
        if (!isSectionInView) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % reasons.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isSectionInView]);

    return (
        <section ref={sectionRef} className="relative py-16 md:py-24 bg-black overflow-hidden border-t border-white/5 font-display">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[1000px] h-[1000px] bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 md:px-16 relative z-10">
                <div className="max-w-4xl mb-12 md:mb-24 text-center md:text-left mx-auto md:mx-0">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center md:justify-start gap-4 mb-6"
                    >
                        <div className="h-[1px] w-12 bg-white/20" />
                        <span className="text-xs font-bold tracking-[0.5em] uppercase text-white/40">
                            Why Choose Us
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tighter leading-[0.9]"
                    >
                        Why <span className="opacity-40 italic">Origa</span> Media.
                    </motion.h2>
                </div>

                {/* Mobile Auto-sliding Carousel */}
                <div className="md:hidden relative h-[400px] flex items-center justify-center">
                    <div className="absolute inset-0 w-full rounded-[2rem] h-full">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={reason.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{
                                    opacity: activeIndex === index ? 1 : 0,
                                    scale: activeIndex === index ? 1 : 0.95,
                                    pointerEvents: activeIndex === index ? "auto" : "none"
                                }}
                                transition={{ duration: 0.5 }}
                                className={`absolute inset-0 p-8 rounded-[3.5rem] bg-white/[0.02] border-2 border-white flex flex-col items-center justify-center text-center`}
                            >
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 mx-auto border border-white/10 shadow-2xl">
                                        <reason.icon className="w-6 h-6 text-white" />
                                    </div>

                                    <h3 className="text-3xl font-medium text-white mb-6 leading-tight">
                                        {reason.title}
                                    </h3>

                                    <p className="text-lg text-gray-400 font-light leading-relaxed max-w-sm px-4">
                                        {reason.description}
                                    </p>
                                </div>

                                <div className="flex gap-2 mt-10 relative z-10">
                                    {reasons.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === i ? "w-8 bg-white" : "w-2 bg-white/20"}`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Desktop Grid Layout */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-12 gap-4">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className={`${reason.gridClass} group relative border-1 border-white/50  p-6 md:p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-700 overflow-hidden flex flex-col justify-between min-h-[250px]`}
                        >
                            {/* Card Glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 border border-white/10">
                                    <reason.icon className="w-5 h-5 text-white" />
                                </div>

                                <h3 className="text-xl md:text-2xl font-medium text-white mb-4 leading-tight max-w-[200px]">
                                    {reason.title}
                                </h3>

                                <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-sm group-hover:text-gray-200 transition-colors duration-500">
                                    {reason.description}
                                </p>
                            </div>

                            <div className="relative z-10 flex justify-end mt-6">
                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-white/[0.02] pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
