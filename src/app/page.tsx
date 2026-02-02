
"use client";

import React, { useEffect } from "react";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Education } from "@/components/portfolio/education";
import { Contact } from "@/components/portfolio/contact";
import { AILearningTool } from "@/components/portfolio/ai-tool";
import { motion, useScroll, useSpring } from "framer-motion";

export default function PortfolioPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative bg-background selection:bg-primary/30 selection:text-primary-foreground">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation Header (Minimal Glass) */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-headline text-primary pointer-events-auto"
        >
          Sijariya<span className="italic">.</span>
        </motion.div>
        
        <motion.nav 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex gap-12 glass px-8 py-3 rounded-full border border-white/5 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground/80 pointer-events-auto"
        >
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </motion.nav>
      </header>

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AILearningTool />
      <Education />
      <Contact />
    </main>
  );
}
