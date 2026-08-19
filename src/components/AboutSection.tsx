import React from 'react';
import {
  Sparkles,
  Target,
  Cpu,
  Layers,
  Code2,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Compass,
  Palette,
  Film,
  Layout,
  Rocket
} from 'lucide-react';
import { PERSONAL_INFO, CAREER_MILESTONES } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const pillarIcons = [Target, Cpu, Layers, Code2, TrendingUp];
  const stageIcons = [Palette, Film, Layout, Sparkles, Code2, Rocket];

  return (
    <section id="about" className="py-24 bg-[#080d1a] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-xs font-mono text-blue-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Multidisciplinary Product Craft</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Who I Am & How I Build.
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {PERSONAL_INFO.aboutNarrative.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
        </div>

        {/* Career Progression Roadmap: Graphic -> Motion -> Product -> AI -> Full Stack -> Product Building */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 gap-2">
            <div>
              <div className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                Career Evolution & Skill Progression
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                From Visual Design to Full Stack AI Product Building
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              6 Progressive Eras of Mastery
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAREER_MILESTONES.map((milestone, idx) => {
              const Icon = stageIcons[idx % stageIcons.length];
              return (
                <div
                  key={milestone.stage}
                  className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 hover:border-indigo-500/50 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-600/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-105 group-hover:bg-indigo-600/25 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono font-bold text-indigo-400 block">
                          Stage {milestone.stage}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500">
                          {milestone.period}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {milestone.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {milestone.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {milestone.keySkills.map((sk) => (
                        <span
                          key={sk}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5 Core Intersecting Pillars */}
        <div className="mb-16">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            The Five Pillars of My Creative Technology Practice
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERSONAL_INFO.pillars.map((pillar, idx) => {
              const Icon = pillarIcons[idx % pillarIcons.length];
              return (
                <div
                  key={pillar.title}
                  className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800/80 hover:border-indigo-500/40 transition-all hover:shadow-xl hover:shadow-indigo-500/5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-105 group-hover:bg-indigo-600/20 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}

            {/* Why This Matters Card */}
            <div className="bg-gradient-to-br from-indigo-950/50 to-slate-900/90 rounded-2xl p-6 border border-indigo-800/40 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 mb-5">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Unified Execution Speed
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Eliminating the gap between product strategy, UI design, AI workflows, and full-stack code ensures solutions are technically sound and fast to market.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-indigo-900/50">
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <span>View Full Experience & Resume</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Creative Technology Comparison Banner */}
        <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider block mb-2">
                Hiring Perspective
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                A Multidisciplinary Advantage
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Rather than hiring multiple specialists who communicate in silos, Joseph bridges product discovery, design systems, and typed software development.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Product & Design Thinking</span>
                </div>
                <p className="text-xs text-slate-300 leading-normal">
                  Frames features around user psychology, reduces cognitive load, and designs production-ready Figma design systems.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>AI & Full Stack Engineering</span>
                </div>
                <p className="text-xs text-slate-300 leading-normal">
                  Builds typed Next.js/React frontends, configures Supabase/PostgreSQL backends, and orchestrates deterministic LLM pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
