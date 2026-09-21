import React from 'react';
import { 
  CheckCircle2, Compass, Eye, ShieldCheck, 
  ArrowUpRight, Award, Factory, Users, Sparkles 
} from 'lucide-react';
import { RANCOTEX_DATA } from '../data/rancotexData';

interface CompanyIntroProps {
  onLearnMore: () => void;
  onOpenInquiry: (subject?: string) => void;
}

export const CompanyIntro: React.FC<CompanyIntroProps> = ({ onLearnMore, onOpenInquiry }) => {
  const highlights = [
    "21+ Years of Industry Experience (Est. 2005)",
    "Sustainable Global Sourcing & Ethical Compliance",
    "End-to-End Sourcing & Supply Chain Support",
    "In-House Design Studio & 3D Pattern Development",
    "Strict 4-Stage In-House Quality Control & Lab Testing",
    "Fast, Flexible & Trend-Driven Merchandising"
  ];

  return (
    <section className="py-24 bg-[#050b18] text-slate-200 relative overflow-hidden border-b border-slate-800/80">
      {/* Decorative subtle ambient light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[2px] bg-sky-500"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 font-heading">
            Corporate Profile & Heritage
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
              We Provide The Best Textile Industry Solutions Since 2005
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              {RANCOTEX_DATA.company.overview}
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              At RANCOTEX, trust and transparency shape everything we do. Our global retail and high-street fashion partners count on us for ethical sourcing, consistent quality assurance, and proactive communication. By blending innovation with deep market insight, we consistently deliver high-quality solutions that exceed client expectations.
            </p>

            {/* Checklist of Core Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-900/60 border border-slate-800/60 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {/* Mission */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-[#0c1833] border border-slate-800 relative group hover:border-sky-500/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading mb-2">
                  Our Mission
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  "{RANCOTEX_DATA.company.mission}"
                </p>
              </div>

              {/* Vision */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-[#0c1833] border border-slate-800 relative group hover:border-sky-500/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading mb-2">
                  Our Vision
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  "{RANCOTEX_DATA.company.vision}"
                </p>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onLearnMore}
                className="px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold uppercase tracking-wider text-xs shadow-lg shadow-sky-950 transition-colors flex items-center gap-2"
                id="intro-read-more-btn"
              >
                <span>Discover About Rancotex</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenInquiry('Introduction RFP')}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Request Company Profile</span>
              </button>
            </div>
          </div>

          {/* Right Column: Magazine Collage & Factory Visuals */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl">
                <img
                  src="https://rancotex.com/wp-content/uploads/2025/04/2150458973.jpg"
                  alt="Rancotex Garment Testing Lab"
                  className="w-full h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400 block mb-1">
                    Quality Assurance & Lab Testing
                  </span>
                  <p className="text-sm font-bold text-white font-heading">
                    Banani Headquarters & Audited Manufacturing Network in Bangladesh
                  </p>
                </div>
              </div>

              {/* Floating Overlap Card 1: Experience Badge */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-br from-[#0c1b3d] to-[#061024] border border-blue-500/30 p-5 rounded-2xl shadow-2xl backdrop-blur-md hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-sky-500/20 text-sky-400 rounded-xl">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-2xl font-black text-white font-heading block leading-none">
                      21+ Years
                    </span>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      Established 2005
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Overlap Card 2: Clients Metric */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#0c1b3d] to-[#061024] border border-sky-500/30 p-4 rounded-2xl shadow-2xl backdrop-blur-md hidden sm:block max-w-[210px]">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-sky-400" />
                  <span className="text-lg font-black text-white font-heading">
                    1,450+
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-tight">
                  Satisfied international clients trust our expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
