"use client";

import React from "react";
import { motion } from "framer-motion";

const clientLogos = [
    { name: "Brand One" },
    { name: "Brand Two" },
    { name: "Brand Three" },
    { name: "Brand Four" },
    { name: "Brand Five" },
    { name: "Brand Six" },
    { name: "Brand Seven" },
    { name: "Brand Eight" },
    { name: "Brand Nine" },
    { name: "Brand Ten" },
    { name: "Brand Eleven" },
    { name: "Brand Twelve" },
];

export default function Clients() {
    return (
        <section className="py-16 md:py-24 bg-black overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 md:px-16 mb-16">
                <div className="max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-display font-medium text-white mb-6 tracking-tight"
                    >
                        Brands We Work With
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl"
                    >
                        We collaborate with businesses across industries—from local brands to growing enterprises.
                    </motion.p>
                </div>
            </div>

            {/* Logo Ticker */}
            <div className="relative flex overflow-hidden py-10">
                <div className="flex animate-marquee whitespace-nowrap gap-12 md:gap-24">
                    {[...clientLogos, ...clientLogos].map((client, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-center min-w-[150px] md:min-w-[200px]"
                        >
                            <span className="text-xl md:text-2xl font-display font-bold text-white/40 hover:text-white/40 transition-colors cursor-default select-none tracking-tighter">
                                {client.name.toUpperCase()}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Gradient Fades */}
                <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-black to-transparent z-10" />
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </section>
    );
}
