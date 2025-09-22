import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer as FooterSimple } from '../components/layout/footer';
import { Puzzle } from 'lucide-react'

/**
 * Landing page composition.
 */
export default function Services() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                {/* Services section */}
                <div id="services" className="pt-10">
                    {/* UI/UX Design Workflow Section */}
                    <section className="py-16 px-6">
                        <div className="max-w-7xl mx-auto">
                            {/* Header */}
                            <div className="mb-16">
                                <p className="text-sm text-gray-600 mb-4 font-medium">Our Services</p>
                                <div className="grid lg:grid-cols-2 gap-8 items-start">
                                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                        We're A Digital Marketing Agency With Expertise
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>

                            {/* Content Grid */}
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                {/* Left Content */}
                                <div>
                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-lime-300 rounded-xl flex items-center justify-center mb-8">
                                        <Puzzle className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                        UI/UX Design
                                        <br />
                                        Workflow
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed text-base">
                                        The UI/UX design workflow is a structured process that ensures
                                        every digital product is both visually appealing and user-friendly. It
                                        begins with research and discovery, where user needs, business
                                        goals, and market insights are analyzed to build a strong
                                        foundation. From there, information architecture is developed to
                                        organize content and define clear navigation paths. Wireframes
                                        and prototypes are then created to map out layouts and simulate
                                        user journeys, allowing early testing and feedback. Once the
                                        structure is validated, the visual design phase focuses on applying
                                        colors, typography, and branding elements to create a modern
                                        and consistent look.
                                    </p>
                                </div>

                                {/* Right Illustration */}
                                <div className="relative">
                                    <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 rounded-3xl p-8 h-96 overflow-hidden">
                                        {/* Background Elements */}
                                        <div className="absolute inset-0 opacity-20">
                                            <div className="absolute top-4 right-4 w-32 h-8 bg-white rounded-full"></div>
                                            <div className="absolute bottom-8 left-8 w-24 h-24 bg-blue-400 rounded-2xl opacity-60"></div>
                                        </div>

                                        {/* Main UI Elements */}
                                        <div className="relative z-10 h-full flex flex-col justify-center items-center space-y-4">
                                            {/* Music Player Card */}
                                            <div className="bg-gradient-to-r from-pink-400 to-orange-400 rounded-2xl p-4 w-48 h-24 flex items-center justify-center shadow-lg transform -rotate-6">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-8 h-8 bg-white bg-opacity-30 rounded-lg flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.369 4.369 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="text-white">
                                                        <div className="w-16 h-1 bg-white bg-opacity-60 rounded mb-1"></div>
                                                        <div className="w-12 h-1 bg-white bg-opacity-40 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Center UI/UX Badge */}
                                            <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl px-6 py-3 shadow-lg">
                                                <span className="text-white font-bold text-lg">UI/UX</span>
                                            </div>

                                            {/* Profile Card */}
                                            <div className="bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl p-4 w-32 h-20 flex items-center justify-center shadow-lg transform rotate-12">
                                                <div className="w-8 h-8 bg-white bg-opacity-30 rounded-full"></div>
                                            </div>

                                            {/* Document Card */}
                                            <div className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-xl p-3 w-28 h-20 shadow-lg">
                                                <div className="space-y-1">
                                                    <div className="w-16 h-1 bg-white bg-opacity-60 rounded"></div>
                                                    <div className="w-12 h-1 bg-white bg-opacity-40 rounded"></div>
                                                    <div className="w-14 h-1 bg-white bg-opacity-40 rounded"></div>
                                                </div>
                                                <div className="mt-2 flex space-x-1">
                                                    <div className="w-3 h-3 bg-white bg-opacity-60 rounded-full"></div>
                                                    <div className="w-3 h-3 bg-white bg-opacity-40 rounded-full"></div>
                                                </div>
                                            </div>

                                            {/* Media Controls */}
                                            <div className="absolute bottom-8 left-4 flex space-x-2">
                                                <div className="w-8 h-8 bg-pink-400 rounded-lg flex items-center justify-center">
                                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                                </div>
                                                <div className="w-8 h-8 bg-purple-400 rounded-lg flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path>
                                                    </svg>
                                                </div>
                                                <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L8 12.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 008 6v1.798l-3.445-2.63z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Floating Elements */}
                                        <div className="absolute top-8 left-8 w-4 h-4 bg-yellow-300 rounded-full animate-pulse"></div>
                                        <div className="absolute top-16 right-16 w-6 h-6 bg-pink-300 rounded-lg animate-pulse delay-200"></div>
                                        <div className="absolute bottom-16 left-16 w-3 h-3 bg-cyan-300 rounded-full animate-pulse delay-500"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* JavaScript Workflow Section */}
                    <section className="py-16 px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                {/* Left Illustration */}
                                <div className="relative">
                                    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-8 h-80 overflow-hidden">
                                        {/* Background Code Elements */}
                                        <div className="absolute inset-0 opacity-30">
                                            {/* Floating Code Snippets */}
                                            <div className="absolute top-4 left-4 text-blue-300 text-xs font-mono">
                                                const app =
                                            </div>
                                            <div className="absolute top-8 right-8 text-cyan-300 text-xs font-mono">
                                                function() {'{'}
                                            </div>
                                            <div className="absolute top-16 left-8 text-purple-300 text-xs font-mono">
                                                return data;
                                            </div>
                                            <div className="absolute bottom-16 right-4 text-blue-300 text-xs font-mono">
                                                npm install
                                            </div>
                                            <div className="absolute bottom-8 left-12 text-cyan-300 text-xs font-mono">
                                                export default
                                            </div>
                                            <div className="absolute top-24 right-12 text-purple-300 text-xs font-mono">
                                                import React
                                            </div>

                                            {/* Binary Code Background */}
                                            <div className="absolute top-12 left-16 text-blue-200 text-xs font-mono opacity-50">
                                                1010 0110
                                            </div>
                                            <div className="absolute top-32 right-20 text-blue-200 text-xs font-mono opacity-50">
                                                0101 1001
                                            </div>
                                            <div className="absolute bottom-24 left-6 text-blue-200 text-xs font-mono opacity-50">
                                                1100 0011
                                            </div>
                                            <div className="absolute bottom-32 right-8 text-blue-200 text-xs font-mono opacity-50">
                                                0011 1010
                                            </div>
                                        </div>

                                        {/* Central JavaScript Element */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl px-8 py-6 shadow-2xl transform -rotate-3">
                                                <span className="text-white font-bold text-3xl tracking-wider">JS</span>
                                            </div>
                                        </div>

                                        {/* Code Blocks */}
                                        <div className="absolute top-6 left-6 bg-black bg-opacity-40 rounded-lg p-2 backdrop-blur-sm">
                                            <div className="text-green-300 text-xs font-mono">console.log</div>
                                        </div>

                                        <div className="absolute bottom-6 right-6 bg-black bg-opacity-40 rounded-lg p-2 backdrop-blur-sm">
                                            <div className="text-yellow-300 text-xs font-mono">{ } function</div>
                                        </div>

                                        <div className="absolute top-20 right-6 bg-black bg-opacity-40 rounded-lg p-2 backdrop-blur-sm">
                                            <div className="text-pink-300 text-xs font-mono">async/await</div>
                                        </div>

                                        <div className="absolute bottom-20 left-6 bg-black bg-opacity-40 rounded-lg p-2 backdrop-blur-sm">
                                            <div className="text-blue-300 text-xs font-mono">const data</div>
                                        </div>

                                        {/* Floating Geometric Elements */}
                                        <div className="absolute top-12 left-24 w-4 h-4 bg-cyan-400 rounded-full animate-pulse opacity-70"></div>
                                        <div className="absolute top-32 right-16 w-3 h-3 bg-yellow-400 rotate-45 animate-pulse delay-300 opacity-70"></div>
                                        <div className="absolute bottom-16 left-20 w-2 h-6 bg-pink-400 animate-pulse delay-500 opacity-70"></div>
                                        <div className="absolute bottom-32 right-24 w-5 h-5 bg-purple-400 rounded-lg animate-pulse delay-700 opacity-70"></div>

                                        {/* Connection Lines */}
                                        <svg className="absolute inset-0 w-full h-full opacity-20">
                                            <line x1="20%" y1="30%" x2="80%" y2="70%" stroke="#60A5FA" strokeWidth="1" strokeDasharray="5,5" />
                                            <line x1="70%" y1="20%" x2="30%" y2="80%" stroke="#34D399" strokeWidth="1" strokeDasharray="3,3" />
                                            <circle cx="40%" cy="60%" r="2" fill="#F59E0B" />
                                            <circle cx="65%" cy="35%" r="1.5" fill="#EC4899" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Right Content */}
                                <div>
                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-lime-300 rounded-xl flex items-center justify-center mb-8">
                                        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>

                                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                        JavaScript Workflow
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed text-base">
                                        The JavaScript workflow is designed to streamline the process of
                                        building dynamic, interactive, and scalable web applications. It
                                        begins with setting up a development environment using modern
                                        tools and frameworks such as Node.js, React, or Vue.js.
                                        Developers structure the codebase into reusable modules to
                                        maintain clarity and efficiency. Package managers like npm or Yarn
                                        are used to handle dependencies, while build tools such as
                                        Webpack, Babel, or Vite optimize the code for performance and
                                        compatibility across different browsers. During development,
                                        version control with Git ensures smooth collaboration among
                                        teams, and automated testing frameworks help identify issues
                                        early.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Python Workflow Section */}
                    <section className="py-16 px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                {/* Left Content */}
                                <div>
                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-lime-300 rounded-xl flex items-center justify-center mb-8">
                                        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>

                                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                        Python Workflow
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed text-base">
                                        A Python workflow is a systematic approach to developing robust,
                                        scalable, and efficient applications using the Python programming
                                        language. It begins with project setup, where virtual environments are
                                        established to manage dependencies and ensure project isolation.
                                        Developers then structure the codebase into modular
                                        and reusable functions to enhance modularity and maintainability. Popular libraries
                                        such as NumPy, Pandas, and Flask are often
                                        integrated depending on the project's needs, whether it's web
                                        development, data analysis, or machine learning. Version control with
                                        Git is essential for tracking changes and collaboration, while
                                        automated testing frameworks like PyTest or unittest help validate
                                        functionality at every stage. Debugging and performance tuning are
                                        essential to optimize execution speed and resource usage.
                                    </p>
                                </div>

                                {/* Right Illustration */}
                                <div className="relative">
                                    <div className="relative bg-gradient-to-br from-purple-600 via-blue-700 to-cyan-600 rounded-3xl p-8 h-80 overflow-hidden">
                                        {/* Background Code Elements */}
                                        <div className="absolute inset-0 opacity-30">
                                            <div className="absolute top-4 left-4 text-purple-200 text-xs font-mono">
                                                import pandas as pd
                                            </div>
                                            <div className="absolute top-8 right-8 text-cyan-200 text-xs font-mono">
                                                def function():
                                            </div>
                                            <div className="absolute top-16 left-8 text-blue-200 text-xs font-mono">
                                                for i in range:
                                            </div>
                                            <div className="absolute bottom-16 right-4 text-purple-200 text-xs font-mono">
                                                pip install
                                            </div>
                                            <div className="absolute bottom-8 left-12 text-cyan-200 text-xs font-mono">
                                                return result
                                            </div>
                                            <div className="absolute top-24 right-12 text-blue-200 text-xs font-mono">
                                                class MyClass:
                                            </div>
                                        </div>

                                        {/* Central Python Logo Area */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-gradient-to-r from-yellow-400 to-blue-500 rounded-2xl px-8 py-6 shadow-2xl transform rotate-6">
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-8 h-8 bg-yellow-300 rounded-full"></div>
                                                    <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Code Terminal Windows */}
                                        <div className="absolute top-8 left-8 bg-gray-900 rounded-lg p-3 w-32 h-20 opacity-80">
                                            <div className="flex space-x-1 mb-2">
                                                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                            </div>
                                            <div className="text-green-300 text-xs font-mono">{">>>"} print("Hello")</div>
                                        </div>

                                        <div className="absolute bottom-8 right-8 bg-gray-900 rounded-lg p-3 w-36 h-24 opacity-80">
                                            <div className="flex space-x-1 mb-2">
                                                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                            </div>
                                            <div className="text-blue-300 text-xs font-mono">if __name__ ==</div>
                                            <div className="text-purple-300 text-xs font-mono">"__main__":</div>
                                        </div>

                                        {/* Data Visualization Elements */}
                                        <div className="absolute top-16 right-16 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg opacity-70 flex items-center justify-center">
                                            <div className="grid grid-cols-2 gap-1">
                                                <div className="w-2 h-4 bg-white rounded-sm"></div>
                                                <div className="w-2 h-6 bg-white rounded-sm"></div>
                                                <div className="w-2 h-3 bg-white rounded-sm"></div>
                                                <div className="w-2 h-5 bg-white rounded-sm"></div>
                                            </div>
                                        </div>

                                        {/* Floating Elements */}
                                        <div className="absolute top-32 left-16 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                                        <div className="absolute bottom-24 left-24 w-4 h-4 bg-cyan-400 rotate-45 animate-pulse delay-300"></div>
                                        <div className="absolute top-20 left-32 w-2 h-8 bg-purple-400 animate-pulse delay-500"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Mobile App Section */}
                    <section className="py-16 px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                {/* Left Illustration */}
                                <div className="relative order-2 lg:order-1">
                                    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-teal-800 rounded-3xl p-8 h-80 overflow-hidden">
                                        {/* Network/Circuit Background */}
                                        <div className="absolute inset-0 opacity-20">
                                            <svg className="w-full h-full">
                                                <defs>
                                                    <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                                        <circle cx="5" cy="5" r="2" fill="#60A5FA" opacity="0.3" />
                                                        <path d="M5,5 L35,5 M5,5 L5,35" stroke="#60A5FA" strokeWidth="1" opacity="0.2" />
                                                    </pattern>
                                                </defs>
                                                <rect width="100%" height="100%" fill="url(#circuit)" />
                                            </svg>
                                        </div>

                                        {/* Shopping Cart Elements */}
                                        <div className="absolute top-8 left-8">
                                            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl p-4 w-20 h-20 flex items-center justify-center shadow-lg">
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="absolute top-20 right-16">
                                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3 w-16 h-16 flex items-center justify-center shadow-lg">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-8 left-16">
                                            <div className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl p-3 w-16 h-16 flex items-center justify-center shadow-lg">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Central Mobile Phone */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-2 w-24 h-40 shadow-2xl">
                                                <div className="bg-gradient-to-b from-blue-600 to-purple-700 rounded-xl h-full w-full flex flex-col items-center justify-center">
                                                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg mb-2"></div>
                                                    <div className="space-y-1">
                                                        <div className="w-12 h-1 bg-white bg-opacity-40 rounded"></div>
                                                        <div className="w-8 h-1 bg-white bg-opacity-30 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Connection Lines */}
                                        <svg className="absolute inset-0 w-full h-full opacity-30">
                                            <line x1="20%" y1="25%" x2="50%" y2="50%" stroke="#60A5FA" strokeWidth="2" strokeDasharray="5,5" />
                                            <line x1="80%" y1="35%" x2="50%" y2="50%" stroke="#34D399" strokeWidth="2" strokeDasharray="3,3" />
                                            <line x1="40%" y1="80%" x2="50%" y2="50%" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4,4" />
                                        </svg>

                                        {/* Floating Data Points */}
                                        <div className="absolute top-16 right-8 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                                        <div className="absolute bottom-16 right-8 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                                        <div className="absolute top-32 left-32 w-4 h-4 bg-teal-400 rounded-full animate-pulse delay-500"></div>
                                        <div className="absolute bottom-24 right-24 w-2 h-6 bg-pink-400 animate-pulse delay-700"></div>
                                    </div>
                                </div>

                                {/* Right Content */}
                                <div className="order-1 lg:order-2">
                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-lime-300 rounded-xl flex items-center justify-center mb-8">
                                        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>

                                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                        Mobile App
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed text-base">
                                        The mobile app development workflow is a structured process
                                        that ensures applications are optimized for performance across
                                        various different devices and platforms. It begins with research and
                                        planning, where user needs, market analysis, and technical
                                        requirements are identified. The design phase focuses on creating
                                        intuitive UI/UX wireframes, prototypes, and visual elements
                                        tailored to map out app functionality, features, and navigation flows.
                                        The development stage involves coding using frameworks like React
                                        Native, Flutter, or native languages for platform-specific
                                        applications. Once the design is finalized, developers build the app
                                        using frameworks to work on React Native, Flutter, or native
                                        technologies for iOS and Android.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Ecommerce Section */}
                    <section className="py-16 px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                {/* Left Content */}
                                <div>
                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-lime-300 rounded-xl flex items-center justify-center mb-8">
                                        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    </div>

                                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                        Ecommerce
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed text-base">
                                        The eCommerce development workflow is designed to create
                                        secure, scalable, and user-friendly online shopping platforms that
                                        deliver a seamless buying experience. It begins with research and
                                        planning, where business goals, target audiences, and competitor
                                        strategies are analyzed to shape the platform's structure. The
                                        process continues with wireframing and UI/UX design to define
                                        intuitive navigation, product catalogs, and checkout flows.
                                        Developers then build the platform using technologies such as
                                        Shopify, WooCommerce, Magento, or custom frameworks,
                                        integrating secure payment gateways, product management
                                        systems, and inventory tracking. APIs and third-party services are
                                        added to enable features like shipping, analytics, and customer
                                        relationship management.
                                    </p>
                                </div>

                                {/* Right Illustration */}
                                <div className="relative">
                                    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-teal-700 rounded-3xl p-8 h-80 overflow-hidden">
                                        {/* Digital Network Background */}
                                        <div className="absolute inset-0 opacity-20">
                                            <svg className="w-full h-full">
                                                <defs>
                                                    <pattern id="network" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                                                        <circle cx="25" cy="25" r="2" fill="#60A5FA" opacity="0.4" />
                                                        <circle cx="5" cy="5" r="1" fill="#34D399" opacity="0.3" />
                                                        <circle cx="45" cy="15" r="1.5" fill="#F59E0B" opacity="0.3" />
                                                        <path d="M25,25 L5,5 M25,25 L45,15 M25,25 L45,45" stroke="#60A5FA" strokeWidth="0.5" opacity="0.2" />
                                                    </pattern>
                                                </defs>
                                                <rect width="100%" height="100%" fill="url(#network)" />
                                            </svg>
                                        </div>

                                        {/* Shopping Cart Icons */}
                                        <div className="absolute top-8 left-8">
                                            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl p-4 w-20 h-20 flex items-center justify-center shadow-2xl">
                                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="absolute top-16 right-8">
                                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3 w-16 h-16 flex items-center justify-center shadow-2xl">
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-8 left-16">
                                            <div className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl p-3 w-16 h-16 flex items-center justify-center shadow-2xl">
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-16 right-16">
                                            <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-xl p-3 w-14 h-14 flex items-center justify-center shadow-2xl">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Central Computer/Screen Element */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-3 w-32 h-24 shadow-2xl">
                                                <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded h-full w-full flex items-center justify-center">
                                                    <div className="grid grid-cols-3 gap-1">
                                                        <div className="w-2 h-2 bg-white bg-opacity-40 rounded-sm"></div>
                                                        <div className="w-2 h-2 bg-white bg-opacity-60 rounded-sm"></div>
                                                        <div className="w-2 h-2 bg-white bg-opacity-40 rounded-sm"></div>
                                                        <div className="w-2 h-2 bg-white bg-opacity-60 rounded-sm"></div>
                                                        <div className="w-2 h-2 bg-white bg-opacity-80 rounded-sm"></div>
                                                        <div className="w-2 h-2 bg-white bg-opacity-60 rounded-sm"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Connection Lines */}
                                        <svg className="absolute inset-0 w-full h-full opacity-30">
                                            <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="#60A5FA" strokeWidth="2" strokeDasharray="5,5" />
                                            <line x1="75%" y1="30%" x2="50%" y2="50%" stroke="#34D399" strokeWidth="2" strokeDasharray="3,3" />
                                            <line x1="35%" y1="75%" x2="50%" y2="50%" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4,4" />
                                            <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="#EC4899" strokeWidth="2" strokeDasharray="6,6" />
                                        </svg>

                                        {/* Floating Particles */}
                                        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                                        <div className="absolute top-32 right-24 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                                        <div className="absolute bottom-20 left-32 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
                                        <div className="absolute bottom-32 right-32 w-4 h-4 bg-pink-400 rounded-full animate-pulse delay-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* No-Code Workflow Section */}
                    <section className="py-16 px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                {/* Left Illustration */}
                                <div className="relative order-2 lg:order-1">
                                    <div className="relative bg-gradient-to-br from-orange-400 via-purple-600 to-blue-700 rounded-3xl p-8 h-80 overflow-hidden">
                                        {/* Question Mark Background Elements */}
                                        <div className="absolute inset-0 opacity-20">
                                            <div className="absolute top-8 left-8 text-6xl text-red-300 font-bold">?</div>
                                            <div className="absolute top-16 right-12 text-4xl text-orange-300 font-bold">?</div>
                                            <div className="absolute bottom-16 left-16 text-5xl text-yellow-300 font-bold">?</div>
                                            <div className="absolute bottom-8 right-8 text-3xl text-pink-300 font-bold">?</div>
                                            <div className="absolute top-32 right-32 text-2xl text-purple-300 font-bold">?</div>
                                            <div className="absolute bottom-32 left-32 text-4xl text-blue-300 font-bold">?</div>
                                        </div>

                                        {/* Central Computer Setup */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="relative">
                                                {/* Monitor */}
                                                <div className="bg-gray-900 rounded-lg p-2 w-40 h-28 shadow-2xl">
                                                    <div className="bg-black rounded h-full w-full flex items-center justify-center">
                                                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded px-4 py-2">
                                                            <span className="text-white font-bold text-lg">NO-CODE</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Monitor Stand */}
                                                <div className="bg-gray-700 w-4 h-4 mx-auto rounded-b-lg"></div>
                                                <div className="bg-gray-600 w-16 h-2 mx-auto rounded-lg"></div>
                                            </div>
                                        </div>

                                        {/* Keyboard */}
                                        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 translate-y-8">
                                            <div className="bg-gray-800 rounded-lg w-32 h-6 shadow-lg">
                                                <div className="grid grid-cols-8 gap-1 p-1">
                                                    <div className="bg-gray-600 h-1 rounded-sm"></div>
                                                    <div className="bg-gray-600 h-1 rounded-sm"></div>
                                                    <div className="bg-gray-600 h-1 rounded-sm"></div>
                                                    <div className="bg-gray-600 h-1 rounded-sm"></div>
                                                    <div className="bg-gray-600 h-1 rounded-sm"></div>
                                                    <div className="bg-gray-600 h-1 rounded-sm"></div>
                                                    <div className="bg-gray-600 h-1 rounded-sm"></div>
                                                    <div className="bg-gray-600 h-1 rounded-sm"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="absolute bottom-8 left-8">
                                            <div className="bg-gray-900 rounded-lg p-1 w-8 h-14 shadow-lg">
                                                <div className="bg-gradient-to-b from-blue-500 to-purple-600 rounded h-full w-full"></div>
                                            </div>
                                        </div>

                                        {/* Coffee Cup */}
                                        <div className="absolute bottom-8 right-8">
                                            <div className="bg-red-600 rounded-full w-6 h-6 shadow-lg"></div>
                                            <div className="bg-red-700 rounded-b-full w-6 h-2 -mt-1"></div>
                                        </div>

                                        {/* Floating UI Elements */}
                                        <div className="absolute top-12 left-20 bg-white bg-opacity-20 rounded-lg p-2 w-12 h-8">
                                            <div className="bg-white bg-opacity-60 rounded w-full h-full"></div>
                                        </div>

                                        <div className="absolute top-20 right-20 bg-white bg-opacity-20 rounded-lg p-2 w-10 h-6">
                                            <div className="bg-white bg-opacity-60 rounded w-full h-full"></div>
                                        </div>

                                        {/* Abstract Shapes */}
                                        <div className="absolute top-24 left-32 w-4 h-4 bg-yellow-400 rotate-45 animate-pulse opacity-70"></div>
                                        <div className="absolute bottom-24 right-24 w-3 h-6 bg-cyan-400 animate-pulse delay-300 opacity-70"></div>
                                        <div className="absolute top-36 right-16 w-5 h-5 bg-pink-400 rounded-full animate-pulse delay-500 opacity-70"></div>
                                    </div>
                                </div>

                                {/* Right Content */}
                                <div className="order-1 lg:order-2">
                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-lime-300 rounded-xl flex items-center justify-center mb-8">
                                        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    </div>

                                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                        No-Code Workflow
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed text-base">
                                        The no-code workflow is designed to empower businesses and
                                        individuals to build digital solutions without the need for traditional
                                        programming. It begins with defining project goals and mapping
                                        out processes that need to be automated or digitized. Using
                                        intuitive drag-and-drop platforms such as Webflow, Bubble,
                                        Airtable, or Zapier, users can design applications, websites, and
                                        workflows visually. The workflow continues with creating user
                                        interfaces, connecting databases, and integrating APIs through
                                        pre-built connectors, making it possible to launch functional
                                        products in a fraction of the time compared to conventional
                                        development. Testing and iterations are performed to ensure
                                        usability, efficiency, and accuracy of automated processes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
            </main>
            <FooterSimple />
        </div>
    );
}
