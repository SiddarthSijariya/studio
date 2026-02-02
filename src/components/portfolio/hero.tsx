
"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, FileDown } from "lucide-react";
import { FadeIn } from "./motion-wrapper";
import { TiltCard } from "./tilt-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const resumeLink = "https://drive.google.com/file/d/1__XzXGqDBccjsFPDe-VCzURTY9FZoKaD/view?usp=drivesdk";
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-image');

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background pt-32 pb-20">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-secondary/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "-5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[150px] animate-float" style={{ animationDelay: "-10s" }} />
      </div>

      <motion.div 
        style={{ y: y1, opacity }}
        className="container relative z-10 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl"
      >
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          <FadeIn delay={0.2}>
            <span className="inline-block px-4 py-1.5 mb-8 text-xs font-medium tracking-[0.2em] uppercase text-primary border border-primary/20 rounded-full glass">
              Available for Opportunities
            </span>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline mb-6 tracking-tight text-foreground leading-[0.9]">
              Siddarth <br />
              <span className="text-primary italic">Sijariya</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-lg md:text-2xl font-body text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              AI & Machine Learning Engineer <span className="mx-2 text-primary/40">|</span> Data & Intelligence Systems
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <p className="text-base md:text-lg italic font-headline text-foreground/80 mb-12 max-w-xl">
              “I design intelligent systems and data-driven solutions that transform complexity into clarity.”
            </p>
          </FadeIn>

          <FadeIn delay={1.0} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <TiltCard>
              <Button asChild size="lg" className="h-16 px-10 text-base rounded-none border-b-2 border-primary bg-primary/10 hover:bg-primary/20 text-foreground group transition-all">
                <a href="#projects">
                  View Projects
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </TiltCard>
            
            <TiltCard>
              <Button asChild size="lg" variant="outline" className="h-16 px-10 text-base rounded-none bg-primary text-primary-foreground border-white/10 hover:bg-primary/90 shadow-lg shadow-primary/20 group transition-all">
                <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                  Download Resume
                  <FileDown className="ml-2 h-4 w-4 animate-bounce" />
                </a>
              </Button>
            </TiltCard>
          </FadeIn>
        </div>

        {/* Floating Profile Image */}
        <FadeIn delay={0.5} className="flex-1 relative max-w-md w-full">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, 0, -2, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative z-10"
          >
            <TiltCard>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl shadow-primary/20 group">
                <Image 
                  src={profileImage?.imageUrl || ""}
                  alt="Siddarth Sijariya"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  data-ai-hint={profileImage?.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass px-4 py-2 rounded-xl border border-white/10 inline-block">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">AI & ML Lead</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
          
          {/* Decorative background circle */}
          <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-3xl -z-10 animate-pulse" />
        </FadeIn>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground/40"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] mb-4">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
};
