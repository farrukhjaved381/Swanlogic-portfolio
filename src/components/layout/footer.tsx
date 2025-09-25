import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, MapPin } from "@/components/icons"
import { Facebook, Instagram, X, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="mx-2 sm:mx-4 lg:mx-10 mb-2 sm:mb-4 rounded-t-xl sm:rounded-t-2xl lg:rounded-t-3xl bg-black text-white relative overflow-hidden">
       {/* Footer right design - Hidden on mobile */}
       <div className="absolute bg-white z-10 -top-2 sm:-top-5 -right-2 sm:-right-1 rounded-xl sm:rounded-2xl lg:rounded-3xl p-1 sm:p-2 w-32 sm:w-96 lg:w-[650px] h-8 sm:h-12 lg:h-16 hidden md:block"></div>

        {/* Social links - Responsive positioning */}
        <div className="absolute bg-white z-10 -top-2 sm:-top-4 -left-1 sm:-left-2 rounded-xl sm:rounded-2xl lg:rounded-3xl p-1 sm:p-2">
          <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-3 lg:gap-5 p-1 sm:p-2">
            <a href="#" aria-label="Facebook" className="grid h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 place-items-center rounded-full bg-purple-500 hover:bg-purple-600 transition-colors">
              <Facebook className="h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6 text-white" />
            </a>
            <a href="#" aria-label="Instagram" className="grid h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 place-items-center rounded-full bg-purple-500 hover:bg-purple-600 transition-colors">
              <Instagram className="h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6 text-white" />
            </a>
            <a href="#" aria-label="Twitter/X" className="grid h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 place-items-center rounded-full bg-purple-500 hover:bg-purple-600 transition-colors">
              <X className="h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6 text-white" />
            </a>
            <a href="#" aria-label="LinkedIn" className="grid h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 place-items-center rounded-full bg-purple-500 hover:bg-purple-600 transition-colors">
              <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6 text-white" />
            </a>
          </div>
        </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Top notification bar */}
        <div className="mb-8 sm:mb-10 lg:mb-12 flex flex-col lg:flex-row justify-between items-start lg:items-center rounded-2xl p-4 sm:p-6 gap-8 lg:gap-0">
          {/* Placeholder column for spacing/alignment on desktop */}
          <div className="hidden lg:block" />

          {/* Links Container - Stack on mobile, side by side on tablet+ */}
          <div className="w-full lg:w-auto grid grid-cols-1 sm:grid-cols-2 lg:flex lg:gap-16 xl:gap-24 gap-8">
            {/* Explore Links */}
            <div className="min-w-0">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white font-bold mb-4 sm:mb-5 lg:mb-6">Explore</h3>
              <ul className="space-y-2 sm:space-y-3 lg:space-y-4" style={{ color: '#696969' }}>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-sm sm:text-base">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-sm sm:text-base">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-sm sm:text-base">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-sm sm:text-base">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-sm sm:text-base">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="min-w-0">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white font-bold mb-4 sm:mb-5 lg:mb-6">Useful Links</h3>
              <ul className="space-y-2 sm:space-y-3" style={{ color: '#696969' }}>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-sm sm:text-base">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-sm sm:text-base">
                    Term And Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-sm sm:text-base">
                    FAQ's
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-sm sm:text-base">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div className="min-w-0 sm:col-span-2 lg:col-span-1">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white font-bold mb-4 sm:mb-5 lg:mb-6">Get In Touch</h3>
              <div className="space-y-3 sm:space-y-4 text-gray-300">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-lime-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">012 1234567 890</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-lime-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base break-all sm:break-normal">hello@example.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-lime-400 mt-1 flex-shrink-0" />
                  <span className="text-sm sm:text-base leading-relaxed">1 Gibfield Park Avenue Atherton Manchester M46 0SU</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="w-full lg:w-auto">
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold mb-2 font-rf-dewi">Where Quotes Meet Purpose.</h2>
            </div>
            <Button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold w-full sm:w-auto px-6 py-3 text-sm sm:text-base">
              Get A Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800 text-xs sm:text-sm text-gray-400 gap-4 lg:gap-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 lg:gap-8 w-full lg:w-auto">
              <span className="font-bold text-white text-sm sm:text-base">Mercury Sole</span>
              <span className="whitespace-nowrap">© Mercury Sole Ltd 2025</span>
              <span className="whitespace-nowrap">Web Design Manchester</span>
            </div>
            <span className="whitespace-nowrap">All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
