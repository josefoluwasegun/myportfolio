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
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Gradients & Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Brand & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-400 font-semibold">{PERSONAL_INFO.primaryTitle}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">Available for Opportunities</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
              From Ideas to <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200 bg-clip-text text-transparent">
                Intelligent Digital Products.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-6">
              {PERSONAL_INFO.heroSupporting}
            </p>

            {/* Supporting Titles Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {PERSONAL_INFO.supportingTitles.map((title) => (
                <span
                  key={title}
                  className="px-3 py-1 text-xs font-medium bg-slate-900/80 text-slate-300 rounded-md border border-slate-800/80"
                >
                  {title}
                </span>
              ))}
              <span className="px-3 py-1 text-xs font-medium bg-indigo-950/40 text-indigo-300 rounded-md border border-indigo-800/50 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                Featured: SEEMIGO
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
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-download-resume-btn"
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white rounded-xl border border-slate-700/80 transition-all hover:border-slate-600 w-full sm:w-auto shadow-sm"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
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
                <div className="text-xl sm:text-2xl font-bold text-indigo-400 font-mono">Full-Stack</div>
                <div className="text-xs text-slate-400 mt-0.5">Next.js & Supabase</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">End-to-End</div>
                <div className="text-xs text-slate-400 mt-0.5">Strategy to Deploy</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Product Console & Live SEEMIGO Radar */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/90 p-1 border border-slate-700/80 shadow-2xl shadow-black/60 backdrop-blur-xl">
              {/* Top Bar with Terminal Dots & Tabs */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 rounded-t-xl border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-indigo-400" />
                    product-engine.tsx
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab('seemigo')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'seemigo' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    SEEMIGO
                  </button>
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'architecture' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Pipeline
                  </button>
                </div>
              </div>

              {/* Console Body */}
              <div className="p-5 bg-[#0d131f]/95 rounded-b-xl min-h-[380px] flex flex-col justify-between">
                {activeTab === 'seemigo' && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    {/* Badge & Title */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                          <Compass className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white flex items-center gap-2">
                            SEEMIGO
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                              Active Private Dev
                            </span>
                          </div>
                          <div className="text-xs text-slate-400">AI Travel & Application Platform</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-indigo-400">v2.4-preview</span>
                    </div>

                    {/* Simulated Live System Card */}
                    <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 space-y-2.5">
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <span className="flex items-center gap-1.5 text-indigo-300 font-mono">
                          <Zap className="w-3.5 h-3.5 text-amber-400" />
                          Deterministic AI Workflow
                        </span>
                        <span className="text-emerald-400 text-[11px] font-mono flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> 100% Zod Verified
                        </span>
                      </div>

                      <div className="space-y-2 font-mono text-[11px] text-slate-400 bg-slate-950 p-3 rounded-lg border border-slate-800/80">
                        <div className="text-slate-500">// Structured output pipeline (No raw chatbot hallucination)</div>
                        <div className="text-slate-300">
                          <span className="text-purple-400">const</span> <span className="text-sky-300">TravelPayload</span> = await <span className="text-indigo-400">orchestrateTravelNode</span>(&#123;
                        </div>
                        <div className="pl-4 text-slate-300">
                          destination: <span className="text-emerald-300">"Schengen Area / FR"</span>,
                        </div>
                        <div className="pl-4 text-slate-300">
                          applicantType: <span className="text-emerald-300">"Remote Professional"</span>,
                        </div>
                        <div className="pl-4 text-slate-300">
                          strictValidation: <span className="text-amber-300">true</span>
                        </div>
                        <div className="text-slate-300">&#125;);</div>
                      </div>

                      {/* Live Output Simulation Pill */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div className="bg-slate-800/60 p-2 rounded-lg border border-slate-700/50">
                          <div className="text-[10px] text-slate-400">Visa Requirements</div>
                          <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1 mt-0.5">
                            <ShieldCheck className="w-3 h-3" /> 5 Nodes Verified
                          </div>
                        </div>
                        <div className="bg-slate-800/60 p-2 rounded-lg border border-slate-700/50">
                          <div className="text-[10px] text-slate-400">Itinerary Generator</div>
                          <div className="text-xs font-semibold text-sky-400 flex items-center gap-1 mt-0.5">
                            <Layers className="w-3 h-3" /> 14-Day Synced
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Trigger deep dive */}
                    <button
                      onClick={() => onSelectProject('seemigo')}
                      className="w-full py-2 px-3 text-xs font-medium text-indigo-300 bg-indigo-950/40 hover:bg-indigo-900/50 border border-indigo-800/50 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Explore SEEMIGO Deep Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {activeTab === 'architecture' && (
                  <div className="space-y-3 font-mono text-xs animate-in fade-in duration-300">
                    <div className="text-slate-400 text-[11px] pb-2 border-b border-slate-800 flex items-center justify-between">
                      <span>Pipeline: 0-to-1 Product Flow</span>
                      <span className="text-emerald-400">● Nominal</span>
                    </div>

                    <div className="space-y-2.5">
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start gap-2.5">
                        <div className="p-1.5 rounded bg-indigo-600/20 text-indigo-400 mt-0.5">
                          <Layout className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-white font-semibold text-xs">1. UI & State Layer</div>
                          <div className="text-slate-400 text-[11px]">Next.js / React, responsive Tailwind, optimistic state.</div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start gap-2.5">
                        <div className="p-1.5 rounded bg-sky-600/20 text-sky-400 mt-0.5">
                          <Cpu className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-white font-semibold text-xs">2. AI Workflow Engine</div>
                          <div className="text-slate-400 text-[11px]">Prompt chaining, strict schema validation, context grounding.</div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start gap-2.5">
                        <div className="p-1.5 rounded bg-emerald-600/20 text-emerald-400 mt-0.5">
                          <Database className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-white font-semibold text-xs">3. Data & Auth Layer</div>
                          <div className="text-slate-400 text-[11px]">Supabase PostgreSQL, Row Level Security, Edge caching.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer of console */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Production Ready
                  </span>
                  <span>Joseph Oluwasegun Levi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
