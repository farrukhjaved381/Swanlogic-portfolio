import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/icons";
import React from "react";

type ServiceKey = "UI/UX" | "Java Script" | "Python" | "Mobile App" | "Ecommerce" | "No-Code";

const serviceCopy: Record<ServiceKey, { title: string; body: string }> = {
  "UI/UX": {
    title: "UI/UX",
    body:
      "We craft intuitive and engaging user experiences through research, wireframing, and prototyping. The result is beautiful, usable products that convert.",
  },
  "Java Script": {
    title: "JavaScript",
    body:
      "From interactive UI to performant SPAs, we build robust frontends using modern JS frameworks and patterns.",
  },
  Python: {
    title: "Python",
    body:
      "APIs, automation, and data workflows built with Python to connect your systems and accelerate delivery.",
  },
  "Mobile App": {
    title: "Mobile App",
    body:
      "Cross-platform mobile apps with native feel, tailored to your product vision and users’ needs.",
  },
  Ecommerce: {
    title: "Ecommerce",
    body:
      "Storefronts that sell — optimized product pages, seamless carts, and secure checkout experiences.",
  },
  "No-Code": {
    title: "No‑Code",
    body:
      "Launch fast with Webflow/Shopify/WordPress using sensible automation and scalable foundations.",
  },
};

export function ServicesSection() {
  const [active, setActive] = React.useState<ServiceKey>("UI/UX");

  const services: ServiceKey[] = ["UI/UX", "Java Script", "Python", "Mobile App", "Ecommerce", "No-Code"];

  return (
    <section id="services" className="bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-start justify-between gap-6">
          <h2 className="font-rf-dewi text-4xl font-bold md:text-5xl">Our Services</h2>
          <div className="flex items-center gap-4">
            <p className="max-w-md text-gray-300">We design and develop digital experiences that drive growth.</p>
            <Button className="bg-lime-400 font-semibold text-black hover:bg-lime-500">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-3">
          {/* Service Buttons */}
          <div className="space-y-3">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => setActive(service)}
                className={`rounded-full px-6 py-3 font-medium ${
                  active === service ? "bg-white text-black" : "bg-white/10 text-white hover:bg-white/20"
                }`}
                aria-pressed={active === service}
              >
                {service}
              </button>
            ))}
          </div>

          {/* Active Service Card */}
          <div className="rounded-2xl border-2 border-lime-400 bg-black p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-lime-400 p-2">
                <svg className="h-6 w-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2 2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7Z" />
                </svg>
              </div>
              <h3 className="font-rf-dewi text-2xl font-bold">{serviceCopy[active].title}</h3>
            </div>
            <p className="mb-6 leading-relaxed text-gray-300">{serviceCopy[active].body}</p>
            <Button variant="outline" className="border-lime-400 bg-transparent text-lime-400 hover:bg-lime-400 hover:text-black">
              View Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Circular infographic */}
          <div className="relative">
            <div className="relative mx-auto h-80 w-80">
              <div className="absolute inset-0 rounded-full border-2 border-gray-700" />
              <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600 text-center leading-[5rem]">
                SL
              </div>
              {/* orbiting items */}
              <img src="/UX.svg" alt="UX" className="absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2" />
              <img src="/Code dev.svg" alt="Code" className="absolute right-4 top-6 h-8 w-8" />
              <img src="/No-Code.svg" alt="No-Code" className="absolute right-0 top-1/2 h-8 w-8 -translate-y-1/2" />
              <img src="/wordpress.svg" alt="WordPress" className="absolute right-6 bottom-6 h-8 w-8" />
              <img src="/shopify.svg" alt="Shopify" className="absolute left-1/2 bottom-0 h-8 w-8 -translate-x-1/2" />
              <img src="/ecomerce.svg" alt="Ecommerce" className="absolute left-6 bottom-6 h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
