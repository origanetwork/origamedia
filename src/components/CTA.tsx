"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative py-10 md:py-24 bg-black overflow-hidden font-display border-t border-white/5">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px]" />
                <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 md:px-16 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-7xl font-medium text-white mb-8"
                    >
                        Let&apos;s Build Something
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 italic">
                            That Works.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12 max-w-2xl mx-auto"
                    >
                        Whether you&apos;re launching a brand or scaling your business, we&apos;re here to help you grow.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        {/* Primary CTA */}
                        <a
                            href="mailto:info@origanetworks.com"
                            className="group relative px-8 py-5 bg-white text-black font-bold uppercase tracking-[0.2em] text-sm overflow-hidden transition-all duration-300 hover:pr-12"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Start a Project
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>

                        {/* Secondary CTA */}
                        <a
                            href="/contact"
                            className="group flex items-center gap-3 px-8 py-5 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-white/5 transition-all duration-300"
                        >
                            <MessageSquare className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                            Book a Consultation
                        </a>
                    </motion.div>
                </div>
            </div>
            {/* Subtle bottom border highlight */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}
