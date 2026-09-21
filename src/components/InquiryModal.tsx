import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Mail, Phone } from 'lucide-react';
import { RANCOTEX_DATA } from '../data/rancotexData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultSubject = 'General Sourcing Inquiry'
}) => {
  const [subject, setSubject] = useState(defaultSubject);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultSubject) {
      setSubject(defaultSubject);
    }
  }, [defaultSubject]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setName('');
      setEmail('');
      setCompany('');
      setPhone('');
      setMessage('');
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="bg-[#071330] border border-slate-700 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400 block mb-1">
          Rancotex Sourcing Ltd • Est. 2005
        </span>
        <h3 className="text-2xl font-bold text-white font-heading">
          Request Sourcing Quotation
        </h3>
        <p className="text-xs text-slate-400 mt-1 mb-6">
          Direct communication with our senior merchandising desk in Banani, Dhaka.
        </p>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-white">Quotation Request Received!</h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Thank you, {name}. We will review your inquiry ({subject}) and reply via email within 24 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 mb-1 font-semibold">Subject / Project Title *</label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 mb-1 font-semibold">Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-semibold">Business Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 mb-1 font-semibold">Company / Retail Brand *</label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Brand Name"
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-semibold">Phone / WhatsApp</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+880 / +44 / +358..."
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 mb-1 font-semibold">Inquiry Details *</label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Include garment category, target fabric, quantity, or target pricing..."
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 hover:from-sky-400 hover:to-blue-500 text-white rounded-xl font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-sky-950"
            >
              <Send className="w-4 h-4" />
              <span>Send Sourcing Inquiry</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
