import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Complete Client Work Portfolio | ORIGA Media",
    description: "Explore our comprehensive portfolio of brand transformations, cinematic reels, dynamic marketing campaigns, and visual systems.",
};

export default function WorkAllLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
