import React, { useState } from 'react';
import { 
  ArrowUpRight, Sparkles, Check, TrendingUp, 
  Layers, Clock, ShieldCheck, Palette, Globe, Boxes, Handshake
} from 'lucide-react';
import { RANCOTEX_DATA, WhyPillar } from '../data/rancotexData';

interface WhyRancotexSectionProps {
  onOpenInquiry: (subject?: string) => void;
}

export const WhyRancotexSection: React.FC<WhyRancotexSectionProps> = ({ onOpenInquiry }) => {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[#030816] text-white relative overflow-hidden border-b border-slate-800/80" id="why-rancotex">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-sky-900/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-900/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-sky-500"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400 font-heading">
                Why Partner With Us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
              WHY RANCOTEX
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Eight strategic competitive pillars engineered to give international fashion brands absolute reliability, cost advantage, design velocity, and uncompromising quality.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenInquiry('Why Rancotex Sourcing Advantage')}
              className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <span>Discuss Requirements</span>
              <ArrowUpRight className="w-4 h-4 text-sky-400" />
            </button>
          </div>
        </div>

        {/* 8 Pillar Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RANCOTEX_DATA.whyRancotex.map((pillar, idx) => {
            const isHovered = activePillar === pillar.id;

            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setActivePillar(pillar.id)}
                onMouseLeave={() => setActivePillar(null)}
                className={`relative p-6 sm:p-7 rounded-2xl transition-all duration-300 border flex flex-col justify-between group cursor-default ${
                  isHovered 
                    ? 'bg-gradient-to-b from-[#0b1736] to-[#061026] border-sky-500/60 shadow-2xl shadow-sky-950/50 -translate-y-1' 
                    : 'bg-[#060c1d] border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Top Corner Index */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 p-2.5 rounded-xl bg-slate-900/90 border border-slate-700/70 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-inner">
                    <img 
                      src={pillar.iconImg} 
                      alt={pillar.title} 
                      className="w-full h-full object-contain filter brightness-110"
                      onError={(e) => {
                        // fallback if blocked
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="font-mono text-xs text-slate-500 font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white font-heading mb-2.5 group-hover:text-sky-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom decorative accent line */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 group-hover:text-sky-400 transition-colors">
                  <span className="uppercase tracking-wider font-semibold">Rancotex Standard</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#071126] border border-slate-800 flex flex-wrap items-center justify-around gap-6">
          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-black text-sky-400 font-heading block">
              100%
            </span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
              Inspection Transparency
            </span>
          </div>
          <div className="hidden sm:block w-[1px] h-10 bg-slate-800"></div>
          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-black text-white font-heading block">
              AQL 1.5 / 2.5
            </span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
              Accepted Quality Limit
            </span>
          </div>
          <div className="hidden sm:block w-[1px] h-10 bg-slate-800"></div>
          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-heading block">
              Zero Child Labor
            </span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
              Audited Social Compliance
            </span>
          </div>
          <div className="hidden sm:block w-[1px] h-10 bg-slate-800"></div>
          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-black text-sky-400 font-heading block">
              24/7
            </span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
              Merchandising Response
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
