import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, ShieldCheck, Award, ArrowUpRight, 
  ChevronRight, Play, Globe, CheckCircle2, Sparkles
} from 'lucide-react';
import { RANCOTEX_DATA } from '../data/rancotexData';

interface HeroSectionProps {
  onExploreProducts: () => void;
  onOpenInquiry: (subject?: string) => void;
  onViewServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProducts,
  onOpenInquiry,
  onViewServices
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://rancotex.com/wp-content/uploads/2025/04/2151294550.jpg",
      tag: "Manufacturing Excellence Since 2005",
      title: "We Provide The Best Textile Industry Since 2005",
      subtitle: "Connecting international fashion houses with ethical manufacturing, smart merchandising, and strict in-house quality control in Bangladesh.",
      stat: "21+ Years Heritage"
    },
    {
      image: "https://rancotex.com/wp-content/uploads/2025/04/2150458973.jpg",
      tag: "Next-Gen Supply Intelligence",
      title: "Your Expert Global Sourcing & Production Partner",
      subtitle: "End-to-end supply chain mastery—from digital tech-pack development to real-time tablet QA tracking and seamless international logistics.",
      stat: "1,450+ Global Clients"
    },
    {
      image: "https://rancotex.com/wp-content/uploads/2025/04/2151979250-1.jpg",
      tag: "Sustainable Innovation",
      title: "Sustainable Apparel Built on Circular Fashion & Ethics",
      subtitle: "Organic cotton, recycled polyester, low-impact ozone washing, and 100% fair labor compliance for European, British, and global brands.",
      stat: "100% Audited Ethics"
    }
  ];

  // Auto rotate hero slides slowly
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#030712] text-white">
      {/* Background Images with Crossfade */}
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === activeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform', transitionDuration: '1200ms' }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.08]"
          />
        </div>
      ))}

      {/* Cinematic Gradient Overlays inspired by Together Group Bangladesh */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/90 via-[#030712]/40 to-transparent"></div>
      
      {/* Subtle Cyan / Navy ambient glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-sky-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-700/15 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-28 w-full flex flex-col justify-between min-h-[85vh]">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md text-xs font-semibold text-sky-300 w-fit animate-in fade-in slide-in-from-top-3 duration-500 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
          <span>{heroSlides[activeSlide].tag}</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-300">Dhaka • London • Helsinki</span>
        </div>

        {/* Center Main Headline */}
        <div className="max-w-4xl my-auto pt-8 pb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight leading-[1.08] text-white">
            {heroSlides[activeSlide].title}
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
            {heroSlides[activeSlide].subtitle}
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenInquiry('Hero Consultation RFP')}
              className="px-7 py-4 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 hover:from-sky-400 hover:to-blue-500 text-white font-bold uppercase tracking-wider text-xs sm:text-sm shadow-2xl shadow-sky-950 transition-all duration-200 flex items-center gap-3 group"
              id="hero-primary-cta"
            >
              <span>Partner With Rancotex</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <button
              onClick={onExploreProducts}
              className="px-7 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 text-white border border-slate-700 backdrop-blur-md font-bold uppercase tracking-wider text-xs sm:text-sm transition-all duration-200 flex items-center gap-2.5 group"
              id="hero-explore-products-btn"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-sky-400" />
            </button>

            <button
              onClick={onViewServices}
              className="px-5 py-4 text-xs sm:text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 underline decoration-slate-600 underline-offset-8 hover:decoration-sky-400"
            >
              <span>View Sourcing Services</span>
              <ChevronRight className="w-4 h-4 text-sky-400" />
            </button>
          </div>
        </div>

        {/* Bottom Hero Matrix & Slide Indicators */}
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* 4 Stats Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full lg:w-auto">
            {RANCOTEX_DATA.company.stats.slice(0, 4).map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-sky-400 mt-0.5">
                  {stat.label}
                </span>
                <span className="text-[11px] text-slate-400">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>

          {/* Slide Selector Indicators */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 uppercase tracking-widest font-mono">
              0{activeSlide + 1} / 0{heroSlides.length}
            </span>
            <div className="flex items-center gap-2">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeSlide ? 'w-8 bg-sky-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll down indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-widest text-slate-400">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-sky-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
