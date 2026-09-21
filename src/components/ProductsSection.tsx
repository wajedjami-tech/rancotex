import React, { useState, useMemo } from 'react';
import { 
  ArrowUpRight, Filter, Search, Eye, Sparkles, 
  Layers, Check, ChevronRight, SlidersHorizontal, Tag, Send
} from 'lucide-react';
import { RANCOTEX_DATA, ProductItem } from '../data/rancotexData';

interface ProductsSectionProps {
  onSelectProduct: (product: ProductItem) => void;
  onOpenInquiry: (subject?: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct,
  onOpenInquiry
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(RANCOTEX_DATA.products.map(p => p.category))];
    return cats;
  }, []);

  const filteredProducts = useMemo(() => {
    return RANCOTEX_DATA.products.filter(p => {
      const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.fabrics.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-24 bg-[#040813] text-white relative overflow-hidden border-b border-slate-800/80" id="products">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-900/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-sky-500"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400 font-heading">
                Comprehensive Apparel Catalogue
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
              Our Products
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Discover a diverse range of premium products crafted to meet global quality and fashion standards. From performance-driven Activewear, cozy Home Textiles & Sleepwear, and all-weather Outerwear, to tailored Blazers and everyday Knits.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenInquiry('Complete Product Catalogue Sourcing')}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-sky-950 flex items-center gap-2"
            >
              <span>Inquire Samples</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-3 rounded-2xl bg-[#081024] border border-slate-800">
          {/* Category Chips Scrollable */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-sky-500 text-white font-bold shadow-md shadow-sky-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search fabrics, products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-2xl overflow-hidden bg-[#070e22] border border-slate-800/80 hover:border-sky-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Image Stage */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0c1630]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                  loading="lazy"
                />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider bg-slate-950/80 text-sky-400 border border-slate-800 backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>

                {/* Quick Action Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040813]/90 via-[#040813]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 justify-between">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="w-full py-2.5 px-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-sky-950 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick Preview & Specs</span>
                  </button>
                </div>
              </div>

              {/* Product Content Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white font-heading group-hover:text-sky-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Specs Highlights */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] space-y-1 text-slate-400">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Typical Lead Time:</span>
                    <span className="font-semibold text-slate-300">{product.leadTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Standard MOQ:</span>
                    <span className="font-semibold text-slate-300">{product.moq}</span>
                  </div>
                </div>

                {/* Bottom Trigger button */}
                <div className="mt-4 pt-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5 text-sky-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-[#070e22] rounded-2xl border border-slate-800">
            <Layers className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-300 font-semibold text-sm">No products found matching your search.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-3 text-xs text-sky-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Bottom Custom Tech-Pack Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#091538] via-[#0b1c4a] to-[#091538] border border-blue-900/50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-sky-400 block mb-1">
              Custom Product Development & Lab Testing
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Need a bespoke fabric blend or proprietary wash recipe?
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              Our Dhaka R&D studio translates your fashion sketches and digital tech-packs into physical samples within 7-10 working days.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry('Custom Tech-Pack & Sample Request')}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold uppercase tracking-wider text-xs shadow-lg shadow-sky-950 transition-colors flex items-center gap-2"
          >
            <span>Submit Tech-Pack RFP</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
