import React, { useState } from 'react';
import {
  FileCheck,
  GraduationCap,
  Award,
  Globe,
  Clock,
  Euro,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
  UserCheck,
  Layers,
  Sparkles
} from 'lucide-react';
import { ProgrammeRequirement, University } from '../../types/applicationDesk';

interface RequirementsTabProps {
  requirements: ProgrammeRequirement[];
  universities: University[];
  selectedUniversityId?: string;
}

export const RequirementsTab: React.FC<RequirementsTabProps> = ({
  requirements,
  universities,
  selectedUniversityId
}) => {
  const [activeReqId, setActiveReqId] = useState<string>(
    selectedUniversityId
      ? requirements.find((r) => r.universityId === selectedUniversityId)?.id || requirements[0]?.id
      : requirements[0]?.id || ''
  );

  const activeReq = requirements.find((r) => r.id === activeReqId) || requirements[0];

  if (!activeReq) {
    return (
      <div className="p-8 text-center text-slate-400 bg-slate-900 rounded-2xl border border-slate-800">
        No requirements found.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header & Programme Selector */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-900/40 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950 text-indigo-300 border border-indigo-800 text-xs font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              PROGRAMME LEVEL REQUIREMENTS
            </div>
            <h3 className="text-xl font-extrabold text-white">
              {activeReq.programmeName}
            </h3>
            <p className="text-xs text-slate-400 mt-1 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              {activeReq.universityName} • {activeReq.degreeLevel} Degree • Version {activeReq.knowledgeVersion}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-800/80 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Verified: {activeReq.lastVerifiedDate}
            </span>
          </div>
        </div>

        {/* Requirements Selector Dropdown */}
        <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <label className="text-xs font-mono text-slate-400">Select Programme:</label>
          <select
            value={activeReq.id}
            onChange={(e) => setActiveReqId(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 cursor-pointer"
          >
            {requirements.map((req) => (
              <option key={req.id} value={req.id} className="bg-slate-900 text-white">
                {req.universityName} — {req.programmeName}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid: Eligibility & Documents */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Academic Eligibility */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <h4 className="text-sm font-mono font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-2 pb-3 border-b border-slate-800">
            <Award className="w-4 h-4 text-indigo-400" />
            1. Academic Eligibility & Degree Requirements
          </h4>
          <ul className="space-y-3">
            {activeReq.eligibilityCriteria.map((item, idx) => (
              <li key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-200 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Required Documents Checklist */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <h4 className="text-sm font-mono font-bold text-sky-300 uppercase tracking-wider flex items-center gap-2 pb-3 border-b border-slate-800">
            <FileCheck className="w-4 h-4 text-sky-400" />
            2. Required Documents Checklist
          </h4>
          <div className="space-y-3">
            {activeReq.requiredDocuments.map((doc) => (
              <div key={doc.id} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-indigo-400" />
                    {doc.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800/60">
                    Mandatory
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{doc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid: Language, Fees & Deadlines */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Language Requirements */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <h4 className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2 pb-3 border-b border-slate-800">
            <Globe className="w-4 h-4 text-amber-400" />
            3. Language Proficiency
          </h4>
          <div className="space-y-3">
            {activeReq.languageRequirements.map((lang, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="text-xs font-bold text-white">{lang.testName}</div>
                <div className="text-xs font-mono text-emerald-400 font-semibold">{lang.minimumScore}</div>
                {lang.exemptionConditions.length > 0 && (
                  <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800/80">
                    <span className="text-slate-300 font-semibold">Exemptions: </span>
                    {lang.exemptionConditions.join(', ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Application Fee */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <h4 className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-2 pb-3 border-b border-slate-800">
            <Euro className="w-4 h-4 text-emerald-400" />
            4. Application Fee
          </h4>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-center">
            <div className="text-2xl font-extrabold font-mono text-emerald-400">
              {activeReq.applicationFee.amount} {activeReq.applicationFee.currency}
            </div>
            <div className="text-xs text-slate-300">
              {activeReq.applicationFee.waivedForEU ? 'Waived for EU/EEA citizens' : 'Applicable to all applicants'}
            </div>
            {activeReq.applicationFee.paymentInstructions && (
              <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800 text-left leading-relaxed">
                {activeReq.applicationFee.paymentInstructions}
              </p>
            )}
          </div>
        </div>

        {/* Deadline & Portal */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <h4 className="text-xs font-mono font-bold text-rose-300 uppercase tracking-wider flex items-center gap-2 pb-3 border-b border-slate-800">
            <Clock className="w-4 h-4 text-rose-400" />
            5. Application Deadline
          </h4>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <div>
              <div className="text-xs text-slate-400">Target Intake Session:</div>
              <div className="text-xs font-bold text-white">{activeReq.applicationDeadline.intakeSession}</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Official Deadline:</div>
              <div className="text-sm font-bold font-mono text-rose-400">{activeReq.applicationDeadline.date}</div>
            </div>

            <a
              href={activeReq.officialPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all"
            >
              <span>Open Application Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Post Admission & Specialist Notes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <h4 className="text-sm font-mono font-bold text-purple-300 uppercase tracking-wider flex items-center gap-2 pb-3 border-b border-slate-800">
            <UserCheck className="w-4 h-4 text-purple-400" />
            Post-Admission & Visa Requirements
          </h4>
          <div className="space-y-3">
            {activeReq.postAdmissionRequirements.map((post) => (
              <div key={post.id} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between text-xs font-bold text-white">
                  <span>{post.category}</span>
                  <span className="text-[10px] text-amber-400 font-mono">{post.deadline}</span>
                </div>
                <p className="text-[11px] text-slate-300">{post.requirement}</p>
                {post.estimatedCost && (
                  <div className="text-[10px] text-emerald-400 font-mono">Cost: {post.estimatedCost}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-800/40 space-y-4">
          <h4 className="text-sm font-mono font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-2 pb-3 border-b border-slate-800">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            Seemi Specialist Guidance & Strategy Notes
          </h4>
          <ul className="space-y-3">
            {activeReq.specialistNotes.map((note, idx) => (
              <li key={idx} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-200 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-indigo-900 text-indigo-300 flex items-center justify-center font-mono text-[10px] font-bold flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
