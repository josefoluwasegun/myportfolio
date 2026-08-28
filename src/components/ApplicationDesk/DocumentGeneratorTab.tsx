import React, { useState } from 'react';
import {
  FileText,
  Printer,
  Download,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  Layers,
  Globe,
  Building2,
  Calendar,
  ShieldCheck,
  Award,
  ListCheck
} from 'lucide-react';
import {
  University,
  ProgrammeRequirement,
  DocumentGeneratorConfig
} from '../../types/applicationDesk';

interface DocumentGeneratorTabProps {
  universities: University[];
  requirements: ProgrammeRequirement[];
}

export const DocumentGeneratorTab: React.FC<DocumentGeneratorTabProps> = ({
  universities,
  requirements
}) => {
  const [config, setConfig] = useState<DocumentGeneratorConfig>({
    docType: 'full_handbook',
    selectedUniversityId: universities[0]?.id,
    selectedProgrammeId: requirements[0]?.programmeId,
    selectedCountry: 'all',
    includeSpecialistChecklist: true,
    includeClickableSources: true,
    customNotes: 'Official document exported from Seemigo Living Application Desk.'
  });

  const [previewMode, setPreviewMode] = useState<boolean>(true);

  // Filter requirements based on config selection
  const selectedUnis =
    config.docType === 'full_handbook'
      ? universities
      : config.docType === 'university_guide'
      ? universities.filter((u) => u.id === config.selectedUniversityId)
      : universities;

  const selectedReqs =
    config.docType === 'full_handbook'
      ? requirements
      : config.docType === 'programme_guide'
      ? requirements.filter((r) => r.programmeId === config.selectedProgrammeId)
      : config.docType === 'university_guide'
      ? requirements.filter((r) => r.universityId === config.selectedUniversityId)
      : requirements;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Configuration Header */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6 print:hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950 text-indigo-300 border border-indigo-800 text-xs font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              DYNAMIC EXPORT ENGINE
            </div>
            <h3 className="text-xl font-extrabold text-white">
              Verified Document & Handbook Generator
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Export current verified database into branded guides and full handbooks.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-lg shadow-indigo-600/30"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Form Controls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
          {/* Document Type */}
          <div className="space-y-1.5">
            <label className="font-mono text-slate-400 font-semibold">Document Target Type:</label>
            <select
              value={config.docType}
              onChange={(e) => setConfig({ ...config, docType: e.target.value as any })}
              className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500 cursor-pointer"
            >
              <option value="full_handbook">Full Finland → Austria International Handbook</option>
              <option value="university_guide">University Application Guide</option>
              <option value="programme_guide">Programme Application Guide</option>
              <option value="documents_checklist">Required Documents Checklist</option>
              <option value="specialist_guidance">Specialist Guidance & Checklist</option>
            </select>
          </div>

          {/* University Filter if needed */}
          {(config.docType === 'university_guide' || config.docType === 'documents_checklist') && (
            <div className="space-y-1.5">
              <label className="font-mono text-slate-400 font-semibold">Select University:</label>
              <select
                value={config.selectedUniversityId}
                onChange={(e) => setConfig({ ...config, selectedUniversityId: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500 cursor-pointer"
              >
                {universities.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.name} ({u.country})
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Programme Filter if needed */}
          {config.docType === 'programme_guide' && (
            <div className="space-y-1.5">
              <label className="font-mono text-slate-400 font-semibold">Select Programme:</label>
              <select
                value={config.selectedProgrammeId}
                onChange={(e) => setConfig({ ...config, selectedProgrammeId: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-indigo-500 cursor-pointer"
              >
                {requirements.map((r) => (
                  <option key={r.id} value={r.programmeId}>
                    {r.universityName} — {r.programmeName}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Checklist Toggle */}
          <div className="space-y-1.5 flex flex-col justify-end">
            <label className="flex items-center gap-2 cursor-pointer pt-2">
              <input
                type="checkbox"
                checked={config.includeSpecialistChecklist}
                onChange={(e) => setConfig({ ...config, includeSpecialistChecklist: e.target.checked })}
                className="rounded bg-slate-950 border-slate-800 text-indigo-600 focus:ring-0"
              />
              <span className="text-slate-300">Include Specialist Guidance Checklist</span>
            </label>
          </div>
        </div>
      </div>

      {/* Printable Document Container (Styled for print & screen export) */}
      <div id="seemigo-pdf-export-container" className="p-8 sm:p-12 rounded-3xl bg-white text-slate-900 border border-slate-200 shadow-2xl space-y-10 print:p-0 print:border-none print:shadow-none font-sans">
        {/* Document Header Branding */}
        <div className="flex items-start justify-between pb-6 border-b-2 border-indigo-600">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-black text-sm">
                S
              </div>
              <span className="text-xl font-black text-indigo-950 tracking-tight uppercase">
                SEEMIGO APPLICATION SYSTEM
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {config.docType === 'full_handbook' && 'INTERNATIONAL UNIVERSITY HANDBOOK'}
              {config.docType === 'university_guide' && 'UNIVERSITY APPLICATION GUIDE'}
              {config.docType === 'programme_guide' && 'PROGRAMME APPLICATION GUIDE'}
              {config.docType === 'documents_checklist' && 'REQUIRED DOCUMENTS CHECKLIST'}
              {config.docType === 'specialist_guidance' && 'SPECIALIST GUIDANCE & CHECKLIST'}
            </h1>
            <p className="text-xs text-slate-500 font-mono mt-1">
              Finland → Austria University Systems • Export of Current Verified Knowledge Base
            </p>
          </div>

          <div className="text-right text-xs font-mono text-slate-600 space-y-1">
            <div className="px-3 py-1 rounded bg-indigo-50 text-indigo-900 font-bold border border-indigo-200 inline-block">
              SYSTEM VERIFIED EXPORT
            </div>
            <div>Date Generated: {new Date().toLocaleDateString('en-US', { dateStyle: 'medium' })}</div>
            <div>Source: Application Desk Engine</div>
          </div>
        </div>

        {/* Body Content */}
        <div className="space-y-10">
          {selectedReqs.map((req, idx) => (
            <div key={req.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-6 break-inside-avoid">
              {/* University & Programme Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
                <div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-indigo-600 text-white uppercase">
                    NODE 0{idx + 1}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 mt-1">
                    {req.universityName}
                  </h2>
                  <div className="text-sm font-semibold text-indigo-700">
                    {req.programmeName} ({req.degreeLevel})
                  </div>
                </div>

                <div className="text-right text-xs font-mono text-slate-600">
                  <div className="font-bold text-slate-900">Version: {req.knowledgeVersion}</div>
                  <div>Last Verified: {req.lastVerifiedDate}</div>
                </div>
              </div>

              {/* Grid: Eligibility & Documents */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-indigo-600" />
                    Academic Eligibility
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {req.eligibilityCriteria.map((elig, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 flex-shrink-0" />
                        <span>{elig}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <ListCheck className="w-4 h-4 text-indigo-600" />
                    Mandatory Required Documents
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {req.requiredDocuments.map((doc) => (
                      <li key={doc.id} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span><strong>{doc.name}:</strong> {doc.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Grid: Language, Fees & Deadlines */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-200 text-xs text-slate-700">
                <div>
                  <span className="font-bold text-slate-900 block font-mono">LANGUAGE SCORES:</span>
                  {req.languageRequirements.map((l, i) => (
                    <div key={i} className="mt-1">
                      {l.testName}: <strong className="text-indigo-900">{l.minimumScore}</strong>
                    </div>
                  ))}
                </div>

                <div>
                  <span className="font-bold text-slate-900 block font-mono">APPLICATION FEE:</span>
                  <div className="mt-1 font-bold text-indigo-900">
                    {req.applicationFee.amount} {req.applicationFee.currency}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {req.applicationFee.waivedForEU ? 'Waived for EU' : 'Required'}
                  </div>
                </div>

                <div>
                  <span className="font-bold text-slate-900 block font-mono">APPLICATION DEADLINE:</span>
                  <div className="mt-1 font-bold text-rose-700 font-mono">
                    {req.applicationDeadline.date}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {req.applicationDeadline.intakeSession}
                  </div>
                </div>
              </div>

              {/* Clickable Official Sources */}
              {config.includeClickableSources && (
                <div className="pt-3 border-t border-slate-200">
                  <span className="text-[11px] font-mono font-bold text-slate-500 uppercase block mb-1">
                    Official Clickable Sources & Portal:
                  </span>
                  <div className="flex flex-wrap gap-4 text-xs font-mono">
                    <a
                      href={req.officialAdmissionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 font-bold hover:underline flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Admissions Web Page
                    </a>
                    <a
                      href={req.officialPortalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 font-bold hover:underline flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Application Portal ({req.officialPortalUrl})
                    </a>
                  </div>
                </div>
              )}

              {/* Specialist Checklist */}
              {config.includeSpecialistChecklist && (
                <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 space-y-2">
                  <div className="text-xs font-mono font-bold text-indigo-950 uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    Seemi Specialist Checklist & Notes
                  </div>
                  <ul className="space-y-1 text-xs text-indigo-900">
                    {req.specialistNotes.map((note, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="font-bold text-indigo-700">{i + 1}.</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Document Footer */}
        <div className="pt-6 border-t-2 border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
          <div>Seemigo Living University Application System • Verified Source of Truth</div>
          <div>Page 1 of 1 • Generated via Application Desk</div>
        </div>
      </div>
    </div>
  );
};
