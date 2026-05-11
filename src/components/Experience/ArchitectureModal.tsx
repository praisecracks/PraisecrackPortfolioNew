import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cpu, Zap, Shrink, Layers, Share2, Database, Globe } from 'lucide-react';

interface ArchitectureModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function ArchitectureModal({ project, isOpen, onClose }: ArchitectureModalProps) {
  if (!project?.architecture) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl bg-zinc-950 border border-white/10 rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Left: Diagram Section */}
            <div className="w-full md:w-1/2 p-10 bg-white/[0.02] border-r border-white/5 overflow-y-auto">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] font-mono font-bold uppercase tracking-widest">
                  <Layers size={14} />
                  System Blueprint
                </div>
                
                <h3 className="text-4xl font-bold tracking-tighter text-white">
                  {project.title} <span className="text-zinc-600">ARCH.</span>
                </h3>

                <div className="space-y-6">
                  {project.architecture.flow.map((step: string, i: number) => {
                    const [component, action] = step.split(' → ');
                    return (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                        className="relative flex items-start gap-4 group"
                      >
                        {i !== project.architecture.flow.length - 1 && (
                          <div className="absolute left-[15px] top-[40px] bottom-[-20px] w-[1px] bg-white/10 group-hover:bg-brand-orange/30 transition-colors" />
                        )}
                        
                        <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-brand-orange/50 transition-colors">
                          <span className="text-[10px] font-mono text-zinc-500 font-bold">{i + 1}</span>
                        </div>
                        
                        <div className="space-y-1">
                          <p className="text-white font-bold tracking-tight">{component}</p>
                          <p className="text-xs text-zinc-500 font-light italic leading-relaxed">{action}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Technical Details */}
            <div className="w-full md:w-1/2 p-10 overflow-y-auto bg-black">
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              >
                <X size={20} />
              </button>

              <div className="space-y-12">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-mono text-brand-orange font-bold uppercase tracking-widest">Solution Overview</h4>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    {project.architecture.overview}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-mono text-brand-orange font-bold uppercase tracking-widest">Architectural 'Why'</h4>
                  <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-4">
                    <Zap className="text-brand-orange flex-shrink-0 mt-1" size={18} />
                    <p className="text-sm text-zinc-300 font-medium leading-relaxed italic">
                      {project.architecture.why}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                     <Share2 size={16} className="text-zinc-600" />
                     <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Latency</p>
                     <p className="text-xl text-white font-bold tracking-tighter">Optimized</p>
                   </div>
                   <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                     <Database size={16} className="text-zinc-600" />
                     <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Scaling</p>
                     <p className="text-xl text-white font-bold tracking-tighter">Elastic</p>
                   </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t: string) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-mono text-zinc-500 font-bold uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
