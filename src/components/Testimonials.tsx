"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        name: "VINOD KUMAR",
        role: "General Manager",
        company: "Aman Enterprise",
        image: "/testmonial/t1.png",
        quote: "Origa Media helped us scale our leads consistently."
    },
    {
        name: "JAYASANKAR T.K",
        role: "ManagingDirector",
        company: "Valluvanad Matrimonial",
        image: "/testmonial/t2.jpg",
        quote: "Creative, strategic, and result-driven team."
    },
    {
        name: "Jinu Sunil",
        role: "Founder & CEO",
        company: "Mindra Clinic",
        image: "/testmonial/t3.jpeg",
        quote: "They understand the market dynamics perfectly."
    },
    {
        name: "Mansoor VP",
        role: "Co-Partner",
        company: "Dezert Makeovers",
        image: "/testmonial/t4.png",
        quote: "Highly recommended for performance marketing."
    }
];

export default function Testimonials() {
    return (
        <section className="py-10 md:py-24 bg-black overflow-clip border-t border-white/5">
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

                {/* Mobile Stacking Cards Layout */}
                <div className="md:hidden space-y-24 pb-10">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group sticky top-28 will-change-transform"
                            style={{ zIndex: idx + 1 }}
                        >
                            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border-2 border-white shadow-2xl flex flex-col justify-end p-10">
                                {/* Image Background */}
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                />

                                {/* Black Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-[5]" />

                                <div className="relative z-10 w-full">
                                    <p className="text-xl md:text-3xl text-white font-medium italic leading-relaxed mb-6 font-display">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </p>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-white tracking-tight">
                                            {testimonial.name}
                                        </h3>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-sm font-semibold text-white/80">
                                                {testimonial.role}
                                            </p>
                                            <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">
                                                {testimonial.company}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Desktop Grid Layout */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className="group relative aspect-[3/4] overflow-hidden rounded-2xl border-2 border-white/50 hover:border-white transition-all duration-500 shadow-xl"
                        >
                            {/* Client Image background */}
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-all duration-700"
                                quality={100}
                            />

                            {/* Black Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <p className="text-lg text-white font-bold font-medium italic leading-relaxed mb-6">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold text-white tracking-tight">
                                        {testimonial.name}
                                    </h3>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-xs font-semibold text-white/80">
                                            {testimonial.role}
                                        </p>
                                        <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>




            </div>
        </section>
    );
}
