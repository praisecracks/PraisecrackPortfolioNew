import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { TECHNOLOGIES } from '../../constants';
import { Layers, Server, Wrench, Cpu } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const icons = {
  Frontend: Layers,
  Backend: Server,
  Tools: Wrench,
};

export default function Stack() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Keep only header or global section entry if needed, but header is fine
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="stack" ref={containerRef} className="py-40 px-6 md:px-12 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="space-y-4">
          <span className="text-[10px] uppercase tracking-[0.5em] text-brand-orange font-bold">Capabilities</span>
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.8]">
            THE TECH <br />
            <span className="text-zinc-600 font-display italic">MATRIX.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {(Object.entries(TECHNOLOGIES) as [keyof typeof TECHNOLOGIES, string[]][]).map(([category, techs]) => {
            const Icon = icons[category];
            return (
              <div key={category} className="space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center text-brand-orange">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{category}</h3>
                </div>

                <div className="flex flex-wrap gap-4">
                  {techs.map((tech, i) => (
                    <motion.span 
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="expertise-tag px-6 py-3 bg-white/[0.02] border border-white/5 rounded-full text-sm font-light text-zinc-400 hover:text-white hover:border-brand-orange/30 transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

<div className="p-12 md:p-20 rounded-[60px] bg-white/[0.02] border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12 group hover:bg-white/[0.04] transition-all duration-700">
           <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-24 h-24 rounded-[32px] bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-700">
                 <Cpu size={40} />
              </div>
              <div className="space-y-2 text-center md:text-left">
                 <h4 className="text-3xl font-bold tracking-tight">AI Systems</h4>
                 <p className="text-lg text-zinc-500 font-light max-w-sm">Engineering with Gemini, RAG architectures, and agentic workflows.</p>
              </div>
           </div>

           <div className="flex gap-4">
              <div className="px-5 py-2.5 bg-brand-orange/10 border border-brand-orange/20 rounded-full text-brand-orange text-[10px] font-bold uppercase tracking-widest">
                 Agentic Systems
              </div>
              <div className="px-5 py-2.5 bg-brand-orange/10 border border-brand-orange/20 rounded-full text-brand-orange text-[10px] font-bold uppercase tracking-widest">
                 Large Language Models
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
