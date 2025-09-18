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
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-full bg-brand-purple px-6 py-3 font-dewi text-sm uppercase tracking-[0.25em] text-white shadow"
            >
              View Our Work
            </a>
            <a href="#team" className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3">
              <span className="font-dewi text-sm uppercase tracking-[0.25em] text-brand-ink">Meet The Team</span>
              <img src="/Arrow 1-1.svg" alt="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Video within rectangle frame */}
        <div className="relative mt-8">
          <div className="relative overflow-hidden rounded-[28px] bg-black">
            <video
              className="h-[380px] w-full object-cover sm:h-[520px] md:h-[640px]"
              src="/video/Neostalgia Design & Webflow Development Agency.mp4"
              autoPlay
              muted
              loop
              playsInline
              poster="/Rectangle 31-2.png"
            />
            {/* Rectangle overlay template */}
            <img
              src="/Rectangle.png"
              alt="frame"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-95"
            />
          </div>

          {/* Wheel deco top-right */}
          <img
            src="/wheel.png"
            alt="decorative wheel"
            className="pointer-events-none absolute -top-10 right-4 hidden h-28 w-28 md:block"
          />
        </div>
      </div>
    </section>
  );
}
