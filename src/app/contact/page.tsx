import ContactPage from "@/components/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | ORIGA Media",
    description: "Get in touch with ORIGA Media for your next project. We specialize in digital marketing, graphics design, and video creation.",
};

export default function Page() {
    return <ContactPage />;
}
