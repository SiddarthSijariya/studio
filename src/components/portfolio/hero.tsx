
"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowDownRight } from "lucide-react";
import { FadeIn, Reveal } from "./motion-wrapper";
import { TiltCard } from "./tilt-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const profileImg = PlaceHolderImages.find(img => img.id === "profile-image");

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
        className="container relative z-10 px-6 md:px-12 flex flex-col items-center text-center max-w-5xl"
      >
        <FadeIn delay={0.1}>
          <TiltCard className="mb-12">
            <div className="relative w-56 h-72 md:w-64 md:h-80 p-1.5 rounded-2xl glass border border-primary/20 overflow-hidden group shadow-2xl shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-pulse group-hover:opacity-100 transition-opacity" />
              <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-background/20">
                {profileImg && (
                  <Image
                    src={profileImg.imageUrl}
                    alt={profileImg.description}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={profileImg.imageHint}
                    priority
                  />
                )}
              </div>
              <div className="absolute inset-0 border-2 border-primary/50 rounded-2xl scale-95 group-hover:scale-105 transition-all duration-500 pointer-events-none" />
            </div>
          </TiltCard>
        </FadeIn>

        <FadeIn delay={0.2}>
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-[0.2em] uppercase text-primary border border-primary/20 rounded-full glass">
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

        <FadeIn delay={1.0} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button asChild size="lg" className="h-14 px-8 text-base rounded-none border-b-2 border-primary bg-primary/10 hover:bg-primary/20 text-foreground group transition-all">
            <a href="#projects">
              View Projects
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base rounded-none glass border-white/10 hover:bg-white/5 transition-all">
            <a href="#contact">
              Contact Me
              <ArrowDownRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
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
