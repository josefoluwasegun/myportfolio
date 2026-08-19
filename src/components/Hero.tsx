import React, { useState } from 'react';
import {
  ArrowRight,
  FileText,
  Sparkles,
  Layers,
  Cpu,
  Layout,
  Database,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Compass,
  Zap,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onSelectProject: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'seemigo' | 'architecture' | 'disciplines'>('seemigo');

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#050811]">
      {/* Background Gradients & Blue Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[400px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Brand & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/40 text-xs font-mono text-slate-300 mb-6 shadow-lg shadow-blue-950/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-blue-400 font-semibold">{PERSONAL_INFO.primaryTitle}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">Available for Opportunities</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              From Ideas to <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-sm">
                Intelligent Digital Products.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-6 font-normal">
              {PERSONAL_INFO.heroSupporting}
            </p>

            {/* Supporting Titles Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {PERSONAL_INFO.supportingTitles.map((title) => (
                <span
                  key={title}
                  className="px-3 py-1 text-xs font-medium bg-slate-900/90 text-slate-300 rounded-lg border border-slate-800/80 shadow-sm"
                >
                  {title}
                </span>
              ))}
              <span className="px-3 py-1 text-xs font-medium bg-blue-950/50 text-blue-300 rounded-lg border border-blue-800/50 flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3 h-3 text-blue-400" />
                Flagship AI: SEEMIGO
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                id="hero-view-work-btn"
                href="#featured-work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#featured-work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-download-resume-btn"
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white rounded-xl border border-slate-700/80 transition-all hover:border-blue-500/50 w-full sm:w-auto shadow-sm"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Quick Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 w-full grid grid-cols-3 gap-4">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono">0-to-1</div>
                <div className="text-xs text-slate-400 mt-0.5">AI Product Builder</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-blue-400 font-mono">Full-Stack</div>
                <div className="text-xs text-slate-400 mt-0.5">Next.js & Supabase</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">End-to-End</div>
                <div className="text-xs text-slate-400 mt-0.5">Strategy to Deploy</div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Large Portrait Photograph & Tech Card Composition */}
          <div className="lg:col-span-5 w-full flex flex-col items-center">
            <div className="relative w-full max-w-md lg:max-w-none group">
              {/* Blue Atmospheric Glow behind Portrait */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />

              {/* Main Portrait Frame Container */}
              <div className="relative rounded-3xl bg-[#0a0f1d] border border-blue-500/30 p-2 shadow-2xl shadow-black overflow-hidden backdrop-blur-2xl">
                {/* Image Container with Gradient Overlay */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src="/joseph-levi.jpg"
                    alt="Joseph Oluwasegun Levi - Creative Technologist"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-102 transition-transform duration-700"
                  />

                  {/* Gradient Overlay for Vignette & Visual Integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent opacity-85" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Floating Overlay Badge (Bottom Left) */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-slate-950/90 border border-blue-500/30 backdrop-blur-xl shadow-xl space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white tracking-tight">{PERSONAL_INFO.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-600/30 text-blue-300 border border-blue-500/40 font-medium">
                        CREATIVE TECH
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 font-mono">
                      AI Product Builder • Full Stack Engineer • Designer
                    </p>
                  </div>
                </div>

                {/* Console Terminal Tabs at Bottom of Portrait Frame */}
                <div className="mt-2 p-3 bg-slate-950/90 rounded-2xl border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span>system.active: <span className="text-emerald-400">SEEMIGO Engine</span></span>
                  </div>

                  <button
                    onClick={() => onSelectProject('seemigo')}
                    className="text-[11px] font-mono px-2.5 py-1 rounded bg-blue-950 text-blue-300 hover:bg-blue-900/60 border border-blue-800/60 transition-colors flex items-center gap-1"
                  >
                    <span>View System</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
