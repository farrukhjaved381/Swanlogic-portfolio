import { ArrowUpRight } from "@/components/icons"

export function PortfolioShowcase() {
  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-left mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-rf-dewi">Take A Look At Our Projects</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Large Featured Project */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 p-8 text-white">
          <div className="text-sm text-gray-400 mb-4">
            <p>2025 • Gary Neville</p>
          </div>
          <h3 className="text-3xl font-bold mb-8 font-rf-dewi">Refreshing Gary Neville's Digital Presence</h3>

          {/* Main featured image */}
          <div className="mb-6">
            <img src="/image 2.png" alt="Project hero" className="w-full h-48 object-cover rounded-lg" />
          </div>

          {/* Bottom row images */}
          <div className="grid grid-cols-2 gap-4">
            <img src="/image 3.png" alt="Project detail 1" className="w-full h-24 object-cover rounded-lg" />
            <img src="/image 4.png" alt="Project detail 2" className="w-full h-24 object-cover rounded-lg" />
          </div>
        </div>

        {/* Right side stacked projects */}
        <div className="space-y-6">
          {/* Innovative Growth Project */}
          <div className="relative bg-white rounded-2xl p-8 border border-gray-200">
            <div className="text-sm text-gray-600 mb-4">
              <p>2025 • Gary Neville</p>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-rf-dewi">Driving Innovative Growth</h3>
            <div className="absolute top-4 right-4">
              <img src="/image 4.png" alt="Business interface" className="w-28 h-20 object-cover rounded-lg" />
            </div>
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center">
              <ArrowUpRight className="h-5 w-5 text-black" />
            </div>
          </div>

          {/* Digital Marketing Project */}
          <div className="relative bg-gradient-to-br from-green-800 to-green-900 rounded-2xl p-8 text-white">
            <div className="text-sm text-green-300 mb-4">
              <p>2025 • Gary Neville</p>
            </div>
            <h3 className="text-xl font-bold mb-4 font-rf-dewi">
              Excellence in Your Business with Innovative Digital Marketing Solutions
            </h3>
            <div className="flex items-center gap-8 text-sm">
              <div>
                <p className="text-2xl font-bold font-rf-dewi">3.4k</p>
                <p className="text-green-300">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-rf-dewi">85k</p>
                <p className="text-green-300">Experts</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-rf-dewi">180k</p>
                <p className="text-green-300">Brands</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-rf-dewi">8.5k</p>
                <p className="text-green-300">Success</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
