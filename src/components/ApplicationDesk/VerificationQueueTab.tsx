import React from 'react';
import {
  CheckSquare,
  ShieldCheck,
  AlertCircle,
  Clock,
  UserCheck,
  Building2,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { ProgrammeRequirement, UpdateMonitorItem } from '../../types/applicationDesk';

interface VerificationQueueTabProps {
  requirements: ProgrammeRequirement[];
  updates: UpdateMonitorItem[];
  onSelectTab: (tab: any) => void;
  isAdmin: boolean;
}

export const VerificationQueueTab: React.FC<VerificationQueueTabProps> = ({
  requirements,
  updates,
  onSelectTab,
  isAdmin
}) => {
  const pendingUpdates = updates.filter((u) => u.status === 'UPDATE_DETECTED');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <CheckSquare className="w-5 h-5 text-indigo-400" />
          Verification Queue & Knowledge Audits
        </h3>
        <p className="text-xs text-slate-400">
          Central queue tracking verified university records, pending updates, and specialist audit status.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="text-xs font-mono text-slate-400">Verified Knowledge Nodes</div>
          <div className="text-2xl font-extrabold text-emerald-400 font-mono mt-1">
            {requirements.length} Programmes
          </div>
          <div className="text-[11px] text-slate-400 mt-2 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Active & verified
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="text-xs font-mono text-slate-400">Pending Monitor Updates</div>
          <div className="text-2xl font-extrabold text-amber-400 font-mono mt-1">
            {pendingUpdates.length} Change Alerts
          </div>
          <button
            onClick={() => onSelectTab('update_monitor')}
            className="text-[11px] font-mono text-indigo-400 hover:text-indigo-300 mt-2 flex items-center gap-1 font-semibold hover:underline"
          >
            <span>Review Monitor Queue</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="text-xs font-mono text-slate-400">System Source Coverage</div>
          <div className="text-2xl font-extrabold text-indigo-400 font-mono mt-1">
            100% Registered
          </div>
          <div className="text-[11px] text-slate-400 mt-2">
            Finland & Austria official portals
          </div>
        </div>
      </div>

      {/* Verification List */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
        <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-300 font-bold">
          Knowledge Node Audit Matrix
        </h4>

        <div className="space-y-3">
          {requirements.map((req) => (
            <div
              key={req.id}
              className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <div className="text-xs font-bold text-white">{req.programmeName}</div>
                <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-2">
                  <span>{req.universityName}</span>
                  <span>•</span>
                  <span className="font-mono text-indigo-400">{req.knowledgeVersion}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono text-slate-400">
                  Verified: {req.lastVerifiedDate}
                </span>

                <button
                  onClick={() => onSelectTab('requirements')}
                  className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
                >
                  View Requirements
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
