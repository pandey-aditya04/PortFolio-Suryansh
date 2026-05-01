import type { NavLink, SocialLink } from "@/types";

export const siteConfig = {
  name: "Aditya Pandey",
  title: "%s | Aditya Pandey — Creative Developer",
  defaultTitle: "Aditya Pandey — Creative Developer & Designer",
  description:
    "Creative developer and designer crafting beautiful digital experiences with modern technologies. Explore my portfolio of innovative web applications, designs, and more.",
  url: "https://adityapandey.dev",
  ogImage: "/og-image.png",
  twitterHandle: "@adityapandey",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/adityapandey",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/adityapandey",
    icon: "Linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/adityapandey",
    icon: "Twitter",
  },
  {
    name: "Email",
    url: "mailto:hello@adityapandey.dev",
    icon: "Mail",
  },
];

export const categories = [
  "All",
  "Web App",
  "Mobile App",
  "UI/UX Design",
  "SaaS",
] as const;
