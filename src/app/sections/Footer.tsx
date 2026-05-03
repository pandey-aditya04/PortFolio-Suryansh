"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart, Mail } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/ui/Icons";
import { navLinks, socialLinks } from "@/lib/constants";

const socialIconMap: Record<string, any> = { Github, Linkedin, Twitter, Mail };

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
            <a href="#hero" className="text-2xl font-bold"><span className="gradient-text">SS</span>.dev</a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">Lead Full-Stack Developer crafting high-performance digital experiences with modern technologies.</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-muted-foreground">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link.label}</a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-muted-foreground">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const IconComponent = (socialIconMap[link.icon] || Mail) as any;
                return (
                  <motion.a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground hover:border-[var(--gradient-start)]/50"
                    whileHover={{ y: -3 }} aria-label={link.name}>
                    <IconComponent className="h-4 w-4" />
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
