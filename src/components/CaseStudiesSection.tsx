import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Filter,
  CheckCircle2,
  Calendar,
  Layers,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Award
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface CaseStudiesSectionProps {
  onSelectProject: (projectId: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AI Product', 'Digital Growth', 'Brand & Creative', 'Travel Marketing'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="case-studies" className="py-24 bg-[#0d121d] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/50 text-xs font-mono text-indigo-300 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Evidence of Thinking & Problem Solving</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              In-Depth Case Studies
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md">
            Showing how Joseph thinks, researches, makes trade-offs, architectures systems, and validates outcomes.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-800/80">
          <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1.5">
            <Filter className="w-3 h-3 text-indigo-400" />
            Filter by Domain:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/80 rounded-2xl border border-slate-800/90 hover:border-indigo-500/40 transition-all hover:shadow-xl hover:shadow-indigo-500/5 p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-800/60 font-semibold">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-indigo-400" />
                    {project.period}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <div className="text-sm font-medium text-slate-300 mb-4">
                  {project.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {project.tagline}
                </p>

                {/* Micro preview of case study stages */}
                <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800/80 space-y-2 mb-6 text-xs">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Case Study Highlights:</div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    <span className="truncate">
                      <span className="text-slate-400">Problem:</span> {project.problem.slice(0, 75)}...
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="truncate">
                      <span className="text-slate-400">Approach:</span> {project.approach.slice(0, 75)}...
                    </span>
                  </div>
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  {project.role[0]}
                </span>
                <button
                  onClick={() => onSelectProject(project.id)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors"
                >
                  <span>Explore Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
