"use client"
import React from 'react';

const ElectronicsBanner = () => {
  return (
    <div className="relative w-full min-h-[100vh] sm:min-h-[80vh] md:min-h-[70vh] lg:min-h-[600px] overflow-hidden bg-gradient-to-tr from-emerald-50 via-white to-teal-50">
      
      {/* Elegant flowing background shapes */}
      <div className="absolute inset-0">
        <div className="absolute -top-8 -left-8 sm:-top-20 sm:-left-20 w-32 h-32 sm:w-80 md:w-96 sm:h-80 md:h-96 bg-gradient-to-br from-emerald-200/30 to-teal-300/20 rounded-full blur-xl sm:blur-3xl animate-pulse" 
             style={{clipPath: 'ellipse(75% 85% at 35% 45%)'}}></div>
        <div className="absolute -bottom-12 -right-12 sm:-bottom-32 sm:-right-32 w-56 h-56 sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-tl from-teal-200/40 to-cyan-200/25 blur-xl sm:blur-3xl animate-pulse delay-1000"
             style={{clipPath: 'polygon(0% 25%, 65% 25%, 65% 0%, 100% 55%, 65% 100%, 65% 75%, 0% 75%)'}}></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-32 h-32 sm:w-64 md:w-80 sm:h-64 md:h-80 bg-gradient-to-r from-emerald-200/20 to-green-200/15 rounded-full blur-lg sm:blur-2xl animate-pulse delay-700"></div>
        
        {/* Floating tech elements - elegant style */}
        <div className="absolute top-6 right-3 sm:top-16 md:top-20 sm:right-8 md:right-20 w-6 h-6 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/90 rounded-2xl shadow-xl animate-bounce delay-300">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-3 h-3 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl opacity-80"></div>
          </div>
        </div>
        <div className="absolute bottom-6 left-3 sm:bottom-16 md:bottom-32 sm:left-8 md:left-16 w-5 h-5 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/95 rounded-2xl shadow-lg animate-bounce delay-1000">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-2 h-2 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl opacity-90"></div>
          </div>
        </div>
      </div>

      {/* Premium overlay pattern */}
      <div className="absolute inset-0 bg-white/15 backdrop-blur-[1px]"></div>
      
      <div className="relative h-full min-h-[100vh] sm:min-h-[80vh] md:min-h-[70vh] lg:min-h-[600px] max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 w-full items-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(80vh-6rem)] lg:min-h-auto">
          
          {/* Left Content Section */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 order-2 lg:order-1 text-center lg:text-left px-2 sm:px-0">
            {/* Premium Tech Badge */}
            <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-white/85 backdrop-blur-md px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full shadow-lg border border-emerald-100">
              <div className="w-5 h-5 sm:w-8 sm:h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <span className="font-medium sm:font-semibold text-emerald-700 text-xs sm:text-sm md:text-base">Premium Electronics</span>
            </div>

            {/* Main Heading - Enhanced typography */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-black leading-tight">
                <span className="block text-slate-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Smart</span>
                <span className="block bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Electronics
                </span>
                <span className="block text-slate-700 font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Innovation Hub</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-full lg:max-w-lg mx-auto lg:mx-0 mt-4 sm:mt-6">
                Discover cutting-edge electronics that blend premium quality with intelligent design. 
                Experience the future of technology delivered to your doorstep.
              </p>
            </div>

            {/* Feature Pills - Elegant design */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
              <div className="flex items-center space-x-1.5 sm:space-x-2 bg-emerald-100/80 backdrop-blur-sm px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full border border-emerald-200/50">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-emerald-800 font-medium text-xs sm:text-sm">AI Powered</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2 bg-teal-100/80 backdrop-blur-sm px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full border border-teal-200/50">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-500 rounded-full animate-pulse delay-300"></div>
                <span className="text-teal-800 font-medium text-xs sm:text-sm">Fast Shipping</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2 bg-cyan-100/80 backdrop-blur-sm px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-200/50">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full animate-pulse delay-700"></div>
                <span className="text-cyan-800 font-medium text-xs sm:text-sm">Warranty Plus</span>
              </div>
            </div>

            {/* CTA Buttons - Premium design */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6 justify-center lg:justify-start">
              <button className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-emerald-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                <span className="flex items-center justify-center space-x-3">
                  <span className="text-base sm:text-lg">Explore Tech</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
              </button>
              
              <button className="group px-8 sm:px-10 py-4 sm:py-5 bg-white/80 backdrop-blur-md text-slate-700 font-semibold rounded-2xl shadow-xl border border-slate-200 hover:bg-white hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                <span className="flex items-center justify-center space-x-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-base sm:text-lg">View Collection</span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Visual Section - Elegant showcase */}
          <div className="relative order-1 lg:order-2 flex justify-center py-8 sm:py-0">
            {/* Main Product Showcase Circle */}
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50 to-teal-100 rounded-full shadow-lg sm:shadow-2xl border-2 sm:border-4 border-white/70 backdrop-blur-md"></div>
              
              {/* Inner showcase */}
              <div className="absolute inset-3 sm:inset-6 md:inset-8 rounded-full bg-white/50 backdrop-blur-lg border border-white/70 flex items-center justify-center">
                <div className="text-center space-y-1 sm:space-y-3 md:space-y-4">
                  <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-3xl flex items-center justify-center mx-auto shadow-lg transform hover:scale-110 hover:rotate-6 transition-all duration-500">
                    <svg className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-xs sm:text-base md:text-lg">Smart Quality</h3>
                    <p className="text-slate-600 text-xs sm:text-sm">Tech • Innovation • Style</p>
                  </div>
                </div>
              </div>

              {/* Orbiting Product Items - Elegant positioning */}
              <div className="absolute top-1 sm:top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/95 rounded-2xl shadow-lg animate-bounce delay-200 flex items-center justify-center">
                <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <svg className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-1 sm:bottom-4 right-3 sm:right-6 md:right-8 w-7 h-7 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-white/95 rounded-2xl shadow-lg animate-bounce delay-700 flex items-center justify-center">
                <div className="w-3 h-3 sm:w-5 sm:h-5 md:w-7 md:h-7 bg-teal-100 rounded-xl flex items-center justify-center">
                  <svg className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="absolute top-1/2 left-0 sm:left-2 transform -translate-y-1/2 w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/95 rounded-2xl shadow-md animate-bounce delay-1000 flex items-center justify-center">
                <div className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <div className="w-1 h-1 sm:w-2 sm:h-2 bg-cyan-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Stats Cards - Elegant design */}
            <div className="absolute -bottom-1 sm:-bottom-4 md:-bottom-8 -left-1 sm:-left-4 md:-left-8 bg-white/95 backdrop-blur-md p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl border border-white/70">
              <div className="text-center">
                <div className="text-sm sm:text-lg md:text-2xl font-bold text-emerald-600">5000+</div>
                <div className="text-xs text-slate-600">Happy Customers</div>
              </div>
            </div>

            <div className="absolute -top-1 sm:-top-4 md:-top-8 -right-1 sm:-right-4 md:-right-8 bg-white/95 backdrop-blur-md p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl border border-white/70">
              <div className="text-center">
                <div className="text-sm sm:text-lg md:text-2xl font-bold text-teal-600">24Hr</div>
                <div className="text-xs text-slate-600">Express Ship</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent - Elegant gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400"></div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 sm:opacity-15 mix-blend-soft-light"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
             backgroundSize: '70px 70px'
           }}>
      </div>

      {/* Corner indicators - Elegant style */}
      <div className="absolute top-4 left-4 flex items-center space-x-2">
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
        <span className="text-emerald-700 text-xs font-semibold tracking-wide">PREMIUM</span>
      </div>

      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <span className="text-teal-700 text-xs font-semibold tracking-wide">24/7 SUPPORT</span>
        <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default ElectronicsBanner;