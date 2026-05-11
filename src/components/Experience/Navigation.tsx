import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND, SOCIALS } from '../../constants';
import { Menu, X, Github, Mail, Download } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['about', 'experience', 'stack', 'projects', 'testimonials', 'contact'];
    const observers = sectionIds.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-50% 0px -50% 0px' }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  const navLinks = [
    { name: "Identity", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Capability", href: "#stack" },
    { name: "Proof", href: "#projects" },
    { name: "Trust", href: "#testimonials" },
    { name: "Direct", href: "#contact" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-[100] px-6 py-6 transition-all duration-500 ${
          isScrolled ? 'md:py-4' : 'md:py-8'
        }`}
      >
        <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
          isScrolled ? 'bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl' : 'bg-transparent'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-white text-black rounded-full flex items-center justify-center font-bold text-lg md:text-xl font-display">
              P
            </div>
            <span className="text-sm md:text-base font-bold tracking-tight text-white font-display">
              {BRAND.alias}
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.name}
                  href={link.href} 
                  className={`text-[11px] font-medium tracking-[0.2em] uppercase transition-colors ${
                    isActive ? 'text-brand-orange' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="/NewResume.pdf" 
              download
              className="hidden lg:flex items-center gap-2 px-6 py-2 rounded-full bg-white text-black text-[10px] uppercase tracking-widest font-bold hover:bg-brand-orange transition-all"
            >
              <Download size={12} />
              <span>Resume</span>
            </a>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-white bg-white/5 border border-white/10"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-black md:hidden flex flex-col p-12 justify-center"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white"
            >
              <X size={24} />
            </button>
            <div className="space-y-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="block text-4xl font-bold font-display text-white"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <div className="mt-24 space-y-6">
              <div className="h-px bg-white/10 w-full" />
              <div className="flex gap-6">
                <a href={SOCIALS.github || "https://github.com"} className="text-white/50 hover:text-white transition-colors"><Github size={24} /></a>
                <a href={`mailto:${SOCIALS.email || "praiseoluwabumi@gmail.com"}`} className="text-white/50 hover:text-white transition-colors"><Mail size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
