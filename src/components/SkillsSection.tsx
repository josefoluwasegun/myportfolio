import React from 'react';
import {
  Sparkles,
  Code2,
  Server,
  Sparkle,
  Palette,
  Rocket,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Code2,
    Server,
    Sparkles,
    Palette,
    Rocket
  };

  return (
    <section id="skills" className="py-24 bg-[#0d121d] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/50 text-xs font-mono text-indigo-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Demonstrated Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Technical & Product Capabilities.
          </h2>
          <p className="text-base text-slate-300">
            Grounding capabilities in real engineering output, architectural decisions, and production systems rather than superficial skill bars.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => {
            const IconComponent = iconMap[cat.iconName] || Code2;
            return (
              <div
                key={cat.title}
                className="bg-slate-900/80 rounded-2xl p-6 sm:p-7 border border-slate-800/90 hover:border-indigo-500/40 transition-all hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{cat.title}</h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills item list with real highlights */}
                  <div className="space-y-3">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80"
                      >
                        <div className="text-xs font-semibold text-white flex items-center gap-1.5 mb-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{skill.name}</span>
                        </div>
                        <div className="text-[11px] text-slate-400 leading-snug">
                          {skill.highlight}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Production Ready</span>
                  <span className="text-emerald-400">Validated in Projects</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
