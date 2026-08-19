import React, { useState } from 'react';
import {
  Sparkles,
  Filter,
  Image as ImageIcon,
  ArrowRight,
  Layers,
  Calendar,
  Building2,
  CheckCircle2,
  ExternalLink,
  Grid
} from 'lucide-react';
import { CREATIVE_WORK } from '../data/portfolioData';
import { CreativeItem } from '../types';

interface CreativeWorkSectionProps {
  onSelectItem: (item: CreativeItem) => void;
}

export const CreativeWorkSection: React.FC<CreativeWorkSectionProps> = ({ onSelectItem }) => {
  const [selectedClient, setSelectedClient] = useState<string>('All');
  const [selectedGroup, setSelectedGroup] = useState<string>('All');

  const clients = [
    'All',
    'Flyibat Travel',
    'Steadfast International',
    'XSight Entertainment',
    'KJW25MEDIA'
  ];

  // Get available groups based on selected client
  const availableGroups = [
    'All',
    ...Array.from(
      new Set(
        CREATIVE_WORK.filter((item) => selectedClient === 'All' || item.client === selectedClient).map(
          (item) => item.group
        )
      )
    )
  ];

  const filteredItems = CREATIVE_WORK.filter((item) => {
    const matchClient = selectedClient === 'All' || item.client === selectedClient;
    const matchGroup = selectedGroup === 'All' || item.group === selectedGroup;
    return matchClient && matchGroup;
  });

  return (
    <section id="creative-work" className="py-24 bg-[#0b0f17] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/50 text-xs font-mono text-indigo-300 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Design & Visual Archive</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Professional Creative Work
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md">
            Selected brand identity, destination campaigns, corporate publishing, special creatives, and promotional designs from Flyibat, Steadfast, XSight, and KJW25Media.
          </p>
        </div>

        {/* Client Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6 pb-2">
          <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-indigo-400" />
            Client:
          </span>
          {clients.map((client) => (
            <button
              key={client}
              onClick={() => {
                setSelectedClient(client);
                setSelectedGroup('All');
              }}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all ${
                selectedClient === client
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 font-semibold'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {client}
            </button>
          ))}
        </div>

        {/* Sub-Group Filter Pills */}
        {availableGroups.length > 2 && (
          <div className="flex flex-wrap items-center gap-1.5 mb-10 pb-4 border-b border-slate-800/80">
            <span className="text-[11px] font-mono text-slate-400 mr-2 flex items-center gap-1">
              <Filter className="w-3 h-3 text-indigo-400" />
              Category:
            </span>
            {availableGroups.map((grp) => (
              <button
                key={grp}
                onClick={() => setSelectedGroup(grp)}
                className={`px-3 py-1 text-[11px] font-mono rounded-lg transition-all ${
                  selectedGroup === grp
                    ? 'bg-indigo-950 text-indigo-300 border border-indigo-700 font-semibold'
                    : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 border border-slate-800/60'
                }`}
              >
                {grp}
              </button>
            ))}
          </div>
        )}

        {/* Creative Works Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const assetCount = item.galleryImages?.length || 1;
            return (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="bg-slate-900/80 rounded-2xl border border-slate-800/90 hover:border-indigo-500/50 transition-all hover:shadow-xl hover:shadow-indigo-500/5 overflow-hidden flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Real Image Thumbnail or Graphic Viewport */}
                  <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden border-b border-slate-800/80">
                    {item.thumbnailUrl || item.mediaUrl ? (
                      <img
                        src={item.thumbnailUrl || item.mediaUrl}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${
                            item.gradientTheme || 'from-indigo-900/30 to-slate-900'
                          } opacity-50`}
                        />
                        <div className="relative z-10 space-y-2">
                          <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 mx-auto">
                            <ImageIcon className="w-5 h-5" />
                          </div>
                          <span className="text-[11px] font-mono text-indigo-300 block uppercase tracking-wider">
                            {item.group}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Gradient Overlay for Title Clarity */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/30 pointer-events-none" />

                    {/* Multi-asset badge */}
                    {assetCount > 1 && (
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-mono text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5 shadow-md">
                        <Grid className="w-3 h-3 text-indigo-400" />
                        <span>{assetCount} Assets</span>
                      </div>
                    )}

                    {/* Client & Group Pill */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-900/90 text-slate-200 border border-slate-700 backdrop-blur-sm">
                        {item.client}
                      </span>
                      <span className="text-[11px] font-mono text-slate-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider">
                      {item.group}
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {/* Deliverables tags */}
                    {item.deliverables && (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {item.deliverables.slice(0, 3).map((deliv) => (
                          <span
                            key={deliv}
                            className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                          >
                            {deliv}
                          </span>
                        ))}
                        {item.deliverables.length > 3 && (
                          <span className="text-[10px] px-1.5 py-0.5 text-slate-500">
                            +{item.deliverables.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs border-t border-slate-800/60 mx-5">
                  <span className="text-[11px] font-mono text-slate-500">
                    {item.tools[0]} • {item.tools[1] || 'Design'}
                  </span>
                  <span className="font-semibold text-indigo-400 group-hover:text-indigo-300 flex items-center gap-1">
                    <span>Inspect Assets</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
