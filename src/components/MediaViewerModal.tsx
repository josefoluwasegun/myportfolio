import React, { useState, useEffect } from 'react';
import {
  X,
  Sparkles,
  Calendar,
  Building2,
  Tag,
  Layers,
  Wrench,
  Lightbulb,
  CheckCircle2,
  ExternalLink,
  Play,
  Film,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { CreativeItem, MotionProject } from '../types';

interface MediaViewerModalProps {
  item: CreativeItem | MotionProject | null;
  type: 'creative' | 'motion' | null;
  onClose: () => void;
}

export const MediaViewerModal: React.FC<MediaViewerModalProps> = ({ item, type, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [imageError, setImageError] = useState<boolean>(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);

  useEffect(() => {
    setActiveImageIndex(0);
    setImageError(false);
    setIsPlayingVideo(false);
  }, [item]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  const isMotion = type === 'motion';
  const creativeItem = !isMotion ? (item as CreativeItem) : null;
  const motionItem = isMotion ? (item as MotionProject) : null;

  const galleryList = creativeItem?.galleryImages && creativeItem.galleryImages.length > 0
    ? creativeItem.galleryImages
    : creativeItem?.mediaUrl
    ? [creativeItem.mediaUrl]
    : [];

  const currentImageUrl = galleryList[activeImageIndex] || creativeItem?.mediaUrl || motionItem?.posterUrl;

  const hasYouTubeVideo = Boolean(motionItem?.youtubeId);

  return (
    <div
      id="media-viewer-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#0d131f] border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/90 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-indigo-600 text-white font-semibold">
                {isMotion ? 'MOTION & VIDEO' : 'CREATIVE & BRAND WORK'}
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {item.client}
              </span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-indigo-400" />
                {item.year}
              </span>
              {isMotion && motionItem?.duration && (
                <span className="text-xs font-mono text-indigo-300 px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-800/40">
                  {motionItem.duration}
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {item.title}
            </h2>
          </div>

          <button
            id="close-media-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-1 text-slate-300">
          {/* Media Presentation Viewport */}
          <div className="relative rounded-2xl bg-black border border-slate-800 overflow-hidden flex flex-col items-center justify-center min-h-[300px] sm:min-h-[420px] shadow-2xl">
            {/* If it's a YouTube Video and player is active */}
            {isMotion && hasYouTubeVideo && (isPlayingVideo || !motionItem?.posterUrl) ? (
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${motionItem?.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={motionItem?.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : isMotion && motionItem?.videoUrl ? (
              /* HTML5 Video Player for Motion Ads & Effect Assets */
              <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden rounded-xl">
                <video
                  src={motionItem.videoUrl}
                  poster={motionItem.posterUrl}
                  controls
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain"
                />
              </div>
            ) : isMotion ? (
              /* Motion Video Poster with YouTube Stream Trigger */
              <div className="relative w-full aspect-video flex items-center justify-center group overflow-hidden bg-slate-950">
                {motionItem?.posterUrl && (
                  <img
                    src={motionItem.posterUrl}
                    alt={motionItem.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60" />

                <div className="relative z-10 flex flex-col items-center gap-3">
                  <button
                    onClick={() => {
                      if (hasYouTubeVideo) {
                        setIsPlayingVideo(true);
                      }
                    }}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-xl shadow-blue-600/50 hover:scale-110 transition-all cursor-pointer"
                    aria-label="Play video"
                  >
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </button>
                  <span className="text-xs font-mono text-slate-200 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-700">
                    {hasYouTubeVideo ? 'Click to Stream YouTube Video' : 'Motion Design Asset'}
                  </span>
                </div>
              </div>
            ) : (
              /* Real Creative Portfolio Image Display */
              <div className="relative w-full flex items-center justify-center p-2 bg-[#090d16]">
                {currentImageUrl && !imageError ? (
                  <div className="relative max-h-[500px] w-full flex items-center justify-center">
                    <img
                      src={currentImageUrl}
                      alt={creativeItem?.title || 'Portfolio creative deliverable'}
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="max-h-[500px] w-auto max-w-full object-contain rounded-xl shadow-lg"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="py-16 px-6 text-center space-y-3">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300 mx-auto">
                      <ImageIcon className="w-8 h-8" />
                    </div>
                    <p className="text-sm text-slate-300 font-semibold">{creativeItem?.title}</p>
                    <p className="text-xs text-slate-400 font-mono">{creativeItem?.client} Deliverable</p>
                  </div>
                )}

                {/* Gallery Navigation Controls for multi-image projects */}
                {galleryList.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : galleryList.length - 1))
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-indigo-600 text-white border border-slate-700 transition-colors shadow-lg"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveImageIndex((prev) => (prev < galleryList.length - 1 ? prev + 1 : 0))
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-indigo-600 text-white border border-slate-700 transition-colors shadow-lg"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-3 right-3 text-[11px] font-mono px-2.5 py-1 rounded bg-black/80 text-white border border-slate-700">
                      {activeImageIndex + 1} / {galleryList.length} Assets
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Multi-Image Thumbnail Strip (if gallery has multiple items) */}
          {!isMotion && galleryList.length > 1 && (
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Asset Gallery ({galleryList.length} Items)
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
                {galleryList.map((imgUrl, idx) => (
                  <button
                    key={imgUrl + idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-indigo-500 ring-2 ring-indigo-500/30 scale-105'
                        : 'border-slate-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Asset thumbnail ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Description & Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
              Project Description & Background
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Deliverables & Deliverable Breakdown (for creative items) */}
          {creativeItem?.deliverables && creativeItem.deliverables.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>Produced Deliverables & Asset Formats</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {creativeItem.deliverables.map((deliv) => (
                  <span
                    key={deliv}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    {deliv}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Insight / Highlight */}
          <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/40 space-y-1.5">
            <div className="text-xs font-mono font-semibold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-indigo-400" />
              <span>Creative & Execution Insight</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isMotion ? motionItem?.highlight : creativeItem?.keyInsight}
            </p>
          </div>

          {/* Tools Used */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-indigo-400" />
              <span>Tools & Creative Technologies</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {item.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs font-mono px-3 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500 hidden sm:inline">
            Joseph Oluwasegun Levi • Creative Technologist Portfolio Archive
          </span>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors ml-auto"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
