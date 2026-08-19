import React from 'react';
import {
  Film,
  Play,
  Sparkles,
  ArrowRight,
  Clock,
  Wrench,
  Lightbulb,
  Layers,
  Video,
  Tv
} from 'lucide-react';
import { MOTION_PROJECTS } from '../data/portfolioData';
import { MotionProject } from '../types';

interface MotionDesignSectionProps {
  onSelectMotion: (item: MotionProject) => void;
}

export const MotionDesignSection: React.FC<MotionDesignSectionProps> = ({ onSelectMotion }) => {
  return (
    <section id="motion-design" className="py-24 bg-[#0d121d] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/50 text-xs font-mono text-indigo-300 mb-4">
              <Film className="w-3.5 h-3.5 text-indigo-400" />
              <span>Dynamic Storytelling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Motion Design & Video Direction
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 max-w-md">
            Dynamic motion advertisements, corporate visual stingers, kinetic typography, promotional video reels, and interactive game projects.
          </p>
        </div>

        {/* Motion Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MOTION_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectMotion(project)}
              className="bg-slate-900/90 rounded-3xl border border-slate-800 hover:border-indigo-500/50 transition-all p-6 sm:p-8 flex flex-col justify-between group cursor-pointer shadow-xl overflow-hidden"
            >
              <div>
                {/* Real Video / Poster Frame Screen */}
                <div className="relative aspect-video rounded-2xl bg-black border border-slate-800 overflow-hidden mb-6 group-hover:border-slate-700 transition-colors flex items-center justify-center">
                  {project.posterUrl ? (
                    <img
                      src={project.posterUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.posterGradient} opacity-60`}
                    />
                  )}

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />

                  {/* Play Button Trigger */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-indigo-600/90 hover:bg-indigo-500 text-white flex items-center justify-center shadow-xl shadow-indigo-600/40 group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 fill-current translate-x-0.5" />
                    </div>

                    <span className="text-[11px] font-mono text-slate-200 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5 shadow-md">
                      {project.youtubeId ? (
                        <>
                          <Tv className="w-3 h-3 text-red-400" />
                          <span>Watch Video Stream</span>
                        </>
                      ) : (
                        <>
                          <Film className="w-3 h-3 text-indigo-400" />
                          <span>Motion Asset Preview</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Top-Right Duration Pill */}
                  {project.duration && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[11px] font-mono text-slate-300 border border-slate-700">
                      {project.duration}
                    </div>
                  )}

                  {/* Top-Left Client Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[11px] font-mono text-indigo-300 border border-slate-700">
                    {project.client}
                  </div>
                </div>

                {/* Metadata & Content */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/60 font-semibold">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{project.year}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Insight Callout */}
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-4 flex items-start gap-2.5 text-xs text-slate-300">
                  <Lightbulb className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{project.highlight}</span>
                </div>
              </div>

              {/* Footer Bar */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <span className="font-semibold text-indigo-400 group-hover:text-indigo-300 flex items-center gap-1 ml-2 flex-shrink-0">
                  <span>Watch & Inspect</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
