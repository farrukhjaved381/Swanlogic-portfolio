import React from 'react';

export default function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
      <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-start">
        {/* Left: Tag + Image + Copy */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full bg-brand-purple px-5 py-2">
            <span className="font-dewi text-xs uppercase tracking-[0.25em] text-white"># Who We Are?</span>
          </div>

          <div className="overflow-hidden rounded-[20px] shadow-surface">
            <img src="/image 1.png" alt="Our team collaborating" className="aspect-[4/3] w-full object-cover" />
          </div>

          <p className="font-hanken text-base leading-relaxed text-brand-gray">
            We’re a passionate team delivering digital experiences designed to drive growth. From strategy and design to
            development and online campaigns, we build websites that reflect your vision and achieve business goals.
          </p>
        </div>

        {/* Right: Headline + CTA */}
        <div className="space-y-6">
          <h2 id="about-title" className="text-4xl leading-tight sm:text-5xl md:text-6xl">
            Dedicated To Your
            <br />
            Success With Innovative
            <br />
            Digital Marketing Solutions
          </h2>

          <a
            href="#about"
            className="inline-flex items-center gap-3 rounded-full bg-[#D0FF71] px-6 py-3 font-semibold text-black shadow"
          >
            More About Us
            <img src="/Arrow 1-1.svg" alt="arrow" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
