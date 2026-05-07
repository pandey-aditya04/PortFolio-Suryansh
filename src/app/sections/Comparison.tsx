"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export const Comparison = () => {
  const comparisons = [
    {
      pros: {
        title: "Skilled Professional",
        description: "Gain access to top-tier talent with years of experience, ensuring flawless AI and motion execution."
      },
      cons: {
        title: "Amateur Designer",
        description: "Lack of experience may result in visual inconsistencies and overlooked cinematic details."
      }
    },
    {
      pros: {
        title: "AI-Driven Innovation",
        description: "Leveraging cutting-edge AI tools to create hyper-realistic visuals that push the boundaries of creativity."
      },
      cons: {
        title: "Traditional Limitations",
        description: "Relying on outdated methods that can't match the speed and high-fidelity of AI synthesis."
      }
    },
    {
      pros: {
        title: "Future-Ready Designs",
        description: "Crafting modern, scalable designs that grow with your business and stay ahead of global trends."
      },
      cons: {
        title: "Outdated Concepts",
        description: "Stale designs that don't reflect current trends or your evolving brand narrative."
      }
    }
  ];

  return (
    <section id="comparison" className="py-32 bg-[#0c0c0c]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-6 mb-20 text-center">
          <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 flex items-center gap-2">
            <span className="text-[10px] text-white">⊙</span>
            <span className="text-xs font-medium uppercase tracking-widest text-white/80">Why choose me</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-white">
            Why me as <span className="text-white/40 italic">Design Partner</span>
          </h2>
          <p className="text-white/40 text-lg max-w-md">
            Why Partner with Me for Design Excellence.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {comparisons.map((item, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Positive Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] relative group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white">
                  <Check className="w-4 h-4" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">{item.pros.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {item.pros.description}
                </p>
              </motion.div>

              {/* Negative Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] border border-white/5 bg-transparent opacity-60"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white/20">
                  <X className="w-4 h-4" />
                </div>
                <h3 className="text-2xl font-serif text-white/40 mb-4">{item.cons.title}</h3>
                <p className="text-white/20 text-sm leading-relaxed">
                  {item.cons.description}
                </p>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
