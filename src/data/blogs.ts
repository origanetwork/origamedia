export interface BlogSection {
    type: 'text' | 'image' | 'quote' | 'heading';
    content: string;
    image?: string;
    caption?: string;
}

export interface Blog {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    sections: BlogSection[];
    date: string;
    author: string;
    category: string;
    image: string;
    readTime: string;
}


interface myBlogs {
    id: string;
    title: string;
    slug: string;
    
}

export const blogs: Blog[] = [
    {
        id: "1",
        title: "The Future of Digital Storytelling in 2026",
        slug: "future-of-digital-storytelling",
        excerpt: "Discover how AI and immersive technologies are reshaping how brands connect with their audiences.",
        sections: [
            {
                type: 'text',
                content: "Digital storytelling has evolved far beyond simple video clips and static images. As we move into 2026, the intersection of AI, augmented reality, and high-fidelity cinematography is creating a new era of brand engagement. The medium is no longer just a window to look through, but a world to step into."
            },
            {
                type: 'heading',
                content: "The Rise of Interactive Narratives"
            },
            {
                type: 'text',
                content: "Today's consumers don't just want to watch a brand story; they want to be part of it. We're seeing a massive shift towards interactive video content where viewers can influence the outcome of the narrative. This level of agency transforms a passive viewer into an active participant, deepening the emotional imprint of the brand."
            },
            {
                type: 'image',
                content: "",
                image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070",
                caption: "Immersive tech is the new frontier."
            },
            {
                type: 'quote',
                content: "The most powerful stories are the ones where the audience feels they have a stake in the journey, creating a memory rather than just an impression."
            },
            {
                type: 'heading',
                content: "AI as a Creative Partner"
            },
            {
                type: 'text',
                content: "AI isn't replacing creators; it's empowering them. At Origa Media, we use AI to analyze audience sentiment and tailor visual aesthetics that resonate on a deeper emotional level, while maintaining the human soul that makes a story authentic."
            }
        ],
        date: "May 10, 2026",
        author: "Sarah J.",
        category: "Creative Strategy",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2070",
        readTime: "5 min read"
    },
    {
        id: "2",
        title: "Mastering Cinematic Lighting for Small Budgets",
        slug: "mastering-cinematic-lighting",
        excerpt: "Learn the secrets to achieving high-end film looks without expensive studio equipment.",
        sections: [
            {
                type: 'text',
                content: "You don't need a million-dollar lighting rig to create cinematic visuals. With the right techniques and a deep understanding of light behavior, you can achieve stunning results with minimal gear."
            },
            {
                type: 'heading',
                content: "The Power of Practical Lights"
            },
            {
                type: 'text',
                content: "Practical lights—bulbs that are actually visible in the scene—can do a lot of the heavy lifting. By carefully placing lamps and choosing the right color temperature, you can create depth and mood naturally."
            }
        ],
        date: "May 08, 2026",
        author: "Imran Khan",
        category: "Video Production",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=2070",
        readTime: "8 min read"
    },
    {
        id: "3",
        title: "Building a Brand Identity that Lasts Decades",
        slug: "building-brand-identity",
        excerpt: "Why minimalist design often trumps complex branding in the long run.",
        sections: [
            {
                type: 'text',
                content: "In a world of fleeting trends, how do you build a brand that remains relevant for decades? The answer lies in simplicity, versatility, and emotional resonance."
            },
            {
                type: 'heading',
                content: "Less is More"
            },
            {
                type: 'text',
                content: "Minimalism isn't just an aesthetic choice; it's a strategic one. A simple logo is easier to remember and more adaptable across different mediums."
            }
        ],
        date: "May 05, 2026",
        author: "Alex Rivera",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=2070",
        readTime: "6 min read"
    }
];
