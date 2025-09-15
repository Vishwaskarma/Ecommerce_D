"use client"
import React from 'react';

const DairyBanner = () => {
  return (
    <div className="relative w-full min-h-[100vh] sm:min-h-[80vh] md:min-h-[70vh] lg:min-h-[600px] overflow-hidden bg-gradient-to-tr from-emerald-50 via-white to-amber-50">
      
      {/* Organic flowing background shapes - Better mobile sizing */}
      <div className="absolute inset-0">
        <div className="absolute -top-8 -left-8 xs:-top-12 xs:-left-12 sm:-top-20 sm:-left-20 w-32 h-32 xs:w-40 xs:h-40 sm:w-80 md:w-96 sm:h-80 md:h-96 bg-gradient-to-br from-green-200/30 to-emerald-300/20 rounded-full blur-xl xs:blur-2xl sm:blur-3xl animate-pulse" 
             style={{clipPath: 'ellipse(70% 80% at 30% 40%)'}}></div>
        <div className="absolute -bottom-12 -right-12 xs:-bottom-16 xs:-right-16 sm:-bottom-32 sm:-right-32 w-56 h-56 xs:w-64 xs:h-64 sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-tl from-yellow-200/40 to-orange-200/25 blur-xl xs:blur-2xl sm:blur-3xl animate-pulse delay-1000"
             style={{clipPath: 'polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)'}}></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-32 h-32 xs:w-40 xs:h-40 sm:w-64 md:w-80 sm:h-64 md:h-80 bg-gradient-to-r from-blue-200/20 to-cyan-200/15 rounded-full blur-lg xs:blur-xl sm:blur-2xl animate-pulse delay-700"></div>
        
        {/* Floating dairy elements - Better mobile positioning */}
        <div className="absolute top-6 right-3 xs:top-8 xs:right-4 sm:top-16 md:top-20 sm:right-8 md:right-20 w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/80 rounded-full shadow-lg animate-bounce delay-300">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-3 h-3 xs:w-4 xs:h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-70"></div>
          </div>
        </div>
        <div className="absolute bottom-6 left-3 xs:bottom-8 xs:left-4 sm:bottom-16 md:bottom-32 sm:left-8 md:left-16 w-5 h-5 xs:w-6 xs:h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 rounded-full shadow-md animate-bounce delay-1000">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-2 h-2 xs:w-3 xs:h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-80"></div>
          </div>
        </div>
      </div>

      {/* Nature-inspired overlay pattern */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
      
      <div className="relative h-full min-h-[100vh] sm:min-h-[80vh] md:min-h-[70vh] lg:min-h-[600px] max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 flex items-center py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 w-full items-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(80vh-6rem)] lg:min-h-auto">
          
          {/* Left Content Section */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 order-2 lg:order-1 text-center lg:text-left px-2 sm:px-0">
            {/* Brand Badge - Better mobile sizing */}
            <div className="inline-flex items-center space-x-2 xs:space-x-3 bg-white/80 backdrop-blur-md px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full shadow-lg border border-emerald-100">
              <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="font-medium xs:font-semibold text-emerald-700 text-xs xs:text-sm sm:text-base">Farm Fresh Promise</span>
            </div>

            {/* Main Heading - Improved mobile typography */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-black leading-tight">
                <span className="block text-slate-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Pure</span>
                <span className="block bg-gradient-to-r from-emerald-600 via-green-500 to-lime-500 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Dairy
                </span>
                <span className="block text-slate-700 font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Delivered Fresh</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-full lg:max-w-lg mx-auto lg:mx-0 mt-4 sm:mt-6">
                From our family farm to your table. Experience the richest, creamiest dairy products 
                delivered fresh every morning with a commitment to sustainability and quality.
              </p>
            </div>

            {/* Feature Pills - Better mobile layout */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 xs:gap-3">
              <div className="flex items-center space-x-1.5 xs:space-x-2 bg-emerald-100/80 backdrop-blur-sm px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 rounded-full border border-emerald-200/50">
                <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-emerald-800 font-medium text-xs xs:text-sm">Organic Certified</span>
              </div>
              <div className="flex items-center space-x-1.5 xs:space-x-2 bg-blue-100/80 backdrop-blur-sm px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 rounded-full border border-blue-200/50">
                <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                <span className="text-blue-800 font-medium text-xs xs:text-sm">Same Day Delivery</span>
              </div>
              <div className="flex items-center space-x-1.5 xs:space-x-2 bg-amber-100/80 backdrop-blur-sm px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 rounded-full border border-amber-200/50">
                <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-amber-500 rounded-full animate-pulse delay-700"></div>
                <span className="text-amber-800 font-medium text-xs xs:text-sm">Local Sourced</span>
              </div>
            </div>

            {/* CTA Buttons - Improved mobile layout */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6 justify-center lg:justify-start">
              <button className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-emerald-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                <span className="flex items-center justify-center space-x-3">
                  <span className="text-base sm:text-lg">Start Shopping</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </span>
              </button>
              
              <button className="group px-8 sm:px-10 py-4 sm:py-5 bg-white/80 backdrop-blur-md text-slate-700 font-semibold rounded-2xl shadow-xl border border-slate-200 hover:bg-white hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                <span className="flex items-center justify-center space-x-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1M9 16v-2a4 4 0 118 0v2M5 12V7a2 2 0 012-2h10a2 2 0 012 2v5" />
                  </svg>
                  <span className="text-base sm:text-lg">Learn More</span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Visual Section - Better mobile scaling */}
          <div className="relative order-1 lg:order-2 flex justify-center py-8 sm:py-0">
            {/* Main Product Showcase Circle - Improved mobile sizing */}
            <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50 to-green-100 rounded-full shadow-lg xs:shadow-xl sm:shadow-2xl border-2 xs:border-3 sm:border-4 border-white/60 backdrop-blur-md"></div>
              
              {/* Floating Product Icons */}
              <div className="absolute inset-3 xs:inset-4 sm:inset-6 md:inset-8 rounded-full bg-white/40 backdrop-blur-lg border border-white/60 flex items-center justify-center">
                <div className="text-center space-y-1 xs:space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl xs:rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto shadow-lg transform hover:scale-110 hover:rotate-6 transition-all duration-500">
                    <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-xs xs:text-sm sm:text-base md:text-lg">Premium Quality</h3>
                    <p className="text-slate-600 text-xs xs:text-sm">Fresh • Pure • Delicious</p>
                  </div>
                </div>
              </div>

              {/* Orbiting Product Items - Better mobile positioning */}
              <div className="absolute top-1 xs:top-2 sm:top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/90 rounded-full shadow-lg animate-bounce delay-200 flex items-center justify-center">
                <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-1 xs:bottom-2 sm:bottom-4 right-3 xs:right-4 sm:right-6 md:right-8 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-white/90 rounded-full shadow-lg animate-bounce delay-700 flex items-center justify-center">
                <div className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="absolute top-1/2 left-0 xs:left-1 sm:left-2 transform -translate-y-1/2 w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 rounded-full shadow-md animate-bounce delay-1000 flex items-center justify-center">
                <div className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Stats Cards - Better mobile positioning */}
            <div className="absolute -bottom-1 xs:-bottom-2 sm:-bottom-4 md:-bottom-8 -left-1 xs:-left-2 sm:-left-4 md:-left-8 bg-white/90 backdrop-blur-md p-2 xs:p-3 sm:p-4 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg xs:shadow-xl border border-white/60">
              <div className="text-center">
                <div className="text-sm xs:text-base sm:text-lg md:text-2xl font-bold text-emerald-600">10k+</div>
                <div className="text-xs text-slate-600">Happy Families</div>
              </div>
            </div>

            <div className="absolute -top-1 xs:-top-2 sm:-top-4 md:-top-8 -right-1 xs:-right-2 sm:-right-4 md:-right-8 bg-white/90 backdrop-blur-md p-2 xs:p-3 sm:p-4 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg xs:shadow-xl border border-white/60">
              <div className="text-center">
                <div className="text-sm xs:text-base sm:text-lg md:text-2xl font-bold text-blue-600">30min</div>
                <div className="text-xs text-slate-600">Fast Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 xs:h-1 bg-gradient-to-r from-emerald-400 via-green-500 to-lime-400"></div>
      
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-5 xs:opacity-10 sm:opacity-20 mix-blend-soft-light"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
             backgroundSize: '60px 60px'
           }}>
      </div>
    </div>
  );
};

export default DairyBanner;