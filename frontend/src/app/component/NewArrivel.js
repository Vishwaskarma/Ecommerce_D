'use client';

import { useRef, useState } from 'react';
import { Dancing_Script } from 'next/font/google';
import Image from 'next/image';
import rolex from '../../../public/Rolex/rolex_image.png';
import rolex2 from '../../../public/Rolex/rolex2.png';
import rolex3 from '../../../public/Rolex/rolex3.png';
import rolex4 from '../../../public/Rolex/rolex4.png';
import rolex6 from '../../../public/Rolex/rolex6.png';
import rolex7 from '../../../public/Rolex/rolex2.png';
import rolex8 from '../../../public/Rolex/rolex3.png';
import rolex9 from '../../../public/Rolex/rolex4.png';
import rolex11 from '../../../public/Rolex/rolex6.png';
import rolex12 from '../../../public/Rolex/rolex2.png';
import rolex13 from '../../../public/Rolex/rolex3.png';
import rolex14 from '../../../public/Rolex/rolex4.png';
import rolex16 from '../../../public/Rolex/rolex6.png';

// Initialize Dancing Script font
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
  weight: ['400', '700'],
});

const images = [
  rolex, rolex2, rolex3, rolex4, rolex6,
  rolex7, rolex8, rolex9, rolex11,
  rolex12, rolex13, rolex14, rolex16
];

export default function NewArrival() {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    sliderRef.current.style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    sliderRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className={`my-16 relative ${dancingScript.variable}`}>
      <h2
        className="text-4xl font-semibold mb-10 text-center tracking-wide text-gray-800"
        style={{ fontFamily: 'var(--font-dancing-script)' }}
      >
        ✨ New Arrivals
      </h2>

      {/* Decorative gradient edges */}
      <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="flex space-x-6 px-6 cursor-grab transition-all duration-300 hover:bg-gray-100/50 hover:shadow-md"
        style={{
          overflowX: 'scroll',
          userSelect: 'none',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* IE and Edge */
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[200px] h-[200px] rounded-xl shadow-xl overflow-hidden bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={src}
              alt={`New Arrival ${index + 1}`}
              className="w-full h-full object-cover"
              width={200}
              height={200}
              priority={index < 3}
            />
          </div>
        ))}
      </div>
    </div>
  );
}