import React from 'react';

const exploreLinks = ['Home', 'About Us', 'Our Services', 'Our Team', 'Portfolio'];
const usefulLinks = ['Privacy Policy', 'Term And Conditions', 'FAQ’s', 'Contact Us'];
const socialIcons = ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'];

export default function FooterSection() {
  return (
    <footer className="mt-24 bg-brand-carbon text-white">
      <div className="container-px mx-auto max-w-[1400px] py-24">
        <h2 className="text-4xl leading-tight sm:text-5xl">Where quotes meet purpose.</h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-10">
            <div>
              <p className="font-dewi text-xl uppercase tracking-[0.2em] text-brand-lime">Explore</p>
              <ul className="mt-6 space-y-4 text-lg text-brand-gray">
                {exploreLinks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-dewi text-xl uppercase tracking-[0.2em] text-brand-lime">Useful Links</p>
              <ul className="mt-6 space-y-4 text-lg text-brand-gray">
                {usefulLinks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              {socialIcons.map((icon) => (
                <button
                  key={icon}
                  type="button"
                  className="grid h-12 w-12 place-items-center rounded-full bg-brand-purple text-xs font-semibold uppercase tracking-[0.2em]"
                  aria-label={icon}
                >
                  {icon[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8 rounded-[28px] border border-brand-purple/30 p-10">
            <p className="font-dewi text-2xl uppercase tracking-[0.2em] text-brand-lime">Get In Touch</p>
            <div className="space-y-6 text-brand-gray">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Email</p>
                <p className="mt-1 text-lg">hello@example.com</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Phone</p>
                <p className="mt-1 text-lg">012 1234567 890</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Location</p>
                <p className="mt-1 text-lg">1 Gibfield Park Avenue Atherton Manchester M46 0SU</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 rounded-[28px] border border-brand-purple/20 p-10">
            <div>
              <p className="font-dewi text-3xl uppercase tracking-[0.2em]">Mercury Sole</p>
              <p className="mt-3 font-hanken text-base leading-relaxed text-brand-gray">
                Sh*t I’ve gone too far, send me back up
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-3 self-start rounded-full bg-brand-purple px-6 py-4 font-dewi text-sm uppercase tracking-[0.3em] text-white"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 py-8 text-sm text-brand-gray">
          <p>© Mercury Sole Ltd 2025</p>
          <p>Web Design Manchester</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
