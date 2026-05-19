"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { ArrowRight } from "lucide-react";

export default function BlogDetailPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params?.slug;

    const blog = blogs.find((b) => b.slug === slug);
    const recentBlogs = blogs.filter(b => b.slug !== slug).slice(0, 3);

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-display mb-4">Article Not Found</h1>
                    <Link href="/blogs" className="text-gray-500 hover:text-white transition-colors uppercase tracking-widest text-xs">
                        Back to Insights
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-black text-white pb-24 font-sans text-left">
            {/* Cinematic Hero */}
            <section className="relative h-[90vh] md:h-screen w-full overflow-hidden flex flex-col justify-end pb-24 pt-10">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                <div className="container mx-auto px-6 md:px-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-white mb-8">
                            {blog.category}
                        </span>
                        <h1 className="text-5xl md:text-8xl font-display font-medium tracking-tighter leading-[0.85] mb-10">
                            {blog.title}
                        </h1>
                        <div className="flex items-center gap-10 text-white/40 text-xs font-bold uppercase tracking-widest pt-10 border-t border-white/10">
                            <div className="flex flex-col gap-1">
                                <span className="opacity-40">Published</span>
                                <span className="text-white">{blog.date}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="opacity-40">Read Time</span>
                                <span className="text-white">{blog.readTime}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="opacity-40">Author</span>
                                <span className="text-white">{blog.author}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-20">
                <div className="container mx-auto px-6 md:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                        {/* LEFT: All content align left */}
                        <div className="lg:col-span-8 space-y-12">
                            {blog.sections.map((section, index) => {
                                if (section.type === 'heading') {
                                    return (
                                        <h2 key={index} className="text-3xl md:text-5xl font-display font-medium tracking-tight mt-12 mb-8">
                                            {section.content}
                                        </h2>
                                    );
                                }
                                if (section.type === 'text') {
                                    return (
                                        <p key={index} className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-8">
                                            {section.content}
                                        </p>
                                    );
                                }
                                if (section.type === 'quote') {
                                    return (
                                        <blockquote key={index} className="pl-8 border-l-4 border-white/20 py-4 my-12">
                                            <p className="text-2xl md:text-3xl font-display italic text-white/90 leading-tight">
                                                "{section.content}"
                                            </p>
                                        </blockquote>
                                    );
                                }
                                return null;
                            })}
                        </div>

                        {/* RIGHT: Recent Blogs Sidebar */}
                        <aside className="lg:col-span-4">
                            <div className="sticky top-32 space-y-12">
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-white/40 mb-10">Recent Posts</h3>
                                    <div className="space-y-6">
                                        {recentBlogs.map((recent) => (
                                            <Link key={recent.id} href={`/blogs/${recent.slug}`} className="group block border border-white p-6 transition-all hover:bg-white hover:text-black">
                                                <h4 className="text-lg font-display font-medium transition-colors line-clamp-2">
                                                    {recent.title}
                                                </h4>
                                                <div className="flex items-center gap-3 mt-4 text-[10px] font-bold uppercase tracking-widest opacity-40">
                                                    <span>{recent.date}</span>
                                                    <div className="w-1 h-1 rounded-full bg-current opacity-20" />
                                                    <span>{recent.readTime}</span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    href="/blogs"
                                    className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white border-b border-white/20 pb-2 hover:border-white transition-all"
                                >
                                    <span>View All Insights</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </aside>

                    </div>
                </div>
            </section>
        </main>
    );
}
