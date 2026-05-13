import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import { SOCIALS, BRAND } from '../../constants';
import { MessageSquare, Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '../../lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef(null);
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

useLayoutEffect(() => {
     const ctx = gsap.context(() => {
       const tl = gsap.timeline({
         scrollTrigger: {
           trigger: containerRef.current,
           start: "top 90%",
           once: true,
         },
       });
       tl.from(".contact-anim", {
         y: 30,
         opacity: 0,
         stagger: 0.1,
         duration: 0.8,
         ease: "power3.out",
       });
     }, containerRef);
     return () => ctx.revert();
   }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    })
    .catch((error) => {
      console.error('Email error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    });
  };

  return (
    <section ref={containerRef} className="pt-32 pb-16 px-6 md:px-12 relative overflow-hidden bg-black" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">

        {/* Left: Communication Channels */}
        <div className="space-y-12">

          <div className="contact-anim space-y-4">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-orange">Connect</h3>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.85] text-white">
              LET'S START A <br />
              CONVERSATION.
            </h2>
          </div>

<div className="space-y-6">
            {/* Email Block */}
            <a
              href={`mailto:${SOCIALS.email || "praiseoluwabumi@gmail.com"}`}
              className="contact-anim group flex items-center p-8 rounded-[32px] bg-white/[0.08] border border-white/10 hover:border-brand-orange/40 hover:bg-white/[0.12] transition-all duration-500 shadow-2xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mr-6 group-hover:bg-brand-orange transition-all">
                <Mail className="w-7 h-7 text-zinc-300 group-hover:text-black transition-colors" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Direct Email</p>
                <p className="text-xl md:text-2xl font-light text-white group-hover:text-brand-orange transition-colors">
                  {SOCIALS.email || "praiseoluwabumi@gmail.com"}
                </p>
              </div>
            </a>

            {/* Social Icons Block */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Github, link: SOCIALS.github || "https://github.com/praisecracks", label: "GitHub" },
                { icon: Linkedin, link: SOCIALS.linkedin || "https://linkedin.com", label: "LinkedIn" },
                { icon: MessageSquare, link: SOCIALS.whatsapp || "https://wa.me/2347069991171", label: "WhatsApp" }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-anim flex flex-col items-center justify-center gap-3 p-8 rounded-[32px] bg-white/[0.08] border border-white/10 hover:bg-white/[0.12] hover:border-brand-orange/40 transition-all duration-500 group"
                >
                  <item.icon className="w-7 h-7 text-zinc-300 group-hover:scale-110 group-hover:text-brand-orange transition-all" />
                  <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold group-hover:text-brand-orange transition-colors">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Message System */}
        <div className="contact-anim relative">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 p-8 md:p-12 rounded-[40px] bg-white/[0.02] border border-white/5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 font-bold ml-1">Your Name</label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="e.g. Durotoluwa Praise"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 rounded-none px-2 py-6 focus:outline-none focus:border-brand-orange transition-colors placeholder:text-zinc-700 text-2xl font-light text-white"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 font-bold ml-1">Your Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="praise@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 rounded-none px-2 py-6 focus:outline-none focus:border-brand-orange transition-colors placeholder:text-zinc-700 text-2xl font-light text-white"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 font-bold ml-1">Your Vision</label>
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Tell me about your project or vision..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-white/10 rounded-none px-2 py-6 focus:outline-none focus:border-brand-orange transition-colors resize-none placeholder:text-zinc-700 text-2xl font-light text-white"
              />
            </div>

            <button
              disabled={status === 'sending'}
              type="submit"
              className={cn(
                "w-full py-6 rounded-2xl font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center space-x-3 text-xs",
                status === 'sending'
                  ? "bg-white/20 cursor-not-allowed"
                  : "bg-white text-black hover:bg-brand-orange hover:scale-[1.01] active:scale-[0.99]"
              )}
            >
              {status === 'sending' ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex items-center space-x-3 text-green-400 bg-green-400/10 p-5 rounded-2xl border border-green-400/20 mt-4"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <p className="text-[10px] font-mono tracking-widest uppercase">
                    Message sent successfully. I'll get back to you soon.
                  </p>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex items-center space-x-3 text-red-400 bg-red-400/10 p-5 rounded-2xl border border-red-400/20 mt-4"
                >
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p className="text-[10px] font-mono tracking-widest uppercase">
                    Something went wrong. Please try again or email directly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-20 pt-16 pb-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 bg-black/40 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center md:items-start text-center md:text-left">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-orange/70 font-bold">Navigation</span>
            <div className="flex flex-col gap-2">
              <a href="#about" className="text-[11px] text-zinc-600 hover:text-white transition-colors uppercase tracking-widest">About</a>
              <a href="#experience" className="text-[11px] text-zinc-600 hover:text-white transition-colors uppercase tracking-widest">Experience</a>
              <a href="#stack" className="text-[11px] text-zinc-600 hover:text-white transition-colors uppercase tracking-widest">Stack</a>
              <a href="#projects" className="text-[11px] text-zinc-600 hover:text-white transition-colors uppercase tracking-widest">Projects</a>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-orange/70 font-bold">Social Systems</span>
            <div className="flex flex-col gap-3">
              <a href={SOCIALS.github || "https://github.com"} target="_blank" rel="noreferrer" className="text-xs text-zinc-500 hover:text-brand-orange transition-colors uppercase tracking-widest font-medium">GitHub / @praisecracks</a>
              <a href={SOCIALS.linkedin || "https://linkedin.com"} target="_blank" rel="noreferrer" className="text-xs text-zinc-500 hover:text-brand-orange transition-colors uppercase tracking-widest font-medium">LinkedIn / @praisecracks</a>
              <a href="/NewResume.pdf" className="text-xs text-zinc-500 hover:text-brand-orange transition-colors uppercase tracking-widest font-medium">Executive Resume PDF</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="text-center md:text-right">
            <h4 className="text-3xl font-bold tracking-tighter uppercase leading-none text-white/80">{BRAND.name}</h4>
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-orange/60 mt-2">Web & Mobile Specialist</p>
          </div>
          <div className="flex flex-col items-center md:items-end opacity-20 select-none">
            <span className="text-[9px] text-zinc-500 font-mono tracking-tighter uppercase">Designed & Developed by {BRAND.name}</span>
            <span className="text-[9px] text-zinc-500 font-mono tracking-tighter uppercase">© 2026 // NIGERIA // GLOBAL_READY</span>
          </div>
        </div>
      </footer>

      {/* Decorative */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] border-r border-b border-white/5 pointer-events-none rounded-full z-0 opacity-20 hidden md:block"
        style={{ right: '-100px', bottom: '-100px' }}
      />
    </section>
  );
}