import type {
  Project,
  Skill,
  Testimonial,
  Service,
  Experience,
  Stat,
} from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "GoDine Platform",
    role: "Lead Full-Stack Developer",
    description:
      "A comprehensive restaurant management SaaS featuring QR-code ordering, real-time kitchen dashboards, and subscription billing.",
    longDescription:
      "Built a robust restaurant management platform that streamlines operations through digital menus and real-time order tracking. Implemented secure payment processing with Razorpay and a multi-tenant architecture to serve diverse dining establishments.",
    image: "/images/suryansh/godine_mockup.png",
    tags: ["Next.js", "Supabase", "Flutter", "Node.js"],
    category: "SaaS",
    link: "https://godine.in",
    github: "https://github.com/suryanshsrivastavaa/godine",
    featured: true,
    span: "wide",
  },
  {
    id: "2",
    title: "AI Chatbot Builder",
    role: "Lead Full-Stack Developer",
    description:
      "A sophisticated drag-and-drop chatbot builder with NLP integration and multi-platform deployment capabilities.",
    image: "/images/suryansh/chatbot_mockup.png",
    tags: ["React", "TypeScript", "MongoDB", "Express"],
    category: "Web App",
    link: "#",
    featured: true,
    span: "normal",
  },
  {
    id: "3",
    title: "FinTrack Dashboard",
    description:
      "Personal finance tracker with AI-powered insights, budget planning, and investment portfolio visualization.",
    image: "/images/projects/project-3.webp",
    tags: ["React", "D3.js", "Python", "PostgreSQL"],
    category: "Web App",
    link: "#",
    span: "tall",
  },
  {
    id: "4",
    title: "Yaarana Cafe App",
    description:
      "Mobile-first digital menu and ordering system with AI-generated dish imagery and real-time status tracking.",
    image: "/images/projects/project-4.webp",
    tags: ["Flutter", "Supabase", "Cloudflare AI"],
    category: "Mobile App",
    link: "#",
    span: "normal",
  },
  {
    id: "5",
    title: "Luxe E-Commerce",
    description:
      "Premium fashion e-commerce platform with 3D product previews, AR try-on, and AI recommendations.",
    image: "/images/projects/project-5.webp",
    tags: ["Next.js", "Three.js", "Stripe", "Tailwind"],
    category: "Web App",
    featured: true,
    span: "wide",
  },
  {
    id: "6",
    title: "HealthPulse UI Kit",
    description:
      "Comprehensive healthcare design system with 200+ components, dark mode, and accessibility-first approach.",
    image: "/images/projects/project-6.webp",
    tags: ["Figma", "React", "Storybook", "A11y"],
    category: "UI/UX Design",
    span: "normal",
  },
];

export const skills: Skill[] = [
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 92, category: "Frontend" },
  { name: "Framer Motion", level: 85, category: "Frontend" },
  { name: "Node.js / Express", level: 88, category: "Backend" },
  { name: "PostgreSQL / Supabase", level: 85, category: "Backend" },
  { name: "MongoDB", level: 80, category: "Backend" },
  { name: "Flutter / Dart", level: 78, category: "Mobile" },
  { name: "Figma / UI Design", level: 82, category: "Tools" },
  { name: "Adobe Creative Suite", level: 85, category: "Tools" },
  { name: "Python", level: 75, category: "Backend" },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "CEO",
    company: "TechVenture Labs",
    avatar: "/images/avatars/avatar-1.webp",
    content:
      "Suryansh transformed our entire digital presence. His attention to detail and ability to translate complex requirements into beautiful, functional interfaces is remarkable. The project was delivered ahead of schedule and exceeded our expectations.",
    rating: 5,
  },
  {
    id: "2",
    name: "James Chen",
    role: "Product Manager",
    company: "InnovateCo",
    avatar: "/images/avatars/avatar-2.webp",
    content:
      "Working with Suryansh was an absolute pleasure. He brought a unique creative vision to our SaaS dashboard that significantly improved user engagement. His code quality and documentation are top-notch.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Founder",
    company: "DesignStudio Pro",
    avatar: "/images/avatars/avatar-3.webp",
    content:
      "The portfolio website Suryansh built for us was nothing short of stunning. Smooth animations, perfect responsiveness, and incredible performance. He's our go-to developer for premium web projects.",
    rating: 5,
  },
  {
    id: "4",
    name: "Michael Park",
    role: "CTO",
    company: "CloudScale Systems",
    avatar: "/images/avatars/avatar-4.webp",
    content:
      "Suryansh's full-stack expertise was invaluable for our platform rebuild. From the React frontend to the Node.js backend, every piece was crafted with precision. Highly recommended for complex projects.",
    rating: 5,
  },
];

