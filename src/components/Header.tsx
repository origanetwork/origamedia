"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu as MenuIcon, X } from "lucide-react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Works", href: "/#works" },
  { name: "Who We Are", href: "/#about" },
  { name: "Blogs", href: "/blogs" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  
  // Initialize isOpen to isHome (true on homepage, false on subpages) to align SSR and initial client hydration.
  // This completely eliminates Cumulative Layout Shift (CLS) on load while preserving sticky layout document flow.
  const [isOpen, setIsOpen] = useState(isHome);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setIsOpen(false);
      return;
    }

    const handleScroll = () => {
      const isTop = window.scrollY < 50;
      setIsOpen(isTop);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="sticky top-0 left-0 w-full z-50 bg-[#141414] text-white overflow-hidden pointer-events-none"
      variants={{
        closed: { height: 80, transition: { type: "spring", stiffness: 300, damping: 30 } },
        open: { height: isMobile ? "100dvh" : "35vh", transition: { type: "spring", stiffness: 100, damping: 20 } },
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
          <div className="w-full h-[80px] flex items-center justify-between shrink-0">
            {/* Logo Area */}
            <Link href="/">
              <motion.div
                className="flex items-center cursor-pointer"
                variants={{
                  closed: { scale: 0.8, opacity: 1, x: 0 },
                  open: { scale: 0.6, opacity: 0, x: -40, pointerEvents: "none" }
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
            </Link>

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
                    closed: { scale: 0.9, opacity: 1, y: 0, pointerEvents: "auto" },
                    open: { opacity: 0, y: -20, pointerEvents: "none" }
                  }}
                >
                  <Link
                    href="/contact"
                    className="group flex items-center space-x-4 border border-white/20 px-8 py-4 text-[14px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>

              {/* Action Icons (Close/Menu) */}
              <div className="relative flex items-center justify-center w-12 h-12">
                <AnimatePresence>
                  {isOpen && (
                    <motion.button
                      key="close"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      onClick={() => {
                        setIsOpen(false);
                        window.scrollTo({ top: 150, behavior: 'smooth' });
                      }}
                      className="absolute p-2 focus:outline-none z-50 text-white hover:rotate-90 transition-transform duration-300"
                      aria-label="Close"
                    >
                      <X className="w-10 h-10" />
                    </motion.button>
                  )}
                </AnimatePresence>
              
                <AnimatePresence>
                  {!isOpen && (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute lg:hidden"
                    >
                      <button
                        onClick={toggleMenu}
                        className="p-2 focus:outline-none z-50 text-white"
                      >
                        <MenuIcon className="w-8 h-8" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Center Branding - Visible when Open */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex-1 flex flex-col items-center justify-center lg:justify-start w-full pb-20 lg:pb-0 lg:pt-2 lg:-mt-16"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="relative w-full max-w-[85vw] md:max-w-[70vw] h-[16vh] md:h-[12vh] lg:h-[18vh] mb-4 lg:mb-2"
                >
                  <Image
                    src="/logo/origa.png"
                    alt="Origa Logo"
                    fill
                    sizes="(max-width: 768px) 70vw, 500px"
                    className="object-contain"
                    priority
                  />
                </motion.div>

                <motion.nav
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-8 md:mt-4 flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-y-3 text-[16px] md:text-sm font-bold tracking-[0.3em] uppercase opacity-60 px-4 w-full"
                >
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-white transition-colors py-3 md:py-0 w-full md:w-auto text-center"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-white transition-colors py-3 md:py-0 w-full md:w-auto text-center"
                  >
                    Contact
                  </Link>
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}

