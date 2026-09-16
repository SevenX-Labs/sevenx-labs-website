"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Loader2, ArrowUpRight, Send, Briefcase, FileText } from "lucide-react";
import { JobPosition } from "@/lib/data/careers";

interface ApplicationModalProps {
  position: JobPosition | null;
  onClose: () => void;
}

export function ApplicationModal({ position, onClose }: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    portfolioUrl: "",
    githubUrl: "",
    experienceYears: "3-5 years",
    resumeLink: "",
    coverLetter: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!position) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.portfolioUrl.trim()) {
      setErrorMessage("Please fill in all required fields marked with *");
      return;
    }

    setSubmitting(true);
    setErrorMessage(null);

    // Simulate direct email application dispatch or API submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#111116] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 text-white shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={submitting}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
          title="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="text-2xl font-bold font-general uppercase tracking-tight text-white">
                Application Submitted!
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Thank you for applying for the <span className="text-white font-semibold">{position.title}</span> role at SevenX Labs.
              </p>
              <p className="text-xs text-zinc-500">
                Our engineering leadership team will review your profile and reach out to you via <span className="text-blue-400 font-mono">{formData.email}</span> within 48 hours.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-3 bg-white text-black text-xs font-mono font-bold uppercase tracking-wider rounded-full hover:bg-zinc-200 transition cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="space-y-2 pr-8 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-0.5 bg-blue-500/10 border border-blue-500/30 text-[#60A5FA] text-[11px] font-mono font-bold uppercase tracking-wider rounded-full">
                  {position.category}
                </span>
                <span className="text-xs text-zinc-400 font-mono">• {position.location}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold uppercase font-general tracking-tight text-white">
                Apply for {position.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Direct Application to SevenX Labs Engineering Team
              </p>
            </div>

            {errorMessage && (
              <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium">
                {errorMessage}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Tanishka Sharma"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-blue-500 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tanishka@example.com"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-blue-500 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
                    LinkedIn / Portfolio URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-blue-500 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
                    GitHub Profile (Optional)
                  </label>
                  <input
                    type="url"
                    value={formData.githubUrl}
                    onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                    placeholder="https://github.com/yourusername"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-blue-500 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-blue-500 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
                    Resume Link / Google Drive URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.resumeLink}
                    onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                    placeholder="https://drive.google.com/your-resume-pdf"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-blue-500 transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
                  Why do you want to join SevenX Labs? *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  placeholder="Tell us briefly about your favorite project, your tech stack mastery, or what excites you about SevenX Labs..."
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-3.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-blue-500 transition resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={submitting}
                  className="px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#3B82F6] hover:bg-blue-600 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-full transition shadow-lg shadow-blue-500/20 disabled:opacity-50 cursor-pointer active:scale-95"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
