import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cinematic Video Production & Reels | ORIGA Media",
    description: "Watch our cinematic vertical short-form reels, high-production commercial films, and brand narratives optimized for global reach.",
};

export default function WorkVideoLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
