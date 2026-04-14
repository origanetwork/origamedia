import Hero from "@/components/Hero";
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

export default function Home() {
   return (
      <div className="flex flex-col">
         <Hero />
         <Stats />
         <About />
         <Clients />
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
