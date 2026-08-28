import React, { useState, useEffect } from 'react';
import {
  X,
  Shield,
  ShieldAlert,
  ShieldCheck,
  LayoutDashboard,
  FolderKanban,
  FileText,
  Users,
  Lock,
  ArrowLeft,
  Search,
  ChevronRight,
  UserCheck,
  GraduationCap,
  Sparkles,
  Building,
  Globe,
  AlertTriangle
} from 'lucide-react';
import { UserRole, UserProfile, ApplicantContext } from '../types';
import { DocumentGenerator } from './DocumentGenerator';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUserRole: UserRole;
  onSwitchRole: (role: UserRole) => void;
}

// Mock application queue for Specialists
const MOCK_APPLICANTS: ApplicantContext[] = [
  {
    id: 'APP-9021',
    applicantName: 'Sophia Chen',
    applicantEmail: 'sophia.chen@example.com',
    country: 'United Kingdom',
    university: 'University of Oxford',
    programme: 'MSc Advanced Computer Science',
    applicationType: 'Study Abroad',
    status: 'In Review',
    dateAdded: '2025-02-18'
  },
  {
    id: 'APP-8839',
    applicantName: 'David K. Osei',
    applicantEmail: 'david.osei@example.com',
    country: 'Germany',
    university: 'Technical University of Munich',
    programme: 'MSc Software Engineering & AI',
    applicationType: 'Visa Processing',
    status: 'Drafting',
    dateAdded: '2025-02-20'
  },
  {
    id: 'APP-7412',
    applicantName: 'Elena Rostova',
    applicantEmail: 'elena.r@example.com',
    country: 'Canada',
    university: 'University of Toronto',
    programme: 'Master of Data Science',
    applicationType: 'Vacation & Travel',
    status: 'Verified',
    dateAdded: '2025-02-15'
  }
];

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({
  isOpen,
  onClose,
  currentUserRole,
  onSwitchRole
}) => {
  const [activeTab, setActiveTab] = useState<'application_desk' | 'document_generator' | 'analytics'>('application_desk');
  const [selectedApplicant, setSelectedApplicant] = useState<ApplicantContext>(MOCK_APPLICANTS[0]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  // Role permissions check
  const isAuthorized = currentUserRole === 'admin' || currentUserRole === 'specialist';

  return (
    <div
      id="admin-dashboard-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-7xl bg-[#090d16] border border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        {/* Role Switcher & Security Top Banner */}
        <div className="bg-slate-950 px-4 sm:px-6 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-mono text-slate-400 font-semibold uppercase tracking-wider">
              Role Access Simulator:
            </span>
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => onSwitchRole('admin')}
                className={`px-3 py-1 rounded-lg font-mono font-bold transition-all ${
                  currentUserRole === 'admin'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Admin
              </button>
              <button
                onClick={() => onSwitchRole('specialist')}
                className={`px-3 py-1 rounded-lg font-mono font-bold transition-all ${
                  currentUserRole === 'specialist'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Seemi Specialist
              </button>
              <button
                onClick={() => onSwitchRole('applicant')}
                className={`px-3 py-1 rounded-lg font-mono font-bold transition-all ${
                  currentUserRole === 'applicant'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Normal User / Applicant
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono">
            {isAuthorized ? (
              <span className="text-emerald-400 flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                Access Authorized ({currentUserRole.toUpperCase()})
              </span>
            ) : (
              <span className="text-rose-400 flex items-center gap-1.5 font-semibold">
                <ShieldAlert className="w-4 h-4" />
                Restricted Role ({currentUserRole.toUpperCase()})
              </span>
            )}
          </div>
        </div>

        {/* Modal Header */}
        <div className="px-6 py-5 bg-[#0d1320] border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-white tracking-tight">
                  SEEMIGO Application Desk
                </h2>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/60">
                  Admin Dashboard
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Internal management hub for processing student, visa, and vacation applications.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Container: Sidebar Navigation & Content */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          {/* Internal Sidebar */}
          <div className="w-full md:w-64 bg-[#070a12] border-b md:border-b-0 md:border-r border-slate-800 p-4 space-y-6 flex-shrink-0">
            <div>
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2 font-semibold">
                ADMIN DASHBOARD
              </div>
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('application_desk')}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    activeTab === 'application_desk'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <FolderKanban className="w-4 h-4" />
                    <span>Application Desk</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                </button>
              </nav>
            </div>

            <div>
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2 font-semibold">
                APPLICATION DESK
              </div>
              <nav className="space-y-1">
                {/* Document Generator Tab - Protected */}
                <button
                  onClick={() => setActiveTab('document_generator')}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    activeTab === 'document_generator'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-indigo-300" />
                    <span>Document Generator</span>
                  </div>
                  {!isAuthorized && <Lock className="w-3.5 h-3.5 text-rose-400" />}
                </button>
              </nav>
            </div>

            {/* Specialist Context Indicator */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="text-[11px] font-mono font-bold text-indigo-400 uppercase">
                Active Specialist Session
              </div>
              <div className="text-xs text-slate-200 font-medium">
                {currentUserRole === 'admin'
                  ? 'Administrator'
                  : currentUserRole === 'specialist'
                  ? 'Seemi Lead Specialist'
                  : 'Normal Applicant'}
              </div>
              <div className="text-[11px] text-slate-400 leading-snug">
                {isAuthorized
                  ? 'Authorized to generate documents for applicants.'
                  : 'Access restricted to internal staff only.'}
              </div>
            </div>
          </div>

          {/* Main Workspace Area */}
          <div className="flex-1 overflow-y-auto p-6 bg-[#090d16]">
            {/* VIEW 1: APPLICATION DESK QUEUE */}
            {activeTab === 'application_desk' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-white">Application Queue & Processing</h3>
                    <p className="text-xs text-slate-400">
                      Select an applicant to review their file and open the Document Generator with pre-populated parameters.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      if (isAuthorized) setActiveTab('document_generator');
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                      isAuthorized
                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20'
                        : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    <FileText className="w-4 h-4" />
                    <span>Open Document Generator</span>
                  </button>
                </div>

                {/* Applicant Cards List */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {MOCK_APPLICANTS.map((applicant) => {
                    const isSelected = selectedApplicant.id === applicant.id;
                    return (
                      <div
                        key={applicant.id}
                        onClick={() => setSelectedApplicant(applicant)}
                        className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                          isSelected
                            ? 'bg-indigo-950/40 border-indigo-500 shadow-lg shadow-indigo-950/50'
                            : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">
                            {applicant.id}
                          </span>
                          <span className="text-[11px] font-mono text-emerald-400 font-medium">
                            {applicant.status}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-base font-bold text-white">{applicant.applicantName}</h4>
                          <p className="text-xs text-slate-400">{applicant.applicantEmail}</p>
                        </div>

                        <div className="pt-2 border-t border-slate-800/80 space-y-1 text-xs text-slate-300">
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Target:</span>
                            <span className="font-semibold text-indigo-300">{applicant.country}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">University:</span>
                            <span className="text-slate-200 truncate max-w-[140px]">{applicant.university}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Type:</span>
                            <span className="text-slate-200">{applicant.applicationType}</span>
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedApplicant(applicant);
                            if (isAuthorized) setActiveTab('document_generator');
                          }}
                          className="w-full mt-2 py-2 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>Generate Docs for {applicant.applicantName.split(' ')[0]}</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* VIEW 2: DOCUMENT GENERATOR (Protected Section) */}
            {activeTab === 'document_generator' && (
              <div>
                {isAuthorized ? (
                  /* AUTHORIZED VIEW: Render Document Generator */
                  <DocumentGenerator
                    selectedApplicant={selectedApplicant}
                    onSelectApplicant={(app) => setSelectedApplicant(app)}
                    availableApplicants={MOCK_APPLICANTS}
                  />
                ) : (
                  /* UNAUTHORIZED VIEW: 403 Forbidden Security Guard */
                  <div className="py-16 px-6 text-center max-w-xl mx-auto space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto">
                      <Lock className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-rose-950 text-rose-400 border border-rose-800/60 uppercase">
                        403 FORBIDDEN — INTERNAL TOOL ONLY
                      </span>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        Access Restricted: Document Generator
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        The Seemigo Document Generator is an internal tool reserved exclusively for Admin and authorized Seemi Specialists processing applications on behalf of users.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 text-left space-y-2">
                      <div className="font-mono font-semibold text-amber-400 flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4" />
                        Role Security Enforcement Active
                      </div>
                      <p className="text-slate-400">
                        Normal users and applicants cannot view or execute document generation scripts directly. To test access, switch your role to <strong className="text-indigo-300">Admin</strong> or <strong className="text-indigo-300">Seemi Specialist</strong> using the role switcher at the top of this dashboard.
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveTab('application_desk')}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Return to Application Desk Queue</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
