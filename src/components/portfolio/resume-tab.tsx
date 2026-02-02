
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { TiltCard } from "./tilt-card";

export const ResumeTab = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[60] pointer-events-auto hidden md:block">
      <TiltCard>
        <motion.a
          href="#" // Replace with actual resume link
          download="Siddarth_Sijariya_Resume.pdf"
          className="flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-2xl shadow-2xl glass border border-primary/20 group hover:bg-primary/90 transition-all"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: [0, -10, 0],
          }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 }
          }}
        >
          <div className="p-2 bg-white/20 rounded-lg">
            <FileDown className="w-5 h-5 text-primary-foreground animate-bounce" />
          </div>
          <div className="flex flex-col">
            <span className="font-headline font-bold uppercase tracking-wider text-[10px]">Download</span>
            <span className="text-[12px] font-bold">RESUME</span>
          </div>
        </motion.a>
      </TiltCard>
    </div>
  );
};
