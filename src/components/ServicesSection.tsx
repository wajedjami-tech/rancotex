import React, { useState } from 'react';
import { 
  ArrowUpRight, CheckCircle2, Scissors, Lightbulb, 
  ShieldCheck, FlaskConical, Award, Cpu, ChevronRight, Layers
} from 'lucide-react';
import { RANCOTEX_DATA, ServiceItem } from '../data/rancotexData';

interface ServicesSectionProps {
  onOpenInquiry: (subject?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(RANCOTEX_DATA.services[0].id);

  const activeService = RANCOTEX_DATA.services.find(s => s.id === activeServiceId) || RANCOTEX_DATA.services[0];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors': return <Scissors className="w-5 h-5 text-sky-400" />;
      case 'Lightbulb': return <Lightbulb className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5 text-indigo-400" />;
      case 'Award': return <Award className="w-5 h-5 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-400" />;
      default: return <Scissors className="w-5 h-5 text-sky-400" />;
    }
  };

  // 4-stage sourcing lifecycle pipeline
  const processSteps = [
    { step: "01", title: "Concept & Fabric Sourcing", desc: "Trend evaluation, lab dips, yarn spinning, and 3D digital tech-pack review." },
    { step: "02", title: "Sampling & Cost Optimization", desc: "Proto sampling, fit approval, price breakdown, and vendor selection." },
    { step: "03", title: "Production & In-Line QA", desc: "Continuous tablet-recorded inspections at 4 critical manufacturing gates." },
    { step: "04", title: "AQL Audit & Global Dispatch", desc: "Final pre-shipment sign-off, customs clearance, and global port delivery." }
  ];

  return (
    <section className="py-24 bg-[#050b1a] text-white relative overflow-hidden border-b border-slate-800/80" id="services">
      {/* Ambient background light */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-900/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-sky-500"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 font-heading">
              Comprehensive Sourcing Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Your expert apparel sourcing partner in Bangladesh. We provide complete end-to-end supply chain infrastructure—from trend-driven design and fabric development to rigorous QA and automated ERP logistics.
          </p>
        </div>

        {/* Process Flow Timeline */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-[#08122c] border border-slate-800/80">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-6 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>The Rancotex 4-Stage Sourcing Lifecycle</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map((p, idx) => (
              <div key={idx} className="relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/40 flex items-center justify-center text-xs font-mono font-bold">
                      {p.step}
                    </span>
                    <h4 className="text-sm font-bold text-white font-heading">
                      {p.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Master-Detail Service Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Service Selector Tabs (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
              Select Sourcing Domain
            </div>
            {RANCOTEX_DATA.services.map((service) => {
              const isSelected = activeServiceId === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full p-4 rounded-2xl text-left transition-all duration-200 border flex items-center justify-between gap-4 group ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#0d1f47] to-[#0a1838] border-sky-500 shadow-xl shadow-sky-950/40'
                      : 'bg-[#070e22] border-slate-800/80 hover:bg-[#0a1532] hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-xl border ${
                      isSelected ? 'bg-sky-500/20 border-sky-500/50' : 'bg-slate-900 border-slate-800'
                    }`}>
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold font-heading transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}>
                        {service.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-1">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-sky-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Service Feature Card (7 cols) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#091536] to-[#060e22] border border-slate-700/80 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            {/* Corner Icon */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-sky-500/20 border border-sky-500/40 rounded-2xl text-sky-400">
                  {getServiceIcon(activeService.iconName)}
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-widest text-sky-400 block">
                    {activeService.subtitle}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white font-heading">
                    {activeService.title}
                  </h3>
                </div>
              </div>

              {activeService.iconImg && (
                <div className="hidden sm:block w-12 h-12 p-2 rounded-xl bg-slate-900 border border-slate-700">
                  <img src={activeService.iconImg} alt={activeService.title} className="w-full h-full object-contain filter brightness-110" />
                </div>
              )}
            </div>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light mb-8">
              {activeService.description}
            </p>

            {/* Feature List */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Core Service Deliverables & Standards:
              </div>
              {activeService.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Bottom Sourcing RFP CTA */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Backed by 21+ years of manufacturing governance in Bangladesh.
              </div>
              <button
                onClick={() => onOpenInquiry(`Service Inquiry: ${activeService.title}`)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg shadow-sky-950"
              >
                <span>Inquire About {activeService.title}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
