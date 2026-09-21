import React, { useState } from 'react';
import { 
  Cpu, BarChart3, Tablet, CheckCircle2, ArrowUpRight, 
  Layers, Activity, ShieldCheck, MapPin, Sparkles, Database, Wifi
} from 'lucide-react';
import { RANCOTEX_DATA, TechModule } from '../data/rancotexData';

interface TechnologySectionProps {
  onOpenInquiry: (subject?: string) => void;
}

export const TechnologySection: React.FC<TechnologySectionProps> = ({ onOpenInquiry }) => {
  const [selectedTech, setSelectedTech] = useState<string>(RANCOTEX_DATA.technology[0].id);

  const currentModule = RANCOTEX_DATA.technology.find(t => t.id === selectedTech) || RANCOTEX_DATA.technology[0];

  return (
    <section className="py-24 bg-[#030713] text-white relative overflow-hidden border-b border-slate-800/80" id="technology">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-sky-500"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400 font-heading">
                Digital Supply Chain Infrastructure
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
              Technology & Intelligent Tracking
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Replacing opaque legacy sourcing with unified digital telemetry: Dynamics AX ERP, real-time dashboard analytics, and tablet-based inspector geotracking.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry('Technology & Dashboard Integration')}
            className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
          >
            <span>Request Digital Portal Demo</span>
            <ArrowUpRight className="w-4 h-4 text-sky-400" />
          </button>
        </div>

        {/* 3 Tech Pillars Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {RANCOTEX_DATA.technology.map((tech) => {
            const isSelected = selectedTech === tech.id;
            return (
              <button
                key={tech.id}
                onClick={() => setSelectedTech(tech.id)}
                className={`p-6 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#0b1b42] to-[#07112a] border-sky-500 shadow-xl shadow-sky-950/60 -translate-y-1'
                    : 'bg-[#060d20] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 p-2 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                    <img 
                      src={tech.iconImg} 
                      alt={tech.title} 
                      className="w-full h-full object-contain filter brightness-110" 
                    />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    isSelected ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30' : 'bg-slate-900 text-slate-500'
                  }`}>
                    Live System
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white font-heading mb-1">
                    {tech.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {tech.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Dashboard Visualization Screen */}
        <div className="rounded-3xl bg-gradient-to-b from-[#091430] to-[#050b1c] border border-slate-700/80 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Dashboard Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-300">
                SYSTEM TELEMETRY: {currentModule.title}
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                <span>Connected</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-sky-400" />
                <span>Cloud ERP v4.2</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
            {/* Left Specs & Bullet Points (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block mb-1">
                  {currentModule.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {currentModule.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                {currentModule.description}
              </p>

              {/* Key System Capabilities */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Operational Capabilities:
                </div>
                {currentModule.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Live Metrics Visual Card (5 cols) */}
            <div className="lg:col-span-5 bg-[#070e24] border border-slate-700/80 rounded-2xl p-6 shadow-inner space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Performance Benchmarks
                </span>
                <Activity className="w-4 h-4 text-sky-400" />
              </div>

              {/* 3 Metrics */}
              <div className="space-y-4">
                {currentModule.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">{m.label}</span>
                    <span className="text-xl font-black text-sky-400 font-heading">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Tablet QA Geo-Verification Note */}
              <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-500/30 text-xs text-sky-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sky-300">
                  <MapPin className="w-4 h-4" />
                  <span>Verified Geotracked Audits</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Every QA inspection record includes GPS timestamp verification confirming our inspector’s physical presence inside the contracted sewing lines.
                </p>
              </div>

              <button
                onClick={() => onOpenInquiry(`Technology Inquiry: ${currentModule.title}`)}
                className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg shadow-sky-950"
              >
                <span>Request Client Access Credentials</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
