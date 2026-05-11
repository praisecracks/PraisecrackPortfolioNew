import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Quote, Star, CheckCircle2, ShieldCheck } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Thompson",
    role: "CEO, TechFlow Systems",
    content: "I noticed Praise focuses deeply on scalability and experience. It was exactly what we needed for our series A growth phase.",
    tag: "System Design"
  },
  {
    name: "Alao Toyin",
    role: "Head of Team, Nexus Digital",
    content: "Working with a developer who understands both the frontend experience and high-performance system architecture is rare. Our performance metrics improved significantly.",
    tag: "Performance Eng"
  },
  {
    name: "Marcus Wright",
    role: "CTO, Horizon Fintech",
    content: "A brilliant system architect. His ability to build secure, modular platforms for our fintech solution was pivotal. He builds robust business foundations.",
    tag: "Architecture"
  },
  {
    name: "Mrs Hennyolaa",
    role: "HR Director, Veloce Logistics",
    content: "The custom mobile platform Praise built exceeded all requirements. His speed of delivery and the app's intuitive workflow transformed how we manage our field operations.",
    tag: "Mobile Systems"
  },
  {
    name: "David Okonkwo",
    role: "Founder, Bloom Marketplace",
    content: "His approach to our business platform was transformative. The system isn't just beautiful—it's engineered for high traffic and long-term stability.",
    tag: "Business Platforms"
  },
  {
    name: "Jordan Wu",
    role: "Lead Engineer, QuantEdge",
    content: "Praise is an exceptional team player and an intelligent engineer. He builds with a level of foresight that makes scaling complex full-stack apps feel effortless.",
    tag: "Full-Stack Dev"
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Duplicate for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-black border-y border-white/5">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} 
      />

      <motion.div 
        style={{ opacity }}
        className="relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-orange flex items-center gap-2">
              <ShieldCheck size={12} />
              Trust Systems
            </h3>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-white">
              VERIFIED <br />
              <span className="text-zinc-600">IMPACT.</span>
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-zinc-500 text-sm leading-relaxed border-l border-brand-orange/30 pl-6 uppercase tracking-wider font-light">
              Strategic partnerships aimed at translating complexity into high-impact digital systems.
            </p>
          </div>
        </div>

        {/* Marquee Container with side masks and constrained width */}
        <div className="max-w-7xl mx-auto relative px-6 md:px-12">
          {/* Fading Masks */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none hidden md:block" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none hidden md:block" />
          
          <div className="flex overflow-hidden group rounded-[40px] relative">
            <style>
              {`
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .marquee-inner {
                  display: flex;
                  gap: 2rem;
                  animation: marquee 40s linear infinite;
                  width: max-content;
                }
                .group:hover .marquee-inner {
                  animation-play-state: paused;
                }
              `}
            </style>
            <div className="marquee-inner py-4">
              {duplicatedTestimonials.map((t, i) => (
                <div
                  key={i}
                  className="w-[300px] md:w-[450px] flex-shrink-0 p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-brand-orange/30 hover:bg-zinc-900/40 transition-all duration-700 relative overflow-hidden group/card shadow-2xl"
                >
                  {/* Background Accent */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-orange/5 blur-[80px] rounded-full group-hover/card:bg-brand-orange/10 transition-all duration-700" />
                  
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="text-brand-orange/40 group-hover/card:text-brand-orange transition-colors">
                        <Quote size={32} />
                      </div>
                      
                      <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed tracking-tight italic">
                        "{t.content}"
                      </p>
                    </div>

                    <div className="pt-8 mt-8 border-t border-white/5 flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-bold text-base md:text-lg tracking-tight flex items-center gap-2">
                          {t.name}
                          <CheckCircle2 size={14} className="text-brand-orange" />
                        </h4>
                        <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-medium">{t.role}</p>
                      </div>
                      <div className="bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        <span className="text-[8px] uppercase tracking-widest text-brand-orange font-bold font-mono">
                          {t.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Metric */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-10 border-t border-white/5 flex flex-wrap gap-12 items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
           <div className="flex items-center gap-2 text-zinc-400 font-bold uppercase tracking-[0.3em] text-[10px]">
             <Star className="text-brand-orange" size={14} /> 100% SUCCESS RATE
           </div>
           <div className="flex items-center gap-2 text-zinc-400 font-bold uppercase tracking-[0.3em] text-[10px]">
             <Star className="text-brand-orange" size={14} /> 4.9/5 CLIENT RATING
           </div>
           <div className="flex items-center gap-2 text-zinc-400 font-bold uppercase tracking-[0.3em] text-[10px]">
             <Star className="text-brand-orange" size={14} /> 20+ SHIPPED PLATFORMS
           </div>
        </div>
      </motion.div>
    </section>
  );
}
