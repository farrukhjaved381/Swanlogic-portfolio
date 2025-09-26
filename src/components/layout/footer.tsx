import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, MapPin } from "@/components/icons"
import { Facebook, Instagram, X, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="mx-2 sm:mx-4 lg:mx-10 mb-2 sm:mb-4 rounded-t-xl sm:rounded-t-2xl lg:rounded-t-3xl bg-black text-white relative overflow-hidden">
       {/* Footer right design - Hidden on mobile and tablets */}
       <div className="absolute bg-white z-10 -top-2 sm:-top-4 lg:-top-4 -right-6 sm:-right-1 rounded-xl sm:rounded-2xl lg:rounded-3xl p-1 sm:p-2 w-32 sm:w-64 lg:w-96 xl:w-[650px] h-6 sm:h-8 lg:h-12 xl:h-16 hidden lg:block"></div>

        {/* Social links - Fully responsive positioning */}
        <div className="absolute bg-white z-20 -top-1 sm:-top-2 lg:-top-4  lg:-left-4 sm:-left-2 rounded-lg sm:rounded-xl lg:rounded-2xl xl:rounded-3xl p-1 sm:p-2">
          <div className="flex lg:flex-col items-center lg:items-start gap-1 sm:gap-2 lg:gap-3 xl:gap-5 p-1 sm:p-2">
            <a href="#" aria-label="Facebook" className="grid h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 place-items-center rounded-full bg-purple-500 hover:bg-purple-600 transition-colors">
              <Facebook className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 xl:h-6 xl:w-6 text-white" />
            </a>
            <a href="#" aria-label="Instagram" className="grid h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 place-items-center rounded-full bg-purple-500 hover:bg-purple-600 transition-colors">
              <Instagram className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 xl:h-6 xl:w-6 text-white" />
            </a>
            <a href="#" aria-label="Twitter/X" className="grid h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 place-items-center rounded-full bg-purple-500 hover:bg-purple-600 transition-colors">
              <X className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 xl:h-6 xl:w-6 text-white" />
            </a>
            <a href="#" aria-label="LinkedIn" className="grid h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 place-items-center rounded-full bg-purple-500 hover:bg-purple-600 transition-colors">
              <Linkedin className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 xl:h-6 xl:w-6 text-white" />
            </a>
          </div>
        </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-20 py-6 sm:py-20 md:py-10 lg:py-14">
        {/* Main content section */}
        <div className="mb-6 sm:mb-8 sm:mt-20 md:mb-10 lg:mb-12">
          {/* Links Container - Fully responsive grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
            {/* Explore Links */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white font-bold mb-3 sm:mb-4 lg:mb-5 xl:mb-6">Explore</h3>
              <ul className="space-y-2 sm:space-y-3 lg:space-y-4" style={{ color: '#696969' }}>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white font-bold mb-3 sm:mb-4 lg:mb-5 xl:mb-6">Useful Links</h3>
              <ul className="space-y-2 sm:space-y-3" style={{ color: '#696969' }}>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1">
                    Terms And Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1">
                    FAQ's
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-xs sm:text-sm md:text-base block py-1">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Get In Touch - Full width on mobile, spans 2 cols on tablet */}
            <div className="sm:col-span-2 lg:col-span-1 space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white font-bold mb-3 sm:mb-4 lg:mb-5 xl:mb-6">Get In Touch</h3>
              <div className="space-y-3 sm:space-y-4 text-gray-300">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-lime-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base">012 1234567 890</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-lime-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base break-all sm:break-normal">hello@example.com</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-lime-400 mt-1 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base leading-relaxed">1 Gibfield Park Avenue Atherton Manchester M46 0SU</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-4 sm:pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="w-full md:w-auto">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-bold font-rf-dewi">Where Quotes Meet Purpose.</h2>
            </div>
            <Button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold w-full md:w-auto px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base shrink-0">
              Get A Quote
              <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>

          {/* Copyright section */}
          <div className="flex flex-col sm:flex-row lg:flex-row justify-between items-start sm:items-center pt-4 sm:pt-6 border-t border-gray-800 text-xs sm:text-sm text-gray-400 gap-3 sm:gap-4">
            <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3 sm:gap-4 lg:gap-6 xl:gap-8 w-full lg:w-auto">
              <span className="font-bold text-white text-xs sm:text-sm md:text-base">Mercury Sole</span>
              <span className="whitespace-nowrap text-xs sm:text-sm">© Mercury Sole Ltd 2025</span>
              <span className="whitespace-nowrap text-xs sm:text-sm">Web Design Manchester</span>
            </div>
            <span className="whitespace-nowrap text-xs sm:text-sm mt-2 sm:mt-0">All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
