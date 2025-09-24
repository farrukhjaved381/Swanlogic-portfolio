import { ArrowUpRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="w-full bg-white">
      <div className="relative mx-auto max-w-[1400px] px-6 pb-12 pt-10 md:px-10 md:pt-16">
        {/* Heading + Actions */}
        <div className="relative z-10 mb-6 max-w-4xl">
          <h1 className="font-rf-dewi text-4xl font-bold leading-tight text-brand-ink sm:text-6xl md:text-7xl">
            A Web Design And Branding
            <br className="hidden sm:block" /> Agency In Manchester
          </h1>
          
        </div>

        {/* Video within rectangle frame */}
        <div className="relative mt-8">
          <div className="mt-6 flex flex-wrap bg-white py-3 px-12 rounded-full  items-center gap-4 absolute -top-10 left-48  z-30">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-full bg-brand-purple px-6 py-3 font-dewi text-sm uppercase tracking-[0.25em] text-white shadow hover:bg-brand-purple/90 transition-colors"
            >
              View Our Work
            </a>
            <a href="#team" className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 hover:border-black/20 transition-colors">
              <span className="font-dewi text-sm uppercase tracking-[0.25em] text-brand-ink">Meet The Team</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="relative overflow-hidden rounded-[28px] bg-black shadow-2xl">
            {/* Video layer - positioned behind frame */}
            <div className="relative z-10">
              <video
                className="h-[380px] w-full object-cover sm:h-[520px] md:h-[640px]"
                src="/video/Neostalgia Design & Webflow Development Agency.mp4"
                autoPlay
                muted
                loop
                playsInline
                poster="/Rectangle 31-2.png"
              />
            </div>
            
            {/* Frame overlay - positioned on top but with lower opacity to show video through */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <img
                src="/Rectangle.png"
                alt="frame"
                className="h-full w-full object-cover opacity-20 mix-blend-overlay"
              />
            </div>

            {/* Optional: Add a subtle dark overlay for better text contrast if needed */}
            <div className="absolute inset-0 z-15 bg-black/10"></div>
          </div>

          {/* Wheel decoration top-right */}
          <div className="absolute -top-32 right-4 hidden h-28 w-28 md:block pointer-events-none">
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
