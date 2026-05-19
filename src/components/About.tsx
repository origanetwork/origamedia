"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    }
};

export default function About() {
    return (
        <section
            id="about"
            className="relative w-full text-white py-16 md:py-24 flex items-center overflow-hidden border-t border-white/5"
        >
            {/* Cinematic Image Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/home/ab-bg.png"
                    alt="Black Liquid Background"
                    fill
                    className="object-cover opacity-50 mix-blend-overlay"
                    quality={100}
                    priority
                />
                {/* Gradient overlay to smoothly blend with #141414 theme */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/80 to-[#141414]/40" /> */}
            </div>

            <motion.div
                className="container mx-auto px-6 md:px-16 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Content */}
                    <div className="w-full lg:w-3/5 text-center lg:text-left">
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl md:text-6xl font-display font-medium mb-8 md:mb-12 tracking-tight text-white"
                        >
                            Who We Are
                        </motion.h2>

                        <div className="space-y-8 max-w-2xl mx-auto lg:mx-0">
                            <motion.p
                                variants={itemVariants}
                                className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed px-4 md:px-0"
                            >
                                Origa Media is the marketing and production division of <span className="text-white font-medium">Origa Networks</span>, built to help businesses grow with clarity and impact.
                            </motion.p>

                            <motion.p
                                variants={itemVariants}
                                className="text-base sm:text-lg text-gray-300 font-display font-light leading-relaxed px-4 md:px-0"
                            >
                                We combine performance marketing, creative storytelling, and production excellence to deliver results that matter—leads, visibility, and brand authority.
                                From startups to established brands, we partner with clients to craft strategies that are not just visually strong, but <span className="text-white italic">commercially effective.</span>
                            </motion.p>
                        </div>
                    </div>

                    {/* Logo/Image */}
                    <motion.div
                        variants={logoVariants}
                        className="w-full lg:w-2/5 flex justify-center items-center"
                    >
                        <div className="relative w-full aspect-square max-w-[300px] md:max-w-[400px] flex justify-center items-center">
                            <Image
                                src="/logo/origa.png"
                                alt="Origa Media Logo"
                                fill
                                className="object-contain opacity-80"
                            />
                             {/* <Image
                                src="/home/about.jpg"
                                alt="Origa Media Logo"
                                fill
                                className="object-contain opacity-80"
                            /> */}
                            {/* Subtle reflection/glow for the logo */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none rounded-full blur-2xl opacity-20" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}