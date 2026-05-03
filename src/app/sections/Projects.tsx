"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
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
    <section id="projects" className="section-padding bg-[#09090f]">
      <div className="section-container">
        {/* Section header */}
        <SectionReveal>
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">
                Portfolio
              </span>
            </div>
            <h2 className="heading-2 mb-4">
              Featured <span className="gradient-text">Systems</span>
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              A curated selection of platforms and products built with a focus on scale, performance, and premium aesthetics.
            </p>
          </div>
        </SectionReveal>

        {/* Category filters */}
        <SectionReveal delay={0.1}>
          <div className="mb-12 flex flex-wrap items-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "relative rounded-full px-6 py-2.5 text-xs font-mono uppercase tracking-widest transition-all",
                  activeCategory === category
                    ? "text-white"
                    : "text-muted-foreground hover:text-white"
                )}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 rounded-full bg-primary"
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
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
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.div
      className="group relative h-full overflow-hidden rounded-[2.5rem] border border-white/5 bg-surface transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_50px_rgba(124,58,237,0.1)] flex flex-col"
    >
      {/* Image Wrapper */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Hover overlay with Glassmorphism */}
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-black/40 backdrop-blur-md">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-500 shadow-2xl shadow-primary/40"
          >
            <ArrowUpRight className="h-8 w-8" />
          </a>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-6 right-6 z-10">
            <Badge variant="gradient" className="rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest shadow-xl">Featured</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">
              {project.title}
            </h3>
            {project.role && (
              <p className="text-xs font-mono text-primary-light uppercase tracking-wider">
                {project.role}
              </p>
            )}
          </div>
          <div className="flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed mb-8 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-mono text-gray-400 uppercase tracking-widest"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
