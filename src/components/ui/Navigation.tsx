"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/constants";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Blur background after scrolling past hero
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <motion.header
        id="main-navigation"
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass border-b border-border/50"
            : "bg-transparent"
        )}
      >
        <nav className="section-container flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="text-xl font-bold tracking-tight text-foreground"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="gradient-text">AP</span>
            <span className="hidden sm:inline ml-1 text-foreground">.dev</span>
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Mobile Hamburger */}
            <motion.button
              id="mobile-menu-toggle"
              className="relative z-50 flex h-10 w-10 md:hidden flex-col items-center justify-center gap-[5px]"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
            >
              <motion.span
                className="block h-[2px] w-5 bg-foreground origin-center"
                animate={
                  isMobileOpen
                    ? { rotate: 45, y: 7 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-[2px] w-5 bg-foreground"
                animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.1 }}
              />
              <motion.span
                className="block h-[2px] w-5 bg-foreground origin-center"
                animate={
                  isMobileOpen
                    ? { rotate: -45, y: -7 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <MobileMenu onClose={() => setIsMobileOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
    >
      {label}
      <span
        className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]
                   transition-all duration-300 ease-out group-hover:w-full"
      />
    </a>
  );
}
