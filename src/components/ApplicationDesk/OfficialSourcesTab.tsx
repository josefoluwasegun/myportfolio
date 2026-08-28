import React from 'react';
import {
  Globe,
  ExternalLink,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ShieldCheck,
  Database
} from 'lucide-react';
import { OfficialSource } from '../../types/applicationDesk';

interface OfficialSourcesTabProps {
  sources: OfficialSource[];
  onTriggerCheck: () => void;
  isAdmin: boolean;
}

export const OfficialSourcesTab: React.FC<OfficialSourcesTabProps> = ({
  sources,
  onTriggerCheck,
  isAdmin
}) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Globe className="w-5 h-5 text-indigo-400" />
            Registered Official University Sources ({sources.length})
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Automated scheduled monitors tracking official university admissions portals and policy URLs.
          </p>
        </div>

        {isAdmin && (
          <button
            onClick={onTriggerCheck}
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-md shadow-indigo-600/20"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Run Scheduled Source Check</span>
          </button>
        )}
      </div>

      {/* Sources Table */}
      <div className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-950 text-slate-400 font-mono border-b border-slate-800 uppercase tracking-wider">
                <th className="py-3.5 px-5">Source Title & Category</th>
                <th className="py-3.5 px-5">Official URL</th>
                <th className="py-3.5 px-5">Check Frequency</th>
                <th className="py-3.5 px-5">Last Checked</th>
                <th className="py-3.5 px-5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {sources.map((src) => (
                <tr key={src.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-5">
                    <div className="font-bold text-white">{src.title}</div>
                    <div className="text-[10px] font-mono text-indigo-400 mt-0.5">
                      {src.sourceType}
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:text-sky-300 flex items-center gap-1.5 font-mono max-w-xs truncate hover:underline"
                    >
                      <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{src.url}</span>
                    </a>
                  </td>
                  <td className="py-4 px-5 font-mono text-slate-400">
                    Every {src.checkIntervalDays} Days
                  </td>
                  <td className="py-4 px-5 font-mono text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{src.lastCheckedDate}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    {src.status === 'active' ? (
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                        <CheckCircle2 className="w-3 h-3" />
                        Active & Synced
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] px-2.5 py-1 rounded-full bg-amber-950 text-amber-300 border border-amber-800 animate-pulse">
                        <AlertTriangle className="w-3 h-3" />
                        Change Detected
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
