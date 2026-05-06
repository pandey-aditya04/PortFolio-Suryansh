"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Twitter, Instagram, Dribbble } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineRef.current) {
      const rows = timelineRef.current.querySelectorAll(".experience-row");
      rows.forEach((row) => {
        const year = row.querySelector(".year-text");
        gsap.fromTo(
          year,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 80%",
            },
          }
        );
      });
    }
  }, []);

  const experience = [
    { role: "Lead UI/UX Designer", company: "Metaverse Lab", year: "2023 — Pres" },
    { role: "Product Designer", company: "Stellar Cloud", year: "2021 — 2023" },
    { role: "Visual Designer", company: "Neon Agency", year: "2019 — 2021" },
    { role: "Junior Designer", company: "Startup Hub", year: "2018 — 2019" },
  ];

  const skills = ["Branding", "Webflow", "React", "Three.js", "GSAP", "Figma", "After Effects"];

  return (
    <section id="about" className="py-32 bg-[#0c0c0c]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Column — Profile Card */}
          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-8 rounded-[2rem] border border-white/10 bg-[#111] flex flex-col gap-6 relative overflow-hidden"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border-2 border-white/10">
                <div className="w-full h-full bg-[#333]" /> {/* Placeholder for profile photo */}
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  <span className="text-[10px] uppercase tracking-widest text-white/40">Available for work</span>
                </div>
                <h3 className="text-3xl font-serif text-white">Johan Beker</h3>
                <p className="text-white/60">UI/UX Designer & Motion Artist based in Berlin, Germany.</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  {[Twitter, Instagram, Dribbble].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ y: -3 }}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
                <button className="px-6 py-2.5 rounded-full bg-white text-[#0c0c0c] text-sm font-bold">
                  Connect with me
                </button>
              </div>
            </motion.div>

            {/* Skill Tags */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-white/40">Expertise</span>
              <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="flex-shrink-0 px-5 py-2 rounded-full border border-white/10 text-white/80 text-sm whitespace-nowrap bg-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column — Experience Timeline */}
          <div className="flex flex-col gap-12" ref={timelineRef}>
            <div className="flex flex-col gap-4">
               <h2 className="text-5xl font-serif text-white">My Journey</h2>
               <p className="text-white/40 max-w-md">Over 6 years of experience working with global brands and startups to deliver premium digital products.</p>
            </div>

            <div className="flex flex-col border-t border-white/10">
              {experience.map((exp, i) => (
                <div 
                  key={i}
                  className="experience-row flex items-center justify-between py-8 border-b border-white/10 hover:bg-white/5 px-4 transition-all group"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-xl text-white font-medium group-hover:translate-x-2 transition-transform duration-300">{exp.role}</span>
                    <span className="text-sm text-white/40">{exp.company}</span>
                  </div>
                  <span className="year-text text-sm font-mono text-white/60">{exp.year}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
