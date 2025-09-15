"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import choclate from "../../../public/snacks/choclate.png";
import millet from "../../../public/snacks/milletflour.png";
import cheese from "../../../public/snacks/cheese.png";
import pringles from "../../../public/snacks/pringles.png";
import Noogan from "../../../public/snacks/nogan.png";

const SnacksSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  
  const snacksProducts = [
    {
      "id": 1,
      "title": "Beanty Dark Chocolate Spread with Breadsticks",
      "weight": "52 g",
      "price": "₹99",
      "originalPrice": "₹150",
      "discount": "34% OFF",
      "image": choclate
    },
    {
      "id": 2,
      "title": "Lol Foods Gluten Free Millet flour",
      "weight": "75 g",
      "price": "₹99",
      "image": millet
    },
    {
      "id": 3,
      "title": "Kab's Jackpot Cheese Balls",
      "weight": "60 g",
      "price": "₹65",
      "image": cheese
    },
    {
      "id": 4,
      "title": "Pringles Original Potato Chips - Pack of 2",
      "weight": "2 x 107 g",
      "price": "₹213",
      "originalPrice": "₹250",
      "discount": "15% OFF",
      "image": pringles
    },
    {
      "id": 5,
      "title": "Noogan Flavour",
      "weight": "75 g",
      "price": "₹139",
      "image": Noogan
    }
  ];

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

  const maxIndex = Math.max(0, snacksProducts.length - itemsPerView);

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
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Popular Snacks</h2>
        
        <div className="relative">
          {/* Navigation arrows - hidden on mobile when only 1 item shows */}
          {itemsPerView < snacksProducts.length && (
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
                width: `${(snacksProducts.length / itemsPerView) * 100}%`
              }}
            >
              {snacksProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="px-2 sm:px-3"
                  style={{ width: `${100 / snacksProducts.length}%` }}
                >
                  <div className="border border-gray-200 rounded-xl p-3 sm:p-4 lg:p-5 transition-all duration-300 h-full flex flex-col group hover:shadow-xl hover:scale-[1.02] hover:border-orange-300 bg-white">
                    {/* Discount Badge */}
                    {product.discount && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md font-semibold z-10">
                        {product.discount}
                      </div>
                    )}

                    {/* Image container with hover effect */}
                    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 h-32 sm:h-40 lg:h-48 flex items-center justify-center mb-3 sm:mb-4 rounded-lg overflow-hidden group-hover:from-orange-50 group-hover:to-yellow-100 transition-all duration-300">
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
                      <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base line-clamp-2 group-hover:text-orange-700 transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">{product.weight}</p>
                      
                      {/* Price section */}
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex flex-col">
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-orange-700 transition-colors duration-300">
                              {product.price}
                            </span>
                            {product.originalPrice && (
                              <span className="text-xs sm:text-sm text-gray-500 line-through">
                                {product.originalPrice}
                              </span>
                            )}
                          </div>
                          {product.originalPrice && (
                            <div className="text-xs text-green-600 font-medium mt-0.5">
                              You Save: ₹{parseInt(product.originalPrice.replace('₹', '')) - parseInt(product.price.replace('₹', ''))}
                            </div>
                          )}
                        </div>
                        
                        <button className="bg-orange-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-orange-700 active:bg-orange-800 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
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
        {itemsPerView < snacksProducts.length && (
          <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                  currentIndex === index 
                    ? 'bg-orange-600 w-4 sm:w-6' 
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