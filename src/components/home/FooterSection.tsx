import React from 'react';

const exploreLinks = ['Home', 'About Us', 'Our Services', 'Our Team', 'Portfolio'];
const usefulLinks = ['Privacy Policy', 'Term And Conditions', 'FAQ\'s', 'Contact Us'];
const socialIcons = ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'];

export default function FooterSection() {
  return (
    <footer className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 bg-brand-carbon text-white">
      <div className="container-px mx-auto max-w-[1400px] py-12 sm:py-16 md:py-20 lg:py-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          Where quotes meet purpose.
        </h2>

        <div className="mt-8 sm:mt-12 md:mt-16 grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)]">
          {/* Left Column */}
          <div className="space-y-8 sm:space-y-10">
            <div>
              <p className="font-dewi text-lg sm:text-xl uppercase tracking-[0.2em] text-brand-lime">
                Explore
              </p>
              <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-base sm:text-lg text-brand-gray">
                {exploreLinks.map((item) => (
                  <li key={item} className="hover:text-brand-lime transition-colors cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-dewi text-lg sm:text-xl uppercase tracking-[0.2em] text-brand-lime">
                Useful Links
              </p>
              <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-base sm:text-lg text-brand-gray">
                {usefulLinks.map((item) => (
                  <li key={item} className="hover:text-brand-lime transition-colors cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialIcons.map((icon) => (
                <button
                  key={icon}
                  type="button"
                  className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full bg-brand-purple text-xs font-semibold uppercase tracking-[0.2em] hover:bg-brand-purple/80 transition-colors"
                  aria-label={icon}
                >
                  {icon[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Middle Column - Get In Touch */}
          <div className="space-y-6 sm:space-y-8 rounded-2xl sm:rounded-[28px] border border-brand-purple/30 p-6 sm:p-8 md:p-10">
            <p className="font-dewi text-xl sm:text-2xl uppercase tracking-[0.2em] text-brand-lime">
              Get In Touch
            </p>
            <div className="space-y-4 sm:space-y-6 text-brand-gray">
              <div>
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/60">Email</p>
                <p className="mt-1 text-base sm:text-lg break-all sm:break-normal">hello@example.com</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/60">Phone</p>
                <p className="mt-1 text-base sm:text-lg">012 1234567 890</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/60">Location</p>
                <p className="mt-1 text-base sm:text-lg leading-relaxed">
                  1 Gibfield Park Avenue Atherton Manchester M46 0SU
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Mercury Sole */}
          <div className="flex flex-col justify-between gap-8 sm:gap-10 rounded-2xl sm:rounded-[28px] border border-brand-purple/20 p-6 sm:p-8 md:p-10">
            <div>
              <p className="font-dewi text-2xl sm:text-3xl uppercase tracking-[0.2em]">Mercury Sole</p>
              <p className="mt-2 sm:mt-3 font-hanken text-sm sm:text-base leading-relaxed text-brand-gray">
                Sh*t I've gone too far, send me back up
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 self-start w-full sm:w-auto rounded-full bg-brand-purple px-5 sm:px-6 py-3 sm:py-4 font-dewi text-xs sm:text-sm uppercase tracking-[0.3em] text-white hover:bg-brand-purple/80 transition-colors"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-[1400px] py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-brand-gray text-center sm:text-left">
            <p>© Mercury Sole Ltd 2025</p>
            <p className="order-last sm:order-none">Web Design Manchester</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}