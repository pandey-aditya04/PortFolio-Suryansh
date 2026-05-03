"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart, Instagram, Linkedin, Twitter, Youtube, Mail, LucideIcon } from "lucide-react";

type SocialLinkItem = {
  name: string;
  href: string;
  icon: LucideIcon;
};

const socialLinksData: SocialLinkItem[] = [
  { name: "Instagram", href: "https://instagram.com/suryanshs", icon: Instagram },
  { name: "LinkedIn", href: "https://linkedin.com/in/suryanshsrivastavaa", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/suryanshs", icon: Twitter },
  { name: "YouTube", href: "https://youtube.com/@suryanshs", icon: Youtube },
  { name: "Email", href: "mailto:suryanshsrivastavaa@gmail.com", icon: Mail },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#hero" className="text-2xl font-bold">
              <span className="gradient-text">SS</span>.dev
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Lead Designer & AI Video Synthesist crafting high-performance visual experiences.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-muted-foreground">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              <a href="#hero" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Home</a>
              <a href="#projects" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Projects</a>
              <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">About</a>
              <a href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Services</a>
              <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Contact</a>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-muted-foreground">Connect</h4>
            <div className="flex gap-3">
              {socialLinksData.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground hover:border-primary/50"
                    whileHover={{ y: -3 }}
                    aria-label={link.name}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Suryansh Srivastava. Made with <Heart className="inline h-3 w-3 text-red-500 fill-red-500" /> and lots of coffee.
          </p>

          <motion.button onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground hover:border-[var(--gradient-start)]/50"
            whileHover={{ y: -3, scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="Scroll to top">
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
