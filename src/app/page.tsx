"use client";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/Hero"), {
   ssr: false,
   loading: () => <div className="h-screen bg-black" />
});
import Stats from "@/components/Stats";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import OurApproach from "@/components/OurApproach";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServTemp from "@/components/ServTemp";


export default function Home() {
   return (
      <div className="flex flex-col">
         <Hero />
         <Stats />
         <About />
         <Clients />
         {/* <ServTemp /> */}
         <Services />
         <OurApproach />
         <Portfolio />
         <WhyChooseUs />
         <div className="sticky top-0 h-1 w-full bg-white z-[999] shadow-md" />
         <Testimonials />
         <CTA />
         <WhatsAppButton />
      </div>
   );
}

