import React from 'react';
import { 
  Award, ShieldCheck, Heart, Leaf, Users, Clock, 
  CheckCircle2, Compass, Eye, ArrowUpRight, Globe
} from 'lucide-react';
import { RANCOTEX_DATA } from '../data/rancotexData';

interface AboutSectionProps {
  onOpenInquiry: (subject?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenInquiry }) => {
  const milestones = [
    { year: "2005", title: "Foundation in Dhaka", desc: "Rancotex was established as an apparel sourcing agency connecting European retail with Bangladeshi knitwear mills." },
    { year: "2012", title: "In-House QA Lab Expansion", desc: "Commissioned dedicated tensile, wash-fastness, and color-matching spectrophotometer lab facilities in Banani." },
    { year: "2018", title: "UK & Nordic Liaison Hubs", desc: "Opened corporate liaison offices in London (Sipson) and Helsinki (Vantaa) for direct customer merchandising." },
    { year: "2022", title: "ERP & Tablet QA Automation", desc: "Integrated Microsoft Dynamics AX with geotracked tablet inspection apps across all contracted factories." },
    { year: "2026", title: "21+ Years of Leadership", desc: "Serving 1,450+ international clients with 100% audited social compliance and GOTS/OEKO-TEX certified lines." }
  ];

  const values = [
    { title: "Customer Satisfaction", desc: "Going beyond vendor relationships to become genuine strategic sourcing partners." },
    { title: "In-Time Merchandising", desc: "24/7 dedicated account response and predictive Time & Action critical paths." },
    { title: "Reliable Product Quality", desc: "Zero tolerance for compromises; four-stage in-line QA with strict AQL standards." },
    { title: "Professional Ethics & Integrity", desc: "Radical transparency in costing, social compliance, and fair labor practices." },
    { title: "Collaborative Teamwork", desc: "Harmonizing fabric mills, pattern designers, technical technicians, and buyers." },
    { title: "Environmental Stewardship", desc: "Pioneering organic cotton, recycled polyester, and low-water garment washing." }
  ];

  return (
    <section className="py-24 bg-[#040816] text-white relative overflow-hidden border-b border-slate-800/80" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-sky-500"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 font-heading">
              Our Heritage & Philosophy
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            About RANCOTEX
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {RANCOTEX_DATA.company.overview}
          </p>
        </div>

        {/* Narrative & Photo Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-5 text-sm text-slate-300 leading-relaxed font-light">
            <h3 className="text-2xl font-bold text-white font-heading">
              A 21-Year Legacy of Ethical Apparel Sourcing
            </h3>
            <p>
              {RANCOTEX_DATA.company.coreValue}
            </p>
            <p>
              Headquartered in Banani, Dhaka with overseas offices in London and Helsinki, Rancotex operates as an agile bridge between visionary fashion brands and certified manufacturing hubs in Bangladesh.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenInquiry('About Page - Corporate Partnership')}
                className="px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-lg shadow-sky-950"
              >
                <span>Partner With Our Leadership</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://rancotex.com/wp-content/uploads/2025/04/2151294550.jpg"
                alt="Rancotex Textile Facility"
                className="rounded-2xl object-cover h-56 w-full border border-slate-700 shadow-xl"
              />
              <div className="p-5 rounded-2xl bg-[#08122c] border border-slate-800">
                <span className="text-2xl font-black text-sky-400 font-heading block">
                  1,450+
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  Satisfied Global Clients
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-5 rounded-2xl bg-[#08122c] border border-slate-800">
                <span className="text-2xl font-black text-white font-heading block">
                  99.4%
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  On-Time Delivery Rate
                </span>
              </div>
              <img
                src="https://rancotex.com/wp-content/uploads/2025/04/2151979250-1.jpg"
                alt="Sustainable Garments"
                className="rounded-2xl object-cover h-56 w-full border border-slate-700 shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Corporate Values Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block mb-2">
              The Principles That Guide Us
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Our Core Values
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#071126] border border-slate-800 hover:border-sky-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-mono font-bold text-xs mb-3">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-white font-heading mb-2">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Milestones */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block mb-2">
              Our Journey (2005 - 2026)
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              21+ Years of Innovation
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#08122a] border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-black text-sky-400 font-mono block mb-2">
                    {m.year}
                  </span>
                  <h4 className="text-sm font-bold text-white font-heading mb-2">
                    {m.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
