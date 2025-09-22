import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer as FooterSimple } from '../components/layout/footer';
// Assuming this path is correct for your image
import uiuxWorkflowBannerImg from '../images/UiUx-banner.png';
import uiuxWorkflow2ndImg from '../images/ui-2nd.png';
import uiuxWorkflow3rdImg from '../images/uiux-03.png';
import uiuxWorkflow4thImg from '../images/uiux-04.png';
import wireframe01 from '../images/uiux-05.png';
import wireframe02 from '../images/uiux-06.png';


import { motion } from "framer-motion";

export default function UXDesignStudio() {

  // Reusable row component
  const Row = ({ direction = "left" }) => {
    return (
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }} // ⚡ faster (was 15s, now 12s)
      >
        <div className="flex items-center gap-14">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-900" // 📈 larger than before
            >
              Let’s Work Together.
            </div>
          ))}
        </div>
      </motion.div>

    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Main Content Container */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            {/* 1. Header Section */}
            <div className="px-8 pt-8 pb-4">
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                UI/UX Design Workflow
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Content: Title */}
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                    A UI/UX Design Studio In Manchester
                  </h1>
                </div>

                {/* Right Content: Short Description */}
                <div className="text-gray-600 leading-relaxed">
                  <p className="mb-6">
                    We believe great design goes beyond visuals—it's about creating smooth, meaningful interactions. By blending creativity with strategy, we ensure every project not only looks stunning but also provides an effortless user journey.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Description and Hero Image Section */}
            <div className="px-8 pb-8">

              {/* Long Description */}
              <div className="mb-12">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {/* Increased text size for better reading flow */}
                  Our Manchester-based UI/UX design studio is committed to transforming ideas into digital experiences that truly connect with people. We begin every project by understanding user behavior, business objectives, and market trends to ensure the foundation is strong. From research and wireframing to prototyping and usability testing, our process is designed to create intuitive and visually compelling interfaces. Each design is carefully crafted to provide seamless navigation, consistent branding, and accessibility across all devices. By blending creativity with strategy, we deliver solutions that are not only aesthetically pleasing but also practical and results-driven.
                </p>
              </div>

              {/* Hero Image & Button Container FIX */}
              <div className="rounded-2xl overflow-hidden shadow-2xl relative">

                <div className='absolute top-0 left-0 w-44 h-16 bg-white z-10  rounded-br-3xl'>

                </div>

                {/* Button placed on top of the image (Adjusted positioning) */}
                <button
                  className="inline-flex items-center gap-2 bg-lime-300 hover:bg-lime-400 transition-colors px-6 py-3 rounded-full font-medium text-gray-900 group absolute top-0  z-10"
                >
                  Tell Me More
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>


                {/* Image */}
                <img
                  src={uiuxWorkflowBannerImg}
                  alt="UI/UX Designer working at desk with multiple monitors"
                  // Added 'block' to the image to ensure it behaves correctly
                  className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-110 block"
                // Reduced hover scale for a more controlled effect (from 125 to 110)
                />
              </div>
              {/* The empty div below the button was removed as it was unnecessary after fixing the positioning */}
            </div>
          </div>
        </div>

        {/* Placeholder for future sections like workflow steps, etc. */}
        {/* You can add another section here to list the steps using the 'Check' icon */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                    Requirement Gathering
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Understand Client Goals & Target Audience
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    Effective requirement gathering is the foundation of any successful project. It involves in-depth discussions with stakeholders to identify business objectives, user needs, and functional expectations. This phase ensures that the final product aligns with the client's vision and delivers tangible value to the end-users.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-purple-600" />
                      </div>
                      <p className="text-gray-700">
                        Conduct stakeholder interviews to identify key objectives
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-purple-600" />
                      </div>
                      <p className="text-gray-700">
                        Define user personas and their specific needs
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-purple-600" />
                      </div>
                      <p className="text-gray-700">
                        Document functional and non-functional requirements
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-purple-600" />
                      </div>
                      <p className="text-gray-700">
                        Establish measurable success criteria and project KPIs
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Image with Animation */}
                <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
                  <div className="aspect-[4/3] relative">
                    {/* First (default) image */}
                    <div className="absolute inset-0">
                      <img
                        src={uiuxWorkflow2ndImg}
                        alt="Team meeting discussing client goals"
                        className="w-full h-full object-fit rounded-2xl transition-opacity duration-0 group-hover:opacity-0 group-hover:delay-0 delay-700"
                      />
                    </div>

                    {/* Second (hover) image */}
                    <div className="absolute inset-0 transform -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                      <img
                        src={uiuxWorkflow2ndImg}
                        alt="Team meeting discussing client goals"
                        className="w-full h-full object-fit rounded-2xl"
                      />
                    </div>
                    {/* Corner box - now properly clipped with the container */}
                    <div className="absolute bottom-0 right-0 w-[110px] h-[55px] bg-white rounded-tl-xl">
                    </div>
                    <div className="absolute bottom-0 right-0 h-10 w-24 bg-violet-600 rounded-lg py-6 px-10 shadow-lg z-10">
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


        {/* Scrolling Text Rows */}
        <div className="py-16 bg-white overflow-hidden">
          {/* First row (left scroll) */}
          <Row direction="left" />

          {/* Second row (right scroll) */}
          <Row direction="right" />
        </div>


        {/* Research & Analysis Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-7xl mx-auto">
            <div className="px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Illustration */}
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden ">
                    {/* Main Background Image */}
                    <img
                      src={uiuxWorkflow3rdImg}
                      alt="Research and Analysis Illustration"
                      className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                    />
                    <div className="absolute bottom-0 right-0 w-[105px] h-[60px] bg-white rounded-tl-xl">
                    </div>

                  </div>
                  {/* Corner box - now properly clipped with the container */}
                  <div className="absolute bottom-0 right-0 h-12 w-24 bg-lime-400 rounded-lg p-4 shadow-lg z-10">
                  </div>
                </div>

                {/* Right Content */}
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                    Research & Analysis
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Competitor Study, User Personas, Design Trends
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    Through research and analysis are critical for making informed design decisions. This phase involves a deep dive into the market landscape to understand competitor strengths and weaknesses, creating detailed profiles of target users, and identifying current and emerging design trends to ensure the final product is both competitive and user-centric.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-purple-600" />
                      </div>
                      <p className="text-gray-700">
                        Conduct a SWOT analysis of key competitors
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-purple-600" />
                      </div>
                      <p className="text-gray-700">
                        Develop detailed user personas based on real data and interviews
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-purple-600" />
                      </div>
                      <p className="text-gray-700">
                        Audit and document relevant UI/UX design patterns and trends
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-purple-600" />
                      </div>
                      <p className="text-gray-700">
                        Synthesize findings into actionable insights for the strategy phase
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Information Architecture Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                    Information Architecture
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Sitemap, Navigation, And Content Flow
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    This phase focuses on structuring the product's information architecture. It involves creating a clear sitemap outlining all pages and content sections, designing intuitive navigation systems for seamless user experience, and mapping the content flow to ensure users can complete their tasks efficiently and find information without friction.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-purple-600" />
                      </div>
                      <p className="text-gray-700">
                        Develop a hierarchical sitemap outlining all pages and content sections
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-purple-600" />
                      </div>
                      <p className="text-gray-700">
                        Define primary and secondary global navigation menus
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-purple-600" />
                      </div>
                      <p className="text-gray-700">
                        Map user journeys and key task flows for critical user goals
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-purple-600" />
                      </div>
                      <p className="text-gray-700">
                        Establish a clear content strategy and inventory for each page
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Illustration */}
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden ">
                    {/* Main Background Image */}
                    <img
                      src={uiuxWorkflow4thImg}
                      alt="Information Architecture Illustration"
                      className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                    />
                    <div className="absolute top-0 left-0 w-[105px] h-[60px] bg-white rounded-br-xl">
                    </div>

                  </div>
                  {/* Corner box - now properly clipped with the container */}
                  <div className="absolute top-0 left-0 h-12 w-24 bg-violet-600 rounded-lg p-4 shadow-lg z-10">
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Wireframing & User Flow Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-black rounded-t-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="px-8">
              <div className="grid lg:grid-cols-2 gap-8 items-stretch">

                {/* Left Content - Wireframing */}
                <div className=" rounded-2xl p-8 relative overflow-hidden">
                  {/* Small label */}
                  <div className="text-sm text-lime-400 uppercase text-center tracking-wider mb-4 font-medium">
                    Wireframing
                  </div>

                  {/* Title */}
                  <h3 className="text-5xl font-bold text-white leading-tight mb-4 text-center">
                    Low-Fidelity Screen<br />Layouts
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-8 text-sm text-center">
                    Low-fidelity layouts, such as wireframes, are used to establish the basic
                    structure and layout of key screens without visual design details. This
                    allows the team to focus on functionality, user flow, and element
                    placement ensuring a solid foundational experience before investing in
                    visual design and content.
                  </p>

                  {/* User Flow Image */}
                  <div className="relative flex justify-center overflow-hidden rounded-xl">
                    <img
                      src={wireframe01}
                      alt="Low-fidelity wireframe layouts"
                      className="w-full h-auto object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                    />

                    {/* Parents for coner divs */}
                    <div className="absolute bottom-0 left-0 w-[95px] h-[60px] bg-black rounded-tr-xl">
                    </div>
                    <div className="absolute bottom-0 right-0 w-[95px] h-[60px] bg-black rounded-tl-xl">
                    </div>

                    {/* Corner boxes */}
                    <div className="absolute bottom-0 left-0 h-12 w-20 bg-lime-400 rounded-lg p-4 shadow-lg z-10"></div>
                    <div className="absolute bottom-0 right-0 h-12 w-20 bg-lime-400 rounded-lg p-4 shadow-lg z-10"></div>
                  </div>
                </div>

                {/* Right Content - User Flow Mapping */}
                <div className="rounded-2xl p-8 container relative overflow-hidden">
                  {/* Small label */}
                  <div className="text-sm text-lime-400 uppercase text-center tracking-wider mb-4 font-medium">
                    User Flow Mapping
                  </div>

                  {/* Title */}
                  <h3 className="text-5xl font-bold text-white leading-tight mb-4 text-center">
                    Define Journeys For<br />Smooth Navigation
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-8 text-sm text-center">
                    Mapping user journeys is essential for creating an intuitive experience.
                    This process involves outlining the step-by-step paths users will take to
                    complete key tasks, identifying potential pain points, and ensuring the
                    navigation is logical and efficient. This helps in creating a seamless flow
                    that guides users effortlessly to their goals.
                  </p>

                  {/* User Flow Image */}
                  <div className="relative flex justify-center overflow-hidden rounded-xl">
                    <img
                      src={wireframe02}
                      alt="User flow mapping and journey definition"
                      className="w-full h-auto object-cover transform transition-transform duration-[2000ms] ease-in-out hover:scale-125"
                    />

                    {/* Parents for coner divs */}
                    <div className="absolute bottom-0 left-0 w-[95px] h-[60px] bg-black rounded-tr-xl">
                    </div>
                    <div className="absolute bottom-0 right-0 w-[95px] h-[60px] bg-black rounded-tl-xl">
                    </div>

                    {/* Corner boxes */}
                    <div className="absolute bottom-0 left-0 h-12 w-20 bg-lime-400 rounded-lg p-4 shadow-lg z-10"></div>
                    <div className="absolute bottom-0 right-0 h-12 w-20 bg-lime-400 rounded-lg p-4 shadow-lg z-10"></div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

      </main>
      <FooterSimple />
    </div>
  );
}