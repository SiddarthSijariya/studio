
"use client";

import React from "react";
import { Reveal } from "./motion-wrapper";
import { TiltCard } from "./tilt-card";
import { Code2, BrainCircuit, Users, LineChart, Cpu, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Technical Expertise",
    icon: <Terminal className="w-6 h-6 text-primary" />,
    skills: ["Python", "SQL", "Power BI", "MS Excel", "PowerPoint"]
  },
  {
    title: "Machine Learning",
    icon: <BrainCircuit className="w-6 h-6 text-primary" />,
    skills: ["NLP", "Data Cleaning", "Data Visualization", "Predictive Modeling"]
  },
  {
    title: "Soft Skills",
    icon: <Users className="w-6 h-6 text-primary" />,
    skills: ["Problem-Solving", "Critical Thinking", "Team Collaboration", "Communication", "Leadership", "Adaptability"]
  }
];

export const Skills = () => {
  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="container px-6 md:px-12 mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline mb-4">Mastered <span className="text-primary italic">Capabilities</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A blend of technical prowess and strategic soft skills designed for modern engineering challenges.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <Reveal key={cat.title} delay={idx * 0.1}>
              <TiltCard>
                <div className="glass h-full p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                  <div className="mb-6 p-3 bg-primary/5 w-fit rounded-lg">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-headline mb-6 text-foreground">{cat.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/5 rounded-full text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
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
