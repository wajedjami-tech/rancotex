import React, { useState } from 'react';
import { 
  Briefcase, MapPin, Clock, ArrowUpRight, CheckCircle2, 
  Upload, X, Users, Heart, Award, Sparkles, Send
} from 'lucide-react';
import { RANCOTEX_DATA, JobOpening } from '../data/rancotexData';

export const CareerSection: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantNote, setApplicantNote] = useState('');
  const [fileName, setFileName] = useState('');

  const benefits = [
    { title: "Global Retail Exposure", desc: "Collaborate directly with top fashion buyers in the UK, Europe, Scandinavia, and the US." },
    { title: "Continuous Technical Training", desc: "Hands-on mastery of 3D virtual sampling, Dynamics AX ERP, and modern textile lab instruments." },
    { title: "Competitive Remuneration", desc: "Top-tier salary packages, festival bonuses, medical support, and performance incentives." },
    { title: "Ethical & Safe Workplace", desc: "Modern corporate environment in Banani, Dhaka with zero harassment tolerance and fair labor." }
  ];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationSubmitted(true);
    setTimeout(() => {
      setApplicationSubmitted(false);
      setIsApplying(false);
      setSelectedJob(null);
      setApplicantName('');
      setApplicantEmail('');
      setApplicantNote('');
      setFileName('');
    }, 3000);
  };

  return (
    <section className="py-24 bg-[#040816] text-white relative overflow-hidden border-b border-slate-800/80" id="career">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-sky-500"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 font-heading">
              Join Our Global Team
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            Careers at Rancotex
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Be part of a 21-year legacy revolutionizing apparel sourcing, sustainable supply chains, and digital garment inspection in Bangladesh and international hubs.
          </p>
        </div>

        {/* Culture & Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((b, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#071126] border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs font-mono mb-4">
                  0{idx + 1}
                </span>
                <h4 className="text-base font-bold text-white font-heading mb-2">
                  {b.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Open Job Positions List */}
        <div className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Active Job Openings in Dhaka & Field Hubs:
          </div>

          {RANCOTEX_DATA.careers.map((job) => (
            <div
              key={job.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#08122c] border border-slate-800 hover:border-sky-500/60 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                    {job.title}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-500/20 text-sky-400 border border-sky-500/30">
                    {job.type}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                    <span>{job.department}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{job.location}</span>
                  </span>
                  <span>•</span>
                  <span>Experience: {job.experience}</span>
                </div>

                <p className="text-xs text-slate-300 max-w-2xl pt-1">
                  {job.overview}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedJob(job);
                    setIsApplying(true);
                  }}
                  className="px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-lg shadow-sky-950"
                >
                  <span>Apply Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {isApplying && selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#071330] border border-slate-700 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setIsApplying(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400 block mb-1">
              Job Application
            </span>
            <h3 className="text-xl font-bold text-white font-heading">
              {selectedJob.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1 mb-6">
              {selectedJob.department} • {selectedJob.location}
            </p>

            {applicationSubmitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Application Received!</h4>
                <p className="text-xs text-slate-300">
                  Thank you, {applicantName}. Our HR team will review your qualifications and reach out soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="e.g. Arif Rahman"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="e.g. arif@example.com"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">Resume / CV (PDF/DOC) *</label>
                  <div className="border border-dashed border-slate-700 rounded-xl p-4 text-center hover:border-sky-500 transition-colors cursor-pointer bg-slate-900/60">
                    <input
                      type="file"
                      id="resume-upload"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setFileName(e.target.files[0].name);
                        }
                      }}
                    />
                    <label htmlFor="resume-upload" className="cursor-pointer flex flex-col items-center gap-1.5">
                      <Upload className="w-5 h-5 text-sky-400" />
                      <span className="text-slate-300 font-medium">
                        {fileName ? fileName : 'Click to select resume document'}
                      </span>
                      <span className="text-[10px] text-slate-500">PDF, DOCX up to 10MB</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">Cover Note / Experience Summary</label>
                  <textarea
                    rows={3}
                    value={applicantNote}
                    onChange={(e) => setApplicantNote(e.target.value)}
                    placeholder="Briefly state your relevant experience..."
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-sky-950"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Candidate Profile</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
