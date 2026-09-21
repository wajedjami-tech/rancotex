import React, { useState } from 'react';
import { 
  ArrowUp, Mail, Phone, MapPin, Globe, ArrowUpRight, 
  ShieldCheck, Leaf, Award, CheckCircle2, Send
} from 'lucide-react';
import { RANCOTEX_DATA } from '../data/rancotexData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenInquiry: (subject?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenInquiry }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#02050e] text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Top Callout / Banner */}
        <div className="bg-gradient-to-r from-[#06122d] via-[#091b40] to-[#06122d] border border-blue-900/40 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-500/20 text-sky-400 border border-sky-500/30 mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>International Buying House & Sourcing Partner</span>
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white font-heading tracking-tight leading-snug">
              Elevate Your Global Sourcing Strategy With Rancotex
            </h3>
            <p className="mt-3 text-slate-300 text-sm md:text-base leading-relaxed">
              Connect with our merchandising specialists in Dhaka, London, or Helsinki to discuss custom tech-pack developments, competitive costing, and ethical manufacturing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <button
              onClick={() => onOpenInquiry('Footer Sourcing Consultation')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold uppercase tracking-wider text-xs md:text-sm shadow-xl shadow-sky-950/60 transition-all flex items-center justify-center gap-2"
              id="footer-quote-btn"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/8801707325717?text=Hello%20Rancotex%2C%20I%20would%20like%20to%20inquire%20about%20apparel%20sourcing."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-500/40 font-bold uppercase tracking-wider text-xs md:text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>WhatsApp Direct</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 4-Column Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Heritage (2 cols wide on LG) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-white rounded-lg">
                <img 
                  src={RANCOTEX_DATA.logos.main} 
                  alt="RANCOTEX" 
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-white text-lg font-heading tracking-tight block">
                  {RANCOTEX_DATA.company.name}
                </span>
                <span className="text-[11px] text-sky-400 font-semibold tracking-wider uppercase">
                  Est. 2005 • 21+ Years Experience
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              {RANCOTEX_DATA.company.overview}
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>1,450+ Satisfied Clients</span>
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                <span>GOTS & OEKO-TEX® Compliant</span>
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>Tablet QA Tracking</span>
              </span>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2 max-w-sm">
              <div className="text-xs font-semibold text-slate-200 mb-2">
                Subscribe to Textile & Sourcing Updates:
              </div>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="your.email@company.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-3 py-2 bg-slate-900/90 border border-slate-700/80 rounded-lg text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {newsletterSubscribed && (
                <div className="mt-2 text-xs text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Thank you. We will send industry insights.</span>
                </div>
              )}
            </div>
          </div>

          {/* Col 2: Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-heading">
              Apparel Products
            </h4>
            <ul className="space-y-2 text-xs">
              {RANCOTEX_DATA.products.slice(0, 8).map((prod) => (
                <li key={prod.id}>
                  <button
                    onClick={() => {
                      setActiveTab('products');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-sky-400 transition-colors text-left"
                  >
                    {prod.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setActiveTab('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1 pt-1"
                >
                  <span>View all 12 categories →</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Corporate & Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-heading">
              Company & ESG
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-sky-400 transition-colors">
                  About Rancotex
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-sky-400 transition-colors">
                  Sourcing & Merchandising
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('technology'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-sky-400 transition-colors">
                  Dynamics AX & Tablet QA
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('sustainability'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-sky-400 transition-colors">
                  Sustainable Production
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('clients'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-sky-400 transition-colors">
                  Clients & Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-sky-400 transition-colors">
                  Factory & Lab Gallery
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('news'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-sky-400 transition-colors">
                  Insights & Market News
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('career'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-sky-400 transition-colors">
                  Careers at Rancotex
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Global Hubs & Offices */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-heading">
              Global Presence
            </h4>

            <div className="text-xs space-y-3.5">
              <div className="border-l-2 border-sky-500 pl-3">
                <span className="font-bold text-white block">Dhaka Head Office (HQ)</span>
                <p className="text-[11px] text-slate-400">4th Fl, House-74, Rd-21, Block-B, Banani-1230</p>
                <a href="tel:+8801707325717" className="text-[11px] text-sky-400 hover:underline block mt-0.5">
                  Md Nazmul Hasan: +880 1707-325717
                </a>
              </div>

              <div className="border-l-2 border-slate-700 pl-3">
                <span className="font-bold text-white block">UK Office (London)</span>
                <p className="text-[11px] text-slate-400">26 Harmondsworth Ln, Sipson, UB7 0JQ</p>
                <a href="tel:+447878432440" className="text-[11px] text-sky-400 hover:underline block mt-0.5">
                  Saif: +44 7878 432440
                </a>
              </div>

              <div className="border-l-2 border-slate-700 pl-3">
                <span className="font-bold text-white block">Finland Office (Helsinki)</span>
                <p className="text-[11px] text-slate-400">Lippukuja 2A 3, Vantaa, 01700</p>
                <a href="tel:+358415760431" className="text-[11px] text-sky-400 hover:underline block mt-0.5">
                  Mohbubun Nabi: +358 415 760431
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© 2005 – 2026 {RANCOTEX_DATA.company.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-slate-300 transition-colors"
            >
              Ethics & Compliance
            </button>
            <button 
              onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Supply
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5 ml-2"
              title="Back to Top"
              id="back-to-top-btn"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
