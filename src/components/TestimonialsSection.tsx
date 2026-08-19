import React from 'react';
import { Sparkles, Quote, Building2, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0d121d] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/50 text-xs font-mono text-indigo-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Collaboration & Social Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Authentic Endorsements & Feedback.
          </h2>
          <p className="text-base text-slate-300">
            Real feedback from professional collaborators, marketing managers, and design partners across Steadfast International, KJW Creative Media, and client engagements.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-900/80 rounded-2xl p-7 border border-slate-800/90 hover:border-indigo-500/30 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <Quote className="w-8 h-8 text-indigo-500/30 mb-4" />
                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-0.5">
                  <span>{t.author}</span>
                </div>
                <div className="text-xs text-indigo-400 font-medium">
                  {t.role} • {t.company}
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-2 flex items-center gap-1.5 bg-slate-950/60 px-2.5 py-1 rounded-md border border-slate-800/60 w-fit">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                  <span>{t.relationship}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