export const services: Service[] = [
  {
    id: "1",
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks like Next.js and React. Focused on performance, accessibility, and beautiful user interfaces.",
    icon: "Globe",
    features: [
      "Single Page Applications",
      "Progressive Web Apps",
      "E-commerce Solutions",
      "API Development",
    ],
  },
  {
    id: "2",
    title: "UI/UX Design",
    description:
      "Intuitive, visually stunning designs that prioritize user experience. From wireframes to high-fidelity prototypes in Figma.",
    icon: "Palette",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Design Systems",
      "Interaction Design",
    ],
  },
  {
    id: "3",
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications using Flutter that deliver native-like performance on both iOS and Android.",
    icon: "Smartphone",
    features: [
      "Cross-Platform Apps",
      "Native Performance",
      "Push Notifications",
      "Offline Support",
    ],
  },
  {
    id: "4",
    title: "SaaS Solutions",
    description:
      "End-to-end SaaS product development including auth, billing, dashboards, and analytics — ready for scale.",
    icon: "Layers",
    features: [
      "Authentication & Auth",
      "Payment Integration",
      "Analytics Dashboards",
      "Multi-tenancy",
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Full-Stack Developer",
    company: "Freelance / Self-Employed",
    period: "2023 — Present",
    description:
      "Building premium web and mobile applications for clients worldwide. Specializing in SaaS platforms, restaurant tech, and creative portfolios.",
    technologies: ["Next.js", "React", "Flutter", "Supabase", "Node.js"],
  },
  {
    id: "2",
    role: "Frontend Developer",
    company: "Creative Agency",
    period: "2022 — 2023",
    description:
      "Led frontend development for high-profile client projects including e-commerce platforms, marketing sites, and internal tools.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "GSAP"],
  },
  {
    id: "3",
    role: "Junior Developer",
    company: "Tech Startup",
    period: "2021 — 2022",
    description:
      "Contributed to the development of a real-time analytics platform, gaining experience in full-stack development and agile workflows.",
    technologies: ["JavaScript", "Python", "PostgreSQL", "AWS"],
  },
];

export const stats: Stat[] = [
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "Happy Clients", value: 30, suffix: "+" },
  { label: "Years Experience", value: 4, suffix: "+" },
  { label: "Technologies", value: 20, suffix: "+" },
];

export const aboutText = {
  headline: "Crafting Digital Experiences That Matter",
  bio: `I'm Suryansh Srivastava, a Computer Science graduate and a creative developer 
  passionate about building beautiful, performant, and accessible web experiences. 
  With expertise spanning the full stack — from pixel-perfect frontends to robust backends — 
  I bridge the gap between aesthetics and functionality.

  My recent journey to Varanasi deeply influenced my design philosophy, teaching me the value 
  of simplicity and the profound impact of well-crafted experiences. When I'm not coding, 
  you'll find me exploring the intersection of art and technology or planning my next 
  adventure to discover more of the world's hidden gems.`,
  resumeUrl: "/resume.pdf",
};

export const faqs = [
  {
    question: "What services do you offer?",
    answer: "I specialize in web design, branding, UI/UX, and Framer development, creating modern, user-friendly experiences tailored to your needs.",
  },
  {
    question: "How did I start working with you?",
    answer: "You can reach out through the contact form or directly via email. We'll set up a quick intro call to discuss your project.",
  },
  {
    question: "What design tools do you use?",
    answer: "My primary tool stack includes Figma for UI/UX, Framer for interactive prototyping, and Adobe Creative Cloud for graphic design.",
  },
  {
    question: "How long does a project take?",
    answer: "Project timelines vary depending on scope. A simple landing page might take 1-2 weeks, while a comprehensive web app could take 4-8 weeks.",
  },
  {
    question: "Do you provide revisions?",
    answer: "Yes, I offer a standard set of revisions per project phase to ensure the final output perfectly aligns with your vision.",
  },
  {
    question: "What is your pricing structure?",
    answer: "Pricing is project-based. My Web Design packages start from $1,000, and Framer Development from $2,000.",
  },
];
