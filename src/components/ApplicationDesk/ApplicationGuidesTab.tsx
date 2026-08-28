import React, { useState } from 'react';
import {
  Compass,
  CheckSquare,
  ArrowRight,
  ExternalLink,
  BookOpen,
  FileCheck,
  Building2,
  ListOrdered,
  Layers,
  Sparkles
} from 'lucide-react';
import { ProgrammeRequirement, University } from '../../types/applicationDesk';

interface ApplicationGuidesTabProps {
  requirements: ProgrammeRequirement[];
  universities: University[];
}

export const ApplicationGuidesTab: React.FC<ApplicationGuidesTabProps> = ({
  requirements,
  universities
}) => {
  const [selectedReqId, setSelectedReqId] = useState<string>(requirements[0]?.id || '');

  const activeReq = requirements.find((r) => r.id === selectedReqId) || requirements[0];

  if (!activeReq) return null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Compass className="w-5 h-5 text-indigo-400" />
            University & Programme Application Guides
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Step-by-step procedures synchronized directly from verified university admissions portals.
          </p>
        </div>

        {/* Selector */}
        <select
          value={activeReq.id}
          onChange={(e) => setSelectedReqId(e.target.value)}
          className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-indigo-500 cursor-pointer"
        >
          {requirements.map((req) => (
            <option key={req.id} value={req.id} className="bg-slate-900 text-slate-200">
              {req.universityName} — {req.programmeName}
            </option>
          ))}
        </select>
      </div>

      {/* Guide Flow */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/60 font-semibold">
              OFFICIAL GUIDE
            </span>
            <h4 className="text-xl font-extrabold text-white mt-2">
              How to Apply: {activeReq.programmeName}
            </h4>
            <div className="text-xs text-slate-400 mt-1">
              University: <span className="text-slate-200 font-semibold">{activeReq.universityName}</span> • Version: <span className="font-mono text-indigo-400">{activeReq.knowledgeVersion}</span>
            </div>
          </div>

          <a
            href={activeReq.officialPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-md"
          >
            <span>Launch Official Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Step Cards */}
        <div className="space-y-4">
          <h5 className="text-xs font-mono uppercase tracking-wider text-indigo-300 font-bold flex items-center gap-2">
            <ListOrdered className="w-4 h-4 text-indigo-400" />
            Step-by-Step Application Procedure
          </h5>

          <div className="grid grid-cols-1 gap-4">
            {activeReq.applicationProcedure.map((step) => (
              <div
                key={step.stepNumber}
                className="p-5 rounded-2xl bg-slate-950 border border-slate-800/90 flex items-start gap-4 hover:border-indigo-500/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-indigo-600/30">
                  0{step.stepNumber}
                </div>
                <div className="space-y-1.5 flex-1">
                  <h6 className="text-sm font-bold text-white flex items-center justify-between">
                    <span>{step.title}</span>
                    {step.portalUrl && (
                      <a
                        href={step.portalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono text-sky-400 hover:text-sky-300 flex items-center gap-1 hover:underline font-normal"
                      >
                        <span>Portal Link</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </h6>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.instruction}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Deadlines & Checklist Quick View */}
        <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckSquare className="w-4 h-4" />
              Specialist Verification Advice
            </div>
            <ul className="space-y-2">
              {activeReq.specialistNotes.map((note, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider mb-2">
              Critical Timeline & Fees
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between">
                <span className="text-slate-400">Application Deadline:</span>
                <span className="font-mono text-rose-400 font-bold">{activeReq.applicationDeadline.date}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between">
                <span className="text-slate-400">Application Fee:</span>
                <span className="font-mono text-emerald-400 font-bold">
                  {activeReq.applicationFee.amount} {activeReq.applicationFee.currency}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
