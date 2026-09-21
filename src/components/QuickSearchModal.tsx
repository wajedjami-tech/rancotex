import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Tag, Layers, ChevronRight } from 'lucide-react';
import { RANCOTEX_DATA, ProductItem } from '../data/rancotexData';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: ProductItem) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onNavigateSection
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        // toggle
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProducts = RANCOTEX_DATA.products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredServices = RANCOTEX_DATA.services.filter(s =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-start justify-center pt-20 px-4">
      <div 
        className="bg-[#071330] border border-slate-700 rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative animate-in fade-in slide-in-from-top-4 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="relative flex items-center border-b border-slate-700 pb-4">
          <Search className="w-5 h-5 text-sky-400 absolute left-2 pointer-events-none" />
          <input
            type="text"
            autoFocus
            placeholder="Search products, services, offices, technology..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2 bg-transparent text-base text-white placeholder:text-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto mt-4 space-y-6">
          {/* Products */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Apparel Categories ({filteredProducts.length})
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredProducts.slice(0, 6).map((prod) => (
                <button
                  key={prod.id}
                  onClick={() => {
                    onClose();
                    onSelectProduct(prod);
                  }}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 text-left transition-colors group"
                >
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-10 h-10 object-contain rounded-md bg-slate-950 p-1"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-white group-hover:text-sky-400 truncate">
                      {prod.name}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {prod.category} • MOQ: {prod.moq}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Sourcing Services */}
          {filteredServices.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Services & Capabilities
              </div>
              <div className="space-y-1.5">
                {filteredServices.slice(0, 3).map((serv) => (
                  <button
                    key={serv.id}
                    onClick={() => {
                      onClose();
                      onNavigateSection('services');
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900/40 hover:bg-slate-800 text-left transition-colors border border-slate-800"
                  >
                    <div>
                      <div className="text-xs font-semibold text-white">
                        {serv.title}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {serv.subtitle}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-sky-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick jump tags */}
          <div className="pt-2 border-t border-slate-800/80">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
              Quick Portals:
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => { onClose(); onNavigateSection('technology'); }}
                className="px-3 py-1 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
              >
                Dynamics AX ERP & QA
              </button>
              <button
                onClick={() => { onClose(); onNavigateSection('sustainability'); }}
                className="px-3 py-1 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
              >
                GOTS & ESG Certification
              </button>
              <button
                onClick={() => { onClose(); onNavigateSection('contact'); }}
                className="px-3 py-1 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
              >
                Dhaka HQ & European Hubs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
