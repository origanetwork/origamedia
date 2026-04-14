"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu as MenuIcon, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Works", href: "#works" },
  { name: "Awards", href: "#awards" },
  { name: "Who We Are", href: "#about" },
  { name: "Blogs", href: "#blogs" },
  { name: "Careers", href: "#careers" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 50;
      setScrolled(!isTop);
      setIsOpen(isTop);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="fixed top-0 left-0 w-full z-50 bg-[#141414] text-white overflow-hidden pointer-events-none"
      variants={{
        closed: { height: 140, transition: { type: "spring", stiffness: 300, damping: 30 } },
        open: { height: "60vh", transition: { type: "spring", stiffness: 100, damping: 20 } },
      }}
    >
      <div className="pointer-events-auto h-full w-full">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#141414]"
            />
          )}
        </AnimatePresence>

        <div className="relative h-full container mx-auto px-10 flex flex-col items-center">
          {/* Top Row - Always properly aligned */}
          <div className="w-full h-[140px] flex items-center justify-between shrink-0">
            {/* Logo Area */}
            <motion.div
              className="flex items-center cursor-pointer"
              variants={{
                closed: { scale: 1, opacity: 1, x: 0 },
                open: { scale: 0.8, opacity: 0, x: -40, pointerEvents: "none" }
              }}
            >
              <Image
                src="/logo/Logo-black.jpeg"
                alt="Origa Media Logo"
                width={180}
                height={60}
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Right Side Actions Group */}
            <div className="flex items-center space-x-12">
              {/* Desktop Navigation (Only when closed) */}
              <div className="hidden lg:flex items-center space-x-12">
                <motion.nav
                  variants={{
                    closed: { opacity: 1, y: 0, pointerEvents: "auto" },
                    open: { opacity: 0, y: -20, pointerEvents: "none" }
                  }}
                  className="flex items-center space-x-10 text-[15px] font-medium tracking-wide"
                >
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="hover:text-gray-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.nav>

                <motion.div
                  variants={{
                    closed: { opacity: 1, y: 0, pointerEvents: "auto" },
                    open: { opacity: 0, y: -20, pointerEvents: "none" }
                  }}
                >
                  <Link
                    href="#contact"
                    className="group flex items-center space-x-4 border border-white/20 px-8 py-4 text-[14px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>

              {/* Close Icon for Open State */}
              <AnimatePresence>
                {isOpen && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => {
                      setIsOpen(false);
                      window.scrollTo({ top: 150, behavior: 'smooth' });
                    }}
                    className="p-2 focus:outline-none z-50 text-white hover:rotate-90 transition-transform duration-300"
                    aria-label="Close"
                  >
                    <X className="w-10 h-10" />
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Mobile Menu Icon (Only when closed) */}
              {!isOpen && (
                <div className="lg:hidden">
                  <button
                    onClick={toggleMenu}
                    className="p-2 focus:outline-none z-50 text-white"
                  >
                    <MenuIcon className="w-8 h-8" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Center Branding - Visible when Open */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex-1 flex flex-col items-center justify-center w-full"
              >
                <h1 className="text-[12vw] lg:text-[18vw] font-display font-bold leading-none tracking-tighter select-none">
                  OR<span className="text-gray-500 italic">I</span>GA<span className="text-gray-500">.</span>
                </h1>

                <motion.nav
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-bold tracking-[0.3em] uppercase opacity-60"
                >
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
