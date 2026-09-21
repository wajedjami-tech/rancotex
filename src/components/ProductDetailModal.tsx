import React from 'react';
import { 
  X, Check, Clock, Layers, ShieldCheck, 
  Send, ArrowUpRight, Tag, Sparkles
} from 'lucide-react';
import { ProductItem } from '../data/rancotexData';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onInquire: (product: ProductItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onInquire
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="bg-[#071330] border border-slate-700 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close Product Details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Product Image Stage */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0c1a3b] border border-slate-800 p-4 flex items-center justify-center min-h-[300px]">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[360px] w-auto object-contain filter contrast-105"
            />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider bg-slate-950/80 text-sky-400 border border-slate-800">
                {product.category}
              </span>
            </div>
          </div>

          {/* Details & Specs */}
          <div className="space-y-5">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400 block mb-1">
                Rancotex Sourcing Catalogue
              </span>
              <h3 className="text-2xl font-extrabold text-white font-heading">
                {product.name}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Specifications Matrix */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Minimum Order (MOQ):</span>
                <span className="font-semibold text-white">{product.moq}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Production Lead Time:</span>
                <span className="font-semibold text-sky-400">{product.leadTime}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Inspection Standard:</span>
                <span className="font-semibold text-emerald-400">AQL 1.5 / 2.5 In-House QA</span>
              </div>
            </div>

            {/* Fabrics */}
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Available Fabrications & Blends:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {product.fabrics.map((fab, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-sky-950/40 border border-sky-500/30 text-[11px] text-sky-300 font-medium"
                  >
                    {fab}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                onClick={() => {
                  onClose();
                  onInquire(product);
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold uppercase tracking-wider text-xs shadow-lg shadow-sky-950 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Request Sample & Costing For {product.name}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
