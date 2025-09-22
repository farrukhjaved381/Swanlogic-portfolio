import React from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const links = [
    { label: "Home", href: "#home", withStar: true },
    { label: "Our Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Quotation", href: "/quote" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        {/* Left: Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img src="/SwanLogics-logo.png" alt="SwanLogics logo" className="h-8 w-auto" />
        </a>

        {/* Center: Links */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-[18px] text-brand-ink/90 hover:text-brand-ink"
            >
              {link.label}
              {link.withStar && (
                <img
                  src="/Star.png"
                  alt="decorative star"
                  className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 pt-1"
                />
              )}
            </a>
          ))}
        </div>

        {/* Right: CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <img src="/Vector.svg" alt="decorative vector" className="h-5 w-5 opacity-80" />
          <Button
            className="flex items-center gap-2 rounded-full bg-[#D0FF71] px-5 py-3 font-bold text-black hover:brightness-95"
          >
            Start A Project
            <img src="/Arrow 1-1.svg" alt="arrow" className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="mx-auto block max-w-[1400px] border-t border-black/5 px-6 pb-4 md:hidden">
          <div className="flex flex-col gap-4 py-3">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="text-base text-brand-ink">
                {link.label}
              </a>
            ))}
            <Button className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#D0FF71] px-5 py-3 font-bold text-black">
              Start A Project
              <img src="/Arrow 1-1.svg" alt="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
