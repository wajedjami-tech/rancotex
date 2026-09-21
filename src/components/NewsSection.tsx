import React, { useState } from 'react';
import { 
  Calendar, Clock, ArrowUpRight, BookOpen, 
  Tag, X, CheckCircle2, Send
} from 'lucide-react';
import { RANCOTEX_DATA, NewsItem } from '../data/rancotexData';

export const NewsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  return (
    <section className="py-24 bg-[#030816] text-white relative overflow-hidden border-b border-slate-800/80" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-sky-500"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 font-heading">
              Industry Knowledge & Updates
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            Textile & Sourcing Insights
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Expert analysis on sustainable apparel production, technical fabric innovations, and quality assurance methodologies from our Dhaka merchandising desk.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RANCOTEX_DATA.news.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedArticle(item)}
              className="group rounded-3xl overflow-hidden bg-[#071128] border border-slate-800 hover:border-sky-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 text-sky-400 border border-slate-800 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[11px] text-slate-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-sky-400 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-sky-400">
                  <span>Read Full Article</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#071330] border border-slate-700 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-slate-950/80 text-sky-400 border border-slate-800">
                  {selectedArticle.category}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
              <span>•</span>
              <span>By Rancotex Technical Desk</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white font-heading leading-tight mb-4">
              {selectedArticle.title}
            </h3>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light">
              <p>{selectedArticle.excerpt}</p>
              <p>
                As consumer preferences and environmental legislation intensify across European Union member states and the UK, brands must guarantee chain-of-custody tracking. At Rancotex, our partnership factories maintain certified segregation of organic yarns, ensuring complete traceability from raw ginning to packed cartons.
              </p>
              <p>
                Furthermore, by utilizing automated Dynamics AX Time-and-Action schedules, international buyers gain instant transparency regarding fabric mill milestones, lab-dip color confirmations, and final AQL 1.5 audits.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
