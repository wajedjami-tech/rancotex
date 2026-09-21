import React, { useState } from 'react';
import { 
  X, ChevronLeft, ChevronRight, Eye, Sparkles, 
  Maximize2, Filter, Layers, Download
} from 'lucide-react';
import { RANCOTEX_DATA, GalleryItem } from '../data/rancotexData';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Manufacturing', 'Quality Lab', 'Sustainable Wash', 'R&D Studio'];

  const filteredGallery = RANCOTEX_DATA.gallery.filter(item => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  return (
    <section className="py-24 bg-[#030714] text-white relative overflow-hidden border-b border-slate-800/80" id="gallery">
      {/* Ambient background light */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-sky-900/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-sky-500"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400 font-heading">
                Factory & Testing Facilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
              Production Gallery
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our manufacturing partner facilities, physical textile testing laboratories, pattern CAD rooms, and certified eco-washing lines in Bangladesh.
            </p>
          </div>

          {/* Lookbook brochure download button */}
          <a
            href="https://rancotex.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-sky-400" />
            <span>Digital Factory Dossier</span>
          </a>
        </div>

        {/* Filter categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-sky-500 text-white font-bold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 cursor-pointer shadow-xl transition-all duration-300"
            >
              <div className="h-64 w-full overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                  loading="lazy"
                />
              </div>

              {/* Overlay caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020612] via-[#020612]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity p-5 flex flex-col justify-end">
                <span className="text-[10px] uppercase font-bold tracking-wider text-sky-400 mb-1">
                  {item.category}
                </span>
                <h4 className="text-sm font-bold text-white font-heading group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h4>
                <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Click for fullscreen</span>
                  <Maximize2 className="w-3.5 h-3.5 text-sky-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevLightbox}
            className="absolute left-6 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors z-50 hidden sm:block"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextLightbox}
            className="absolute right-6 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors z-50 hidden sm:block"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Center Modal Image and Meta */}
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center p-2">
            <img
              src={filteredGallery[lightboxIndex].image}
              alt={filteredGallery[lightboxIndex].title}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-slate-800"
            />
            <div className="mt-4 text-center">
              <span className="text-xs uppercase font-bold tracking-widest text-sky-400">
                {filteredGallery[lightboxIndex].category} • Image 0{lightboxIndex + 1} / 0{filteredGallery.length}
              </span>
              <h3 className="text-xl font-bold text-white font-heading mt-1">
                {filteredGallery[lightboxIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
