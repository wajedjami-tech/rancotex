import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { CompanyIntro } from './components/CompanyIntro';
import { AboutSection } from './components/AboutSection';
import { WhyRancotexSection } from './components/WhyRancotexSection';
import { ProductsSection } from './components/ProductsSection';
import { ServicesSection } from './components/ServicesSection';
import { TechnologySection } from './components/TechnologySection';
import { SustainabilitySection } from './components/SustainabilitySection';
import { ClientsSection } from './components/ClientsSection';
import { GallerySection } from './components/GallerySection';
import { NewsSection } from './components/NewsSection';
import { CareerSection } from './components/CareerSection';
import { ContactSection } from './components/ContactSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuickSearchModal } from './components/QuickSearchModal';
import { InquiryModal } from './components/InquiryModal';
import { ProductItem } from './data/rancotexData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquirySubject, setInquirySubject] = useState('General Sourcing Inquiry');

  const handleOpenInquiry = (subject: string = 'General Sourcing Inquiry') => {
    setInquirySubject(subject);
    setInquiryOpen(true);
  };

  const handleSelectProduct = (product: ProductItem) => {
    setSelectedProduct(product);
  };

  const handleNavigateSection = (sectionId: string) => {
    setActiveTab(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#02050e] text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigateSection}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <HeroSection
              onExploreProducts={() => handleNavigateSection('products')}
              onOpenInquiry={handleOpenInquiry}
              onViewServices={() => handleNavigateSection('services')}
            />
            <CompanyIntro
              onLearnMore={() => handleNavigateSection('about')}
              onOpenInquiry={handleOpenInquiry}
            />
            <WhyRancotexSection onOpenInquiry={handleOpenInquiry} />
            <ProductsSection
              onSelectProduct={handleSelectProduct}
              onOpenInquiry={handleOpenInquiry}
            />
            <ServicesSection onOpenInquiry={handleOpenInquiry} />
            <TechnologySection onOpenInquiry={handleOpenInquiry} />
            <SustainabilitySection onOpenInquiry={handleOpenInquiry} />
            <ClientsSection onOpenInquiry={handleOpenInquiry} />
            <GallerySection />
            <NewsSection />
            <CareerSection />
            <ContactSection />
          </>
        )}

        {activeTab === 'about' && (
          <>
            <div className="bg-[#030816] py-12 px-4 sm:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-sky-400">
                    Corporate Profile
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-1">
                    About Rancotex Worldwide
                  </h1>
                </div>
                <button
                  onClick={() => handleNavigateSection('home')}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  ← Return to Home
                </button>
              </div>
            </div>
            <AboutSection onOpenInquiry={handleOpenInquiry} />
            <WhyRancotexSection onOpenInquiry={handleOpenInquiry} />
            <ContactSection />
          </>
        )}

        {activeTab === 'products' && (
          <>
            <div className="bg-[#030816] py-12 px-4 sm:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-sky-400">
                    Sourcing Catalog
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-1">
                    All Products & Categories
                  </h1>
                </div>
                <button
                  onClick={() => handleNavigateSection('home')}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  ← Return to Home
                </button>
              </div>
            </div>
            <ProductsSection
              onSelectProduct={handleSelectProduct}
              onOpenInquiry={handleOpenInquiry}
            />
            <ContactSection />
          </>
        )}

        {activeTab === 'services' && (
          <>
            <div className="bg-[#030816] py-12 px-4 sm:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-sky-400">
                    End-to-End Solutions
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-1">
                    Sourcing & Merchandising Services
                  </h1>
                </div>
                <button
                  onClick={() => handleNavigateSection('home')}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  ← Return to Home
                </button>
              </div>
            </div>
            <ServicesSection onOpenInquiry={handleOpenInquiry} />
            <ContactSection />
          </>
        )}

        {activeTab === 'technology' && (
          <>
            <div className="bg-[#030816] py-12 px-4 sm:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-sky-400">
                    Digital Governance
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-1">
                    Technology & Tablet Inspection
                  </h1>
                </div>
                <button
                  onClick={() => handleNavigateSection('home')}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  ← Return to Home
                </button>
              </div>
            </div>
            <TechnologySection onOpenInquiry={handleOpenInquiry} />
            <ContactSection />
          </>
        )}

        {activeTab === 'sustainability' && (
          <>
            <div className="bg-[#030816] py-12 px-4 sm:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">
                    ESG Responsibility
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-1">
                    Sustainable Production & Ethics
                  </h1>
                </div>
                <button
                  onClick={() => handleNavigateSection('home')}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  ← Return to Home
                </button>
              </div>
            </div>
            <SustainabilitySection onOpenInquiry={handleOpenInquiry} />
            <ContactSection />
          </>
        )}

        {activeTab === 'clients' && (
          <>
            <div className="bg-[#030816] py-12 px-4 sm:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-sky-400">
                    Global Trust
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-1">
                    Clients & Testimonials
                  </h1>
                </div>
                <button
                  onClick={() => handleNavigateSection('home')}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  ← Return to Home
                </button>
              </div>
            </div>
            <ClientsSection onOpenInquiry={handleOpenInquiry} />
            <ContactSection />
          </>
        )}

        {activeTab === 'gallery' && (
          <>
            <div className="bg-[#030816] py-12 px-4 sm:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-sky-400">
                    Visual Archive
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-1">
                    Factory & Laboratory Gallery
                  </h1>
                </div>
                <button
                  onClick={() => handleNavigateSection('home')}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  ← Return to Home
                </button>
              </div>
            </div>
            <GallerySection />
            <ContactSection />
          </>
        )}

        {activeTab === 'news' && (
          <>
            <div className="bg-[#030816] py-12 px-4 sm:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-sky-400">
                    Industry Insights
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-1">
                    Textile & Sourcing News
                  </h1>
                </div>
                <button
                  onClick={() => handleNavigateSection('home')}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  ← Return to Home
                </button>
              </div>
            </div>
            <NewsSection />
            <ContactSection />
          </>
        )}

        {activeTab === 'career' && (
          <>
            <div className="bg-[#030816] py-12 px-4 sm:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-sky-400">
                    Join Our Sourcing Team
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-1">
                    Careers at Rancotex
                  </h1>
                </div>
                <button
                  onClick={() => handleNavigateSection('home')}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  ← Return to Home
                </button>
              </div>
            </div>
            <CareerSection />
            <ContactSection />
          </>
        )}

        {activeTab === 'contact' && (
          <>
            <div className="bg-[#030816] py-12 px-4 sm:px-8 border-b border-slate-800">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-sky-400">
                    Direct Communication
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-1">
                    Contact Global Offices
                  </h1>
                </div>
                <button
                  onClick={() => handleNavigateSection('home')}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  ← Return to Home
                </button>
              </div>
            </div>
            <ContactSection />
          </>
        )}
      </main>

      {/* Corporate Luxury Footer */}
      <Footer
        setActiveTab={handleNavigateSection}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Interactive Modals */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onInquire={(prod) => {
          handleOpenInquiry(`Sample Request: ${prod.name}`);
        }}
      />

      <QuickSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={handleSelectProduct}
        onNavigateSection={handleNavigateSection}
      />

      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultSubject={inquirySubject}
      />
    </div>
  );
}
