"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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

            <div className="container mx-auto px-6 md:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left: Content */}
                    <div className="w-full lg:w-3/5">
                        <h2 className="text-4xl md:text-6xl font-display font-medium mb-12 tracking-tight text-white">
                            Who We Are
                        </h2>

                        <div className="space-y-8 max-w-2xl">
                            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
                                Origa Media is the marketing and production division of <span className="text-white font-medium">Origa Networks</span>, built to help businesses grow with clarity and impact.
                            </p>

                            <p className="text-base sm:text-lg  text-gray-400 font-display font-light leading-relaxed">
                                We combine performance marketing, creative storytelling, and production excellence to deliver results that matter—leads, visibility, and brand authority.
                                From startups to established brands, we partner with clients to craft strategies that are not just visually strong, but <span className="text-white italic">commercially effective.</span>
                            </p>
                        </div>
                    </div>

                    {/* Right: Logo */}
                    <div className="w-full lg:w-2/5 flex justify-center items-center">
                        <div className="relative w-full aspect-square max-w-[400px] flex justify-center items-center">
                            <Image
                                src="/logo/logo-black.jpeg"
                                alt="Origa Media Logo"
                                fill
                                className="object-contain opacity-80"
                            />
                            {/* Subtle reflection/glow for the logo */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none rounded-full blur-2xl opacity-20" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
