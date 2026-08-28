import React, { useState, useEffect } from 'react';
import {
  X,
  Building2,
  BookOpen,
  FileCheck,
  Globe,
  AlertTriangle,
  ShieldCheck,
  Printer,
  History,
  Lock,
  Unlock,
  RefreshCw,
  Sparkles,
  Layers,
  CheckCircle2,
  CheckSquare
} from 'lucide-react';
import {
  University,
  Programme,
  ProgrammeRequirement,
  OfficialSource,
  UpdateMonitorItem,
  VersionHistoryRecord,
  ApplicationDeskTab
} from '../../types/applicationDesk';
import { applicationDeskService } from '../../services/applicationDeskService';

import { UniversitiesTab } from './UniversitiesTab';
import { ApplicationGuidesTab } from './ApplicationGuidesTab';
import { RequirementsTab } from './RequirementsTab';
import { OfficialSourcesTab } from './OfficialSourcesTab';
import { UpdateMonitorTab } from './UpdateMonitorTab';
import { VerificationQueueTab } from './VerificationQueueTab';
import { DocumentGeneratorTab } from './DocumentGeneratorTab';
import { VersionHistoryTab } from './VersionHistoryTab';

interface ApplicationDeskModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: ApplicationDeskTab;
}

export const ApplicationDeskModal: React.FC<ApplicationDeskModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'universities'
}) => {
  const [activeTab, setActiveTab] = useState<ApplicationDeskTab>(initialTab);
  const [isAdmin, setIsAdmin] = useState<boolean>(true); // Admin toggle
  const [selectedUniversityId, setSelectedUniversityId] = useState<string | undefined>(undefined);

  // State loaded from applicationDeskService
  const [universities, setUniversities] = useState<University[]>([]);
  const [programmes, setProgrammes] = useState<Programme[]>([]);
  const [requirements, setRequirements] = useState<ProgrammeRequirement[]>([]);
  const [sources, setSources] = useState<OfficialSource[]>([]);
  const [updates, setUpdates] = useState<UpdateMonitorItem[]>([]);
  const [versionHistory, setVersionHistory] = useState<VersionHistoryRecord[]>([]);

  const [notification, setNotification] = useState<string | null>(null);

  const loadData = () => {
    setUniversities(applicationDeskService.getUniversities());
    setProgrammes(applicationDeskService.getProgrammes());
    setRequirements(applicationDeskService.getRequirements());
    setSources(applicationDeskService.getOfficialSources());
    setUpdates(applicationDeskService.getUpdateMonitorItems());
    setVersionHistory(applicationDeskService.getVersionHistory());
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 4000);
  };

  // Run Scheduled Source Check Trigger
  const handleRunSourceCheck = () => {
    const res = applicationDeskService.runSourceChecks();
    loadData();
    showToast(
      `Source check complete! Checked ${res.checkedCount} official sources. ${res.newUpdatesDetected} new update detected in queue!`
    );
    setActiveTab('update_monitor');
  };

  // Approve Change Action
  const handleApproveUpdate = (updateId: string) => {
    const res = applicationDeskService.approveUpdate(updateId, 'Admin (Joseph Levi)');
    if (res.success) {
      loadData();
      showToast(
        `Update approved! Verified Knowledge Base updated and version bumped to ${res.updatedVersion}.`
      );
    }
  };

  // Reject Change Action
  const handleRejectUpdate = (updateId: string) => {
    const success = applicationDeskService.rejectUpdate(updateId, 'Admin (Joseph Levi)');
    if (success) {
      loadData();
      showToast('Source update rejected. Existing verified Knowledge Base remains unchanged.');
    }
  };

  // Reset to default seed
  const handleResetSeed = () => {
    applicationDeskService.resetToDefaultSeed();
    loadData();
    showToast('Knowledge Base reset to default verified seed data.');
  };

  const pendingUpdatesCount = updates.filter((u) => u.status === 'UPDATE_DETECTED').length;

  const tabs: { id: ApplicationDeskTab; label: string; icon: any; badge?: number }[] = [
    { id: 'universities', label: 'Universities', icon: Building2 },
    { id: 'application_guides', label: 'Application Guides', icon: BookOpen },
    { id: 'requirements', label: 'Requirements', icon: FileCheck },
    { id: 'official_sources', label: 'Official Sources', icon: Globe },
    {
      id: 'update_monitor',
      label: 'Update Monitor',
      icon: AlertTriangle,
      badge: pendingUpdatesCount
    },
    { id: 'verification_queue', label: 'Verification Queue', icon: CheckSquare },
    { id: 'document_generator', label: 'Document Generator', icon: Printer },
    { id: 'version_history', label: 'Version History', icon: History }
  ];

  return (
    <div
      id="application-desk-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-7xl bg-[#0a0f1d] border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/90 overflow-hidden flex flex-col max-h-[94vh]">
        {/* Top Bar Header */}
        <div className="p-5 sm:p-7 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-sky-500 to-blue-600 text-white flex items-center justify-center font-extrabold text-lg shadow-lg shadow-indigo-600/30 flex-shrink-0">
              S
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 font-bold uppercase tracking-wider">
                  SOURCE OF TRUTH
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  Living System
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-0.5">
                SEEMIGO Application Desk
              </h2>
            </div>
          </div>

          {/* Right Action Controls: Admin Toggle & Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Admin Authorization Toggle */}
            <button
              onClick={() => setIsAdmin(!isAdmin)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all ${
                isAdmin
                  ? 'bg-indigo-950/80 text-indigo-300 border-indigo-700 shadow-md shadow-indigo-950'
                  : 'bg-slate-900 text-slate-400 border-slate-800'
              }`}
              title="Toggle Admin Privilege Mode"
            >
              {isAdmin ? (
                <>
                  <Unlock className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Admin Mode: Authorized</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5 text-slate-500" />
                  <span>View Mode: Read Only</span>
                </>
              )}
            </button>

            <button
              onClick={handleRunSourceCheck}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-md shadow-indigo-600/20"
              title="Run automated check across registered official sources"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Check Official Sources</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Strip */}
        <div className="flex items-center gap-1 px-4 sm:px-6 py-2.5 bg-slate-900/90 border-b border-slate-800 overflow-x-auto text-xs font-medium text-slate-400 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/30'
                    : 'hover:text-white hover:bg-slate-800/80 text-slate-300'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-indigo-400'}`} />
                <span>{tab.label}</span>
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className="px-1.5 py-0.5 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] font-mono animate-pulse">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Notification Toast */}
        {notification && (
          <div className="mx-6 mt-4 p-3.5 rounded-xl bg-indigo-950 border border-indigo-500/50 text-indigo-200 text-xs font-mono flex items-center justify-between shadow-lg animate-in fade-in duration-150">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              {notification}
            </span>
            <button
              onClick={() => setNotification(null)}
              className="text-slate-400 hover:text-white text-xs font-bold"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Scrollable Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-8 flex-1 text-slate-300">
          {activeTab === 'universities' && (
            <UniversitiesTab
              universities={universities}
              onSelectUniversity={(uniId) => {
                setSelectedUniversityId(uniId);
                setActiveTab('requirements');
              }}
              isAdmin={isAdmin}
            />
          )}

          {activeTab === 'application_guides' && (
            <ApplicationGuidesTab
              requirements={requirements}
              universities={universities}
            />
          )}

          {activeTab === 'requirements' && (
            <RequirementsTab
              requirements={requirements}
              universities={universities}
              selectedUniversityId={selectedUniversityId}
            />
          )}

          {activeTab === 'official_sources' && (
            <OfficialSourcesTab
              sources={sources}
              onTriggerCheck={handleRunSourceCheck}
              isAdmin={isAdmin}
            />
          )}

          {activeTab === 'update_monitor' && (
            <UpdateMonitorTab
              updates={updates}
              onApprove={handleApproveUpdate}
              onReject={handleRejectUpdate}
              isAdmin={isAdmin}
            />
          )}

          {activeTab === 'verification_queue' && (
            <VerificationQueueTab
              requirements={requirements}
              updates={updates}
              onSelectTab={(tab) => setActiveTab(tab)}
              isAdmin={isAdmin}
            />
          )}

          {activeTab === 'document_generator' && (
            <DocumentGeneratorTab
              universities={universities}
              requirements={requirements}
            />
          )}

          {activeTab === 'version_history' && (
            <VersionHistoryTab versionHistory={versionHistory} />
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Seemigo Knowledge System • Finland & Austria Living Database</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleResetSeed}
              className="text-slate-500 hover:text-slate-300 transition-colors text-[11px] underline"
            >
              Reset Seed Data
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
            >
              Close Desk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
