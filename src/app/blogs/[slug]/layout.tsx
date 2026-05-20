import { Metadata } from "next";
import { blogs } from "@/data/blogs";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const blog = blogs.find((b) => b.slug === slug);
    return {
        title: blog ? `${blog.title} | ORIGA Media Blog` : "Blog Article | ORIGA Media",
        description: blog ? blog.excerpt : "Read the latest insights and articles from the digital marketing and production studio ORIGA Media.",
    };
}

export default function BlogDetailLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
