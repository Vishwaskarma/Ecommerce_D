'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Diamond, Crown, Play, Pause } from 'lucide-react';

// Mock images - replace with your actual imports
const images = [
  '/api/placeholder/800/600?text=Rolex+Submariner',
  '/api/placeholder/800/600?text=Patek+Philippe',
  '/api/placeholder/800/600?text=Rolex+Daytona',
  '/api/placeholder/800/600?text=Audemars+Piguet',
  '/api/placeholder/800/600?text=Vacheron+Constantin'
];

const watchDetails = [
  { name: 'Submariner Date', collection: 'Professional Collection', year: '2024' },
  { name: 'Patek Philippe', collection: 'Grand Complications', year: '2024' },
  { name: 'Daytona', collection: 'Professional Collection', year: '2024' },
  { name: 'Royal Oak', collection: 'Audemars Piguet', year: '2024' },
  { name: 'Patrimony', collection: 'Vacheron Constantin', year: '2024' }
];

export default function CompactLuxuryWatchSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-[70vh] overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black group">
      {/* Ultra-refined Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.15) 0%, transparent 70%),
              radial-gradient(circle at 75% 75%, rgba(255, 215, 0, 0.1) 0%, transparent 60%),
              linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, transparent 100%)
            `
          }}
        />
      </div>

      {/* Sophisticated Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10" />

      {/* Minimalist Luxury Brand Header */}
      <motion.div
        className="absolute top-6 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-2xl px-6 py-2 rounded-full border border-amber-400/40">
          <Diamond className="text-amber-400" size={16} />
          <span className="text-white font-light tracking-[0.4em] text-xs uppercase">
            Swiss Timepieces
          </span>
          <Crown className="text-amber-400" size={16} />
        </div>
      </motion.div>

      {/* Refined Main Content */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 max-w-5xl px-6"
        key={currentIndex}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className="bg-black/10 backdrop-blur-3xl p-8 rounded-2xl border border-amber-400/20 shadow-2xl"
          whileHover={{ scale: 1.01, borderColor: 'rgba(251, 191, 36, 0.3)' }}
          transition={{ duration: 0.3 }}
        >
          {/* Elegant Watch Name */}
          <motion.h1 
            className="text-4xl md:text-6xl font-extralight tracking-[0.2em] mb-3 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {watchDetails[currentIndex].name.toUpperCase()}
          </motion.h1>
          
          {/* Refined Collection Info */}
          <motion.div
            className="flex items-center justify-center space-x-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent w-16"></div>
            <p className="text-lg font-light text-gray-200 tracking-wider">
              {watchDetails[currentIndex].collection}
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent w-16"></div>
          </motion.div>

          {/* Year and Minimal Stars */}
          <motion.div
            className="flex items-center justify-center space-x-3 mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="text-amber-400 text-sm tracking-[0.3em] font-light">
              {watchDetails[currentIndex].year}
            </span>
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <Star key={i} size={10} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
          </motion.div>

          {/* Elegant CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.02, 
                boxShadow: '0 0 25px rgba(251, 191, 36, 0.3)',
                backgroundColor: 'rgba(251, 191, 36, 0.95)'
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-medium rounded-full transition-all duration-300 shadow-lg tracking-wide uppercase text-xs"
            >
              Explore Collection
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.02,
                borderColor: 'rgba(251, 191, 36, 0.8)',
                backgroundColor: 'rgba(251, 191, 36, 0.1)'
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border border-amber-400/60 text-amber-400 font-light rounded-full transition-all duration-300 tracking-wide uppercase text-xs backdrop-blur-sm"
            >
              View Details
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Refined WhatsApp Button */}
      <motion.a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-6 right-6 z-30 group/whatsapp"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact via WhatsApp"
      >
        <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 p-3 rounded-full shadow-xl border border-emerald-500/30 backdrop-blur-sm">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
          </svg>
        </div>
      </motion.a>

      {/* Main Image Display */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <img
              src={images[currentIndex]}
              alt={`${watchDetails[currentIndex].name} ${currentIndex + 1}`}
              className="w-full h-full object-cover filter brightness-75 contrast-105 saturate-105"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Minimal Navigation Buttons */}
      <motion.button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-2xl text-amber-400 p-3 rounded-full z-20 border border-amber-400/30"
        whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </motion.button>
      
      <motion.button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-2xl text-amber-400 p-3 rounded-full z-20 border border-amber-400/30"
        whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </motion.button>

      {/* Refined Progress Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Elegant Play/Pause */}
          <motion.button
            onClick={togglePlayPause}
            className="bg-black/50 backdrop-blur-2xl text-amber-400 p-2 rounded-full border border-amber-400/40"
            whileHover={{ scale: 1.05, borderColor: 'rgba(251, 191, 36, 0.7)' }}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? (
              <Pause size={14} fill="currentColor" />
            ) : (
              <Play size={14} fill="currentColor" />
            )}
          </motion.button>

          {/* Minimalist Dots */}
          <div className="flex space-x-3 bg-black/50 backdrop-blur-2xl px-4 py-2 rounded-full border border-white/10">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 shadow-lg' 
                    : 'bg-gray-500/60 hover:bg-gray-400/80'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-amber-400/50"
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Compact Counter */}
          <div className="bg-black/50 backdrop-blur-2xl px-3 py-1 rounded-full border border-white/10">
            <span className="text-amber-400 text-xs font-light tracking-wider">
              {String(currentIndex + 1).padStart(2, '0')}/{String(images.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* Refined Side Details */}
      <motion.div
        className="absolute left-4 bottom-16 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="bg-black/30 backdrop-blur-2xl p-4 rounded-xl border border-amber-400/20 max-w-xs">
          <h3 className="text-amber-400 text-sm font-light tracking-wide mb-1">Swiss Heritage</h3>
          <p className="text-gray-300 text-xs leading-relaxed font-light">
            Precision crafted timepieces representing horological excellence.
          </p>
        </div>
      </motion.div>
    </div>
  );
}