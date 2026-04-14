"use client";

import React from "react";
import { motion } from "framer-motion";
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
    return (
        <section className="relative py-16 md:py-24 bg-black overflow-hidden border-t border-white/5 font-display">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[1000px] h-[1000px] bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 md:px-16 relative z-10">
                <div className="max-w-4xl mb-12 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6"
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
                        className="text-5xl md:text-6xl font-medium text-white tracking-tighter leading-[0.9]"
                    >
                        Why <span className="opacity-40 italic">Origa</span> Media.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className={`${reason.gridClass} group relative p-6 md:p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-700 overflow-hidden flex flex-col justify-between min-h-[250px]`}
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
