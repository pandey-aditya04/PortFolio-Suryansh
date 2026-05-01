"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import Image from "next/image";
import { projects } from "@/lib/data";
import { categories } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { cn } from "@/lib/utils";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        {/* Section header */}
        <SectionReveal>
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-mono tracking-widest uppercase text-[var(--gradient-start)]">
              Portfolio
            </p>
            <h2 className="heading-2">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A curated selection of projects that showcase my expertise in
              building modern, performant web and mobile applications.
            </p>
          </div>
        </SectionReveal>

        {/* Category filters */}
        <SectionReveal delay={0.1}>
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "relative rounded-full px-5 py-2 text-sm font-medium transition-colors",
                  activeCategory === category
                    ? "text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </div>
        </SectionReveal>

        {/* Bento grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.65, 0, 0.35, 1],
                }}
                className={cn(
                  project.span === "wide" && "md:col-span-2",
                  project.span === "tall" && "md:row-span-2",
                  project.span === "large" && "md:col-span-2 md:row-span-2"
                )}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.div
      className="group relative h-full overflow-hidden rounded-xl border border-border bg-card"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-start)]/20 to-[var(--gradient-end)]/20"
        />
        {/* Placeholder gradient since we don't have real images */}
        <div
          className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-foreground/10"
          style={{
            background: `linear-gradient(135deg, 
              color-mix(in srgb, var(--gradient-start) 10%, var(--card)), 
              color-mix(in srgb, var(--gradient-end) 10%, var(--card)))`,
          }}
        >
          {project.title.charAt(0)}
        </div>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 backdrop-blur-md transition-all duration-500"
        >
          <button className="rounded-full border border-white/30 bg-white/10 px-6 py-2 text-sm font-medium text-white backdrop-blur-xl transition-all hover:bg-white/20">
            View project
          </button>
        </motion.div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <Badge variant="gradient">Featured</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
