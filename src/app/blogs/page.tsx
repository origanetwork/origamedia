"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function BlogsPage() {
    return (
        <main className="min-h-screen bg-black pt-10 pb-24 font-sans">
            {/* Hero Section */}
            <section className="px-6 md:px-16 mb-24">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12"
                    >
                        <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tighter text-white max-w-2xl">
                            Our <span className="italic text-gray-400">Insights</span>.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-md md:text-right">
                            Exploring the intersection of cinematic storytelling, digital strategy, and brand transformation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blogs Grid */}
            <section className="px-6 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {blogs.map((blog, index) => (
                            <motion.article
                                key={blog.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group flex flex-col h-full border-2 border-white p-4  rounded-2xl "
                            >
                                <Link href={`/blogs/${blog.slug}`} className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-8 bg-gray-100">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-black">{blog.category}</span>
                                    </div>
                                </Link>

                                <div className="flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 mb-4 text-gray-400 text-[11px] font-bold uppercase tracking-widest">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            <span>{blog.date}</span>
                                        </div>
                                        <div className="w-1 h-1 rounded-full bg-gray-300" />
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5" />
                                            <span>{blog.readTime}</span>
                                        </div>
                                    </div>

                                    <Link href={`/blogs/${blog.slug}`} className="hover:text-white transition-colors">
                                        <h2 className="text-3xl font-display font-medium tracking-tight mb-4 leading-tight text-white">
                                            {blog.title}
                                        </h2>
                                    </Link>

                                    <p className="text-gray-400 font-sans font-light leading-relaxed mb-8 line-clamp-2">
                                        {blog.excerpt}
                                    </p>

                                    <div className="mt-auto">
                                        <Link
                                            href={`/blogs/${blog.slug}`}
                                            className="inline-flex items-center gap-2 group/link text-white"
                                        >
                                            <span className="text-xs font-bold uppercase tracking-[0.2em] border-b border-white pb-1 transition-all group-hover/link:pr-4">Read Article</span>
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
