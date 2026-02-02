
"use client";

import React from "react";
import Image from "next/image";
import { Reveal, FadeIn } from "./motion-wrapper";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const About = () => {
  const visual = PlaceHolderImages.find(img => img.id === "about-visual");

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-headline mb-8 text-foreground">
                Architecting <span className="text-primary italic">Intelligence</span>
              </h2>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  B.Tech graduate in Computer Science specializing in AI & ML with hands-on experience in 
                  <span className="text-foreground font-medium"> Python, SQL, Power BI, and machine learning applications</span>. 
                  Strong analytical mindset with a focus on building intelligent solutions for real-world problems.
                </p>
                <p>
                  Leadership and discipline developed through NCC, captaincy roles, and competitive sports. 
                  Seeking impactful roles in AI, Data Analytics, or Software Development where technology 
                  meets strategy to drive meaningful outcomes.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <span className="block text-3xl font-headline text-primary mb-1">2025</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Graduation</span>
              </div>
              <div>
                <span className="block text-3xl font-headline text-primary mb-1">85%</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">NLP Accuracy</span>
              </div>
              <div>
                <span className="block text-3xl font-headline text-primary mb-1">5+</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Key Projects</span>
              </div>
              <div>
                <span className="block text-3xl font-headline text-primary mb-1">NCC</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Cadet</span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <FadeIn className="relative aspect-[4/5] glass p-4 rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors z-0" />
              {visual && (
                <Image
                  src={visual.imageUrl}
                  alt={visual.description}
                  fill
                  className="object-cover opacity-80 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
                  data-ai-hint={visual.imageHint}
                />
              )}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
