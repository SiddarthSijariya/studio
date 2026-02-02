
"use client";

import React from "react";
import { Reveal } from "./motion-wrapper";
import { TiltCard } from "./tilt-card";
import { ExternalLink, Database, Cpu, Globe, GraduationCap } from "lucide-react";

const projects = [
  {
    title: "Sales Data Dashboard",
    description: "Interactive dashboard analyzing sales performance with KPIs and automated reporting.",
    tech: ["Power BI", "SQL"],
    icon: <Database className="w-5 h-5" />,
    color: "from-blue-500/10 to-transparent"
  },
  {
    title: "AI Sentiment Analysis Tool",
    description: "Sentiment classifier using NLP with about 85% accuracy on various datasets.",
    tech: ["Python", "NLP"],
    icon: <Cpu className="w-5 h-5" />,
    color: "from-gold-500/10 to-transparent"
  },
  {
    title: "News Sharing Platform",
    description: "Structured content-sharing platform for verified users with moderation tools.",
    tech: ["Python", "Web"],
    icon: <Globe className="w-5 h-5" />,
    color: "from-teal-500/10 to-transparent"
  },
  {
    title: "EdifyLearn",
    description: "AI system generating personalized learning paths with around 3-second response time.",
    tech: ["Python", "Flask", "React"],
    icon: <GraduationCap className="w-5 h-5" />,
    color: "from-slate-500/10 to-transparent"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container px-6 md:px-12 mx-auto">
        <Reveal className="mb-16">
          <h2 className="text-4xl md:text-5xl font-headline mb-4">Strategic <span className="text-primary italic">Interventions</span></h2>
          <p className="text-muted-foreground max-w-2xl">A selection of technical implementations focusing on data clarity and intelligent automation.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <Reveal key={project.title} delay={idx * 0.1}>
              <TiltCard className="h-full">
                <div className={`relative glass h-full p-8 md:p-12 rounded-3xl border border-white/5 overflow-hidden group hover:border-primary/30 transition-all duration-500`}>
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.color} blur-3xl opacity-50 group-hover:opacity-100 transition-opacity`} />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-10">
                      <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-primary/10 transition-colors">
                        {project.icon}
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary transition-colors" />
                    </div>

                    <h3 className="text-3xl font-headline mb-4 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-white/5">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
