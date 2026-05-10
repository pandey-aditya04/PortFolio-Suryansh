"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart, Instagram, Linkedin, Twitter, Youtube, Mail, LucideIcon } from "lucide-react";
import { RandomLetterSwapPingPong } from "@/components/ui/random-letter-swap";

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
    <footer id="footer" className="border-t border-white/5 bg-[#0c0c0c]">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#hero" className="text-2xl font-serif text-white">
              Suryansh Srivastava
            </a>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              AI Visual Creator & Motion Artist crafting premium digital experiences through visual storytelling.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-muted-foreground">
              <RandomLetterSwapPingPong label="Quick Links" />
            </h4>
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
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 text-muted-foreground">
              <RandomLetterSwapPingPong label="Connect" />
            </h4>
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
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Suryansh Srivastava. All rights reserved.
          </p>

          <motion.button onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors hover:text-white hover:border-white/20"
            whileHover={{ y: -3, scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="Scroll to top">
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
