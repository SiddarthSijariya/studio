
"use client";

import React from "react";
import { Reveal } from "./motion-wrapper";
import { Mail, Phone, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const email = "siddarthsijariya07@gmail.com";
  const phone = "+91-7088808866";
  const linkedin = "https://www.linkedin.com/in/siddarth-sijariya-aa3319257?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bn10GbZwERTqAsaYdSQs5UQ%3D%3D";

  return (
    <section id="contact" className="py-24 md:py-48 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      {/* Background decoration */}
      <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container px-6 md:px-12 mx-auto text-center">
        <Reveal>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-headline mb-8 text-foreground tracking-tight">
            Let’s Build Something <br />
            <span className="text-primary italic">Intelligent</span> Together
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
            Open to impactful opportunities in AI, Data Analytics, and Software Development. 
            Let's discuss how data-driven systems can transform your vision into reality.
          </p>
        </Reveal>

        <Reveal delay={0.4} className="flex flex-col items-center gap-12">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <a href={`mailto:${email}`} className="group flex flex-col items-center gap-4 transition-all">
              <div className="p-6 glass rounded-full group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm uppercase tracking-[0.2em] font-medium text-muted-foreground group-hover:text-foreground transition-colors">Email</span>
              <span className="text-lg font-headline text-foreground hidden md:block">{email}</span>
            </a>

            <a href={`tel:${phone.replace(/-/g, '')}`} className="group flex flex-col items-center gap-4 transition-all">
              <div className="p-6 glass rounded-full group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm uppercase tracking-[0.2em] font-medium text-muted-foreground group-hover:text-foreground transition-colors">Phone</span>
              <span className="text-lg font-headline text-foreground hidden md:block">{phone}</span>
            </a>

            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4 transition-all">
              <div className="p-6 glass rounded-full group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                <Linkedin className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm uppercase tracking-[0.2em] font-medium text-muted-foreground group-hover:text-foreground transition-colors">LinkedIn</span>
              <span className="text-lg font-headline text-foreground hidden md:block">Connect Profile</span>
            </a>
          </div>

          <Button asChild size="lg" className="h-16 px-12 text-lg font-headline rounded-none border-b-2 border-primary bg-primary/10 hover:bg-primary/20 text-foreground group transition-all">
            <a href={`mailto:${email}`}>
              Get in Touch
              <ArrowUpRight className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </Reveal>
      </div>

      <footer className="mt-48 pt-12 border-t border-white/5 container mx-auto px-6 md:px-12 flex flex-col md:row justify-between items-center gap-8 pb-12">
        <span className="text-3xl font-headline text-primary italic">Sijariya</span>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Back to Top</a>
          <span>© 2025 SIDDARTH SIJARIYA</span>
        </div>
      </footer>
    </section>
  );
};
