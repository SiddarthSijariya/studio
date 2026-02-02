
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "./motion-wrapper";
import { Sparkles, Brain, ArrowRight, Loader2, GraduationCap } from "lucide-react";
import { personalizedLearningPath } from "@/ai/flows/personalized-learning-path";

export const AILearningTool = () => {
  const [stats, setStats] = useState("");
  const [tools, setTools] = useState("Python, SQL, Power BI, Excel");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!stats) return;
    setLoading(true);
    try {
      const output = await personalizedLearningPath({
        usageStatistics: stats,
        availableTools: tools
      });
      setResult(output.learningPath);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-card/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container px-6 md:px-12 mx-auto">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold text-primary uppercase tracking-wider mb-6">
              <Sparkles className="w-3 h-3" />
              GenAI Engine Powered
            </div>
            <h2 className="text-4xl md:text-5xl font-headline mb-4">Personalized <span className="text-primary italic">Learning Path</span></h2>
            <p className="text-muted-foreground">Experience the EdifyLearn logic. Input your current progress or interests to generate a tailored curriculum.</p>
          </Reveal>

          <Reveal delay={0.2} className="glass p-8 rounded-3xl border border-white/5">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-3 uppercase tracking-widest">Your Focus / Stats</label>
                <Textarea 
                  placeholder="e.g., I have spent 20 hours on Python basics but struggle with SQL joins. I want to learn Data Analytics."
                  className="bg-background/50 border-white/5 focus:border-primary/50 min-h-[120px] rounded-xl text-foreground placeholder:text-muted-foreground/30"
                  value={stats}
                  onChange={(e) => setStats(e.target.value)}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-grow">
                  <label className="block text-sm font-medium text-muted-foreground mb-3 uppercase tracking-widest">Available Tools</label>
                  <input 
                    type="text"
                    value={tools}
                    onChange={(e) => setTools(e.target.value)}
                    className="w-full bg-background/50 border border-white/5 focus:border-primary/50 px-4 py-3 rounded-xl text-foreground"
                  />
                </div>
                <div className="flex items-end">
                  <Button 
                    onClick={handleGenerate}
                    disabled={loading || !stats}
                    className="w-full sm:w-auto h-12 px-8 bg-primary hover:bg-primary/80 text-primary-foreground font-semibold rounded-xl group transition-all"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : (
                      <>
                        Generate Path
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {result && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-8 pt-8 border-t border-white/10"
                >
                  <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-headline text-foreground mb-3">Your Tailored Curriculum</h4>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {result}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
