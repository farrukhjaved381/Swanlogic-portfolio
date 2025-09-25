import React, { useState } from "react";
import { ArrowUpRight, Code, Smartphone, ShoppingCart, Zap, Palette } from "lucide-react";
import wheelIcon from "../../assets/home-showcase-icon.svg";

export function ServicesSection() {
  const services = [
    {
      id: "uiux",
      label: "UI/UX",
      icon: Palette,
      description:
        "We craft intuitive and engaging user experiences through meticulous research, wireframing, and prototyping. Our process is designed to understand user behavior deeply, ensuring the final product is not only visually appealing but also easy to navigate and highly effective at achieving your business objectives, leading to increased user satisfaction and conversion.",
      highlights: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      id: "javascript",
      label: "JavaScript",
      icon: Code,
      description:
        "Modern front-end & full-stack JavaScript solutions using React, Next.js and Node — performant, accessible and production-ready.",
      highlights: ["React & Next.js", "Node.js APIs", "Performance Optimization", "Testing"]
    },
    {
      id: "python",
      label: "Python",
      icon: Code,
      description:
        "Backend systems, APIs and automation built with Python. Clean architecture, tests and deployments that scale.",
      highlights: ["Django/FastAPI", "Database Design", "API Development", "DevOps"]
    },
    {
      id: "mobile",
      label: "Mobile App",
      icon: Smartphone,
      description:
        "Native and cross-platform mobile apps focused on UX, performance and native integrations.",
      highlights: ["React Native", "iOS/Android", "App Store Optimization", "Push Notifications"]
    },
    {
      id: "ecommerce",
      label: "Ecommerce",
      icon: ShoppingCart,
      description:
        "E-commerce platforms that convert — from UX to checkout optimization and integrations with payment and inventory systems.",
      highlights: ["Shopify/WooCommerce", "Payment Integration", "Inventory Management", "Analytics"]
    },
    {
      id: "nocode",
      label: "No-Code",
      icon: Zap,
      description:
        "Rapid prototypes and production apps using no-code/low-code tools to validate ideas fast.",
      highlights: ["Webflow", "Airtable", "Zapier Automation", "MVP Development"]
    },
  ];

  const [selected, setSelected] = useState(services[0].id);
  const active = services.find((s) => s.id === selected)!;

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="text-sm text-gray-400">We design and develop digital experiences that drive growth.</p>
          <button className="flex items-center gap-2 bg-lime-400 text-black rounded-full px-4 py-2 text-sm font-medium">
            View All Services <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Service Menu Buttons */}
          <div className="md:col-span-3 space-y-4">
            {services.map((service) => {
              const isActive = selected === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelected(service.id)}
                  className={`w-full text-center py-3 px-4 rounded-full transition-all ${
                    isActive 
                      ? "bg-lime-400 text-black font-medium" 
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
                >
                  {service.label}
                </button>
              );
            })}
          </div>

          {/* Service Detail Card */}
          <div className="md:col-span-5 bg-black border border-lime-400/50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-lime-400 p-2 rounded-full">
                <active.icon className="w-5 h-5 text-black" />
              </div>
              <h3 className="text-3xl font-bold">{active.label}</h3>
            </div>
            
            <p className="text-gray-300 mb-8">{active.description}</p>
            
            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-sm font-medium uppercase text-gray-400 mb-3">Key Features</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {active.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-lime-400 rounded-full"></div>
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-lime-400 text-black rounded-full px-5 py-2 font-medium flex items-center gap-2">
                Get Started <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="border border-gray-700 text-gray-300 rounded-full px-5 py-2">
                Learn More
              </button>
            </div>
          </div>

          {/* Service Wheel */}
          <div className="md:col-span-4 flex justify-center items-center">
            <div className="relative w-80 h-80">
              {/* Outer circle */}

                {/* Middle circle */}
                <div className="relative w-72 h-72 rounded-full border-2 border-white/50 flex justify-center items-center">
                  {/* Middle circle text */}
                  <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 text-white text-base font-semibold">
                    React
                  </span>
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-white text-base font-semibold">
                    Node.js
                  </span>
                  <span className="absolute top-1/2 -left-1 transform -translate-y-1/2 -rotate-90 text-white text-base font-semibold">
                    Django
                  </span>
                  <span className="absolute top-1/2 -right-1 transform -translate-y-1/2 rotate-90 text-white text-base font-semibold">
                    Flutter
                  </span>
                  
                  {/* Inner circle */}
                  <div className="relative w-52 h-52 rounded-full border-2 border-white/70 flex justify-center items-center">
                    {/* Inner circle text */}
                    <span className="absolute -top-0 left-1/2 transform -translate-x-1/2 text-white text-lg font-bold">
                      API
                    </span>
                    <span className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 text-white text-lg font-bold">
                      DB
                    </span>
                    <span className="absolute top-1/2 -left-0 transform -translate-y-1/2 -rotate-90 text-white text-lg font-bold">
                      AWS
 h                    </span>
                    <span className="absolute top-1/2 -right-0 transform -translate-y-1/2 rotate-90 text-white text-lg font-bold">
                      GCP
                    </span>                
                    {/* Center circle with enhanced styling */}
                      <div className="relative w-36 h-36   z-10  rounded-full flex items-center justify-center shadow-lg">
                    <div className="relative w-32 h-32 rounded-full border bg-purple-500 flex justify-center items-center shadow-2xl">
                      {/* Icon container */}
                      <div className="relative z-10  rounded-full flex items-center justify-center shadow-lg">
                        <img src={wheelIcon} alt="centre-wheel-icon" className=" w-16 h-16 filter drop-shadow-sm" />
                      </div>
</div>
                      {/* Animated pulse ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-lime-400/30 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Optional: Rotating animation for the entire wheel */}
              <div className="absolute inset-0 rounded-full animate-spin-slow opacity-10 border border-dashed border-white"></div>
            </div>
          </div>

      </div>
    </section>
  );
}