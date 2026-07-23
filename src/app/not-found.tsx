"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-black text-white px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-8xl md:text-[12rem] font-display font-medium tracking-tighter text-white mb-4 select-none">
          404
        </h1>
        <h2 className="text-3xl md:text-5xl font-display font-medium mb-6">
          Page Not Found
        </h2> 
        <Link 
          href="/"
          className="group inline-flex items-center space-x-4 border border-white/20 px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>
      </motion.div>
    </div>
  );
}
