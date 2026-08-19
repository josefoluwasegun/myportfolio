import React, { useEffect, useState } from 'react';
import {
  X,
  Printer,
  Download,
  Mail,
  Linkedin,
  Github,
  MapPin,
  CheckCircle2,
  Calendar,
  Briefcase,
  Layers,
  GraduationCap,
  Sparkles,
  Copy,
  Check
} from 'lucide-react';
import { RESUME_DATA, PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200 print:p-0 print:bg-white"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#0d131f] border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/80 overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black">
        {/* Modal Controls Bar (Hidden in Print) */}
        <div className="p-4 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-600 text-white font-semibold">
              CURRICULUM VITAE
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Joseph Oluwasegun Levi
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Email Copied' : 'Copy Email'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 flex-1 text-slate-300 print:text-slate-900 print:p-8">
          {/* Header */}
          <div className="border-b border-slate-800 print:border-slate-300 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-black tracking-tight mb-2">
              {RESUME_DATA.name}
            </h1>
            <div className="text-sm sm:text-base font-semibold text-indigo-400 print:text-indigo-800 mb-4">
              {RESUME_DATA.title}
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 print:text-slate-600">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-700" />
                {RESUME_DATA.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-700" />
                {RESUME_DATA.linkedin}
              </span>
              <span className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-700" />
                {RESUME_DATA.github}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="resume-section-block">
            <h2 className="text-xs font-mono font-bold text-indigo-400 print:text-indigo-800 uppercase tracking-widest mb-3">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 print:text-slate-800">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Core Competencies */}
          <div className="resume-section-block">
            <h2 className="text-xs font-mono font-bold text-indigo-400 print:text-indigo-800 uppercase tracking-widest mb-3">
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {RESUME_DATA.coreCompetencies.map((comp) => (
                <div
                  key={comp}
                  className="flex items-center gap-2 text-xs text-slate-200 print:text-slate-900"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 print:bg-indigo-700 flex-shrink-0" />
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold text-indigo-400 print:text-indigo-800 uppercase tracking-widest mb-6">
              Professional Experience & Product Building
            </h2>

            <div className="space-y-8">
              {RESUME_DATA.experience.map((exp) => (
                <div key={exp.company} className="space-y-3 resume-experience-item">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <h3 className="text-base font-bold text-white print:text-black">
                        {exp.company}
                      </h3>
                      <div className="text-xs font-medium text-indigo-300 print:text-indigo-700">
                        {exp.role}
                      </div>
                    </div>
                    <div className="text-xs font-mono text-slate-400 print:text-slate-600">
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-300 print:text-slate-800 flex items-start gap-2.5 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500 print:bg-slate-700 mt-1.5 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Toolkit */}
          <div className="resume-section-block">
            <h2 className="text-xs font-mono font-bold text-indigo-400 print:text-indigo-800 uppercase tracking-widest mb-4">
              Technical & Product Toolkit
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-950 print:bg-slate-100 border border-slate-800 print:border-slate-300 resume-toolkit-card">
                <div className="font-semibold text-white print:text-black mb-1.5">
                  Frontend Engineering
                </div>
                <div className="text-slate-400 print:text-slate-700 leading-relaxed font-mono text-[11px]">
                  {RESUME_DATA.technicalToolkit.frontend.join(' • ')}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 print:bg-slate-100 border border-slate-800 print:border-slate-300 resume-toolkit-card">
                <div className="font-semibold text-white print:text-black mb-1.5">
                  Backend & Cloud Infrastructure
                </div>
                <div className="text-slate-400 print:text-slate-700 leading-relaxed font-mono text-[11px]">
                  {RESUME_DATA.technicalToolkit.backend.join(' • ')}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 print:bg-slate-100 border border-slate-800 print:border-slate-300 resume-toolkit-card">
                <div className="font-semibold text-white print:text-black mb-1.5">
                  AI & Workflow Engineering
                </div>
                <div className="text-slate-400 print:text-slate-700 leading-relaxed font-mono text-[11px]">
                  {RESUME_DATA.technicalToolkit.aiAndWorkflows.join(' • ')}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 print:bg-slate-100 border border-slate-800 print:border-slate-300 resume-toolkit-card">
                <div className="font-semibold text-white print:text-black mb-1.5">
                  Design Systems, Motion & Creative Direction
                </div>
                <div className="text-slate-400 print:text-slate-700 leading-relaxed font-mono text-[11px]">
                  {RESUME_DATA.technicalToolkit.designAndMotion.join(' • ')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
