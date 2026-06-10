"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ClientLogo {
    name: string;
    logo: string;
}

const clientLogos: ClientLogo[] = [
    { name: "Ideal", logo: "/partners/ideal.png" },
    { name: "Midas", logo: "/partners/midas.png" },
    { name: "Pro Tech", logo: "/partners/pro-tech.png" },
    { name: "Mindra", logo: "/partners/mindra.png" },
    { name: "Malhar", logo: "/partners/malhar.png" },
    { name: "Najma", logo: "/partners/najma.png" },
    { name: "Kinathiyil", logo: "/partners/kinath.png" },
    { name: "Hilife", logo: "/partners/Hilife.png" },
    { name: "D-dot", logo: "/partners/D-dot.png" },
    { name: "Pips", logo: "/partners/pips-white.png" },
    { name: "Dezert", logo: "/partners/dezert.png" },
];

export default function Clients() {
    return (
        <section id="clients" className="py-16 md:py-24 bg-black overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 md:px-16 mb-16 text-center md:text-left">
                <div className="max-w-3xl mx-auto md:mx-0">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-display font-medium text-white mb-6 tracking-tight"
                    >
                        Trusted by industry leaders
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto md:mx-0"
                    >
                        We partner with ambitious brands to define their digital future.
                    </motion.p>
                </div>
            </div>

            <div className="relative flex overflow-hidden py-10">
                <div className="flex animate-marquee whitespace-nowrap gap-16 md:gap-36">
                    {[...clientLogos, ...clientLogos, ...clientLogos].map((client, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-center min-w-[160px] md:min-w-[240px] lg:min-w-[340px] h-18 md:h-24 lg:h-36 group cursor-pointer"
                        >
                            <div className="relative w-full border-2 border-white/50 h-full transition-all duration-500 group-hover:grayscale group-hover:opacity-50">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    width={400}
                                    height={300}
                                    className="object-contain w-full h-full"
                                />
                            </div>
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



