import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from "@/components/icons"
import { Button } from '@/components/ui/button';
import Project01 from '../../images/uiux-project-01.png'
import Project02 from '../../images/uiux-project 02.png'
import Project03 from '../../images/uiux-project-03.png'
import Project04 from '../../images/uiux-project-04.png'

export function PortfolioShowcase() {
  const navigate = useNavigate();

  const portfolioItems = [
    {
      image: Project01,
      title: "Refreshing Gary Neville's Digital Presence",
      year: "2025",
      client: "Gary Neville"
    },
    {
      image: Project02,
      title: "Driving Innovative Growth",
      year: "2025",
      client: "Gary Neville"
    },
    {
      image: Project03,
      title: "A workplace consultancy creating inspiring environments",
      year: "2025",
      client: "Gary Neville"
    },
    {
      image: Project04,
      title: "Excellence in Digital Marketing Solutions",
      year: "2025",
      client: "Gary Neville"
    }
  ];

  const handleItemClick = (item) => {
    const slug = item.url.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    navigate(`/portfolio/${slug}`);
  };

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto relative">
      <div className="text-right absolute right-3 mb-12">
        <h2 className="text-5xl font-bold text-gray-900 mb-4 font-rf-dewi">Take A Look At Our Projects</h2>
      </div>

      {/* Mobile: Single column layout */}
      <div className="block sm:hidden space-y-16">
        {portfolioItems.map((item, index) => (
          <div key={index} className="group relative overflow-hidden">
            <div className="relative h-[350px] w-full perspective-1000 rounded-3xl overflow-hidden">
              <img 
                src={item.image}
                alt="Portfolio Item"
                className="h-full w-full object-cover transform rotate-x-6 shadow-xl rounded-3xl group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="mt-6 space-y-2">
              <p className="text-gray-600 text-sm">
                {item.year} • {item.client}
              </p>
              <h3 className="text-gray-900 text-2xl font-bold tracking-tight leading-tight">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Tablet: Single column with larger cards */}
      <div className="hidden sm:block lg:hidden space-y-20">
        {portfolioItems.map((item, index) => (
          <div key={index} className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-500 ease-in-out">
            <div className="relative h-[450px] w-full perspective-1000 rounded-3xl overflow-hidden">
              <img 
                src={item.image}
                alt="Portfolio Item"
                className="h-full w-full object-cover transform rotate-x-8 shadow-2xl rounded-3xl group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="mt-8 space-y-3 max-w-2xl">
              <p className="text-gray-600 text-base">
                {item.year} • {item.client}
              </p>
              <h3 className="text-gray-900 text-4xl font-bold tracking-tight">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Two-column staggered layout */}
      <div className="hidden lg:block">
        {/* Row 1 */}
        <div className="flex gap-8 mb-20 xl:mb-28">
          <div className="group relative overflow-hidden w-1/2">
            <div className="relative h-[400px] xl:h-[500px] w-full perspective-1000 rounded-3xl overflow-hidden">
              <img 
                src={portfolioItems[0].image}
                alt="Portfolio Item"
                className="h-full w-full object-cover transform rotate-x-12 shadow-2xl rounded-3xl group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="mt-6 xl:mt-8 space-y-3">
              <p className="text-gray-600 text-base">
                {portfolioItems[0].year} • {portfolioItems[0].client}
              </p>
              <h3 className="text-gray-900 text-3xl xl:text-5xl font-bold tracking-tight">
                {portfolioItems[0].title}
              </h3>
            </div>
          </div>
          

          <div className="group relative overflow-hidden top-32 xl:top-40 w-1/2">
            <div className="relative h-[400px] xl:h-[500px] w-full perspective-1000 rounded-3xl overflow-hidden">
              <img 
                src={portfolioItems[1].image}
                alt="Portfolio Item"
                className="h-full w-full object-cover transform rotate-x-12 shadow-2xl rounded-3xl group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="mt-6 xl:mt-8 space-y-3">
              <p className="text-gray-600 text-base">
                {portfolioItems[1].year} • {portfolioItems[1].client}
              </p>
              <h3 className="text-gray-900 text-3xl xl:text-5xl font-bold tracking-tight">
                {portfolioItems[1].title}
              </h3>
            </div>
          </div>
         
        </div>

        {/* Row 2 */}
        <div className="flex gap-8 mb-20 xl:mb-28">
          <div className="group relative overflow-hidden w-1/2">
            <div className="relative h-[400px] xl:h-[500px] w-full perspective-1000 rounded-3xl overflow-hidden">
              <img 
                src={portfolioItems[2].image}
                alt="Portfolio Item"
                className="h-full w-full object-cover transform rotate-x-12 shadow-2xl rounded-3xl group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="mt-6 xl:mt-8 space-y-3">
              <p className="text-gray-600 text-base">
                {portfolioItems[2].year} • {portfolioItems[2].client}
              </p>
              <h3 className="text-gray-900 text-3xl xl:text-5xl font-bold tracking-tight">
                {portfolioItems[2].title}
              </h3>
            </div>
          </div>

          <div className="group relative overflow-hidden top-32 xl:top-40 w-1/2">
            <div className="relative h-[400px] xl:h-[500px] w-full perspective-1000 rounded-3xl overflow-hidden">
              <img 
                src={portfolioItems[3].image}
                alt="Portfolio Item"
                className="h-full w-full object-cover transform rotate-x-12 shadow-2xl rounded-3xl group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="mt-6 xl:mt-8 space-y-3">
              <p className="text-gray-600 text-base">
                {portfolioItems[3].year} • {portfolioItems[3].client}
              </p>
              <h3 className="text-gray-900 text-3xl xl:text-5xl font-bold tracking-tight">
                {portfolioItems[3].title}
              </h3>
            </div>
          </div>

           {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3 absolute left-10 bottom-10 transform -translate-y-1/2">
                      <Button 
                        onClick={() => navigate("/portfolio")}
                        className="flex !text-brand-ink text-lg items-center gap-2 rounded-full bg-lime-300 px-12 py-8 font-bold"
                      >
                        View All Projects
                      </Button>
                      <img src="/Arrow 1-1.svg" alt="arrow" className="p-7 rounded-full bg-lime-300 text-brand-ink absolute left-44" />
                    </div>
        </div>
      </div>
    </section>
  )
}
