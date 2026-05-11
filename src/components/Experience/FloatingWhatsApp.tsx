import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User, Sparkles } from 'lucide-react';
import { SOCIALS } from '../../constants';
import { cn } from '../../lib/utils';

const QUICK_REPLIES = [
  "Are you available for new projects?",
  "I'd like to discuss a system architecture.",
  "What are your typical project timelines?",
  "Just saying hello from the portfolio!"
];

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  // Show a "Looking for help?" notification after some time
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowNotification(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleSend = (text: string) => {
    const finalMsg = text || message;
    if (!finalMsg.trim()) return;

    const encodedMessage = encodeURIComponent(finalMsg);
    const baseUrl = SOCIALS.whatsapp || "https://wa.me/2347069991171";
    // wa.me/{phone}?text={message} is the correct format
    window.open(`${baseUrl}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-[320px] md:w-[380px] bg-zinc-950 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl backdrop-blur-xl"
          >
            {/* Chat Header */}
            <div className="bg-white/[0.03] p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg font-display">
                    P
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-zinc-950 rounded-full" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-none">System Concierge</h4>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Operational / Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full text-zinc-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-6 space-y-6 max-h-[400px] overflow-y-auto">
              <div className="flex flex-col gap-4">
                <div className="bg-white/5 rounded-2xl rounded-tl-none p-4 max-w-[85%]">
                  <p className="text-sm text-zinc-300 leading-relaxed font-light">
                    Hello! I'm Praise's system assistant. How can I help optimize your next project?
                  </p>
                </div>
                
                <div className="space-y-2">
                  <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold ml-1">Quick Select</span>
                  <div className="flex flex-wrap gap-2">
                    {QUICK_REPLIES.map((reply, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(reply)}
                        className="text-[11px] text-zinc-400 bg-white/[0.02] border border-white/5 px-4 py-2 rounded-full hover:bg-brand-orange hover:text-black hover:border-brand-orange transition-all duration-300 text-left"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-6 pt-0">
              <div className="relative flex items-center">
                <input 
                  type="text"
                  placeholder="Type a custom message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend(message)}
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-14 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-orange transition-all"
                />
                <button 
                  onClick={() => handleSend(message)}
                  disabled={!message.trim()}
                  className="absolute right-2 p-2 rounded-full bg-brand-orange text-black font-bold disabled:opacity-50 disabled:grayscale transition-all"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[9px] text-zinc-600 text-center mt-4 uppercase tracking-[0.2em]">
                Direct hand-off to WhatsApp
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        <AnimatePresence>
          {showNotification && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              className="absolute right-full mr-4 bottom-2 bg-brand-orange text-black text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full whitespace-nowrap shadow-xl flex items-center gap-2"
            >
              <Sparkles size={12} />
              Need help?
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowNotification(false);
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1, rotate: isOpen ? -90 : 10 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 2 }}
          className={cn(
            "w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500",
            isOpen ? "bg-zinc-800 text-white" : "bg-brand-orange text-black shadow-[0_0_30px_rgba(235,94,40,0.4)]"
          )}
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </motion.button>
      </div>
    </div>
  );
}
