import React, { useLayoutEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Download, Briefcase, GraduationCap, Award, Zap, Code2, Cpu } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCE } from '../../constants';

gsap.registerPlugin(ScrollTrigger);

const icons = [Briefcase, Code2, Zap, Cpu, GraduationCap];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".exp-header", {
        scrollTrigger: {
          trigger: ".exp-header",
          start: "top 90%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={containerRef} className="py-32 px-6 md:px-12 bg-white/[0.01] relative overflow-hidden">
      {/* Background Story Line - Desktop Only */}
      <div className="absolute left-[50%] top-[400px] bottom-0 w-[2px] bg-white/5 hidden md:block" />
      <motion.div 
        style={{ scaleY, originY: 0 }}
        className="absolute left-[50%] top-[400px] bottom-0 w-[2px] bg-brand-orange hidden md:block z-10 shadow-[0_0_20px_rgba(235,94,40,0.5)]"
      />

      <div className="max-w-7xl mx-auto space-y-32 relative">
        <div className="exp-header flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-6 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.5em] text-brand-orange font-bold">Chronology</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.8]">
              ENGINEERING<br />
              <span className="text-zinc-600 font-display italic">PATH.</span>
            </h2>
          </div>
          <div className="max-w-md space-y-6 mx-auto md:mx-0 text-center md:text-left">
            <p className="text-xl text-zinc-500 font-light leading-relaxed">
              A track record of high-value engineering impact for enterprise-grade platforms and innovative startups.
            </p>
            <a 
              href="/NewResume.pdf" 
              download 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all"
            >
              <Download size={14} />
              <span>Full Resume PDF</span>
            </a>
          </div>
        </div>

        <div className="space-y-32">
          {EXPERIENCE.map((exp, i) => {
            const Icon = icons[i % icons.length];
            const isEven = i % 2 === 0;

            return (
              <div key={i} className={`flex flex-col md:flex-row items-center justify-between gap-12 relative ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-12 w-6 h-6 -translate-x-1/2 hidden md:flex items-center justify-center z-20">
                   <div className="w-3 h-3 bg-zinc-900 border-2 border-brand-orange rounded-full" />
                   <motion.div 
                     initial={{ scale: 0 }}
                     whileInView={{ scale: 1 }}
                     viewport={{ once: false, amount: 0.5 }}
                     className="absolute w-6 h-6 bg-brand-orange/20 rounded-full blur-sm"
                   />
                </div>

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className={`w-full md:w-[45%] exp-card group relative p-8 md:p-12 rounded-[40px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-700`}
                >
                  <div className="space-y-6 text-left">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-brand-orange font-bold italic">{exp.period}</p>
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-brand-orange group-hover:text-black transition-colors duration-500">
                        <Icon size={20} />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-brand-orange transition-colors">{exp.role}</h3>
                      <div className="flex flex-col gap-1 text-zinc-500">
                        <span className="text-zinc-300 font-medium">{exp.company}</span>
                        <span className="text-[10px] font-mono tracking-widest uppercase opacity-60">{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-lg text-zinc-400 font-light leading-relaxed">{exp.description}</p>
                  </div>

                  <div className="absolute top-12 right-12 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <Award className="text-brand-orange" size={20} />
                  </div>
                </motion.div>

                {/* Empty segment for desktop alignment */}
                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
