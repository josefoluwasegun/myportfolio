import React from 'react';
import {
  AlertTriangle,
  Check,
  X,
  ExternalLink,
  Calendar,
  Clock,
  ArrowRight,
  ShieldAlert,
  Info,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { UpdateMonitorItem } from '../../types/applicationDesk';

interface UpdateMonitorTabProps {
  updates: UpdateMonitorItem[];
  onApprove: (updateId: string) => void;
  onReject: (updateId: string) => void;
  isAdmin: boolean;
}

export const UpdateMonitorTab: React.FC<UpdateMonitorTabProps> = ({
  updates,
  onApprove,
  onReject,
  isAdmin
}) => {
  const pendingUpdates = updates.filter((u) => u.status === 'UPDATE_DETECTED');
  const processedUpdates = updates.filter((u) => u.status !== 'UPDATE_DETECTED');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-800/40 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-400">
          <AlertTriangle className="w-4 h-4 animate-bounce" />
          CHANGE DETECTION MONITOR & VERIFICATION QUEUE
        </div>
        <h3 className="text-xl font-extrabold text-white">
          Source Update Queue ({pendingUpdates.length} Pending Review)
        </h3>
        <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
          When official university pages update, changes are quarantined in this monitor.
          <strong className="text-amber-300"> Information is NEVER automatically overwritten.</strong> Only Admin-approved updates enter the verified Knowledge Base.
        </p>
      </div>

      {/* Pending Updates Section */}
      <div className="space-y-4">
        <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-400" />
          1. Detected Source Changes Awaiting Review
        </h4>

        {pendingUpdates.length === 0 ? (
          <div className="p-8 text-center rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-400 text-xs">
            No pending update alerts. All official sources match the verified Knowledge Base.
          </div>
        ) : (
          <div className="space-y-4">
            {pendingUpdates.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-slate-900/90 border border-amber-500/40 shadow-2xl space-y-5 relative overflow-hidden"
              >
                {/* Accent stripe */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500" />

                {/* Top Meta */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 font-bold uppercase">
                      UPDATE DETECTED
                    </span>
                    <span className="ml-2 text-xs font-bold text-white">
                      {item.universityName} — {item.programmeName || 'University-Wide'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Detected: {item.dateDetected}</span>
                  </div>
                </div>

                {/* Field & Source Info */}
                <div>
                  <div className="text-xs font-mono text-slate-400">Target Requirement Field:</div>
                  <div className="text-sm font-extrabold text-white mt-0.5">{item.fieldName}</div>

                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 hover:underline font-mono mt-2"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Source: {item.sourceTitle} ({item.sourceUrl})</span>
                  </a>
                </div>

                {/* Diff Visualizer */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-950 border border-rose-900/40 space-y-1">
                    <div className="text-[11px] font-mono text-rose-400 uppercase font-semibold">
                      Previous Verified Information
                    </div>
                    <div className="text-xs text-slate-300 font-mono leading-relaxed">
                      {item.previousValue}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-emerald-900/40 space-y-1">
                    <div className="text-[11px] font-mono text-emerald-400 uppercase font-semibold">
                      New Information Detected from Official Page
                    </div>
                    <div className="text-xs text-white font-mono font-bold leading-relaxed">
                      {item.newValue}
                    </div>
                  </div>
                </div>

                {/* Admin Actions */}
                {isAdmin ? (
                  <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                    <div className="text-xs text-slate-400 italic">
                      Approving will update the Knowledge Base and bump version number.
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onReject(item.id)}
                        className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-rose-300 bg-rose-950/80 hover:bg-rose-900 rounded-xl border border-rose-800/80 transition-all"
                      >
                        <X className="w-4 h-4" />
                        <span>REJECT</span>
                      </button>

                      <button
                        onClick={() => onApprove(item.id)}
                        className="flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-lg shadow-emerald-600/30"
                      >
                        <Check className="w-4 h-4" />
                        <span>APPROVE & PUBLISH</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 text-center">
                    Authorized Admin access required to approve or reject queue updates.
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Processed Update Audit History */}
      {processedUpdates.length > 0 && (
        <div className="space-y-4 pt-4 border-t border-slate-800">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
            2. Recently Processed Updates ({processedUpdates.length})
          </h4>

          <div className="space-y-3">
            {processedUpdates.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs"
              >
                <div>
                  <div className="font-bold text-slate-200">
                    {item.universityName} — {item.fieldName}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Reviewed by {item.reviewedBy || 'Admin'} at {item.reviewedAt}
                  </div>
                </div>

                {item.status === 'APPROVED' ? (
                  <span className="px-3 py-1 rounded-md bg-emerald-950 text-emerald-300 border border-emerald-800 text-[11px] font-mono font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    APPROVED
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-md bg-rose-950 text-rose-300 border border-rose-800 text-[11px] font-mono font-bold flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5 text-rose-400" />
                    REJECTED
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
