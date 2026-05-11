import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { BRAND, SOCIALS } from '../../constants';
import { MessageSquare, ArrowRight, MousePointer2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const bgTextRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on title
      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        y: 200,
        opacity: 0.2
      });

      // Background text parallax
      gsap.to(bgTextRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        },
        x: -200,
        rotate: -2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden bg-zinc-950">
      {/* Background Parallax Text */}
      <div ref={bgTextRef} className="bg-text opacity-[0.03]">
        {BRAND.name.split(' ')[0]} {BRAND.name.split(' ')[1]}
      </div>

      <div className="relative z-10 space-y-12 max-w-7xl mx-auto w-full pt-24">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 text-brand-orange text-xs md:text-sm font-bold tracking-[0.4em] uppercase"
          >
            <span className="w-12 h-px bg-brand-orange"></span>
            <span>Digital Architect</span>
          </motion.div>
          
          <h1 ref={titleRef} className="text-[12vw] md:text-[10vw] font-bold text-white leading-[0.8] tracking-tighter mix-blend-difference">
            SENIOR<br />
            <span className="text-zinc-600 font-display italic font-medium">ENGINEER.</span>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="flex flex-col lg:flex-row gap-12 items-start lg:items-end w-full"
        >
          <div className="max-w-2xl space-y-8">
            <p className="text-2xl md:text-4xl text-zinc-300 font-light leading-[1.1] tracking-tight">
              Building <span className="text-white font-medium border-b-2 border-brand-orange/30">scalable digital products</span> and business platforms through modern engineering, clean architecture, and purposeful design.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <a 
                href="#contact"
                className="group px-10 py-5 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs uppercase tracking-widest hover:bg-brand-orange transition-all"
              >
                Collaborate
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#experience"
                className="group px-10 py-5 rounded-full border border-white/20 text-white flex items-center justify-center font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                Inquire
              </a>
            </div>
          </div>

          <div className="lg:ml-auto flex items-center gap-6">
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 mb-1">Status</p>
              <p className="text-xs font-bold text-white tracking-widest">OPEN_FOR_IMPACT</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 mb-1">Region</p>
              <p className="text-xs font-bold text-white tracking-widest">NGR / GLOBAL</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Interactive Elements */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white">Scroll</span>
        <div className="w-px h-12 bg-white/20" />
      </motion.div>
    </section>
  );
}
