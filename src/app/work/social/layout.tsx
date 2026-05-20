import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Social Media Strategy & Content Design | ORIGA Media",
    description: "Explore our dynamic social media creative designs, grids, visual storytelling, and high-impact digital systems.",
};

export default function WorkSocialLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
