"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

const contactInfo = [
    {
        icon: Mail,
        title: "Email",
        content: "info@origanetworks.com",
        link: "mailto:info@origanetworks.com",
    },
    {
        icon: MapPin,
        title: "Branch Office",
        content: "Alis Tower, Melattur, Malappuram, Kerala 679326 India",
        link: "https://maps.google.com/?q=Alis+Tower,Melattur,Malappuram,Kerala+679326+India",
    },
    {
        icon: MapPin,
        title: "Head Office",
        content: "First Floor, AAK Building, HMT Junction, Moolepadam Nagar, Muncipality, Kalamassery, Kochi, Kerala 683104 India",
        link: "https://maps.google.com/?q=First+Floor,AAK+Building,HMT+Junction,Moolepadam+Nagar,Muncipality,Kalamassery,Kochi,Kerala+683104+India",
    },
    {
        icon: Phone,
        title: "Phone",
        content: "+91 8129164869\n+91 8078154338",
        link: "tel:+918129164869",
    },
];

const subjects = [
    "General Enquiry",
    "Graphics Design",
    "Video Creation",
    "Digital Marketing",
    "Branding",
    "Performance"
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "General Enquiry",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add submission logic here
    };

    return (
        <div className="min-h-screen bg-black text-white pt-40 pb-20 px-6 md:px-16 overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="border-2 border-white rounded-[2.5rem] overflow-hidden bg-zinc-900/20 backdrop-blur-sm"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Left Column: Contact Information */}
                        <div className="p-8 md:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-white flex flex-col gap-12">
                            <div>
                                <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tighter mb-6 leading-tight">
                                    Reach Out <br />
                                    <span className="text-gray-500 italic">to Us.</span>
                                </h1>
                                <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
                                    Have a project in mind or just want to say hello? We&apos;d love to hear from you.
                                </p>
                            </div>

                            <div className="flex flex-col gap-10">
                                {contactInfo.map((info, idx) => (
                                    <div key={idx} className="flex gap-6 group">
                                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                            <info.icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">{info.title}</span>
                                            <a
                                                href={info.link}
                                                className="text-lg font-medium hover:text-gray-400 transition-colors whitespace-pre-line leading-tight"
                                                target={info.title.includes("Map") ? "_blank" : undefined}
                                                rel={info.title.includes("Map") ? "noopener noreferrer" : undefined}
                                            >
                                                {info.content}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4 pt-4 mt-auto">
                                {[
                                    { icon: FaInstagram, href: "https://instagram.com/origamedia" },
                                    { icon: FaLinkedinIn, href: "#" },
                                    { icon: FaFacebookF, href: "#" }
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="p-8 md:p-16">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-8 h-full">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex flex-col gap-3">
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">First Name</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="John"
                                            className="bg-transparent border-b border-white/20 px-1 py-3 outline-none focus:border-white transition-all font-medium text-lg"
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Last Name</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Doe"
                                            className="bg-transparent border-b border-white/20 px-1 py-3 outline-none focus:border-white transition-all font-medium text-lg"
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex flex-col gap-3">
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="john@example.com"
                                            className="bg-transparent border-b border-white/20 px-1 py-3 outline-none focus:border-white transition-all font-medium text-lg"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 000 000 0000"
                                            className="bg-transparent border-b border-white/20 px-1 py-3 outline-none focus:border-white transition-all font-medium text-lg"
                                            value={formData.phoneNumber}
                                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">I&apos;m interested in...</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                        {subjects.map((subject) => (
                                            <button
                                                key={subject}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, subject })}
                                                className={`w-full text-center px-2 py-2.5 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${formData.subject === subject
                                                    ? "bg-white text-black border-white"
                                                    : "bg-transparent text-gray-400 border-white/20 hover:border-white/40"
                                                    }`}
                                            >
                                                {subject}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 grow">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Message</label>
                                    <textarea
                                        required
                                        rows={4}
                                        placeholder="Tell us about your project..."
                                        className="bg-transparent border-b border-white/20 px-1 py-3 outline-none focus:border-white transition-all font-medium text-lg resize-none min-h-[120px]"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    type="submit"
                                    className="w-full bg-white text-black font-bold py-6 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-200 transition-all uppercase tracking-[0.3em] text-sm"
                                >
                                    <span>Submit Inquiry</span>
                                    <Send className="w-4 h-4 translate-x-1" />
                                </motion.button>
                            </form>
                        </div>

                    </div>
                </motion.div>
            </div>
        </div>
    );
}
