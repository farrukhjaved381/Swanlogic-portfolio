import { ArrowUpRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="w-full bg-white">
      <div className="relative mx-auto max-w-[1400px] px-4 pb-8 pt-8 sm:px-6 sm:pb-12 sm:pt-10 md:px-10 md:pt-16">
        {/* Heading + Actions */}
        <div className="relative z-10 max-w-full lg:max-w-4xl">
          <h1 className="font-rf-dewi text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            A Web Design And Branding
            <br className="hidden xs:block" /> 
            <span className="block xs:inline">Agency In Manchester</span>
          </h1>
          
          {/* Mobile Wheel decoration - in front of heading */}
          <div className="absolute -top-8 right-0 w-16 h-16 sm:hidden">
            <img
              src="/wheel.png"
              alt="decorative wheel"
              className="h-full w-full object-contain opacity-80"
            />
          </div>
        </div>

        {/* Mobile Action Buttons - Show on mobile before video */}
        <div className="flex flex-col gap-3 mb-6 sm:hidden w-full mt-6">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-purple px-6 py-3 font-dewi text-xs uppercase tracking-[0.2em] text-white shadow hover:bg-brand-purple/90 transition-colors w-full"
          >
            View Our Work
          </a>
          <a 
            href="#team" 
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 px-5 py-3 hover:border-black/20 transition-colors w-full"
          >
            <span className="font-dewi text-xs uppercase tracking-[0.2em] text-brand-ink">Meet The Team</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Video within rectangle frame */}
        <div className="relative mt-4 sm:mt-8">
          {/* Desktop Action Buttons - Floating above video */}
          <div className="hidden sm:flex gap-4 md:gap-6 lg:gap-14 mb-2 relative top-8 sm:top-12 md:top-16 lg:top-24 left-4 sm:left-8 md:left-32 lg:left-48">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-brand-purple px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 font-dewi text-xs sm:text-sm md:text-base text-white shadow hover:bg-brand-purple/90 transition-colors whitespace-nowrap"
            >
              View Our Work
            </a>
            <img 
              src="/Arrow white.svg" 
              alt="arrow" 
              className="rounded-full bg-brand-purple  absolute p-2 sm:p-3 md:p-4 lg:p-5 left-24 sm:left-28 md:left-32 lg:left-36 top-0" 
            />
            <a 
              href="#team" 
              className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 hover:border-black/30 hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              <span className="font-dewi text-xs sm:text-sm md:text-base text-brand-ink px-2 sm:px-3 md:px-4 lg:px-2">
                Meet The Team
              </span>
              <img src="/Arrow 1-1.svg" alt="arrow" className="h-3 w-3 sm:h-4 sm:w-4" />
            </a>
          </div>

          {/* Video Container */}
          <div className="relative w-full sm:w-[85vw] md:w-[80vw] lg:w-[75vw] h-auto bg-brand-purple [mask-image:url('/Rectangle.png')] [mask-repeat:no-repeat] [mask-size:cover] [mask-position:center] overflow-hidden">
            <video
              src="/video/Neostalgia Design & Webflow Development Agency.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover min-h-[250px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[550px]"
              poster="/Rectangle 31-2.png"
            />
          </div>

          {/* Desktop Wheel decoration - only show on larger screens */}
          <div className="absolute -top-20 sm:-top-30 md:-top-35 lg:-top-40 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-auto lg:h-auto hidden sm:block">
            <img
              src="/wheel.png"
              alt="decorative wheel"
              className="h-full w-full object-contain opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
