import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Branding & Visual Identity Portfolio | ORIGA Media",
    description: "View our portfolio of custom branding, identity systems, logo designs, and visual guidelines crafted for global industry leaders.",
};

export default function WorkBrandingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}


