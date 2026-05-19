"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
    { icon: FaFacebookF, href: "#" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/116784126/admin/dashboard/" },
    { icon: FaXTwitter, href: "#" },
    { icon: FaInstagram, href: "https://instagram.com/origamedia" }
];

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Works", href: "#works" },
    { name: "Clients", href: "#stats" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "/contact" }
];

export default function Footer() {
    return (
        <footer className="bg-white text-black py-12 md:py-10 font-sans border-t border-gray-100 overflow-x-hidden">
            <div className="container mx-auto px-6 md:px-16">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-16 mb-12 lg:mb-20">
                    {/* Left Section: Connect */}
                    <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-8 order-2 lg:order-1 text-center lg:text-left">
                        <div className="flex flex-col items-center lg:items-start">
                            <p className="text-xl md:text-2xl font-light mb-2">Let&apos;s Connect</p>
                            <a
                                href="mailto:info@origanetworks.com"
                                className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight hover:opacity-70 transition-opacity break-all sm:break-normal text-center lg:text-left"
                            >
                                info@origanetworks.com
                            </a>
                        </div>

                        <div className="flex justify-center lg:justify-start gap-4">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Section: Large Typography */}
                    <div className="text-center lg:text-right order-1 lg:order-2 w-full lg:w-auto flex flex-col items-center lg:items-end">
                        <div className="relative w-full max-w-[400px] h-16 sm:h-32 md:h-40 mb-4">
                            <Image
                                src="/logo/black-logo.png"
                                alt="Origa Media Logo"
                                fill
                                className="object-contain object-center lg:object-right"
                            />
                        </div>
                        <p className="text-lg sm:text-2xl md:text-3xl font-medium tracking-tight">
                            Creative, Strategic, Result-Driven
                        </p>
                    </div>
                </div>

                {/* Navigation Row */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 sm:gap-x-12 gap-y-4 mb-10 lg:mb-20 border-t border-gray-100 pt-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:opacity-50 transition-opacity uppercase tracking-widest"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-500 font-medium">
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
                        <Link href="#" className="hover:text-black transition-colors whitespace-nowrap">Privacy</Link>
                        <Link href="#" className="hover:text-black transition-colors whitespace-nowrap">Terms & Conditions</Link>
                    </div>

                    <div className="flex gap-10">
                        <span className="text-black">Kochi</span>
                        <span>Malappuram</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span>© {new Date().getFullYear()}.Origa Media</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
