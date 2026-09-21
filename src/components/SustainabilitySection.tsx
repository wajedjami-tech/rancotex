import React from 'react';
import { 
  Leaf, ShieldCheck, Droplets, Award, Package, 
  RefreshCw, CheckCircle2, ArrowUpRight, Sparkles 
} from 'lucide-react';
import { RANCOTEX_DATA } from '../data/rancotexData';

interface SustainabilitySectionProps {
  onOpenInquiry: (subject?: string) => void;
}

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-24 bg-[#030914] text-white relative overflow-hidden border-b border-slate-800/80" id="sustainability">
      {/* Subtle nature emerald / cyan lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-emerald-500"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-heading">
                ESG & Responsible Manufacturing
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
              Sustainable Production
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              At RANCOTEX, sustainability isn’t just a trend—it’s a commitment. From eco-friendly materials to ethical manufacturing, we prioritize responsible practices at every stage of production to help build a better future for our planet.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry('Sustainable Fabric Sourcing & ESG Compliance')}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-emerald-950 flex items-center gap-2"
          >
            <span>Request ESG Certifications</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Sustainability Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RANCOTEX_DATA.sustainability.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="p-7 rounded-3xl bg-gradient-to-b from-[#061426] to-[#040d1a] border border-slate-800/80 hover:border-emerald-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 p-2.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <img 
                      src={pillar.iconImg} 
                      alt={pillar.title} 
                      className="w-full h-full object-contain filter brightness-125"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="font-mono text-xs text-emerald-400/80 font-bold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-900/60">
                    Pillar 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-heading mb-3 group-hover:text-emerald-400 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Metrics / Guarantee badge */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{pillar.stats}</span>
                </span>
                <span className="text-slate-500 text-[11px] uppercase">Rancotex ESG</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Compliance & Certification Wall */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#06182c] via-[#082038] to-[#06182c] border border-emerald-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 block mb-2">
              Audited Standards & Certifications
            </span>
            <h4 className="text-2xl font-bold text-white font-heading">
              Certified Sustainable Products Meeting Global Standards
            </h4>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed font-light">
              We offer certified production pathways adhering strictly to GOTS (Global Organic Textile Standard), OEKO-TEX® Standard 100, Fair Trade, BCI Cotton, and Recycled Claim Standard (RCS).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-4 py-2 rounded-xl bg-slate-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold font-mono">
              GOTS CERTIFIED
            </span>
            <span className="px-4 py-2 rounded-xl bg-slate-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold font-mono">
              OEKO-TEX® 100
            </span>
            <span className="px-4 py-2 rounded-xl bg-slate-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold font-mono">
              FAIR TRADE
            </span>
            <span className="px-4 py-2 rounded-xl bg-slate-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold font-mono">
              BCI COTTON
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
