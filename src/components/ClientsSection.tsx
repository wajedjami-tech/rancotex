import React, { useState } from 'react';
import { 
  Quote, Star, ChevronLeft, ChevronRight, Award, 
  ShieldCheck, Globe, ArrowUpRight 
} from 'lucide-react';
import { RANCOTEX_DATA } from '../data/rancotexData';

interface ClientsSectionProps {
  onOpenInquiry: (subject?: string) => void;
}

export const ClientsSection: React.FC<ClientsSectionProps> = ({ onOpenInquiry }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = RANCOTEX_DATA.testimonials;

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#020612] text-white relative overflow-hidden border-b border-slate-800/80" id="clients">
      {/* Decorative lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-sky-500"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 font-heading">
              Trusted By Global Retail Brands
            </span>
            <span className="w-6 h-[2px] bg-sky-500"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            Our Clients & Global Partners
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Over 1,450 fashion brands, high-street retailers, and department stores across the UK, Europe, Scandinavia, and North America depend on Rancotex for dependable manufacturing governance.
          </p>
        </div>

        {/* Client Logos Infinite Horizontal Marquee */}
        <div className="mb-20 overflow-hidden relative py-6 border-y border-slate-800/80 bg-[#040a1c]">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020612] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020612] to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-marquee gap-12 items-center">
            {/* Duplicated for seamless loop */}
            {[...RANCOTEX_DATA.clientLogos, ...RANCOTEX_DATA.clientLogos].map((logo, idx) => (
              <div
                key={idx}
                className="h-16 w-36 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-center filter grayscale hover:grayscale-0 hover:border-sky-500/50 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={logo.img}
                  alt={logo.name}
                  className="max-h-10 max-w-full object-contain filter brightness-125"
                  onError={(e) => {
                    // graceful text fallback
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#071330] to-[#040a1b] border border-slate-700/80 shadow-2xl">
            {/* Quote Icon */}
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-6">
              <Quote className="w-6 h-6" />
            </div>

            {/* Quote Text */}
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-light italic text-slate-100 leading-snug">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>

            {/* Author & Controls */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-white font-heading">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-xs text-sky-400 font-semibold">
                  {testimonials[currentTestimonial].title}
                </p>
                <p className="text-[11px] text-slate-400">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <span className="text-xs font-mono text-slate-500 px-2">
                  0{currentTestimonial + 1} / 0{testimonials.length}
                </span>

                <button
                  onClick={nextTestimonial}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Global Hubs Presence Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#060d22] border border-slate-800 text-center">
            <span className="text-2xl font-black text-sky-400 font-heading block">
              Banani, Dhaka
            </span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1 block">
              Merchandising & Sampling HQ
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-[#060d22] border border-slate-800 text-center">
            <span className="text-2xl font-black text-white font-heading block">
              London, United Kingdom
            </span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1 block">
              UK & European Liaison Hub
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-[#060d22] border border-slate-800 text-center">
            <span className="text-2xl font-black text-white font-heading block">
              Helsinki, Finland
            </span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1 block">
              Nordic & Scandinavian Liaison
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
