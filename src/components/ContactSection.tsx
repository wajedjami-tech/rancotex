import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, 
  MessageSquare, Globe, ArrowUpRight, ShieldCheck, Upload
} from 'lucide-react';
import { RANCOTEX_DATA } from '../data/rancotexData';

export const ContactSection: React.FC = () => {
  const [activeOffice, setActiveOffice] = useState<number>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    category: 'Product Sourcing RFP',
    quantity: '1,000 - 5,000 pcs',
    message: ''
  });

  const offices = RANCOTEX_DATA.offices;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        category: 'Product Sourcing RFP',
        quantity: '1,000 - 5,000 pcs',
        message: ''
      });
    }, 4500);
  };

  return (
    <section className="py-24 bg-[#030712] text-white relative overflow-hidden" id="contact">
      {/* Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-sky-500"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 font-heading">
              Direct Global Communications
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            Contact Rancotex
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Reach out to our merchandising leadership in Dhaka, London, or Helsinki. We review all tech-packs, RFP inquiries, and factory visit requests within 24 hours.
          </p>
        </div>

        {/* Global Offices Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {offices.map((office, idx) => {
            const isSelected = activeOffice === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveOffice(idx)}
                className={`p-6 sm:p-7 rounded-3xl cursor-pointer border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#0b1b42] to-[#07112a] border-sky-500 shadow-2xl shadow-sky-950/50 -translate-y-1'
                    : 'bg-[#060e22] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                      {office.city}, {office.country}
                    </span>
                    <Globe className="w-4 h-4 text-sky-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading mb-1">
                    {office.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-300 mb-4">
                    Key Contact: {office.contactPerson}
                  </p>

                  <div className="space-y-2.5 text-xs text-slate-400 pt-3 border-t border-slate-800/80">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                      <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-white transition-colors">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct quick action buttons */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${office.email}?subject=Rancotex%20Sourcing%20Inquiry`}
                    className="flex-1 py-2 px-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-center border border-slate-700 text-slate-200 hover:text-white transition-colors"
                  >
                    Email Direct
                  </a>
                  <a
                    href={`https://wa.me/${office.phone.replace(/[^0-9]/g, '')}?text=Hello%20Rancotex%20${office.city}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-2.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-500/40 text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1"
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2-Column: Form & Map Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#071128] border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl">
            <div className="mb-8">
              <span className="text-xs uppercase font-bold tracking-widest text-sky-400 block mb-1">
                Official Inquiry Portal
              </span>
              <h3 className="text-2xl font-bold text-white font-heading">
                Request Sourcing Quotation or Schedule a Factory Audit
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                Provide your requirements below. Our merchandising team typically responds with preliminary pricing and lead times within 24 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/50 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white font-heading">
                  Inquiry Dispatched Successfully!
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name}. Your sourcing request has been forwarded to our Dhaka headquarters and European liaisons. A senior merchandiser will contact you at {formData.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1.5 font-semibold">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Johnathan Clark"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1.5 font-semibold">Business Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. j.clark@fashionbrand.com"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1.5 font-semibold">Brand / Company Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="e.g. Nordics Apparel Ltd"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1.5 font-semibold">Phone / WhatsApp</label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+44 7911 123456"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1.5 font-semibold">Inquiry Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-white focus:outline-none focus:border-sky-500"
                    >
                      <option value="Product Sourcing RFP">Product Sourcing RFP</option>
                      <option value="Custom Sampling & Tech-Pack">Custom Sampling & Tech-Pack</option>
                      <option value="Factory Audit & Compliance">Factory Audit & Compliance</option>
                      <option value="Sustainable Fabric Development">Sustainable Fabric Development</option>
                      <option value="Partnership & Vendor Network">Partnership & Vendor Network</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1.5 font-semibold">Estimated Order Volume</label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-white focus:outline-none focus:border-sky-500"
                    >
                      <option value="Under 1,000 pcs (Sampling)">Under 1,000 pcs (Sampling)</option>
                      <option value="1,000 - 5,000 pcs">1,000 - 5,000 pcs</option>
                      <option value="5,000 - 20,000 pcs">5,000 - 20,000 pcs</option>
                      <option value="20,000+ pcs (Enterprise)">20,000+ pcs (Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1.5 font-semibold">Detailed Specifications / Requirements *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Specify target fabric compositions, GSM, delivery window, and destinations..."
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 hover:from-sky-400 hover:to-blue-500 text-white font-bold uppercase tracking-wider text-xs shadow-xl shadow-sky-950 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Sourcing Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Map & Direct Help (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Interactive Location Showcase */}
            <div className="p-6 rounded-3xl bg-[#071128] border border-slate-800 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block">
                Selected Operating Hub: {offices[activeOffice].city}
              </span>

              {/* Map Canvas Visual Card */}
              <div className="relative h-60 w-full rounded-2xl overflow-hidden border border-slate-700 bg-slate-900">
                <iframe
                  title={`Map of ${offices[activeOffice].title}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(offices[activeOffice].address)}&output=embed`}
                  className="w-full h-full border-0 filter grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                ></iframe>
              </div>

              <div className="text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span>Office Hours: 09:00 - 18:00 (Local Time)</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Visitors and international fashion audit teams are welcome by appointment. Airport pickup arranged for Banani HQ visits.
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Callout Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#06182c] to-[#040e1c] border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">
                    Instant Merchandiser WhatsApp
                  </h4>
                  <span className="text-[11px] text-emerald-400 font-semibold">
                    Direct line: +880 1707-325717
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Need urgent fabric availability checks or quick quotation estimates? Message our Head of Sourcing directly.
              </p>
              <a
                href="https://wa.me/8801707325717?text=Hello%20Rancotex%2C%20I%20would%20like%20to%20discuss%20an%20urgent%20apparel%20sourcing%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>Open WhatsApp Chat</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
