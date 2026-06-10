export type ProjectType = "video" | "image";

export interface Project {
    id: number;
    title: string;
    subtitle: string;
    category: "Video Production" | "Visual Designs" | "Brand Identity" | "Photography" | "Social Media";
    image: string;
    logo?: string;
    stat: string;
    statDesc: string;
    type: ProjectType;
    videoUrl?: string;
    images?: string[];
}

export const projects: Project[] = [
    {
        id: 24,
        title: "Trion",
        subtitle: "Global Logistics Branding",
        category: "Brand Identity",
        image: "/branding/1.jpeg",
        logo: "/partners/Trion-Logo.png",
        stat: "Active",
        statDesc: "Partner",
        type: "image",
        images: ["/branding/1.jpeg", "/branding/2.jpeg", "/branding/3.jpeg", "/branding/4.jpeg", "/branding/5.jpeg"]
    },
     {
        id: 25,
        title: "Valluvanad Matrimonial",
        subtitle: "Matrimonial Branding",
        category: "Brand Identity",
        image: "/partners/vallu.jpeg",
        logo: "/partners/vallu.png",
        stat: "Active",
        statDesc: "Partner",
        type: "image",
        images: ["/branding/6.jpeg", "/branding/7.jpeg"]
    },
     {
        id: 26,
        title: "Outfynd Clothing",
        subtitle: "Cloth Branding",
        category: "Brand Identity",
        image: "/partners/.jpeg",
        logo: "/partners/outfind.png",
        stat: "Active",
        statDesc: "Partner",
        type: "image",
        images: ["/branding/8.jpeg", "/branding/9.jpeg"]
    },
    {
        id: 1,
        title: "Midas Gold Point",
        subtitle: "Premium Social Posters",
        category: "Social Media",
        image: "/works/midas/1.jpeg",
        logo: "/partners/midas.png",
        stat: "100K+",
        statDesc: "Impressions",
        type: "image",
        images: ["/works/midas/1.jpeg", "/works/midas/2.jpeg", "/works/midas/3.jpeg", "/works/midas/4.jpeg", "/works/midas/5.jpeg"]
    },
    {
        id: 5,
        title: "Dezert Makeovers",
        subtitle: "Visual Identity",
        category: "Social Media",
        image: "/works/dezert/1.jpeg",
        logo: "/partners/dezert.png",
        stat: "New",
        statDesc: "Brand",
        type: "image",
        images: ["/works/dezert/1.jpeg", "/works/dezert/2.jpeg", "/works/dezert/3.jpeg"]
    },
    {
        id: 7,
        title: "Mindra Media",
        subtitle: "Social Growth",
        category: "Social Media",
        image: "/works/mindra/1.jpeg",
        logo: "/partners/mindra.png",
        stat: "5x",
        statDesc: "Engagement",
        type: "image",
        images: ["/works/mindra/1.jpeg", "/works/mindra/2.jpeg", "/works/mindra/3.jpeg", "/works/mindra/4.jpeg", "/works/mindra/6.jpeg"]
    },
    {
        id: 9,
        title: "Najma Travels",
        subtitle: "Digital Posters",
        category: "Social Media",
        image: "/works/najma/1.jpeg",
        logo: "/partners/najma.png",
        stat: "15k+",
        statDesc: "Saves",
        type: "image",
        images: ["/works/najma/1.jpeg", "/works/najma/2.jpeg", "/works/najma/3.jpeg", "/works/najma/4.jpeg"]
    },
     {
        id: 3,
        title: "Pips Theory",
        subtitle: "Engaging Visual Content",
        category: "Social Media",
        image: "/works/pips/1.jpeg",
        logo: "/partners/pips-white.png",
        stat: "250K+",
        statDesc: "Reach",
        type: "image",
        images: ["/works/pips/1.jpeg", "/works/pips/2.jpeg", "/works/pips/3.jpeg", "/works/pips/4.jpeg", "/works/pips/5.jpeg", "/works/pips/6.jpeg"]
    },
    {
        id: 11,
        title: "Kinathiyil Gold & Diamonds",
        subtitle: "Corporate Branding",
        category: "Social Media",
        image: "/works/kinathiyil/1.jpeg",
        logo: "/partners/kinath.png",
        stat: "Premium",
        statDesc: "Quality",
        type: "image",
        images: ["/works/kinathiyil/1.jpeg", "/works/kinathiyil/2.jpeg", "/works/kinathiyil/3.jpeg", "/works/kinathiyil/4.jpeg", "/works/kinathiyil/5.jpeg"]
    },
    {
        id: 14,
        title: "Hilife Matters",
        subtitle: "Lifestyle Branding",
        category: "Social Media",
        image: "/works/hilife/5.jpeg",
        logo: "/partners/Hilife.png",
        stat: "Premium",
        statDesc: "Visuals",
        type: "image",
        images: ["/works/hilife/1.jpeg", "/works/hilife/2.jpeg", "/works/hilife/3.jpeg", "/works/hilife/4.jpeg", "/works/hilife/5.jpeg"]
    },
    {
        id: 15,
        title: "Malhar Gold & Diamonds",
        subtitle: "Visual Storytelling",
        category: "Social Media",
        image: "/works/malhar/1.jpeg",
        logo: "/partners/malhar.png",
        stat: "New",
        statDesc: "Campaign",
        type: "image",
        images: ["/works/malhar/1.jpeg", "/works/malhar/2.jpeg", "/works/malhar/3.jpeg", "/works/malhar/4.jpeg", "/works/malhar/5.jpeg"]
    },
    {
        id: 16,
        title: "",
        subtitle: "",
        category: "Video Production",
        image: "/video/1.png",
        stat: "New",
        statDesc: "Project",
        type: "video",
        videoUrl: "https://www.instagram.com/reel/DXEcXbOD-i3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
        id: 17,
        title: "",
        subtitle: "",
        category: "Video Production",
        image: "/video/2.png",
        stat: "New",
        statDesc: "Project",
        type: "video",
        videoUrl: "https://www.instagram.com/reel/DWOb1A1gNtc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
        id: 18,
        title: "",
        subtitle: "",
        category: "Video Production",
        image: "/video/3.png",
        stat: "New",
        statDesc: "Project",
        type: "video",
        videoUrl: "https://www.instagram.com/reel/DVyCn80DxOw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
        id: 19,
        title: "",
        subtitle: "",
        category: "Video Production",
        image: "/video/4.png",
        stat: "New",
        statDesc: "Project",
        type: "video",
        videoUrl: "https://www.instagram.com/reel/DUzyNrwj94l/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
        id: 20,
        title: "",
        subtitle: "",
        category: "Video Production",
        image: "/video/5.png",
        stat: "New",
        statDesc: "Project",
        type: "video",
        videoUrl: "https://www.instagram.com/reel/DUpxIjYD7t_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
        id: 21,
        title: "",
        subtitle: "",
        category: "Video Production",
        image: "/video/6.png",
        stat: "New",
        statDesc: "Project",
        type: "video",
        videoUrl: "https://www.instagram.com/reel/DUC716Kjxu7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
        id: 22,
        title: "",
        subtitle: "",
        category: "Video Production",
        image: "/video/7.png",
        stat: "New",
        statDesc: "Project",
        type: "video",
        videoUrl: "https://www.instagram.com/reel/DTu4zNRD6pE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
        id: 23,
        title: "",
        subtitle: "",
        category: "Video Production",
        image: "/video/8.png",
        stat: "New",
        statDesc: "Project",
        type: "video",
        videoUrl: "https://www.instagram.com/reel/DSpoOnIj7M9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    }
];
