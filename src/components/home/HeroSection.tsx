import { ArrowUpRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="w-full bg-white">
      <div className="relative mx-auto max-w-[1400px] px-4 pb-8 pt-8 sm:px-6 sm:pb-12 sm:pt-10 md:px-10 md:pt-16">
        {/* Heading + Actions */}
        <div className="relative z-10 mb-6 max-w-full lg:max-w-4xl">
          <h1 className="font-rf-dewi text-2xl font-bold leading-tight text-brand-ink xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            A Web Design And Branding
            <br className="hidden xs:block" /> 
            <span className="block xs:inline">Agency In Manchester</span>
          </h1>
        </div>

        {/* Mobile Action Buttons - Show on mobile before video */}
        <div className="flex flex-col gap-3 mb-6 sm:hidden w-full">
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
          <div className="hidden sm:flex mt-6 flex-wrap  bg-white py-2 sm:py-3 px-4 sm:px-6 w-96 rounded-2xl rounded-tr-none  items-center gap-2 absolute -top-14 h-16 right-80 z-30 shadow-lg max-w-[calc(100%-16px)] sm:max-w-none "></div>
          <div className="hidden sm:flex mt-6 flex-wrap  bg-white py-2 sm:py-3 px-4 sm:px-6 lg:px-12 rounded-2xl rounded-tr-none items-center gap-2 sm:gap-4 absolute -top-4 sm:-top-6 lg:-top-10 left-2 sm:left-4 md:left-12 lg:left-40 z-30 max-w-[calc(100%-16px)] sm:max-w-none">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-brand-purple px-3 sm:px-4 lg:px-6 py-2 sm:py-3 font-dewi text-[10px] sm:text-xs lg:text-sm uppercase tracking-[0.15em] sm:tracking-[0.25em] text-white shadow hover:bg-brand-purple/90 transition-colors whitespace-nowrap"
            >
              View Our Work
            </a>
            <a 
              href="#team" 
              className="inline-flex items-center gap-1 sm:gap-2 rounded-full border border-black/10 px-2 sm:px-3 lg:px-5 py-2 sm:py-3 hover:border-black/20 transition-colors whitespace-nowrap"
            >
              <span className="font-dewi text-[10px] sm:text-xs lg:text-sm uppercase tracking-[0.15em] sm:tracking-[0.25em] text-brand-ink">Meet The Team</span>
              <ArrowUpRight className="h-3 w-3 sm:h-3 sm:w-3 lg:h-4 lg:w-4" />
            </a>
          </div>

          {/* ✅ Wrapped video + overlays in one rounded parent */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-[28px] shadow-lg sm:shadow-xl lg:shadow-2xl">
            {/* Video layer */}
            <video
              className="h-[200px] w-full object-cover xs:h-[240px] sm:h-[320px] md:h-[420px] lg:h-[520px] xl:h-[640px]"
              src="/video/Neostalgia Design & Webflow Development Agency.mp4"
              autoPlay
              muted
              loop
              playsInline
              poster="/Rectangle 31-2.png"
            />

            {/* Frame overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <img
                src="/Rectangle.png"
                alt="frame"
                className="h-full w-full object-cover opacity-20 mix-blend-overlay"
              />
            </div>

            {/* Optional subtle overlay */}
            <div className="absolute inset-0 bg-black/10 z-10"></div>
          </div>

          {/* Wheel decoration */}
          <div className="absolute -top-16 sm:-top-24 lg:-top-32 right-2 sm:right-4 hidden lg:block h-16 w-16 sm:h-20 sm:w-20 lg:h-28 lg:w-28 pointer-events-none">
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
