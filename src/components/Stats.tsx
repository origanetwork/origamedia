"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

const stats = [
    { label: "Clients", value: 300, suffix: "+" },
    { label: "Countries", value: 2, suffix: "+" },
    { label: "Projects Done", value: 150, suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });
    const displayValue = useTransform(springValue, (latest) =>
        Math.round(latest).toLocaleString()
    );

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    return (
        <span ref={ref}>
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section className="bg-black text-white py-16 md:py-24 overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 md:px-16">
                {/* Main Text Content */}
                <div className="text-center mb-12 max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl font-light leading-snug md:leading-tight text-gray-400 font-display"
                    >
                        Crafting transformative <span className="text-white font-bold">digital experiences</span> for the world&apos;s leading brands by bringing together design, technology, <span className="text-white font-bold">and marketing.</span>
                    </motion.h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            className="space-y-2"
                        >
                            <p className="text-6xl md:text-7xl font-bold tracking-tighter text-gray-400">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </p>
                            <p className="text-md md:text-xl text-white uppercase tracking-widest font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
