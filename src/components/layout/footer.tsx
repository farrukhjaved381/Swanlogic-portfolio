import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, MapPin } from "@/components/icons"

export function Footer() {
  return (
    <footer className="mx-4 mb-4 rounded-t-3xl bg-black text-white">
      <div className="container mx-auto px-8 py-12">
        {/* Top notification bar */}

        <div className="mb-12 grid gap-8 lg:grid-cols-4">
          {/* Placeholder column for spacing/alignment */}
          <div className="hidden lg:block" />

          {/* Explore Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Explore</h3>
            <ul className="space-y-3" style={{ color: '#696969' }}>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Useful Links</h3>
            <ul className="space-y-3" style={{ color: '#696969' }}>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Term And Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-lime-400" />
                <span>012 1234567 890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-lime-400" />
                <span>hello@example.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-lime-400 mt-1" />
                <span>1 Gibfield Park Avenue Atherton Manchester M46 0SU</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2 font-rf-dewi">Where Quotes Meet Purpose.</h2>
            </div>
            <Button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold">
              Get A Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-800 text-sm text-gray-400 relative">
            <div className="flex items-center gap-8">
              <span className="font-bold text-white">Mercury Sole</span>
              <span>© Mercury Sole Ltd 2025</span>
              <span>Web Design Manchester</span>
            </div>
            <span>All Rights Reserved</span>

            {/* Social icons bottom-right */}
            <div className="absolute right-0 -top-12 hidden gap-3 lg:flex">
              <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20">
                <img src="/facebook.svg" alt="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20">
                <img src="/instagram.svg" alt="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter/X" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20">
                <img src="/twitter.svg" alt="X (Twitter)" className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20">
                <img src="/linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
