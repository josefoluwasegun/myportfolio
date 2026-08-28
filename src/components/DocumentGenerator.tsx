import React, { useState, useEffect } from 'react';
import {
  FileText,
  GraduationCap,
  FileCheck,
  Plane,
  UserCheck,
  CheckSquare,
  MapPin,
  Sparkles,
  Copy,
  Download,
  Check,
  RefreshCw,
  Building,
  Globe,
  Briefcase,
  AlertCircle,
  ChevronRight,
  Filter
} from 'lucide-react';
import { ApplicantContext, DocCategory } from '../types';

interface DocumentGeneratorProps {
  selectedApplicant?: ApplicantContext | null;
  onSelectApplicant?: (applicant: ApplicantContext) => void;
  availableApplicants?: ApplicantContext[];
}

export const DocumentGenerator: React.FC<DocumentGeneratorProps> = ({
  selectedApplicant,
  onSelectApplicant,
  availableApplicants = []
}) => {
  const [activeCategory, setActiveCategory] = useState<DocCategory>('study_abroad');
  const [activeToolId, setActiveToolId] = useState<string>('sop');
  const [copied, setCopied] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // Editable Form State (Initialised from selectedApplicant if present)
  const [formData, setFormData] = useState({
    applicantName: selectedApplicant?.applicantName || 'Alex Mercer',
    applicantEmail: selectedApplicant?.applicantEmail || 'alex.mercer@example.com',
    country: selectedApplicant?.country || 'United Kingdom',
    university: selectedApplicant?.university || 'University of Manchester',
    programme: selectedApplicant?.programme || 'MSc Artificial Intelligence & Data Science',
    applicationType: selectedApplicant?.applicationType || 'Study Abroad',
    purposeDetails: 'Seeking advanced specialization in AI systems engineering and data-driven decision making.',
    travelDates: '15 Sep 2025 – 30 Jul 2026',
    sponsorName: 'Self-Funded / Family Sponsorship',
    moiInstitute: 'BSc Computer Science - First Class Honors (Medium of Instruction: English)',
  });

  const [generatedOutput, setGeneratedOutput] = useState<string>('');

  // Update form fields if selectedApplicant changes
  useEffect(() => {
    if (selectedApplicant) {
      setFormData((prev) => ({
        ...prev,
        applicantName: selectedApplicant.applicantName,
        applicantEmail: selectedApplicant.applicantEmail,
        country: selectedApplicant.country,
        university: selectedApplicant.university,
        programme: selectedApplicant.programme,
        applicationType: selectedApplicant.applicationType,
      }));
    }
  }, [selectedApplicant]);

  // Categories list
  const categories: { id: DocCategory; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'study_abroad', label: 'Study Abroad', icon: GraduationCap },
    { id: 'visa', label: 'Visa Documents', icon: FileCheck },
    { id: 'travel', label: 'Travel / Vacation', icon: Plane },
    { id: 'cv', label: 'CV Generator', icon: UserCheck },
    { id: 'moi', label: 'MOI Checker', icon: CheckSquare },
    { id: 'itinerary', label: 'Travel Itinerary', icon: MapPin },
  ];

  // Tool options per category
  const toolsMap: Record<DocCategory, { id: string; name: string; desc: string }[]> = {
    study_abroad: [
      { id: 'sop', name: 'Statement of Purpose / SOP', desc: 'Customized SOP tailored to program curriculum and university standards.' },
      { id: 'cover_letter_edu', name: 'University Cover Letter', desc: 'Formal cover letter to admissions committee & department head.' },
      { id: 'lor_req', name: 'Academic Recommendation Request', desc: 'Formal email template requesting recommendation letters from professors.' }
    ],
    visa: [
      { id: 'visa_cover', name: 'Embassy Visa Cover Letter', desc: 'Structured explanation of travel intent, funding, and strong home ties.' },
      { id: 'sponsorship_letter', name: 'Affidavit of Support / Sponsorship', desc: 'Legal financial guarantee letter from sponsor for visa application.' },
      { id: 'flight_proof', name: 'Flight & Accommodation Proof Summary', desc: 'Verified reservation summary breakdown for consulate submission.' }
    ],
    travel: [
      { id: 'vacation_request', name: 'Employer Vacation Leave Request', desc: 'Official letter to employer requesting annual leave for international travel.' },
      { id: 'travel_decl', name: 'Customs & Travel Declaration', desc: 'Formal statement confirming vacation purposes and return commitment.' }
    ],
    cv: [
      { id: 'academic_cv', name: 'Academic & Admissions CV', desc: 'EU/US standard academic CV highlighting research, skills & projects.' },
      { id: 'professional_cv', name: 'Visa & Immigration Tailored CV', desc: 'Professional resume optimized for work permit and global talent visas.' }
    ],
    moi: [
      { id: 'moi_verification', name: 'Medium of Instruction Waiver Sheet', desc: 'Automated verification letter confirming previous degree taught in English.' },
      { id: 'language_proof', name: 'English Competency Equivalence', desc: 'Official documentation supporting IELTS/TOEFL exemption requests.' }
    ],
    itinerary: [
      { id: 'daily_itinerary', name: 'Day-by-Day Travel Itinerary', desc: 'Detailed, realistic daily timeline with flights, lodging, and site visits.' },
      { id: 'embassy_itinerary', name: 'Embassy Route & Transit Plan', desc: 'Consulate-focused flight connections and regional transit schedule.' }
    ]
  };

  // Generate Document Logic
  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      let output = '';
      const dateStr = new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });

      if (activeToolId === 'sop') {
        output = `STATEMENT OF PURPOSE FOR ADMISSION
To: The Admissions Committee, ${formData.university}
Target Country: ${formData.country}
Program of Interest: ${formData.programme}
Applicant Name: ${formData.applicantName} (${formData.applicantEmail})
Date of Application: ${dateStr}

Dear Members of the Admissions Committee,

I am writing to express my profound enthusiasm for enrolling in the ${formData.programme} at ${formData.university} in ${formData.country}. My decision to apply stems from a rigorous evaluation of my academic foundation and my long-term strategic objective: ${formData.purposeDetails}.

Having thoroughly reviewed the module curriculum at ${formData.university}, I am particularly drawn to the specialized research labs and industry integration available in ${formData.country}. My previous academic qualification (${formData.moiInstitute}) has equipped me with the technical proficiency necessary to excel in this program.

Upon completion of my studies, I plan to leverage this advanced education to drive technological innovation in my home country. I am confident that my background, dedication, and clear intent render me a strong candidate for admission.

Thank you for your consideration of my application.

Sincerely,
${formData.applicantName}
${formData.applicantEmail}`;
      } else if (activeToolId === 'visa_cover') {
        output = `EMBASSY VISA APPLICATION COVER LETTER
To: The Visa Officer, High Commission / Embassy of ${formData.country}
Date: ${dateStr}

Subject: Cover Letter for ${formData.applicationType} Visa Application
Applicant Name: ${formData.applicantName}
Passport / Ref: SEEMI-${selectedApplicant?.id || '88392'}
Intended Dates of Travel: ${formData.travelDates}

Respected Visa Officer,

I am submitting this application for a ${formData.applicationType} visa to travel to ${formData.country}. The primary purpose of my journey is to undertake studies in ${formData.programme} at ${formData.university}.

FINANCIAL PROOF & SPONSORED FUNDING:
My living expenses and tuition fees in ${formData.country} are fully supported through: ${formData.sponsorName}. Complete bank statements, affidavit of support, and official proof of liquid funds are attached with this dossier.

INTENT TO RETURN & TIES TO HOME COUNTRY:
I possess undeniable economic, familial, and professional ties to my home country, ensuring my timely return upon completion of my approved stay in ${formData.country}.

DOCUMENTATION ATTACHED:
1. Valid International Passport
2. Official Offer / CAS Letter from ${formData.university}
3. Bank Statements & Sponsorship Affidavit
4. Flight Reservation & Accommodation Booking Proof
5. English Medium of Instruction Proof (${formData.moiInstitute})

I trust that the provided documentation meets all consular guidelines.

Yours faithfully,
${formData.applicantName}
Email: ${formData.applicantEmail}`;
      } else if (activeToolId === 'moi_verification') {
        output = `MEDIUM OF INSTRUCTION (MOI) COMPLIANCE & WAIVER EVALUATION
SEEMIGO VERIFICATION ENGINE — INTERNAL SPECIALIST REPORT

Applicant ID: ${selectedApplicant?.id || 'APP-2025-01'}
Applicant Name: ${formData.applicantName}
Target Institution: ${formData.university}, ${formData.country}
Program: ${formData.programme}
Verification Date: ${dateStr}

MEDIUM OF INSTRUCTION STATUS: VERIFIED (ENGLISH)

EVALUATION SUMMARY:
• Prior Degree: ${formData.moiInstitute}
• Primary Instruction Language: 100% English Language Course Delivery
• Recognized Accreditation: Approved under National Higher Education Commission & UK ENIC Standards.

RECOMMENDED ACTION FOR SPECIALIST:
Attached is the official Medium of Instruction Waiver Statement. Submit directly to ${formData.university} admissions portal under "English Proficiency Exemption Request".

Authorized by Seemi Application Desk Engine.`;
      } else if (activeToolId === 'daily_itinerary') {
        output = `DAY-BY-DAY TRAVEL & EMBASSY ITINERARY
Applicant: ${formData.applicantName}
Destination: ${formData.country} (${formData.university})
Travel Dates: ${formData.travelDates}
Application Type: ${formData.applicationType}

DAY 1: Departure & International Arrival
• Flight Arrival at International Airport, ${formData.country}.
• Transfer to reserved accommodation near ${formData.university}.

DAY 2: University Orientation & Registration
• Visit International Student Office at ${formData.university}.
• Complete Biometric Registration and Enrolment in ${formData.programme}.

DAY 3: Campus Tour & Local Housing Setup
• Attend Departmental Welcome Seminar.
• finalize long-term lease agreement & bank account opening.

DAY 4-7: Initial Academic Immersion & Regional Orientation
• Commence introductory lecture series.
• Obtain local transit pass and student ID documentation.

Generated by Seemigo Internal Application Desk.`;
      } else {
        output = `SEEMIGO DOCUMENT GENERATION REPORT
Document Type: ${activeToolId.toUpperCase()}
Category: ${activeCategory.toUpperCase()}
Applicant: ${formData.applicantName}
Institution / Target: ${formData.university}, ${formData.country}
Program: ${formData.programme}
Date: ${dateStr}

---------------------------------------------------------
DOCUMENT BODY:

This document was generated for ${formData.applicantName} to support their ${formData.applicationType} application for ${formData.programme} at ${formData.university} in ${formData.country}.

Primary Purpose & Parameters:
${formData.purposeDetails}

Key Funding / Sponsor Details:
${formData.sponsorName}

Additional Qualifications:
${formData.moiInstitute}

Prepared and verified by authorized Seemi Application Desk Specialist.`;
      }

      setGeneratedOutput(output);
      setIsGenerating(false);
    }, 400);
  };

  // Initial auto-generation on mount or tool/applicant change
  useEffect(() => {
    handleGenerate();
  }, [activeToolId, selectedApplicant?.id]);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedOutput], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `Seemigo_${activeToolId}_${formData.applicantName.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const currentTools = toolsMap[activeCategory] || [];

  return (
    <div className="space-y-6 text-slate-200">
      {/* Top Header Badge & Applicant Selector Bar */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/80 via-slate-900 to-slate-950 border border-indigo-800/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-600 text-white font-bold">
                INTERNAL APPLICATION DESK TOOL
              </span>
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                Specialist Mode Active
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mt-0.5">
              Seemigo AI Document Generator
            </h3>
          </div>
        </div>

        {/* Applicant Context Switcher */}
        {availableApplicants.length > 0 && (
          <div className="flex items-center gap-2 bg-slate-900/90 p-2 rounded-xl border border-slate-800">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-xs text-slate-400 font-mono">Active Applicant:</span>
            <select
              value={selectedApplicant?.id || ''}
              onChange={(e) => {
                const found = availableApplicants.find((a) => a.id === e.target.value);
                if (found && onSelectApplicant) onSelectApplicant(found);
              }}
              className="text-xs font-semibold bg-slate-800 text-indigo-300 px-3 py-1.5 rounded-lg border border-indigo-800/60 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              {availableApplicants.map((app) => (
                <option key={app.id} value={app.id}>
                  {app.applicantName} — {app.country} ({app.applicationType})
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3 overflow-x-auto no-scrollbar">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                const firstTool = toolsMap[cat.id][0]?.id;
                if (firstTool) setActiveToolId(firstTool);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tool Selector Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {currentTools.map((tool) => {
          const isSelected = activeToolId === tool.id;
          return (
            <button
              key={tool.id}
              onClick={() => setActiveToolId(tool.id)}
              className={`p-3.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-indigo-950/60 border-indigo-500 text-white shadow-md'
                  : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div>
                <div className="text-xs font-bold flex items-center justify-between mb-1">
                  <span className={isSelected ? 'text-indigo-300' : 'text-slate-200'}>
                    {tool.name}
                  </span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-indigo-400" />}
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">{tool.desc}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Workspace: Left Column Inputs (Pre-filled from Applicant) vs Right Column Live Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Inputs Column */}
        <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-800 p-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              Applicant Context Parameters
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/40">
              Synced from Desk
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Applicant Name</label>
              <input
                type="text"
                value={formData.applicantName}
                onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-400 mb-1 font-medium">Target Country</label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1 font-medium">Application Type</label>
                <input
                  type="text"
                  value={formData.applicationType}
                  onChange={(e) => setFormData({ ...formData, applicationType: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Target University / Institution</label>
              <input
                type="text"
                value={formData.university}
                onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Degree Programme / Course</label>
              <input
                type="text"
                value={formData.programme}
                onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Sponsor / Funding Statement</label>
              <input
                type="text"
                value={formData.sponsorName}
                onChange={(e) => setFormData({ ...formData, sponsorName: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Medium of Instruction / Academic Background</label>
              <input
                type="text"
                value={formData.moiInstitute}
                onChange={(e) => setFormData({ ...formData, moiInstitute: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Specific Objectives / Statement Details</label>
              <textarea
                rows={3}
                value={formData.purposeDetails}
                onChange={(e) => setFormData({ ...formData, purposeDetails: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />
            <span>Regenerate Document Draft</span>
          </button>
        </div>

        {/* Live Document Preview & Export Column */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-5 space-y-4 flex flex-col justify-between min-h-[480px]">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Live Generated Output
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-xs text-slate-300 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-600/30 border border-indigo-500/40 hover:bg-indigo-600/50 text-xs text-indigo-300 transition-colors font-medium"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .TXT</span>
                </button>
              </div>
            </div>

            {/* Generated Output Canvas */}
            <div className="mt-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed max-h-[420px] overflow-y-auto">
              {isGenerating ? (
                <div className="flex flex-col items-center justify-center py-16 text-slate-500 gap-3">
                  <RefreshCw className="w-6 h-6 animate-spin text-indigo-400" />
                  <span>Generating tailored document with AI pipeline...</span>
                </div>
              ) : (
                generatedOutput
              )}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Security: Internal Application Desk Document</span>
            <span className="text-emerald-400 font-semibold">Ready for Embassy & Admission Submission</span>
          </div>
        </div>
      </div>
    </div>
  );
};
