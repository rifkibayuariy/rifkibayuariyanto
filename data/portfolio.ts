export interface Education {
    id: number;
    period: string;
    institution: string;
    degree: string;
    major: string;
}

export type SkillCategory = "Frontend" | "Backend" | "Database" | "Tools";

export interface Skill {
    name: string;
    icon: string;
    category: SkillCategory;
}

export interface Project {
    title: string;
    image: string;
    category: string;
    description: string;
    link: string;
    tags?: string[];
    featured?: boolean;
}

export interface Experience {
    id: number;
    period: string;
    role: string;
    company: string;
    location: string;
    yearsOfExperience: number;
    description: string;
}

export const educationData: Education[] = [
    {
        id: 1,
        period: "2023 - Present",
        institution: "Universitas Amikom Yogyakarta",
        degree: "Bachelor of Computer Science",
        major: "Informatics",
    },
    {
        id: 2,
        period: "2018 - 2022",
        institution: "SMK Negeri 2 Klaten",
        degree: "Vocational High School (4-Year Program)",
        major: "Information Systems, Networks, and Applications (SIJA)",
    },
];

export const skillsData: Skill[] = [
    // Frontend
    { name: "HTML5", icon: "/images/html5.svg", category: "Frontend" },
    { name: "CSS3", icon: "/images/css3.svg", category: "Frontend" },
    {
        name: "JavaScript",
        icon: "/images/javascript.svg",
        category: "Frontend",
    },
    {
        name: "TypeScript",
        icon: "/images/typescript.svg",
        category: "Frontend",
    },
    { name: "Next.js", icon: "/images/nextjs.svg", category: "Frontend" },
    {
        name: "Tailwind CSS",
        icon: "/images/tailwind.svg",
        category: "Frontend",
    },
    { name: "Bootstrap", icon: "/images/bootstrap.svg", category: "Frontend" },
    { name: "jQuery", icon: "/images/jquery.svg", category: "Frontend" },

    // Backend
    { name: "PHP", icon: "/images/php.svg", category: "Backend" },
    {
        name: "CodeIgniter",
        icon: "/images/codeigniter.svg",
        category: "Backend",
    },

    // Database
    { name: "MySQL", icon: "/images/mysql.svg", category: "Database" },
    {
        name: "PostgreSQL",
        icon: "/images/postgresql.svg",
        category: "Database",
    },
    { name: "Oracle", icon: "/images/oracle.svg", category: "Database" },

    // Tools
    { name: "Git", icon: "/images/git.svg", category: "Tools" },
    { name: "GitHub", icon: "/images/github.svg", category: "Tools" },
    { name: "GitLab", icon: "/images/gitlab.svg", category: "Tools" },
    { name: "Figma", icon: "/images/figma.svg", category: "Tools" },
    { name: "VS Code", icon: "/images/vscode.svg", category: "Tools" },
];

export const projectsData: Project[] = [
    {
        title: "Toko Quick",
        image: "/images/tokoquick.id.png",
        category: "E-Commerce",
        description:
            "Official nationwide online commerce platform providing verified farm equipment, hand tractors, and genuine spare parts.",
        link: "https://tokoquick.id",
        tags: ["E-Commerce", "Payment Gateway", "Logistics"],
        featured: true,
    },
    {
        title: "Quick Indonesia",
        image: "/images/quick.co.id.png",
        category: "Company Profile",
        description:
            "Corporate web portal for CV. Karya Hidup Sentosa, Indonesia's premier manufacturer and distributor of agricultural tractors.",
        link: "https://quick.co.id",
        tags: ["Corporate", "Manufacturing", "Agriculture"],
    },
    {
        title: "Ramu",
        image: "/images/ramu.jpg",
        category: "AI & Smart Dispenser",
        description:
            "Official web platform for Ramu, an automated AI-driven smart herbal beverage dispenser kiosk with live robotic brewing controls.",
        link: "https://ramu-web.vercel.app",
        tags: ["Next.js", "AI Dispenser", "Tailwind CSS"],
    },
    {
        title: "SQLi Detection",
        image: "/images/sqli-detection.jpg",
        category: "AI & Cybersecurity",
        description:
            "Intelligent AI middleware and interactive security playground designed to detect and block SQL Injection threats in real-time.",
        link: "https://sqli-website.vercel.app",
        tags: ["Security", "AI Middleware", "API Playground"],
    },
    {
        title: "IFtern",
        image: "/images/iftern.png",
        category: "Campus Internship Portal",
        description:
            "Centralized practical work and internship placement ecosystem developed for Informatics students at Universitas Amikom Yogyakarta.",
        link: "https://iftern.vercel.app",
        tags: ["Next.js", "Portal", "Amikom"],
    },
    {
        title: "Karang Taruna M3",
        image: "/images/karang-taruna.jpg",
        category: "Community Platform",
        description:
            "Community profile, event catalog, and youth organization platform for Karang Taruna Muda-Mudi Dukuh Magerjo, Klaten.",
        link: "https://techtona-karang-taruna.vercel.app/",
        tags: ["Community", "Web Profile", "Vercel"],
    },
    {
        title: "Keyboard Test",
        image: "/images/keyboardtest.png",
        category: "Developer Utility",
        description:
            "Real-time browser utility engineered to diagnose keystroke responsiveness, latency, and hardware anti-ghosting matrix behavior.",
        link: "https://github.com/rifkibayuariy",
        tags: ["JavaScript", "Diagnostics", "Browser Tool"],
    },
];

export const experienceData: Experience[] = [
    {
        id: 1,
        period: "2021 - 2023",
        role: "Full-Stack Web Developer",
        company: "CV. Karya Hidup Sentosa",
        location: "Yogyakarta, Indonesia",
        yearsOfExperience: 2,
        description:
            "Engineered and maintained corporate enterprise portals and official e-commerce web applications for agricultural machinery across Indonesia.",
    },
];
