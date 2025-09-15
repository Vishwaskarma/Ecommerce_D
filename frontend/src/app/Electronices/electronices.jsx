"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, ShoppingCart, Eye } from 'lucide-react';

const ElectronicsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  
  // Mock images - in real app, you'd use your imported images
  const electronicsProducts = [
    {
      "id": 1,
      "title": "Apple Watch Series 9",
      "category": "Smart Watch",
      "price": "₹41,900",
      "originalPrice": "₹49,900",
      "discount": "16%",
      "image": "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=300&fit=crop",
      "rating": 4.8,
      "reviews": 2341,
      "inStock": true,
      "isNew": true
    },
    {
      "id": 2,
      "title": "Sony Bravia 4K OLED TV",
      "category": "Television",
      "price": "₹1,29,990",
      "originalPrice": "₹1,49,990",
      "discount": "13%",
      "image": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop",
      "rating": 4.7,
      "reviews": 856,
      "inStock": true,
      "isNew": false
    },
    {
      "id": 3,
      "title": "Bose QuietComfort Headphones",
      "category": "Audio",
      "price": "₹29,500",
      "originalPrice": "₹32,900",
      "discount": "10%",
      "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      "rating": 4.6,
      "reviews": 1242,
      "inStock": true,
      "isNew": false
    },
    {
      "id": 4,
      "title": "Samsung Galaxy Tab S9",
      "category": "Tablet",
      "price": "₹72,999",
      "originalPrice": "₹79,999",
      "discount": "9%",
      "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop",
      "rating": 4.5,
      "reviews": 634,
      "inStock": true,
      "isNew": true
    },
    {
      "id": 5,
      "title": "Canon EOS R6 Mark II",
      "category": "Camera",
      "price": "₹1,89,995",
      "originalPrice": "₹2,09,995",
      "discount": "10%",
      "image": "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=300&fit=crop",
      "rating": 4.9,
      "reviews": 423,
      "inStock": false,
      "isNew": false
    },
    {
      "id": 6,
      "title": "LG 1Ton 5-Star AC",
      "category": "Air Conditioner",
      "price": "₹42,490",
      "originalPrice": "₹48,990",
      "discount": "13%",
      "image": "https://images.unsplash.com/photo-1631545806603-a31ed4c5a0bb?w=300&h=300&fit=crop",
      "rating": 4.4,
      "reviews": 789,
      "inStock": true,
      "isNew": false
    }
  ];

  // Handle responsive items per view - Same as previous components
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) { // mobile
        setItemsPerView(1);
      } else if (width < 768) { // large mobile
        setItemsPerView(2);
      } else if (width < 1024) { // tablet
        setItemsPerView(3);
      } else { // laptop and desktop
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = electronicsProducts.length - itemsPerView;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, itemsPerView, electronicsProducts.length]);

  const maxIndex = Math.max(0, electronicsProducts.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-6 sm:py-8 lg:py-12 w-full font-sans">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 lg:mb-12">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Premium Electronics
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Discover the latest in cutting-edge technology
            </p>
          </div>
          
          {/* Auto-play toggle for desktop */}
          <div className="hidden lg:flex items-center space-x-4 mt-4 sm:mt-0">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-green-600 text-white shadow-lg shadow-green-500/25' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {isAutoPlaying ? 'Auto-play On' : 'Auto-play Off'}
            </button>
          </div>
        </div>
        
        <div className="relative">
          {/* Navigation arrows - hidden on mobile when only 1 item shows */}
          {itemsPerView < electronicsProducts.length && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-200 border border-gray-200"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-200 border border-gray-200"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
              </button>
            </>
          )}

          {/* Product slider - FIXED SCROLLING */}
          <div 
            className="overflow-hidden mx-2 sm:mx-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {electronicsProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="px-2 sm:px-3"
                  style={{ width: `${100 / itemsPerView}%`, flexShrink: 0 }}
                >
                  <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 lg:p-5 hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-500 h-full hover:-translate-y-2 relative overflow-hidden group hover:scale-[1.02] hover:border-blue-300">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1 sm:gap-2">
                      {product.isNew && (
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium shadow-lg">
                          NEW
                        </span>
                      )}
                      {product.discount && (
                        <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium shadow-lg">
                          {product.discount} OFF
                        </span>
                      )}
                      {!product.inStock && (
                        <span className="bg-gray-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium">
                          OUT OF STOCK
                        </span>
                      )}
                    </div>

                    {/* Wishlist Button */}
                    <button className="absolute top-3 right-3 z-10 w-6 h-6 sm:w-8 sm:h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 hover:text-red-500 transition-colors" />
                    </button>

                    {/* Product Image */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-3 sm:mb-4 p-2 sm:p-4 h-32 sm:h-40 lg:h-48 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500 group-hover:from-blue-50 group-hover:to-indigo-100">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="max-w-full max-h-full object-contain mix-blend-multiply transform group-hover:scale-110 transition-transform duration-300"
                      />
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <button className="bg-white rounded-full p-1.5 sm:p-2 shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <span className="inline-block text-xs font-medium text-blue-600 bg-blue-50 px-2 sm:px-3 py-1 rounded-full mb-2 sm:mb-3">
                      {product.category}
                    </span>
                    
                    {/* Product Title */}
                    <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base line-clamp-2 group-hover:text-blue-700 transition-colors duration-300">
                      {product.title}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${
                              i < Math.floor(product.rating) 
                                ? 'text-yellow-400 fill-yellow-400' 
                                : 'text-gray-300 fill-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600 ml-1 sm:ml-2">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                    
                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-blue-700 transition-colors duration-300">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-gray-500 line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Add to Cart Button */}
                 <button className="bg-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-green-700 active:bg-green-800 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                          ADD
                        </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        {itemsPerView < electronicsProducts.length && (
          <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                  currentIndex === index 
                    ? 'bg-blue-600 w-4 sm:w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Progress bar - Desktop only */}
        <div className="hidden md:block mt-6 sm:mt-8">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 h-1 rounded-full transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>{currentIndex + 1} of {maxIndex + 1}</span>
            <span>{electronicsProducts.length} products total</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicsSlider;