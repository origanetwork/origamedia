import { Metadata } from "next";

const SERVICE_META: Record<string, { title: string; description: string }> = {
    "digital-marketing": {
        title: "Digital Marketing Services | ORIGA Media",
        description: "Scale your business with surgical precision across Meta Ads, Google Ads, SEO, and social management. ROI-focused performance.",
    },
    "graphics-designing": {
        title: "Professional Graphics Design Services | ORIGA Media",
        description: "Visual systems that communicate value at a glance. Brand identity, creative direction, and social/ad assets.",
    },
    "video-production": {
        title: "Cinematic Video Production Services | ORIGA Media",
        description: "Transforming brand messages into cinematic experiences. Marketing films, brand stories, and short-form reels.",
    },
    "content-production": {
        title: "Content Studio & Copywriting Services | ORIGA Media",
        description: "Photography, persuasive copywriting, and direct-response ad hooks tailored for your brand platforms.",
    },
    "branding-and-strategy": {
        title: "Brand Strategy & Positioning Services | ORIGA Media",
        description: "Positioning your brand to dominate the market with clarity, competitive research, and strategic launch campaigns.",
    },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const meta = SERVICE_META[params.slug];
    return {
        title: meta?.title || "Services | ORIGA Media",
        description: meta?.description || "High-performance marketing and design services by ORIGA Media.",
    };
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
