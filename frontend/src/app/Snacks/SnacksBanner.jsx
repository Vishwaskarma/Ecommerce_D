"use client";

import React, { useState, useEffect } from 'react';

export default function SnacksBanner() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 2
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 py-8 px-6 rounded-3xl overflow-hidden min-h-[400px]">
      
      {/* Dynamic geometric background */}
      <div className="absolute inset-0">
        {/* Large geometric shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-transparent" 
             style={{clipPath: 'polygon(0 100%, 100% 100%, 0 0)'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-300/10 to-orange-300/10 rounded-full blur-3xl"></div>
        
        {/* Floating food particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div 
              key={particle.id}
              className="absolute bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
             backgroundSize: '20px 20px'
           }}>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center">
        
        {/* Header section with modern layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
          
          {/* Left: Hero content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Trending badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-lg">
              <span className="animate-pulse">🔥</span>
              <span>TRENDING NOW</span>
              <span className="animate-bounce">⚡</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-white mb-4 leading-tight">
              <span className="block">SNACK</span>
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
                ATTACK
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 font-medium max-w-md mb-6">
              Fuel your day with premium snacks that pack a punch of flavor and energy
            </p>

            {/* Feature highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-medium text-sm">100% Natural</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
                <span className="text-white font-medium text-sm">Zero Trans Fat</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-700"></div>
                <span className="text-white font-medium text-sm">Protein Rich</span>
              </div>
            </div>
          </div>

          {/* Right: Product showcase */}
          <div className="relative">
            {/* Main circular display */}
            <div className="relative w-72 h-72 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-xl rounded-full border-2 border-white/30 shadow-2xl">
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/20 to-transparent backdrop-blur-lg border border-white/40 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto shadow-xl transform hover:scale-110 hover:rotate-12 transition-all duration-500">
                    <span className="text-2xl">🍿</span>
                  </div>
                  <div>
                    <h3 className="font-black text-white text-lg">500+</h3>
                    <p className="text-blue-100 text-sm font-medium">Snack Varieties</p>
                  </div>
                </div>
              </div>
              
              {/* Orbiting snack icons */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center animate-bounce delay-200">
                <span className="text-lg">🥨</span>
              </div>
              <div className="absolute bottom-8 right-4 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center animate-bounce delay-500">
                <span className="text-lg">🍪</span>
              </div>
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center animate-bounce delay-800">
                <span className="text-lg">🥜</span>
              </div>
              <div className="absolute top-1/4 right-4 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center animate-bounce delay-1000">
                <span className="text-sm">🍯</span>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -top-6 -left-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white p-3 rounded-2xl shadow-xl transform hover:scale-110 transition-all">
              <div className="text-center">
                <div className="font-black text-lg">4.9⭐</div>
                <div className="text-xs font-medium">Top Rated</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-400 to-pink-500 text-white p-3 rounded-2xl shadow-xl transform hover:scale-110 transition-all">
              <div className="text-center">
                <div className="font-black text-lg">24/7</div>
                <div className="text-xs font-medium">Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product categories - Modern card design */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { name: 'Power Bars', icon: '⚡', gradient: 'from-yellow-400 to-orange-500', items: '25+' },
            { name: 'Nut Mix', icon: '🌰', gradient: 'from-orange-400 to-red-500', items: '18+' },
            { name: 'Trail Mix', icon: '🥾', gradient: 'from-green-400 to-emerald-500', items: '20+' },
            { name: 'Protein Bites', icon: '💪', gradient: 'from-blue-400 to-indigo-500', items: '15+' }
          ].map((category, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 text-xl shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                  {category.icon}
                </div>
                <h3 className="font-bold text-white text-sm mb-1">{category.name}</h3>
                <p className="text-blue-100 text-xs font-medium">{category.items} options</p>
              </div>
            </div>
          ))}
        </div>

        {/* Action section with modern CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-black py-4 px-8 rounded-2xl text-lg shadow-2xl hover:shadow-yellow-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
              <span className="flex items-center gap-3">
                <span className="text-xl group-hover:animate-spin">🛒</span>
                <span>SHOP NOW</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="border-2 border-white/50 text-white font-bold py-4 px-8 rounded-2xl text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-md">
              <span className="flex items-center gap-2">
                <span>💝</span>
                <span>GIFT PACKS</span>
              </span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-6 text-white/90">
            <div className="text-center">
              <div className="text-xl font-black">50k+</div>
              <div className="text-xs text-blue-200">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-black">15min</div>
              <div className="text-xs text-blue-200">Quick Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-black">100%</div>
              <div className="text-xs text-blue-200">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Accent border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500"></div>
      
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform skew-x-12 translate-x-full animate-pulse opacity-50"></div>
    </div>
  );
}