import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FeaturedWorkSection } from './components/FeaturedWorkSection';
import { CreativeWorkSection } from './components/CreativeWorkSection';
import { MotionDesignSection } from './components/MotionDesignSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ProcessSection } from './components/ProcessSection';
import { SkillsSection } from './components/SkillsSection';
import { WritingSection } from './components/WritingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ArticleModal } from './components/ArticleModal';
import { ResumeModal } from './components/ResumeModal';
import { MediaViewerModal } from './components/MediaViewerModal';
import { PROJECTS, ARTICLES } from './data/portfolioData';
import { Project, Article, CreativeItem, MotionProject } from './types';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [selectedMediaItem, setSelectedMediaItem] = useState<{
    item: CreativeItem | MotionProject | null;
    type: 'creative' | 'motion' | null;
  }>({ item: null, type: null });

  const selectedProject: Project | null = selectedProjectId
    ? PROJECTS.find((p) => p.id === selectedProjectId) || null
    : null;

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Top Fixed Navigation */}
      <Navbar
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          onSelectProject={(id) => setSelectedProjectId(id)}
        />

        {/* 2. About & Career Progression */}
        <AboutSection onOpenResume={() => setResumeModalOpen(true)} />

        {/* 3. Featured Work (SEEMIGO Flagship + RoutePal, Steadfast, Flyibat) */}
        <FeaturedWorkSection
          onSelectProject={(id) => setSelectedProjectId(id)}
        />

        {/* 4. Creative Work Archive (Flyibat, Steadfast, XSight, KJW25Media) */}
        <CreativeWorkSection
          onSelectItem={(item) => setSelectedMediaItem({ item, type: 'creative' })}
        />

        {/* 5. Motion Design Showcase (Motion Ads, Steadfast Motion, Promo Reels) */}
        <MotionDesignSection
          onSelectMotion={(item) => setSelectedMediaItem({ item, type: 'motion' })}
        />

        {/* 6. Deep-Dive Case Studies */}
        <CaseStudiesSection onSelectProject={(id) => setSelectedProjectId(id)} />

        {/* 7. Process Lifecycle (Discover, Design, Build, Deploy, Improve) */}
        <ProcessSection />

        {/* 8. Demonstrated Capabilities & Skills (Evidence-based, no percentage bars) */}
        <SkillsSection />

        {/* 9. Writing & Thought Leadership */}
        <WritingSection onSelectArticle={(article) => setSelectedArticle(article)} />

        {/* 10. Authentic Testimonials */}
        <TestimonialsSection />

        {/* 11. Contact & Outreach Section */}
        <ContactSection onOpenResume={() => setResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Deep-Dive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />

      {/* Article Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* High-Fidelity Media Viewer Modal for Creative & Motion Assets */}
      <MediaViewerModal
        item={selectedMediaItem.item}
        type={selectedMediaItem.type}
        onClose={() => setSelectedMediaItem({ item: null, type: null })}
      />

      {/* Interactive Printable Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
