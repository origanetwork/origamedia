"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Plus, Send } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface SubService {
    title: string;
    desc: string;
}

interface Stat {
    label: string;
    value: string;
}

interface ServiceInfo {
    title: string;
    tagline: string;
    description: string;
    heroImage: string;
    heroVideo?: string;
    stats: Stat[];
    subServices: SubService[];
    gradient: string;
}

const SERVICE_DATA: Record<string, ServiceInfo> = {
    "digital-marketing": {
        title: "Digital Marketing",
        tagline: "ROI-Focused Performance",
        description: "Scale your business with surgical precision across all major digital ad platforms.",
        heroImage: "/services/digital-marketing.jpg",
        heroVideo: "/video/dm-origa.mp4",
        stats: [
            { label: "Result", value: "12x" },
            { label: "New People", value: "59k+" },
            { label: "Sales Growth", value: "65%" }
        ],
        subServices: [
            { title: "Meta Ads", desc: "Advanced targeting on Instagram and Facebook to drive direct response." },
            { title: "Google Ads", desc: "Intent-based search and display campaigns that capture high-value leads." },
            { title: "SEO", desc: "Dominating search rankings to build sustainable long-term organic growth." },
            { title: "Social Management", desc: "Building brand authority through consistent and engaging community presence." }
        ],
        gradient: "from-blue-600/20 via-transparent to-transparent"
    },
    "graphics-designing": {
        title: "Graphics Design",
        tagline: "Visual Excellence",
        description: "We don't just design; we create visual systems that communicate value at a glance.",
        heroImage: "/services/photoshop.jpg",
        stats: [
            { label: "Total Works", value: "2K+" },
            { label: "Happy Clients", value: "100%" },
            { label: "Brands Created", value: "150+" }
        ],
        subServices: [
            { title: "Creative Direction", desc: "High-level visual strategy that aligns with your business goals." },
            { title: "Social Assets", desc: "Attention-grabbing designs tailored for specific social channel algorithms." },
            { title: "Ad Production", desc: "Conversion-optimized creative assets for paid media campaigns." },
            { title: "Brand Identity", desc: "Defining the visual DNA of your brand from logo to color systems." }
        ],
        gradient: "from-purple-600/20 via-transparent to-transparent"
    },
    "video-production": {
        title: "Video Production",
        tagline: "Cinematic Storytelling",
        description: "Transforming brand messages into cinematic experiences that resonate and convert.",
        heroImage: "/services/video-production-hero.png",
        stats: [
            { label: "Videos Made", value: "100+" },
            { label: "Total Views", value: "50k+" },
            { label: "Watch Rate", value: "65%" }
        ],
        subServices: [
            { title: "Marketing Films", desc: "High-production value commercials designed for broadcast and digital." },
            { title: "Brand Stories", desc: "Documentary-style narratives that build deep emotional trust." },
            { title: "Short Form", desc: "Fast-paced Reels and TikToks that drive massive organic reach." },
            { title: "Post Production", desc: "Masterful editing, sound design, and color grading for a premium finish." }
        ],
        gradient: "from-amber-600/20 via-transparent to-transparent"
    },
    "content-production": {
        title: "Content Studio",
        tagline: "Infinite Creativity",
        description: "A full-scale production house for photography, writing, and platform-specific assets.",
        heroImage: "/services/content.jpg",
        stats: [
            { label: "Photography", value: "100+" },
            { label: "SEO Keywords", value: "5K+" },
            { label: "Daily Speed", value: "High" }
        ],
        subServices: [
            { title: "Photography", desc: "Studio and lifestyle shoots that make your products shine." },
            { title: "Copywriting", desc: "Persuasive sales copy and engaging long-form content that sells." },
            { title: "Ads Copy", desc: "Direct-response hooks and headlines that stop the scroll." },
            { title: "Content Strategy", desc: "Data-backed planning for consistent multi-channel output." }
        ],
        gradient: "from-emerald-600/20 via-transparent to-transparent"
    },
    "branding-and-strategy": {
        title: "Brand Strategy",
        tagline: "Strategic Leadership",
        description: "Positioning your brand to dominate the market with clarity and commercial impact.",
        heroImage: "/services/Brand.jpg",
        stats: [
            { label: "Industries", value: "20+" },
            { label: "Business Growth", value: "3x" },
            { label: "Countries", value: "15+" }
        ],
        subServices: [
            { title: "Market Research", desc: "Deep dives into competitor landscapes and consumer psychology." },
            { title: "Positioning", desc: "Defining the unique value proposition that sets you apart." },
            { title: "Architecture", desc: "Structuring complex brand ecosystems for clarity and scale." },
            { title: "Launch Strategy", desc: "Coordinated go-to-market plans for maximum impact." }
        ],
        gradient: "from-rose-600/20 via-transparent to-transparent"
    }
};


