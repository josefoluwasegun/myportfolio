import React from 'react';
import { ArrowUp, MessageCircle, Mail, Linkedin, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'WhatsApp',
      url: PERSONAL_INFO.contact.whatsapp,
      icon: MessageCircle,
      ariaLabel: 'Contact me on WhatsApp',
      isMailto: false
    },
    {
      name: 'Email',
      url: `mailto:${PERSONAL_INFO.contact.email}`,
      icon: Mail,
      ariaLabel: 'Send me an email',
      isMailto: true
    },
    {
      name: 'LinkedIn',
      url: PERSONAL_INFO.contact.linkedin,
      icon: Linkedin,
      ariaLabel: 'Visit my LinkedIn profile',
      isMailto: false
    },
    {
      name: 'Instagram',
      url: PERSONAL_INFO.contact.instagram,
      icon: Instagram,
      ariaLabel: 'Visit my Instagram profile',
      isMailto: false
    }
  ];

  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-sky-500 to-indigo-400 flex items-center justify-center font-bold text-white text-xs shadow-md shadow-blue-500/20">
              JL
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-slate-400 font-mono">
                {PERSONAL_INFO.primaryTitle} • {PERSONAL_INFO.supportingTitles.join(' • ')}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#featured-work" className="hover:text-white transition-colors">Featured Work</a>
            <a href="#creative-work" className="hover:text-white transition-colors">Creative Work</a>
            <a href="#motion-design" className="hover:text-white transition-colors">Motion Design</a>
            <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#writing" className="hover:text-white transition-colors">Writing</a>
            <button onClick={onOpenResume} className="hover:text-white transition-colors text-blue-400">Resume</button>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social & Contact Icons + Back to Top */}
          <div className="flex items-center gap-4">
            {/* 4 Social/Contact Icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const IconComp = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.isMailto ? '_self' : '_blank'}
                    rel={social.isMailto ? undefined : 'noopener noreferrer'}
                    aria-label={social.ariaLabel}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-blue-600/20 text-slate-400 hover:text-blue-300 border border-slate-800 hover:border-blue-500/40 transition-all"
                    title={social.ariaLabel}
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.shortName}. All rights reserved. Creative Technologist, AI Product Builder & Full Stack Developer.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-slate-400">Active Status: Open for Product & Engineering Roles</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
