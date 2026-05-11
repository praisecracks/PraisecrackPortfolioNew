import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../../constants';
import { Github, ArrowUpRight, Monitor, Smartphone, LayoutGrid } from 'lucide-react';
import { cn } from '../../lib/utils';
import ArchitectureModal from './ArchitectureModal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filteredProjects = PROJECTS.filter(project => 
    filter === 'All' || project.platform === filter
  );

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card');
      cards.forEach((card: any) => {
        const image = card.querySelector('.project-image');
        if (image) {
          gsap.to(image, {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
        }
      });
    }, containerRef);
    
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [filter]);

  const filters = [
    { id: 'All', icon: LayoutGrid, label: 'All Projects' },
    { id: 'Web', icon: Monitor, label: 'Web Systems' },
    { id: 'Mobile', icon: Smartphone, label: 'Mobile Apps' },
  ];

  const heightClasses = [
    'h-[260px]',
    'h-[380px]',
    'h-[320px]',
    'h-[460px]',
    'h-[300px]',
    'h-[420px]',
    'h-[280px]',
    'h-[500px]',
  ];

  return (
    <section ref={containerRef} id="projects" className="py-40 px-6 md:px-12 bg-black relative">
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-8">
            <span className="text-[10px] uppercase tracking-[0.5em] text-brand-orange font-bold">Industrial Proof</span>
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.8] text-white">
              ENGINEERED<br />
              <span className="text-zinc-800 font-display italic">SUCCESS.</span>
            </h2>
          </div>
          <div className="space-y-8 flex flex-col items-end">
            <p className="max-w-md text-2xl text-zinc-500 font-light leading-relaxed text-right">
              A portfolio of high-impact digital systems engineered for the modern enterprise.
            </p>
            
            <div className="flex items-center gap-2 p-2 bg-white/[0.03] border border-white/5 rounded-full">
              {filters.map((f) => {
                const Icon = f.icon;
                const isActive = filter === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    className={cn(
                      "flex items-center gap-3 px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500",
                      isActive 
                        ? "bg-brand-orange text-white shadow-[0_0_20px_rgba(235,94,40,0.3)]" 
                        : "text-zinc-500 hover:text-white hover:bg-white/5"
                    )}
                  >
                    <Icon size={14} />
                    <span className="hidden sm:inline">{f.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pinterest-style Masonry */}
        <div className="columns-1 md:columns-2 gap-6 min-h-[600px]">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.map((project, index) => {
              const height = heightClasses[index % heightClasses.length];
              const hasError = imageErrors[project.title];

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`project-card group relative ${height} w-full rounded-[28px] overflow-hidden bg-zinc-900 border border-white/5 hover:border-brand-orange/30 transition-all duration-1000 break-inside-avoid mb-6`}
                >
                  {/* Background — image or fallback */}
                  <div className="absolute inset-0 z-0">
                    {!hasError ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-1000 ease-out will-change-transform"
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setImageErrors(prev => ({ ...prev, [project.title]: true }))
                        }
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950">
                        <span className="text-5xl font-black text-zinc-700 tracking-tighter uppercase select-none">
                          {project.title.slice(0, 2)}
                        </span>
                        <span className="text-[10px] text-zinc-600 uppercase tracking-widest mt-2 font-mono">No Preview</span>
                      </div>
                    )}

                    {/* Darker overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 z-20 p-6 md:p-8 flex flex-col justify-end">
                    <div className="space-y-4 translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono text-white/70 uppercase tracking-widest font-bold bg-black/40 px-3 py-1 rounded-full backdrop-blur-md border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                        {(project as any).architecture && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedProject(project);
                            }}
                            className="text-[10px] font-mono text-brand-orange uppercase tracking-widest font-bold bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20 flex items-center gap-1.5 hover:bg-brand-orange hover:text-black transition-all duration-300"
                          >
                            <div className="w-1 h-1 bg-brand-orange rounded-full animate-pulse" />
                            View Architecture
                          </button>
                        )}
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-white uppercase group-hover:text-brand-orange transition-colors duration-500">
                          {project.title}
                        </h3>
                        <p className="text-sm text-zinc-300 font-light leading-relaxed max-w-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 italic">
                          {project.description}
                        </p>
                      </div>

<div className="flex items-center gap-4 pt-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-200">
                         {project.github && (
                           <a
                             href={project.github}
                             target="_blank"
                             rel="noreferrer"
                             className="w-10 h-10 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-brand-orange hover:text-black transition-all duration-500"
                           >
                             <Github size={16} />
                           </a>
                         )}
                         <a
                           href={project.link}
                           target="_blank"
                           rel="noreferrer"
                           className="flex items-center gap-2 group/btn"
                         >
                           <span className="text-xs font-bold uppercase tracking-widest text-white transition-colors group-hover/btn:text-brand-orange">
                             System URL
                           </span>
                           <ArrowUpRight className="text-brand-orange" size={16} />
                         </a>
                       </div>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="absolute top-5 right-5 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse shadow-[0_0_10px_rgba(235,94,40,0.8)]" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white">Live System</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <ArchitectureModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}