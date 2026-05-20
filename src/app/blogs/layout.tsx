import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Insights & Brand Strategies | ORIGA Media Blog",
    description: "Explore industry-leading insights, cinematic production breakdowns, and performance marketing strategies from the creative experts at ORIGA Media.",
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
