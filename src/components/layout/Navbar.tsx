import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("Home");
  const [starPos, setStarPos] = React.useState({ left: 0, width: 0 });

  const linkRefs = React.useRef([]);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { label: "Home", href: "/home" },
    { label: "Our Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Quotation", href: "/quote" },
    { label: "Contact Us", href: "/contact" },
  ];

  // Sync active state with current pathname
  React.useEffect(() => {
    // Handle root path and /home as the same
    const currentPath = location.pathname === "/" ? "/home" : location.pathname;
    const currentLink = links.find((link) => link.href === currentPath);
    if (currentLink) {
      setActive(currentLink.label);
    } else {
      // Handle nested routes (e.g., /services/javascript-workflow should show "Our Services")
      const parentLink = links.find((link) => currentPath.startsWith(link.href));
      if (parentLink) {
        setActive(parentLink.label);
      }
    }
  }, [location.pathname]); // Removed links from dependency array

  React.useEffect(() => {
    const activeIndex = links.findIndex((l) => l.label === active);
    const el = linkRefs.current[activeIndex];
    if (el) {
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentElement.getBoundingClientRect();
      setStarPos({
        left: rect.left - parentRect.left + rect.width / 2,
        width: rect.width,
      });
    }
  }, [active]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur shadow-sm supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        {/* Left: Logo */}
        <button onClick={() => navigate("/")} className="flex items-center gap-3">
          <img
            src="/SwanLogics-logo.png"
            alt="SwanLogics logo"
            className="h-8 w-auto"
          />
        </button>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Links */}
        <div className="relative hidden items-center gap-8 md:flex">
          {links.map((link, i) => (
            <button
              key={link.label}
              ref={(el) => { linkRefs.current[i] = el; }}
              onClick={() => {
                // Navigate to root for Home, otherwise use the href
                const targetPath = link.label === "Home" ? "/" : link.href;
                navigate(targetPath);
              }}
              className={`relative text-[18px] transition-colors ${
                active === link.label
                  ? "text-brand-ink font-semibold"
                  : "text-brand-ink/70 hover:text-brand-ink"
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* Moving Star Indicator */}
          <div
            className="absolute top-full mt-1 h-3 w-3 -translate-x-1/2 transition-all duration-300"
            style={{
              left: `${starPos.left}px`,
            }}
          >
            <img src="/Star.png" alt="active indicator" className="h-3 w-3" />
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <img src="/Vector.svg" alt="" className="h-5 w-5 opacity-80" />
          <Button 
            onClick={() => navigate("/quote")}
            className="flex items-center gap-2 rounded-full bg-[#D0FF71] px-5 py-3 font-bold text-black hover:brightness-95"
          >
            Start A Project
            <img src="/Arrow 1-1.svg" alt="arrow" className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-6 py-3">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => {
                const targetPath = link.label === "Home" ? "/" : link.href;
                navigate(targetPath);
                setOpen(false);
              }}
              className={`text-base transition-colors ${
                active === link.label
                  ? "text-brand-ink font-semibold"
                  : "text-brand-ink/70 hover:text-brand-ink"
              }`}
            >
              {link.label}
            </button>
          ))}
          <Button 
            onClick={() => {
              navigate("/quote");
              setOpen(false);
            }}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#D0FF71] px-5 py-3 font-bold text-black hover:brightness-95"
          >
            Start A Project
            <img src="/Arrow 1-1.svg" alt="arrow" className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
