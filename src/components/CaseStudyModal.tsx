import React, { useState, useEffect } from 'react';
import {
  X,
  Sparkles,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Tag,
  ArrowRight,
  Database,
  Layout,
  HelpCircle,
  FileCode,
  LineChart,
  Lightbulb,
  Workflow
} from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'research' | 'architecture' | 'ui' | 'development' | 'reflection'
  >('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl bg-[#0d131f] border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/80 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-slate-950 border-b border-slate-800 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-indigo-600 text-white font-semibold">
                CASE STUDY
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {project.status}
              </span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-indigo-400" />
                {project.period}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title} — {project.subtitle}
            </h2>

            <div className="flex flex-wrap gap-2 mt-3">
              {project.role.map((r) => (
                <span
                  key={r}
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-indigo-950/60 text-indigo-300 border border-indigo-800/40"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>

          <button
            id="close-case-study-btn"
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="flex items-center gap-2 px-6 py-3 bg-slate-900/90 border-b border-slate-800 overflow-x-auto text-xs font-medium text-slate-400 no-scrollbar">
          {[
            { id: 'overview', label: '1. Problem & Strategy' },
            { id: 'research', label: '2. Research & Journeys' },
            { id: 'architecture', label: '3. Tech & Architecture' },
            { id: 'ui', label: '4. UI Decisions' },
            { id: 'development', label: '5. Development & Testing' },
            { id: 'reflection', label: '6. Reflection & Lessons' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'hover:text-white hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 text-slate-300">
          {/* TAB 1: OVERVIEW & STRATEGY */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div>
                <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-2">
                  Executive Summary
                </h3>
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-rose-400 uppercase tracking-wider mb-3">
                    <HelpCircle className="w-4 h-4" />
                    <span>The Core Problem & Friction</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                    <Lightbulb className="w-4 h-4" />
                    <span>Strategic Approach & Solution</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.approach}
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <h4 className="text-sm font-mono text-white font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  Key Responsibilities & Scope of Ownership
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product Thinking Principles */}
              {project.productThinking && (
                <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/30 to-slate-900/80 border border-indigo-800/40">
                  <h4 className="text-sm font-mono text-indigo-300 font-semibold mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    {project.productThinking.title}
                  </h4>
                  <ul className="space-y-3">
                    {project.productThinking.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <span className="w-5 h-5 rounded-full bg-indigo-900/80 text-indigo-300 flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: RESEARCH & USER JOURNEYS */}
          {activeTab === 'research' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div>
                <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-3">
                  User & Market Discovery
                </h3>
                <div className="space-y-3">
                  {project.caseStudyDetails.research.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-300 flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-sky-400 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-3">
                  Ideation & Structural Options
                </h3>
                <div className="space-y-3">
                  {project.caseStudyDetails.ideation.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-300 flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-4">
                  Mapped User Journeys & Outcomes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.caseStudyDetails.userJourneys.map((uj, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5">
                      <div className="text-xs font-mono font-semibold text-indigo-300 uppercase">
                        Persona: {uj.user}
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Core Need:</div>
                        <div className="text-xs sm:text-sm text-slate-200">{uj.need}</div>
                      </div>
                      <div className="pt-2 border-t border-slate-800">
                        <div className="text-xs text-emerald-400 font-medium">Validated Outcome:</div>
                        <div className="text-xs text-slate-300">{uj.outcome}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TECH & ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div>
                <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-2">
                  {project.architecture.title}
                </h3>
                <p className="text-sm text-slate-300 mb-6">
                  {project.architecture.description}
                </p>

                {/* Architecture Step Flow */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.architecture.flowSteps.map((step, idx) => (
                    <div key={step.step} className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0">
                        0{idx + 1}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white mb-1">{step.step}</div>
                        <div className="text-xs text-slate-400 leading-relaxed">{step.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Grid */}
              <div>
                <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-4">
                  Technology Stack Breakdown
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {project.technology.map((tech) => (
                    <div key={tech.category} className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-xs font-mono font-semibold text-white mb-2 pb-2 border-b border-slate-800">
                        {tech.category}
                      </div>
                      <ul className="space-y-1.5">
                        {tech.items.map((it) => (
                          <li key={it} className="text-xs text-slate-300 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-indigo-400" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: UI DECISIONS */}
          {activeTab === 'ui' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-2">
                  UI Decisions & Human-Centered Design Choices
                </h3>
                <p className="text-sm text-slate-400 mb-6">
                  Every interface element in this project was created with deliberate optical and psychological purpose, eliminating cognitive overhead and guiding focus.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.caseStudyDetails.uiDecisions.map((decision, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <Layout className="w-4 h-4 text-indigo-400" />
                      {decision.title}
                    </div>
                    <div className="text-xs text-slate-300 leading-relaxed">
                      <span className="font-semibold text-slate-200">Decision: </span>
                      {decision.decision}
                    </div>
                    <div className="pt-2 border-t border-slate-800 text-xs text-emerald-400">
                      <span className="font-semibold">Measured Impact: </span>
                      {decision.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: DEVELOPMENT & TESTING */}
          {activeTab === 'development' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div>
                <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-3">
                  Development Highlights & Technical Craft
                </h3>
                <div className="space-y-3">
                  {project.caseStudyDetails.developmentHighlights.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-300 flex items-start gap-3">
                      <FileCode className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-3">
                  Testing, Validation & Performance
                </h3>
                <div className="space-y-3">
                  {project.caseStudyDetails.testingAndValidation.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-300 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: REFLECTION & LESSONS */}
          {activeTab === 'reflection' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-2">
                  Reflection & Professional Lessons Learned
                </h3>
                <p className="text-sm text-slate-400 mb-6">
                  What this project taught Joseph about product development, user psychology, and scalable technology execution.
                </p>
              </div>

              <div className="space-y-4">
                {project.caseStudyDetails.reflectionAndLessons.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900/90 border border-indigo-900/30 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500 hidden sm:inline">
            Joseph Oluwasegun Levi • Creative Technologist
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
