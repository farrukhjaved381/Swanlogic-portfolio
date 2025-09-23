import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer as FooterSimple } from '../components/layout/footer';
import { Globe, Search, Megaphone, PenTool } from 'lucide-react';
import BannerImage from '../images/branding-portfolio-banner.png';

export default function BrandingPortfolio() {
  const services = [
    { name: 'Website', icon: Globe },
    { name: 'SEO', icon: Search },
    { name: 'Brand Repositioning', icon: Megaphone },
    { name: 'Content Writing', icon: PenTool },
    { name: 'AI', icon: Globe }
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between mb-12">
            {/* Services List */}
            <div className="flex flex-wrap gap-4 lg:gap-6 mb-8 lg:mb-0">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <IconComponent className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-medium text-gray-700">{service.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Heading */}
            <div className="lg:max-w-md">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                A Workplace For Branding Portfolio
              </h2>
            </div>
          </div>

          {/* Image Container */}
          <div className="rounded-2xl overflow-hidden shadow-2xl relative h-[600px] mb-12">
            <img
              src={BannerImage}
              alt="UI/UX Designer working at desk with multiple monitors"
              className="w-full h-full object-fit transform transition-transform duration-[2000ms] ease-in-out hover:scale-110"
            />
          </div>
        </div>
      </main>
      <FooterSimple />
    </div>
  );
}