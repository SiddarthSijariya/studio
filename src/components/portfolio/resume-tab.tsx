
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { TiltCard } from "./tilt-card";

export const ResumeTab = () => {
  const resumeLink = "https://drive.google.com/file/d/1hrnurIfzgqH2lNb0lRuMvglUkSpFb_ww/view?usp=drivesdk";

  return (
    <div className="fixed bottom-10 right-10 z-[60] pointer-events-auto hidden md:block">
      <TiltCard>
        <motion.a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-7 py-5 bg-primary text-primary-foreground rounded-3xl shadow-[0_15px_40px_-10px_rgba(var(--primary),0.5)] border border-white/20 group hover:scale-105 transition-all relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: [0, -15, 0],
          }}
          transition={{
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 }
          }}
        >
          {/* Subtle internal glow/glass effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex items-center gap-3">
            <div className="p-2.5 bg-primary-foreground/10 rounded-xl">
              <FileDown className="w-6 h-6 text-primary-foreground animate-bounce" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-bold uppercase tracking-[0.2em] text-[10px] opacity-80">Download</span>
              <span className="text-sm font-bold tracking-widest">RESUME</span>
            </div>
          </div>

          {/* Hover highlight flare */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
          />
        </motion.a>
      </TiltCard>
    </div>
  );
};
