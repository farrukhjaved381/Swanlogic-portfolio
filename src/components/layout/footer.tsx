import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, MapPin } from "@/components/icons"
import { Facebook, Instagram, X, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="mx-10 mb-4 rounded-t-3xl bg-black text-white relative">
       {/* FOoter right design */}
                <div className="absolute bg-white z-10 -top-4 -right-4 rounded-3xl p-2 w-[650px] h-16"></div>

        
        {/* social links */}
        <div className="absolute bg-white z-10 -top-4 -left-2 rounded-3xl p-2 ">
          <div className="items-center p-2 space-y-5">
            <a href="#" aria-label="Facebook" className="grid h-12 w-12  place-items-center rounded-full bg-purple-500 hover:bg-black/20">
              <Facebook className="h-6 w-6 text-white m-2" />
            </a>
            <a href="#" aria-label="Instagram" className="grid h-12 w-12  place-items-center rounded-full bg-purple-500 hover:bg-black/20">
              <Instagram className="h-6 w-6 text-white m-2" />
            </a>
            <a href="#" aria-label="Twitter/X" className="grid h-12 w-12  place-items-center rounded-full bg-purple-500 hover:bg-black/20">
              <X className="h-6 w-6 text-white m-2" />
            </a>
            <a href="#" aria-label="LinkedIn" className="grid h-12 w-12  place-items-center rounded-full bg-purple-500 hover:bg-black/20">
              <Linkedin className="h-6 w-6 text-white m-2" />
            </a>
          </div>
        </div>
      <div className="container mx-auto px-8 py-12">

        

       
        {/* Top notification bar */}

        <div className="mb-12 flex flex-col lg:flex-row justify-between items-center rounded-2xl p-6">
          {/* Placeholder column for spacing/alignment */}
          <div className="hidden lg:block" />

          {/* Explore Links */}
          <div>
            <h3 className="text-5xl text-white font-bold mb-6">Explore</h3>
            <ul className="space-y-4" style={{ color: '#696969' }}>
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
            <h3 className="text-5xl text-white font-bold mb-6">Useful Links</h3>
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
            <h3 className="text-5xl text-white font-bold mb-6">Get In Touch</h3>
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
              <h2 className="text-3xl text-white font-bold mb-2 font-rf-dewi">Where Quotes Meet Purpose.</h2>
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

           
          </div>
        </div>
      </div>
    </footer>
  )
}
