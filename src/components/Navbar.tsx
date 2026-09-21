import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Search, Phone, Mail, Globe, ArrowUpRight, 
  ChevronDown, Layers, ShieldCheck, Factory, Cpu, Leaf, Users, Image as ImageIcon, Briefcase, FileText
} from 'lucide-react';
import { RANCOTEX_DATA } from '../data/rancotexData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenInquiry: (subject?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
  onOpenInquiry
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'products', label: 'Products', hasMega: true },
    { id: 'services', label: 'Services' },
    { id: 'technology', label: 'Technology' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'clients', label: 'Clients' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'news', label: 'Insights' },
    { id: 'career', label: 'Careers' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro announcement / corporate header bar */}
      <div className="bg-[#020610] border-b border-slate-800/60 text-slate-400 text-xs py-2 px-4 sm:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <strong className="text-white font-medium">21+ Years Experience</strong> in Global Apparel Sourcing (Since 2005)
            </span>
            <span className="hidden md:inline-block text-slate-600">|</span>
            <span className="hidden md:inline-flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span>Dhaka (HQ) • London (UK) • Helsinki (Finland)</span>
            </span>
          </div>

          <div className="flex items-center gap-5 ml-auto">
            <a 
              href="mailto:rajiv@rancotex.com" 
              className="hidden sm:inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>rajiv@rancotex.com</span>
            </a>
            <a 
              href="tel:+8801707325717" 
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>+880 1707-325717</span>
            </a>
            <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-slate-800 text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
              <span className="text-sky-400">EN</span>
              <span>•</span>
              <span className="text-slate-500 hover:text-slate-300 cursor-pointer">EU / UK</span>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Sticky Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#040918]/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-slate-800/80 py-3' 
            : 'bg-[#040918]/70 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group"
            id="nav-logo-button"
            aria-label="Rancotex Home"
          >
            <div className="relative p-1 bg-white rounded-lg shadow-md group-hover:scale-105 transition-transform duration-200">
              <img 
                src={RANCOTEX_DATA.logos.main} 
                alt="RANCOTEX" 
                className="h-8 md:h-10 w-auto object-contain"
                onError={(e) => {
                  // Fallback if network blocked
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-white text-lg md:text-xl font-heading leading-tight group-hover:text-sky-400 transition-colors">
                RANCOTEX
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-400 font-semibold">
                Sourcing Ltd • Est. 2005
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 text-[13px] font-semibold text-slate-200">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              if (item.hasMega) {
                return (
                  <div 
                    key={item.id} 
                    className="relative group"
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`px-3.5 py-2 rounded-lg flex items-center gap-1 transition-all duration-200 ${
                        isActive 
                          ? 'text-sky-400 bg-sky-500/10 font-bold' 
                          : 'hover:text-white hover:bg-slate-800/60'
                      }`}
                      id={`nav-link-${item.id}`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                    </button>

                    {/* Mega Menu Dropdown */}
                    {megaMenuOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-[#070e24] border border-slate-800 rounded-2xl shadow-2xl p-6 grid grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-150 z-50">
                        <div className="col-span-2">
                          <div className="text-[11px] font-bold uppercase tracking-widest text-sky-400 mb-3 flex items-center justify-between">
                            <span>Apparel & Textile Categories</span>
                            <span className="text-slate-400 font-normal">12 Product Lines</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {RANCOTEX_DATA.products.slice(0, 10).map((prod) => (
                              <button
                                key={prod.id}
                                onClick={() => {
                                  handleNavClick('products');
                                }}
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/80 text-left transition-colors group/item"
                              >
                                <img 
                                  src={prod.image} 
                                  alt={prod.name} 
                                  className="w-10 h-10 object-cover rounded-md border border-slate-700/60 group-hover/item:border-sky-500" 
                                />
                                <div>
                                  <div className="text-xs font-semibold text-slate-100 group-hover/item:text-sky-400">
                                    {prod.name}
                                  </div>
                                  <div className="text-[10px] text-slate-400">
                                    {prod.category}
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Mega Menu Highlight Card */}
                        <div className="bg-[#0b1536] border border-slate-800/80 rounded-xl p-4 flex flex-col justify-between">
                          <div>
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-sky-500/20 text-sky-300 mb-2">
                              Sourcing Excellence
                            </span>
                            <h4 className="text-sm font-bold text-white mb-1.5 font-heading">
                              Custom Tech-Packs & Rapid Sampling
                            </h4>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              From organic jerseys to heavy-duty technical outerwear. Full tech pack execution and lab dip approvals.
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-slate-800">
                            <button
                              onClick={() => {
                                handleNavClick('products');
                              }}
                              className="w-full py-2 px-3 text-xs font-bold uppercase tracking-wider bg-sky-600 hover:bg-sky-500 text-white rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                            >
                              <span>View Full Catalog</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'text-sky-400 bg-sky-500/10 font-bold' 
                      : 'hover:text-white hover:bg-slate-800/60'
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Inquiry CTA */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors flex items-center gap-1.5 border border-slate-800 text-xs"
              title="Quick Search"
              id="search-btn-nav"
            >
              <Search className="w-4 h-4 text-sky-400" />
              <span className="hidden sm:inline text-slate-400">Search</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-slate-800 text-slate-400 rounded border border-slate-700">⌘K</kbd>
            </button>

            <button
              onClick={() => onOpenInquiry('Global Sourcing RFP')}
              className="relative group overflow-hidden px-4 md:px-5 py-2.5 rounded-lg bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white text-xs md:text-sm font-bold tracking-wider uppercase shadow-lg shadow-sky-950/40 transition-all duration-200 flex items-center gap-2"
              id="inquiry-cta-nav"
            >
              <span>Request Quote</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors border border-slate-800"
              id="mobile-menu-toggle"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-sky-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[100px] z-40 bg-[#030712]/98 backdrop-blur-2xl border-t border-slate-800 p-6 overflow-y-auto xl:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="max-w-lg mx-auto flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-2.5">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`p-3 rounded-xl text-left font-semibold text-sm transition-colors border ${
                      isActive 
                        ? 'bg-sky-500/15 border-sky-500/40 text-sky-400 font-bold' 
                        : 'bg-slate-900/60 border-slate-800/80 text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-[#09112a] border border-slate-800 text-xs space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
                Direct Contact Hubs
              </div>
              <div className="text-slate-300">
                <p className="font-semibold text-white">Dhaka HQ (Banani):</p>
                <p>Md Nazmul Hasan: +880 1707-325717</p>
              </div>
              <div className="text-slate-300">
                <p className="font-semibold text-white">London UK Office:</p>
                <p>Saif: +44 7878 432440</p>
              </div>
              <div className="text-slate-300">
                <p className="font-semibold text-white">Finland Office:</p>
                <p>Mohbubun Nabi: +358 415 760431</p>
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('Mobile Navigation RFQ');
              }}
              className="w-full py-3.5 bg-gradient-to-r from-sky-600 to-blue-700 text-white rounded-xl font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-950/50"
            >
              <span>Submit Sourcing Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
