import React, { useState } from 'react';
import {
  Sparkles,
  Mail,
  Linkedin,
  Instagram,
  MessageCircle,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent, email: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      const mailtoLink = `mailto:${PERSONAL_INFO.contact.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry for Joseph Levi'
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
    }, 600);
  };

  const contactOptions = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      description: 'Add me on WhatsApp',
      actionText: 'Contact on WhatsApp',
      url: PERSONAL_INFO.contact.whatsapp,
      isMailto: false,
      ariaLabel: 'Contact me on WhatsApp',
      icon: MessageCircle,
      accentGlow: 'hover:shadow-[0_0_25px_rgba(34,197,94,0.25)] hover:border-emerald-500/50',
      iconBg: 'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950',
      badge: 'Direct Chat'
    },
    {
      id: 'email',
      name: 'Email',
      description: PERSONAL_INFO.contact.email,
      actionText: 'Send me an email',
      url: `mailto:${PERSONAL_INFO.contact.email}`,
      isMailto: true,
      ariaLabel: 'Send me an email',
      icon: Mail,
      accentGlow: 'hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:border-blue-500/50',
      iconBg: 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-slate-950',
      badge: 'mailto:'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      description: 'Connect with me on LinkedIn',
      actionText: 'Visit LinkedIn Profile',
      url: PERSONAL_INFO.contact.linkedin,
      isMailto: false,
      ariaLabel: 'Visit my LinkedIn profile',
      icon: Linkedin,
      accentGlow: 'hover:shadow-[0_0_25px_rgba(14,165,233,0.25)] hover:border-sky-500/50',
      iconBg: 'bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950',
      badge: 'Professional Network'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      description: 'Follow me on Instagram',
      actionText: 'Visit Instagram Profile',
      url: PERSONAL_INFO.contact.instagram,
      isMailto: false,
      ariaLabel: 'Visit my Instagram profile',
      icon: Instagram,
      accentGlow: 'hover:shadow-[0_0_25px_rgba(236,72,153,0.25)] hover:border-pink-500/50',
      iconBg: 'bg-pink-500/10 text-pink-400 group-hover:bg-pink-500 group-hover:text-slate-950',
      badge: 'Creative Feed'
    }
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-[#050811] relative border-t border-slate-800/80 overflow-hidden"
    >
      {/* Background Gradients & Subtle Blue Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/50 text-xs font-mono text-blue-300 mb-4 shadow-md backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Official Outreach Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Have a project, collaboration, creative idea, or technology opportunity? Let's talk.
          </p>
        </div>

        {/* 4 Official Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <a
                key={option.id}
                href={option.url}
                target={option.isMailto ? '_self' : '_blank'}
                rel={option.isMailto ? undefined : 'noopener noreferrer'}
                aria-label={option.ariaLabel}
                className={`group relative p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-md transition-all duration-300 flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#050811] ${option.accentGlow}`}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${option.iconBg}`}
                    >
                      <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>

                    <span className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-400 border border-slate-700/60 group-hover:border-slate-600 transition-colors">
                      {option.badge}
                    </span>
                  </div>

                  {/* Label & Description */}
                  <div className="space-y-1 mb-6">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {option.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium leading-snug break-all">
                      {option.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Interactive CTA */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                  <span>{option.actionText}</span>
                  {option.id === 'email' ? (
                    <button
                      onClick={(e) => handleCopyEmail(e, PERSONAL_INFO.contact.email)}
                      className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                      title="Copy email address"
                      aria-label="Copy email address"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  )}
                </div>
              </a>
            );
          })}
        </div>

        {/* Supplementary Section: Printable Resume & Direct Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-8 border-t border-slate-800/60">
          {/* Printable Resume CTA Banner */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border border-blue-800/40 shadow-xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Need a Formal Dossier?</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Download my structured printable resume detailing complete career history, AI product architecture milestones, and technical capabilities.
              </p>
            </div>

            <button
              onClick={onOpenResume}
              className="w-full py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-slate-700 transition-all flex items-center justify-center gap-2 group shadow-sm"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>View & Printable PDF Resume</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Optional Direct Inquiry Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-xl">
            <h3 className="text-lg font-bold text-white mb-1">Send a Direct Message</h3>
            <p className="text-xs text-slate-400 mb-6">
              Prefer submitting a note online? Fill out the fields below and it will initialize your mail client directly.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-800/50 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <div className="text-base font-bold text-white">Message Dispatched!</div>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Your default email client has been initialized with your note. You can also reach me directly at{' '}
                  <span className="font-mono text-emerald-300">{PERSONAL_INFO.contact.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors mt-2"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Taylor"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Subject / Topic *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Role Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your product, project idea, or collaboration..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Initializing Mailer...</span>
                  ) : (
                    <>
                      <span>Transmit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
