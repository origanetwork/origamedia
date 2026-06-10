"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Compass, Rocket, Activity } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Understand",
        description: "We analyze your business, audience, and goals to build a solid foundation.",
        icon: Search,
        color: "from-blue-500 to-cyan-500"
    },
    {
        number: "02",
        title: "Strategize",
        description: "We build a custom marketing roadmap designed specifically for your growth.",
        icon: Compass,
        color: "from-purple-500 to-pink-500"
    },
    {
        number: "03",
        title: "Execute",
        description: "Your campaigns, content, and creatives go live with surgical precision.",
        icon: Rocket,
        color: "from-orange-500 to-red-500"
    },
    {
        number: "04",
        title: "Optimize",
        description: "Continuous improvement based on real data to maximize every dollar spent.",
        icon: Activity,
        color: "from-emerald-500 to-teal-500"
    }
];

export default function OurApproach() {

    return (
        <section className="relative py-16 md:py-24 bg-black overflow-clip font-display border-t border-white/5">
            {/* Background Grain/Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="container mx-auto px-6 md:px-16 relative z-10">
                <div className="max-w-4xl mb-12 md:mb-24 text-center md:text-left">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold tracking-[0.5em] uppercase text-gray-500 mb-6 block"
                    >
                        Our Approach
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tighter font-display"
                    >
                        How We <span className="opacity-40">Work.</span>
                    </motion.h2>
                </div>

                {/* Mobile Stacking Cards Layout */}
                <div className="md:hidden space-y-24 pb-40 px-4">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group sticky top-28 md:static will-change-transform"
                            style={{
                                zIndex: index + 1
                            }}
                        >
                            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0c0c0c] border-2 border-white shadow-2xl flex flex-col items-center justify-center p-12 md:p-10 md:aspect-square">
                                {/* Simplified Background Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5`} />
                                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/60" />

                                <span className="absolute top-8 left-10 text-6xl font-bold text-white/[0.05] select-none font-display">
                                    {step.number}
                                </span>

                                <div className={`w-20 h-20 rounded-[2rem] bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 relative overflow-hidden z-10`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20`} />
                                    <step.icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-3xl font-medium text-white mb-4 z-10 text-center tracking-tight font-display">
                                    {step.title}
                                </h3>

                                <p className="text-gray-400 font-light leading-relaxed max-w-[250px] text-base z-10 text-center">
                                    {step.description}
                                </p>

                                <div className="absolute bottom-10 left-0 right-0 text-center opacity-40">
                                    <div className={`mx-auto h-1 w-12 bg-gradient-to-r ${step.color} rounded-full`} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Desktop Grid Layout */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block border-1 border-white/50 absolute top-[45px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.8 }}
                            className="relative z-10 group"
                        >
                            {/* Step Number Background */}
                            <span className="absolute -top-10 -left-4 text-8xl font-bold text-white/[0.03] select-none group-hover:text-white/[0.05] transition-colors duration-500">
                                {step.number}
                            </span>

                            {/* Icon Container */}
                            <div className={`w-20 h-20 rounded-3xl bg-neutral-900 border border-white/5 flex items-center justify-center mb-8 relative overflow-hidden group-hover:border-white/20 transition-all duration-500`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                                <step.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-500" />
                            </div>

                            <h3 className="text-2xl font-medium text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                                {step.title}
                            </h3>

                            <p className="text-gray-400 font-light leading-relaxed max-w-xs group-hover:text-gray-300 transition-colors duration-500">
                                {step.description}
                            </p>

                            {/* Desktop indicator */}
                            <div className={`mt-8 h-1 w-12 bg-gradient-to-r ${step.color} rounded-full opacity-40 group-hover:opacity-100 group-hover:w-20 transition-all duration-500 hidden lg:block`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
