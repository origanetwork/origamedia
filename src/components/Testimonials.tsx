"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Arsh Navas",
        role: "Chief Brand Officer",
        company: "Gatezone Transport",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
        quote: "Origa Media helped us scale our leads consistently."
    },
    {
        name: "Ashik",
        role: "Marketing Director",
        company: "Mr Alfred UAE",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
        quote: "Creative, strategic, and result-driven team."
    },
    {
        name: "Salman Thorop",
        role: "Founder & CEO",
        company: "Duvolks",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop",
        quote: "They understand the market dynamics perfectly."
    },
    {
        name: "Jasim SM",
        role: "CEO",
        company: "Bosq Ergonomic Living",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
        quote: "Highly recommended for performance marketing."
    }
];

export default function Testimonials() {
    return (
        <section className="py-16 md:py-24 bg-black overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 md:px-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-display font-medium text-white mb-16 tracking-tight"
                >
                    What Our Clients Say
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900 border border-white"
                        >
                            {/* Client Image background */}
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-all duration-700 opacity-80 group-hover:opacity-100"
                                quality={100}
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <p className="text-sm md:text-base text-white font-medium italic leading-relaxed mb-6">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold text-white tracking-tight">
                                        {testimonial.name}
                                    </h3>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                        <p className="text-xs font-semibold text-white/80">
                                            {testimonial.role}
                                        </p>
                                        <span className="hidden sm:inline text-white/40">•</span>
                                        <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Quote Tooltip or similar would be nice, but we'll stick to image style */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
