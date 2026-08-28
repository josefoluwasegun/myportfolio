import React, { useState } from 'react';
import {
  Building2,
  Globe,
  MapPin,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Search,
  Filter,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { University } from '../../types/applicationDesk';

interface UniversitiesTabProps {
  universities: University[];
  onSelectUniversity: (uniId: string) => void;
  isAdmin: boolean;
}

export const UniversitiesTab: React.FC<UniversitiesTabProps> = ({
  universities,
  onSelectUniversity,
  isAdmin
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');

  const countries = Array.from(new Set(universities.map((u) => u.country)));

  const filteredUnis = universities.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === 'all' || u.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Building2 className="w-5 h-5 text-indigo-400" />
            Registered Official Universities ({universities.length})
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Single reusable architecture for international universities and programmes.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search university or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="bg-transparent text-xs text-slate-200 focus:outline-none cursor-pointer"
            >
              <option value="all" className="bg-slate-900 text-slate-200">
                All Countries
              </option>
              {countries.map((c) => (
                <option key={c} value={c} className="bg-slate-900 text-slate-200">
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* University Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredUnis.map((uni) => (
          <div
            key={uni.id}
            className="group rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all p-6 flex flex-col justify-between shadow-xl"
          >
            <div>
              {/* Top Banner & Status */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-indigo-950/80 text-indigo-300 border border-indigo-800/60 text-xs font-mono font-bold">
                  {uni.code}
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800 flex items-center gap-1">
                    <Globe className="w-3 h-3 text-sky-400" />
                    {uni.country}
                  </span>

                  {uni.status === 'verified' ? (
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified {uni.knowledgeVersion}
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800/60 flex items-center gap-1 animate-pulse">
                      <AlertTriangle className="w-3 h-3" />
                      Source Change
                    </span>
                  )}
                </div>
              </div>

              {/* University Title & City */}
              <h4 className="text-lg font-extrabold text-white group-hover:text-indigo-300 transition-colors mb-2">
                {uni.name}
              </h4>

              <div className="flex items-center gap-2 text-xs text-slate-400 mb-5">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{uni.city}, {uni.country}</span>
                <span className="mx-1">•</span>
                <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                <span>{uni.programmeCount} Verified Programmes</span>
              </div>

              {/* Official Links */}
              <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800/90 space-y-2 mb-5">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                  Verified Official Web Source
                </div>
                <div className="flex flex-col gap-1.5 text-xs">
                  <a
                    href={uni.officialAdmissionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 hover:underline flex items-center gap-1.5 font-mono truncate"
                  >
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{uni.officialAdmissionsUrl}</span>
                  </a>
                  <a
                    href={uni.officialPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 hover:underline flex items-center gap-1.5 font-mono truncate"
                  >
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">Portal: {uni.officialPortalUrl}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Meta & Action */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span>Last Verified: {uni.lastVerifiedDate}</span>
              </div>

              <button
                onClick={() => onSelectUniversity(uni.id)}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-md shadow-indigo-600/20"
              >
                <span>Explore Requirements</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
