import React, { useState } from 'react';
import {
  Sparkles,
  Search,
  PenTool,
  Code2,
  Rocket,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Layers,
  Wrench
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const stepIcons = [Search, PenTool, Code2, Rocket, RefreshCw];
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-24 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/50 text-xs font-mono text-indigo-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Product Lifecycle & Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            My Product Process.
          </h2>
          <p className="text-base text-slate-300">
            Discover. Design. Build. Deploy. Improve. — A repeatable, rigorous methodology ensuring products are user-loved, technically sound, and commercially viable.
          </p>
        </div>

        {/* 5 Step Progress Navigation Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx];
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  isActive
                    ? 'bg-indigo-600/15 border-indigo-500 shadow-lg shadow-indigo-600/10'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono font-bold ${
                      isActive ? 'text-indigo-400' : 'text-slate-500'
                    }`}
                  >
                    STEP {step.number}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? 'text-indigo-400' : 'text-slate-400'
                    }`}
                  />
                </div>
                <div className={`text-sm font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800/90 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Narrative & Key Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-indigo-600 text-white font-semibold">
                    PHASE {activeStep.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {activeStep.title}
                  </h3>
                </div>
                <div className="text-base font-medium text-indigo-300">
                  {activeStep.tagline}
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeStep.description}
              </p>

              {/* Core Actions Checklist */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Key Actions & Rigor in this Phase:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeStep.actions.map((act, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Concrete Deliverables & Tools Used */}
            <div className="lg:col-span-5 space-y-6">
              {/* Deliverables Box */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>Concrete Deliverables</span>
                </div>
                <ul className="space-y-2.5">
                  {activeStep.deliverables.map((deliv, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools Box */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-indigo-400" />
                  <span>Applied Tools & Frameworks</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeStep.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Step Navigation helpers */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3.5 py-1.5 text-xs font-medium text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  ← Previous Phase
                </button>
                <button
                  disabled={activeStepIndex === PROCESS_STEPS.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                  className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center gap-1"
                >
                  <span>Next Phase</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