export default function ServiceDetail() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;
    const service = SERVICE_DATA[slug];
    const [activeSub, setActiveSub] = useState<number | null>(null);

    // Form State
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

    if (!service) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
                <h1 className="text-4xl font-display mb-6">Service Not Found</h1>
                <Link href="/" className="opacity-50 hover:opacity-100 uppercase tracking-widest text-sm">Return Home</Link>
            </div>
        );
    }

    const handleWhatsAppRedirect = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Hi! I'm interested in ${service.title}.\n\nMy details:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/918129164869?text=${encodedMessage}`, "_blank");
    };

    return (
        <main className="min-h-screen bg-black text-white overflow-hidden text-left">
            {/* Cinematic Split Hero */}
            <section className="relative min-h-screen flex items-center pt-8 overflow-hidden">
                {/* Dynamic Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-40 z-0`} />

                <div className="container mx-auto px-6 md:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Immersive Media: Centered in Right Column */}
                    <div className="flex items-center justify-center order-first lg:order-last">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="relative w-full h-[200px] lg:h-auto lg:aspect-[14/9] lg:max-h-[500px] rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden border-2 border-white group shadow-[0_0_50px_rgba(255,255,255,0.05)]"
                        >
                            {service.heroVideo ? (
                                <video
                                    src={service.heroVideo}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                />
                            ) : (
                                <Image
                                    src={service.heroImage}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </motion.div>
                    </div>

                    {/* Text Content: Second on mobile, Left on large screens */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="order-2 lg:order-first"
                    >
                        <button
                            onClick={() => router.back()}
                            className="flex items-center gap-3 text-white/40 hover:text-white transition-all mb-8 md:mb-12 group"
                        >
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-[0.3em]">Services</span>
                        </button>

                        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 md:mb-8">
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-white/60">{service.tagline}</span>
                        </div>

                        <h1 className="text-[12vw] lg:text-[6.5vw] font-display font-medium leading-[0.9] tracking-tighter mb-8 md:mb-12">
                            {service.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-white/50 font-display font-light max-w-xl leading-relaxed">
                            {service.description}
                        </p>

                        {/* Stats Logic */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10 max-w-xl">
                            {service.stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                                >
                                    <p className="text-[12px] uppercase tracking-[0.2em] text-white/50 mb-2">{stat.label}</p>
                                    <p className="text-2xl md:text-4xl font-display font-medium text-white">{stat.value}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Interactive Offerings Section */}
            <section className="py-24 md:py-40 relative">
                <div className="container mx-auto px-6 md:px-16">
                    <div className="flex flex-col lg:flex-row gap-20">
                        {/* List Area */}
                        <div className="lg:w-2/3">
                            <h2 className="text-md font-bold uppercase tracking-[0.5em] text-white mb-20">Core Offerings</h2>
                            <div className="space-y-0 border-t border-white/10">
                                {service.subServices.map((sub, idx) => (
                                    <div
                                        key={idx}
                                        onMouseEnter={() => setActiveSub(idx)}
                                        onMouseLeave={() => setActiveSub(null)}
                                        className="group relative py-12 md:py-16 border-b border-white/10 cursor-alias overflow-hidden"
                                    >
                                        <div className="flex items-center justify-between relative z-10">
                                            <div className="flex items-end gap-6 text-left">
                                                <span className="text-white text-sm font-display mb-2">0{idx + 1}</span>
                                                <h3 className={`text-4xl md:text-7xl font-display font-medium transition-all duration-500 ${activeSub === idx ? 'translate-x-4' : ''}`}>
                                                    {sub.title}
                                                </h3>
                                            </div>
                                            <div className={`w-14 h-14 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${activeSub === idx ? 'bg-white text-black border-white' : ''}`}>
                                                <Plus className={`w-6 h-6 transition-transform duration-500 ${activeSub === idx ? 'rotate-45' : ''}`} />
                                            </div>
                                        </div>

                                        <AnimatePresence>
                                            {activeSub === idx && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="relative z-10 pt-8 pl-12 md:pl-20 max-w-2xl text-left"
                                                >
                                                    <p className="text-xl text-white/60 font-display leading-relaxed">
                                                        {sub.desc}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Hover Background Shift */}
                                        <div className={`absolute inset-0 bg-white/[0.03] transition-transform duration-700 origin-left -translate-x-full ${activeSub === idx ? 'translate-x-0' : ''}`} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* LEAD FORM CTA BOX */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-40  bg-white/5 backdrop-blur-2xl border-2 border-white/40 p-10 md:p-12 rounded-[3rem] space-y-8">
                                <div>
                                    <h4 className="text-3xl font-display font-bold leading-tight mb-4">Start Project</h4>
                                    <p className="text-white/50 text-sm leading-relaxed mb-8">
                                        Fill in your details and we&apos;ll reach out to discuss your strategy.
                                    </p>
                                </div>

                                <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors"
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex items-center justify-center gap-3 w-full bg-white text-black px-8 py-5 rounded-2xl font-display font-bold uppercase tracking-[0.2em] group mt-4 hover:bg-white/90 transition-colors"
                                    >
                                        <span>Submit</span>
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </motion.button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
