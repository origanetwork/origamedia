"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Plus, Send } from "lucide-react";
import Image from "next/image";


export default function PerformancePage() {
    const router = useRouter();
    const [activeSub, setActiveSub] = useState<number | null>(null);

    // Form State
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

    const handleWhatsAppRedirect = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Hi! I'm interested in Performance Marketing.\n\nMy details:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/918129164869?text=${encodedMessage}`, "_blank");
    };

    const offerings = [
        { title: "Ecommerce", desc: "Data-driven ad campaigns designed to scale revenue and maximize return on ad spend." },
        { title: "Lead Generation", desc: "Capturing high-quality prospects through targeted funnel strategies and precise audience segmentation." },
        { title: "Creative Strategy", desc: "Developing scroll-stopping ad creatives that resonate with your target demographics." },
        { title: "CRM Setup", desc: "Architecting robust customer relationship systems to manage and nurture leads effectively." },
        { title: "Automation", desc: "Streamlining workflows and communication to follow up with leads effortlessly round-the-clock." },
        { title: "WhatsApp Marketing", desc: "Direct conversational marketing strategies to build quick trust and fast conversions." },
        { title: "Email Marketing", desc: "Automated sequences and tailored newsletters that turn cold leads into loyal customers." }
    ];

    return (
        <main className="min-h-screen bg-black text-white overflow-hidden text-left">
            {/* Cinematic Split Hero */}
            <section className="relative min-h-screen flex items-center pt-8 overflow-hidden">
                {/* Dynamic Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-transparent opacity-40 z-0" />

                <div className="container mx-auto px-6 md:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Immersive Media: Centered in Right Column */}
                    <div className="flex items-center justify-center order-first lg:order-last">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="relative w-full h-[300px] lg:h-auto lg:aspect-[4/5] lg:max-h-[600px] rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden border-2 border-white group shadow-[0_0_50px_rgba(255,255,255,0.05)]"
                        >
                            <Image
                                src="/services/perfo.jpg"
                                alt="Performance Marketing"
                                fill
                                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                            />
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
                            <span className="text-xs font-bold uppercase tracking-[0.3em]">Back</span>
                        </button>

                        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 md:mb-8">
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-white/60">Measurable Growth</span>
                        </div>

                        <h1 className="text-[10vw] lg:text-[5vw] font-display font-medium leading-[0.9] tracking-tighter mb-8 md:mb-12">
                            Performance Marketing
                        </h1>

                        <div className="space-y-6">
                            <p className="text-lg md:text-xl text-white/50 font-display font-light max-w-xl leading-relaxed">
                                Our performance marketing team focuses on measurable growth. Every campaign is built with clear goals, whether it is boosting sales, generating leads, or nurturing stronger customer relationships. By combining insights with creative execution, we ensure your marketing budget delivers tangible outcomes.
                            </p>
                            <p className="text-lg md:text-xl text-white/80 font-display font-medium max-w-xl leading-relaxed border-l-2 border-indigo-500 pl-6">
                                We are growth geeks focused on results. We provide customized strategies, ad placements, and audience targeting to help you get the numbers that matter.
                            </p>
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
                            <h2 className="text-md font-bold uppercase tracking-[0.5em] text-white mb-20">Our Expertise</h2>
                            <div className="space-y-0 border-t border-white/10">
                                {offerings.map((sub, idx) => (
                                    <div
                                        key={idx}
                                        onMouseEnter={() => setActiveSub(idx)}
                                        onMouseLeave={() => setActiveSub(null)}
                                        className="group relative py-10 md:py-14 border-b border-white/10 cursor-alias overflow-hidden"
                                    >
                                        <div className="flex items-center justify-between relative z-10">
                                            <div className="flex items-end gap-6 text-left">
                                                <span className="text-white text-sm font-display mb-2">0{idx + 1}</span>
                                                <h3 className={`text-3xl md:text-6xl font-display font-medium transition-all duration-500 ${activeSub === idx ? 'translate-x-4' : ''}`}>
                                                    {sub.title}
                                                </h3>
                                            </div>
                                            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${activeSub === idx ? 'bg-white text-black border-white' : ''}`}>
                                                <Plus className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 ${activeSub === idx ? 'rotate-45' : ''}`} />
                                            </div>
                                        </div>

                                        <AnimatePresence>
                                            {activeSub === idx && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="relative z-10 pt-6 pl-12 md:pl-20 max-w-2xl text-left"
                                                >
                                                    <p className="text-lg md:text-xl text-white/60 font-display leading-relaxed">
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
                            <div className="sticky top-40 bg-white/5 backdrop-blur-2xl border-2 border-white/40 p-10 md:p-12 rounded-[3rem] space-y-8">
                                <div>
                                    <h4 className="text-3xl font-display font-bold leading-tight mb-4">Grow with Us</h4>
                                    <p className="text-white/50 text-sm leading-relaxed mb-8">
                                        Fill in your details and we&apos;ll reach out to discuss a custom performance strategy.
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
