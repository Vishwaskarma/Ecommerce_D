"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import fanta from '../../../public/drinks/fanta.png';
import maaza from '../../../public/drinks/maza.png';
import pepsi from '../../../public/drinks/pepesi.png';
import thumbsup from '../../../public/drinks/thumbsup.png';
import cock from '../../../public/drinks/cocka.png';
import sprite from '../../../public/drinks/sprite.png';

const SnacksSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Generate random rating (1 to 5) for each product
  const getRandomRating = () => Math.floor(Math.random() * 5) + 1;

  const beverages = [
    {
      "id": 1,
      "title": "Coca-Cola Original Taste",
      "quantity": "300 ml",
      "price": "₹30",
      "image": cock
    },
    {
      "id": 2,
      "title": "Pepsi Black Can",
      "quantity": "330 ml",
      "price": "₹35",
      "image": pepsi
    },
    {
      "id": 3,
      "title": "Sprite Lemon-Lime",
      "quantity": "500 ml",
      "price": "₹40",
      "image": sprite
    },
    {
      "id": 4,
      "title": "Fanta Orange",
      "quantity": "250 ml",
      "price": "₹25",
      "image": fanta
    },
    {
      "id": 5,
      "title": "Maaza Mango Drink",
      "quantity": "400 ml",
      "price": "₹35",
      "image": maaza
    },
    {
      "id": 6,
      "title": "Thums Up Strong Soda",
      "quantity": "300 ml",
      "price": "₹30",
      "image": thumbsup
    }
  ].map(product => ({
    ...product,
    rating: getRandomRating()
  }));

  // Handle responsive items per view
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

  const maxIndex = Math.max(0, beverages.length - itemsPerView);

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

  // Calculate transform percentage based on current items per view
  const getTransformValue = () => {
    return -(currentIndex * (100 / itemsPerView));
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 w-full font-sans">
      {/* Slider Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Popular Beverages</h2>
        
        <div className="relative">
          {/* Navigation arrows - hidden on mobile when only 1 item shows */}
          {itemsPerView < beverages.length && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-200 border border-gray-200"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-200 border border-gray-200"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Product slider */}
          <div className="overflow-hidden mx-2 sm:mx-4">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(${getTransformValue()}%)`,
                width: `${(beverages.length / itemsPerView) * 100}%`
              }}
            >
              {beverages.map((product) => (
                <div 
                  className="px-2 sm:px-3"
                  style={{ width: `${100 / beverages.length}%` }}
                >
                  <div className="border border-gray-200 rounded-xl p-3 sm:p-4 lg:p-5 transition-all duration-300 h-full flex flex-col group hover:shadow-xl hover:scale-[1.02] hover:border-green-300 bg-white">
                    {/* Image container with hover effect */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 h-32 sm:h-40 lg:h-48 flex items-center justify-center mb-3 sm:mb-4 rounded-lg overflow-hidden group-hover:from-green-50 group-hover:to-green-100 transition-all duration-300">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                        <Image 
                          src={product.image}
                          alt={product.title}
                          width={160}
                          height={160}
                          className="max-w-full max-h-full object-contain"
                          priority
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base line-clamp-2 group-hover:text-green-700 transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mb-2">{product.quantity}</p>
                      
                      {/* Rating Display */}
                      <div className="flex items-center text-yellow-400 mb-2 sm:mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${i < product.rating ? 'fill-current' : 'fill-none stroke-current'} transition-colors duration-200`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            stroke="currentColor"
                            strokeWidth={1}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-1 text-xs text-gray-600">{product.rating}/5</span>
                      </div>

                      {/* Price and Add button */}
                      <div className="flex justify-between items-center mt-auto">
                        <span className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-green-700 transition-colors duration-300">
                          {product.price}
                        </span>
                        <button className="bg-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-green-700 active:bg-green-800 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                          ADD
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        {itemsPerView < beverages.length && (
          <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                  currentIndex === index 
                    ? 'bg-green-600 w-4 sm:w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SnacksSlider;