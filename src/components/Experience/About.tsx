import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { BRAND } from '../../constants';
import { Shield, Zap, Code2, Cpu, Fingerprint, Target, Globe, Terminal } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const traits = [
  { icon: Shield, title: "Security Architecture", desc: "Designing zero-trust systems and enterprise-grade protection for sensitive data and user privacy." },
  { icon: Zap, title: "Growth Engineering", desc: "Building scalable infrastructures that handle exponential user growth without performance degradation." },
  { icon: Code2, title: "Performance Systems", desc: "Optimizing applications for speed, reliability, and seamless operation at scale." },
  { icon: Cpu, title: "Technical Foundation", desc: "Architecting robust systems with clean code, maintainable structure, and long-term sustainability." },
];

const stats = [
  { label: "Experience", focus: "6+ Years" },
  { label: "Goal", focus: "Cloud Architect" },
  { label: "Base", focus: "Nigeria (NG)" },
  { label: "Status", focus: "Global Ready" },
];

export default function About() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });

      gsap.from(".bio-stat", {
        scrollTrigger: {
          trigger: ".bio-stats-container",
          start: "top 90%",
        },
        x: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-40 px-6 md:px-12 relative overflow-hidden bg-black">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-40 relative">
        
        {/* Identity Head & Bio Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div ref={textRef} className="lg:col-span-8 space-y-12">
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.5em] text-brand-orange font-bold">Identity</span>
              <div className="h-px w-20 bg-brand-orange/20" />
            </div>
            
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
              WE BUILD FOR <br />
              <span className="text-zinc-800 italic font-display">THE FUTURE.</span>
            </h2>
            
            <p className="text-2xl md:text-5xl text-zinc-400 font-light leading-tight tracking-tight max-w-4xl">
              I help businesses and organizations build <span className="text-white">scalable websites, applications, and digital platforms</span> designed for growth, performance, and long-term impact.
            </p>
          </div>

          {/* System Bio Card */}
          <div className="lg:col-span-4 bio-stats-container">
            <div className="p-8 rounded-[40px] bg-white/[0.05] border border-white/10 backdrop-blur-sm space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Fingerprint className="text-brand-orange" size={20} />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">System Bio</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span className="text-[8px] font-mono uppercase text-brand-orange">Active</span>
                </div>
              </div>

              <div className="space-y-6">
                {stats.map((stat, i) => (
                  <div key={i} className="bio-stat flex items-center justify-between group">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold group-hover:text-zinc-300 transition-colors">{stat.label}</span>
                    <span className="text-sm text-white font-light group-hover:text-brand-orange transition-colors">{stat.focus}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5 space-y-4">
                <div className="flex items-center gap-2 text-zinc-600">
                  <Terminal size={12} />
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em]">Runtime Status: Operational</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "94%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="h-full bg-brand-orange shadow-[0_0_10px_rgba(235,94,40,0.5)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Marquee (Fills the space between) */}
        <div className="relative py-12 border-y border-white/5">
          <div className="flex overflow-hidden whitespace-nowrap">
            <motion.div 
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-20 items-center pr-20"
            >
              {[1, 2].map((group) => (
                <React.Fragment key={group}>
                  <div className="flex items-center gap-8">
                    <Target className="text-brand-orange" size={16} />
                    <span className="text-xl md:text-2xl font-bold tracking-tighter text-zinc-700 uppercase">Mission Driven</span>
                  </div>
                  <div className="flex items-center gap-8">
                    <Globe className="text-zinc-700" size={16} />
                    <span className="text-xl md:text-2xl font-bold tracking-tighter text-zinc-700 uppercase">Scale Native</span>
                  </div>
                  <div className="flex items-center gap-8">
                    <Zap className="text-brand-orange" size={16} />
                    <span className="text-xl md:text-2xl font-bold tracking-tighter text-zinc-700 uppercase">Architecture/Engineering</span>
                  </div>
                  <div className="flex items-center gap-8">
                    <Code2 className="text-zinc-700" size={16} />
                    <span className="text-xl md:text-2xl font-bold tracking-tighter text-zinc-700 uppercase">Uncompromising Quality</span>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="traits-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {traits.map((trait, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="trait-card p-10 rounded-[40px] bg-white/[0.04] border border-white/5 hover:bg-white/[0.08] transition-all duration-700 space-y-6 group"
            >
              <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-brand-orange group-hover:text-black transition-all duration-500">
                <trait.icon className="w-8 h-8" />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold tracking-tight text-white group-hover:text-brand-orange transition-colors">{trait.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed font-light">{trait.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
