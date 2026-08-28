import React from 'react';
import {
  History,
  GitCommit,
  User,
  Clock,
  CheckCircle2,
  Tag,
  FileCode,
  ShieldCheck
} from 'lucide-react';
import { VersionHistoryRecord } from '../../types/applicationDesk';

interface VersionHistoryTabProps {
  versionHistory: VersionHistoryRecord[];
}

export const VersionHistoryTab: React.FC<VersionHistoryTabProps> = ({ versionHistory }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <History className="w-5 h-5 text-indigo-400" />
          Knowledge Base Version Audit Trail ({versionHistory.length})
        </h3>
        <p className="text-xs text-slate-400">
          Complete, immutable version audit trail tracking every approved source update and requirement modification.
        </p>
      </div>

      {/* Timeline List */}
      <div className="space-y-4">
        {versionHistory.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 shadow-lg"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-indigo-600 text-white font-mono font-bold text-xs">
                  {item.version}
                </span>
                <span className="text-xs font-bold text-white">
                  {item.universityName} — {item.programmeName || 'University Record'}
                </span>
              </div>

              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                <span>{item.timestamp}</span>
              </div>
            </div>

            <p className="text-xs text-slate-200 leading-relaxed font-sans">
              {item.summary}
            </p>

            {item.previousValue && item.newValue && (
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <span className="text-rose-400 font-semibold text-[10px]">PREVIOUS: </span>
                  <span className="text-slate-300">{item.previousValue}</span>
                </div>
                <div>
                  <span className="text-emerald-400 font-semibold text-[10px]">NEW APPROVED: </span>
                  <span className="text-white font-bold">{item.newValue}</span>
                </div>
              </div>
            )}

            <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <User className="w-3 h-3 text-sky-400" />
                Approved by: {item.changedBy}
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                {item.changeType}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
