"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
    {
        id: 1,
        slug: "digital-marketing",
        title: "Digital Marketing",
        description: "Performance-driven campaigns across Meta, Google, and other platforms designed to generate leads and maximize ROI.",
        bgImage: "/services/digital-m.jpg"
    },
    {
        id: 2,
        slug: "branding-and-strategy",
        title: "Branding & Strategy",
        description: "We create strong brand identities and positioning strategies that stand out in competitive markets.",
        bgImage: "/services/Brand.jpg"
    },
    {
        id: 3,
        slug: "graphics-designing",
        title: "Graphics Designing",
        description: "Creative visual identities and social media assets that capture attention and build brand trust.",
        bgImage: "/services/graphical.jpg"
    },
    {
        id: 4,
        slug: "video-production",
        title: "Video Production",
        description: "Premium cinematic storytelling and marketing films that drive engagement and conversions.",
        bgImage: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=2070"
    },
    {
        id: 5,
        slug: "content-production",
        title: "Content Production",
        description: "High-quality visual and written content designed to tell your brand's unique story.",
        bgImage: "/services/contentt.jpg"
    }
];

const rotatingTexts = ["Creative", "Strategic", "Result-Driven"];

export default function ServTemp() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [textIndex, setTextIndex] = useState(0);

    // Rotate the big text every 2.5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="services"
            className={`relative w-full transition-colors duration-1000 overflow-clip ${activeIndex !== null ? 'bg-black' : 'bg-white'}`}
        >
            {/* Desktop Scrollytelling Layout */}
            <div className="hidden md:block relative">
                {/* Sticky Background & Right Text Layer */}
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    <AnimatePresence>
                        {activeIndex !== null && (
                            <motion.div
                                key={services[activeIndex].id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <Image
                                    src={services[activeIndex].bgImage}
                                    alt={services[activeIndex].title}
                                    fill
                                    className="object-cover"
                                    quality={100}
                                    priority
                                />
                                <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Massive Typography Overlay (Right Side) - Matches current design model (No Uppercase) */}
                    <div className="absolute inset-0 z-20 flex items-center justify-end px-16 pointer-events-none">
                        <div className="container mx-auto flex justify-end">
                            <div className="relative h-[200px] flex items-center justify-end w-1/2">
                                <AnimatePresence mode="wait">
                                    <motion.h3
                                        key={textIndex}
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -40 }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        className={`text-6xl sm:text-5xl md:text-6xl lg:text-[8vw] font-display font-bold leading-none tracking-tighter absolute right-0 whitespace-nowrap transition-colors duration-500 ${activeIndex !== null ? 'text-white/10' : 'text-black opacity-100'}`}
                                    >
                                        {rotatingTexts[textIndex]}.
                                    </motion.h3>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scrollable Content Layer (Left Side) */}
                <div className="relative z-30 -mt-[100vh]">
                    <div className="container mx-auto px-16">
                        <div className="w-1/2">
                            {/* Intro Section - Matches original design on first view */}
                            <div className="h-screen flex flex-col justify-center">
                                <motion.span
                                    className={`text-sm font-bold tracking-[0.3em] uppercase transition-colors duration-500 ${activeIndex !== null ? 'text-white/60' : 'text-gray-500'}`}
                                >
                                    Our Services
                                </motion.span>
                                <motion.h2
                                    className={`text-7xl font-display font-medium tracking-tighter mt-6 transition-colors duration-700 ${activeIndex !== null ? 'text-white' : 'text-black'}`}
                                >
                                    Digital Solutions <br />
                                    <span className={`transition-opacity duration-700 ${activeIndex !== null ? 'opacity-40' : 'opacity-100'}`}>Tailored for Growth.</span>
                                </motion.h2>

                                <div className={`mt-16 space-y-6 transition-all duration-700 ${activeIndex !== null ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
                                    {services.map((s) => (
                                        <div key={s.id} className="text-3xl font-display font-medium text-black/30">
                                            {s.title}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Service Content Viewports */}
                            {services.map((service, index) => (
                                <div key={service.id} className="min-h-screen flex flex-col justify-center">
                                    <ServiceLink
                                        service={service}
                                        index={index}
                                        activeIndex={activeIndex}
                                        setActiveIndex={setActiveIndex}
                                    />
                                </div>
                            ))}

                            <div className="h-[20vh]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile View: Stacking Cards Layout (Testimonials.tsx Style) */}
            <div className="md:hidden bg-black pt-20 pb-40 px-6 space-y-20">
                <div className="mb-12">
                    <span className="text-gray-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
                        Our Services
                    </span>
                    <h2 className="text-4xl font-display font-medium text-white tracking-tight">
                        Transforming <br />
                        <span className="text-white">Digital <span className="opacity-40">Presence.</span></span>
                    </h2>
                </div>

                <div className="flex flex-col gap-24">
                    {services.map((service, index) => (
                        <MobileServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}


function ServiceLink({ service, index, activeIndex, setActiveIndex }: any) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: "-45% 0px -45% 0px",
        amount: 0.1
    });

    useEffect(() => {
        if (isInView) {
            setActiveIndex(index);
        }
    }, [isInView, index, setActiveIndex]);

    return (
        <Link
            ref={ref}
            href={`/services/${service.slug}`}
            className="group block no-underline"
        >
            <div className={`flex items-center space-x-6 text-6xl xl:text-7xl font-display font-medium transition-all duration-700 ${activeIndex === index ? 'text-white' : (activeIndex !== null ? 'text-white/20' : 'text-black')}`}>
                <span>{service.title}</span>
                <ArrowRight className={`w-12 h-12 transition-all duration-500 ${activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
            </div>
            <div className={`mt-8 overflow-hidden transition-all duration-1000 ease-in-out ${activeIndex === index ? 'max-h-60 opacity-100 translate-y-0 blur-0' : 'max-h-0 opacity-0 translate-y-4 blur-sm'}`}>
                <p className="text-xl font-medium leading-relaxed max-w-xl text-white/70">
                    {service.description}
                </p>
                <div className="mt-8 flex items-center text-white font-bold tracking-widest text-xs">
                    Explore Details <ArrowRight className="ml-2 w-4 h-4" />
                </div>
            </div>
        </Link>
    );
}

function MobileServiceCard({ service, index }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="sticky top-28 will-change-transform"
            style={{ zIndex: index + 1 }}
        >
            <Link href={`/services/${service.slug}`} className="block no-underline">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-2 border-white/20 shadow-2xl flex flex-col justify-end p-8">
                    <Image
                        src={service.bgImage}
                        alt={service.title}
                        fill
                        className="object-cover"
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="relative z-10">
                        <h3 className="text-3xl font-display font-bold text-white mb-4">{service.title}</h3>
                        <p className="text-white/70 text-base line-clamp-3 leading-relaxed">{service.description}</p>
                        <div className="mt-8 flex items-center text-white font-bold tracking-widest text-xs">
                            View Service <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
