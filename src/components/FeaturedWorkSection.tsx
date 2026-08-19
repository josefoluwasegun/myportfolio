import React from 'react';
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Layers,
  CheckCircle2,
  Compass,
  TrendingUp,
  Award,
  Calendar,
  Lock
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface FeaturedWorkSectionProps {
  onSelectProject: (projectId: string) => void;
}

export const FeaturedWorkSection: React.FC<FeaturedWorkSectionProps> = ({ onSelectProject }) => {
  const seemigoProject = PROJECTS.find((p) => p.id === 'seemigo')!;
  const otherProjects = PROJECTS.filter((p) => p.id !== 'seemigo');

  return (
    <section id="featured-work" className="py-24 bg-[#050811] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-xs font-mono text-blue-300 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Selected Portfolio Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Work & Systems
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 max-w-md">
            Real products, AI architectures, digital growth campaigns, and brand systems created to solve substantive business challenges.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* FLAGSHIP PROJECT 01: SEEMIGO */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0a1226]/80 via-[#0d152a]/90 to-[#050811] border border-blue-500/30 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-blue-950/40 overflow-hidden">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

            {/* Top Meta Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-indigo-600 text-white shadow-sm">
                  PROJECT 01
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                  <Lock className="w-3 h-3" />
                  {seemigoProject.status}
                </span>
              </div>
              <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                <span>{seemigoProject.period}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Product Positioning & Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2 flex items-center gap-3">
                    {seemigoProject.title}
                    <span className="text-xs font-normal font-mono px-2.5 py-1 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-800/60">
                      Flagship Product
                    </span>
                  </h3>
                  <div className="text-base sm:text-lg font-medium text-indigo-300">
                    {seemigoProject.subtitle}
                  </div>
                </div>

                {/* Role Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  {seemigoProject.role.map((r) => (
                    <span
                      key={r}
                      className="text-xs font-medium px-3 py-1 rounded-md bg-slate-800/90 text-slate-200 border border-slate-700/80"
                    >
                      {r}
                    </span>
                  ))}
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {seemigoProject.summary}
                </p>

                {/* Problem vs Approach Snapshot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-xs font-mono font-semibold text-rose-400 uppercase tracking-wider mb-1.5">
                      The Problem
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {seemigoProject.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider mb-1.5">
                      The Approach
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {seemigoProject.approach}
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    id="seemigo-view-case-study-btn"
                    onClick={() => onSelectProject('seemigo')}
                    className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.02]"
                  >
                    <span>Read Full SEEMIGO Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-xs text-slate-400 font-mono">
                    Includes Architecture, UI Decisions & AI Workflow
                  </div>
                </div>
              </div>

              {/* Right Column: Architecture & Key Capabilities */}
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-5 space-y-4 shadow-inner">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                    <span className="text-xs font-mono font-semibold text-indigo-400 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      Core Architecture Flow
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400">Deterministic AI</span>
                  </div>

                  <div className="space-y-3">
                    {seemigoProject.architecture.flowSteps.map((step, idx) => (
                      <div
                        key={step.step}
                        className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded bg-indigo-950 border border-indigo-800/60 text-indigo-300 flex items-center justify-center text-xs font-mono font-bold mt-0.5">
                          {idx + 1}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">{step.step}</div>
                          <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">{step.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="pt-3 border-t border-slate-800/80">
                    <div className="text-[11px] font-mono text-slate-400 mb-2">Applied Technologies:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Zod', 'Tailwind CSS', 'Vercel'].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* OTHER FEATURED WORK (RoutePal NG, Steadfast, Flyibat) */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-500"></span>
            Additional Industry Impact & Creative Technology Projects
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((proj, idx) => (
              <div
                key={proj.id}
                className="bg-slate-900/70 rounded-2xl p-6 sm:p-7 border border-slate-800/80 hover:border-indigo-500/40 transition-all hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      PROJECT 0{idx + 2}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400 font-mono">
                      {proj.highlightMetric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                    {proj.title}
                  </h3>
                  <div className="text-xs font-medium text-indigo-400 mb-3">
                    {proj.subtitle}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.role.map((r) => (
                      <span
                        key={r}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        {r}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6 line-clamp-4">
                    {proj.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">{proj.period}</span>
                  <button
                    onClick={() => onSelectProject(proj.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
