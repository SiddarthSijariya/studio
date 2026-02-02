
"use client";

import React from "react";
import { Reveal } from "./motion-wrapper";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="max-w-4xl">
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
      </div>
    </section>
  );
};
