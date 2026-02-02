"use client";

import React from "react";
import { Reveal } from "./motion-wrapper";
import { Award, Medal, Trophy, Code } from "lucide-react";

const educationData = [
  {
    year: "2025",
    degree: "B.Tech CSE (AI & ML)",
    institution: "GL Bajaj Institute of Technology & Management",
    description: "Specializing in Intelligence systems and Data Analytics."
  },
  {
    year: "2021",
    degree: "Senior Secondary",
    institution: "Sachdeva Millennium School",
    description: "Focus on Science and Mathematics."
  },
  {
    year: "2019",
    degree: "High School",
    institution: "Sachdeva Millennium School",
    description: "Foundation in engineering and technology."
  }
];

const achievements = [
  { icon: <Award className="w-5 h-5" />, title: "NCC Cadet", desc: "Discipline & Leadership training" },
  { icon: <Medal className="w-5 h-5" />, title: "House Captain", desc: "Leading school teams to victory" },
  { icon: <Trophy className="w-5 h-5" />, title: "Badminton Player", desc: "District-level competitive play" },
  { icon: <Code className="w-5 h-5" />, title: "Hackathon Participant", desc: "Building solutions under pressure" }
];

export const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-background">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <Reveal className="mb-12">
              <h2 className="text-4xl md:text-5xl font-headline mb-4">Academic <span className="text-primary italic">Foundation</span></h2>
              <p className="text-muted-foreground">The journey of learning and discovery in technology.</p>
            </Reveal>

            <div className="relative pl-8 space-y-12 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-white/10">
              {educationData.map((item, idx) => (
                <Reveal key={item.degree} delay={idx * 0.1}>
                  <div className="relative">
                    <div className="absolute -left-10 top-1.5 w-4 h-4 rounded-full bg-primary ring-8 ring-primary/5" />
                    <span className="text-sm font-medium text-primary tracking-widest uppercase mb-1 block">{item.year}</span>
                    <h3 className="text-xl font-headline text-foreground mb-2">{item.degree}</h3>
                    <p className="text-muted-foreground font-medium mb-1">{item.institution}</p>
                    <p className="text-sm text-muted-foreground/60 italic">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal className="mb-12">
              <h2 className="text-4xl md:text-5xl font-headline mb-4">Leadership & <span className="text-primary italic">Impact</span></h2>
              <p className="text-muted-foreground">Beyond the classroom — building character and competitive spirit.</p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 0.1}>
                  <div className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group">
                    <div className="mb-4 p-3 bg-primary/5 w-fit rounded-xl group-hover:bg-primary/20 transition-colors">
                      {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6 text-primary" })}
                    </div>
                    <h3 className="text-lg font-headline text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4} className="mt-12">
              <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-6">Interests</h4>
              <div className="flex flex-wrap gap-3">
                {["Artificial Intelligence", "Problem Solving", "Team Sports", "Badminton", "Travelling"].map((interest) => (
                  <span key={interest} className="px-5 py-2 glass rounded-full text-sm font-medium text-foreground hover:text-primary hover:border-primary/20 transition-all cursor-default">
                    {interest}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
