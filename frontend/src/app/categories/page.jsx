"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { 
  Grid3X3, Coffee, Home, Gamepad2, Leaf, Zap, Smartphone, Sparkles, Shirt,
  ChevronLeft, ChevronRight, Star, Heart, TrendingUp, Gift, Crown, ArrowRight,
  ShoppingBag, Users, Award, Percent
} from 'lucide-react';

const TopCategoriesPage = () => {
  const [activeCategory, setActiveCategory] = useState('electronics');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const router = useRouter(); // Initialize router

  const categories = [
    {
      id: 'all',
      name: 'All Categories',
      icon: Grid3X3,
      color: 'from-slate-400 to-slate-600',
      bgColor: 'bg-slate-50',
      textColor: 'text-slate-700',
      emoji: '🛍️',
      count: '50,000+',
      description: 'Complete shopping universe',
      feature: 'Everything in one place'
    },
    {
      id: 'electronics',
      name: 'Electronics',
      icon: Zap,
      color: 'from-blue-400 to-indigo-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      emoji: '⚡',
      count: '12,450+',
      description: 'Latest tech innovations',
      feature: 'Smart & connected'
    },
    {
      id: 'fashion',
      name: 'Fashion',
      icon: Shirt,
      color: 'from-pink-400 to-rose-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-700',
      emoji: '👗',
      count: '18,200+',
      description: 'Trendy & stylish wear',
      feature: 'Express yourself'
    },
    {
      id: 'home',
      name: 'Home & Living',
      icon: Home,
      color: 'from-emerald-400 to-green-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700',
      emoji: '🏠',
      count: '9,830+',
      description: 'Comfort meets style',
      feature: 'Create your sanctuary'
    },
    {
      id: 'beauty',
      name: 'Beauty & Care',
      icon: Sparkles,
      color: 'from-purple-400 to-violet-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      emoji: '✨',
      count: '7,650+',
      description: 'Glow with confidence',
      feature: 'Radiate beauty'
    },
    {
      id: 'cafe',
      name: 'Café & Coffee',
      icon: Coffee,
      color: 'from-amber-400 to-orange-600',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-700',
      emoji: '☕',
      count: '3,420+',
      description: 'Premium coffee experience',
      feature: 'Brew perfection'
    },
    {
      id: 'toys',
      name: 'Toys & Games',
      icon: Gamepad2,
      color: 'from-cyan-400 to-teal-600',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-700',
      emoji: '🎮',
      count: '5,890+',
      description: 'Fun for all ages',
      feature: 'Endless entertainment'
    },
    {
      id: 'fresh',
      name: 'Fresh Produce',
      icon: Leaf,
      color: 'from-lime-400 to-green-600',
      bgColor: 'bg-lime-50',
      textColor: 'text-lime-700',
      emoji: '🥬',
      count: '2,100+',
      description: 'Farm-fresh goodness',
      feature: 'Nature\'s best'
    }
  ];

  const stats = [
    { icon: Users, value: '2M+', label: 'Happy Customers', color: 'text-blue-600' },
    { icon: ShoppingBag, value: '50K+', label: 'Products', color: 'text-emerald-600' },
    { icon: Award, value: '4.9', label: 'Rating', color: 'text-yellow-600' },
    { icon: Percent, value: '70%', label: 'Max Savings', color: 'text-red-600' }
  ];

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    // Navigate to CategoryPage with the selected category as a query parameter
    router.push(`/category?category=${categoryId}`);
  };

  const activeData = categories.find(cat => cat.id === activeCategory);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-200/20 to-rose-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-xl rounded-full px-6 py-3 shadow-lg border border-white/50 mb-8">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700">Discover Amazing Products</span>
            <Star className="w-5 h-5 text-yellow-500" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent mb-6 leading-tight">
            Shop by
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Categories
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Explore our curated collection of premium products across multiple categories
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.id;
            const isHovered = hoveredCard === category.id;
            
            return (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.id)} // Updated to handle navigation
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative cursor-pointer transform transition-all duration-700 ${
                  isActive ? 'scale-105 z-20' : 'hover:scale-102 z-10'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: isHovered ? `translate(${(mousePosition.x - window.innerWidth / 2) * 0.01}px, ${(mousePosition.y - window.innerHeight / 2) * 0.01}px)` : ''
                }}
              >
                {/* Card Background */}
                <div className={`relative overflow-hidden rounded-3xl transition-all duration-700 ${
                  isActive 
                    ? 'shadow-2xl shadow-blue-500/25 border-2 border-blue-200' 
                    : 'shadow-xl hover:shadow-2xl border border-gray-200/50'
                } ${category.bgColor}/50 backdrop-blur-xl`}>
                  
                  {/* Animated Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity duration-700 ${
                    isActive ? 'opacity-10' : 'group-hover:opacity-5'
                  }`}></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 bg-white/30 rounded-full transition-all duration-1000 ${
                          isHovered ? 'animate-bounce' : ''
                        }`}
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${10 + i * 10}%`,
                          animationDelay: `${i * 200}ms`
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Main Content */}
                  <div className="relative p-8 lg:p-10">
                    {/* Icon Container */}
                    <div className={`inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 rounded-2xl lg:rounded-3xl mb-6 transition-all duration-500 bg-gradient-to-br ${category.color} shadow-xl ${
                      isHovered ? 'scale-110 rotate-6 shadow-2xl' : ''
                    }`}>
                      <IconComponent className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                    </div>
                    
                    {/* Category Info */}
                    <div className="mb-6">
                      <h3 className={`text-2xl lg:text-3xl font-bold mb-2 transition-colors duration-300 ${
                        isActive ? 'text-blue-700' : category.textColor
                      }`}>
                        {category.name}
                      </h3>
                      <p className="text-gray-600 text-sm lg:text-base font-medium mb-3">
                        {category.description}
                      </p>
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{category.emoji}</span>
                        <span className={`font-bold text-lg ${category.textColor}`}>
                          {category.count}
                        </span>
                      </div>
                    </div>
                    
                    {/* Feature Badge */}
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? 'bg-blue-100 text-blue-700' 
                        : `${category.bgColor} ${category.textColor}`
                    }`}>
                      <Star className="w-4 h-4 mr-2" />
                      {category.feature}
                    </div>
                  </div>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute top-4 right-4">
                      <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-lg"></div>
                    </div>
                  )}
                  
                  {/* Hover Glow */}
                  {isHovered && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 rounded-3xl`}></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Category Showcase */}
      {activeData && (
        <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
          <div className={`relative overflow-hidden rounded-4xl p-12 lg:p-16 transition-all duration-700 ${activeData.bgColor}/30 backdrop-blur-xl border border-white/50 shadow-2xl`}>
            {/* Animated Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${activeData.color} opacity-10`}></div>
            <div className="absolute inset-0 overflow-hidden">
              <div className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${activeData.color} opacity-20 rounded-full animate-spin`} style={{animationDuration: '20s'}}></div>
              <div className={`absolute -bottom-16 -left-16 w-48 h-48 bg-gradient-to-br ${activeData.color} opacity-15 rounded-full animate-pulse`}></div>
            </div>
            
            <div className="relative text-center">
              <div className={`inline-flex items-center justify-center w-32 h-32 rounded-3xl mb-8 bg-gradient-to-br ${activeData.color} shadow-2xl animate-pulse`}>
                <activeData.icon className="w-16 h-16 text-white" />
              </div>
              
              <h2 className={`text-4xl lg:text-6xl font-black mb-4 ${activeData.textColor}`}>
                {activeData.name}
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {activeData.description} with {activeData.count} amazing products to choose from
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => router.push(`/category?category=${activeData.id}`)} // Navigate to CategoryPage
                  className={`group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-xl bg-gradient-to-r ${activeData.color} text-white shadow-lg`}
                >
                  <span className="mr-2">Explore {activeData.name}</span>
                  <ArrowRight className="inline w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => router.push('/categories')} // Optional: Navigate back to categories
                  className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-105 border-2 hover:shadow-lg ${activeData.textColor} border-current bg-white/50 backdrop-blur-xl`}
                >
                  View All Categories
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-110 transition-transform duration-500`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-3xl lg:text-4xl font-black mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-12 lg:p-20 text-center text-white shadow-2xl">
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/15 rounded-full animate-bounce delay-500"></div>
            <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/25 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/4 w-14 h-14 bg-white/20 rounded-full animate-pulse delay-700"></div>
          </div>
          
          <div className="relative">
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              Start Your Shopping Journey
            </h2>
            <p className="text-xl lg:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
              Join millions of happy customers and discover amazing products at unbeatable prices
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => router.push('/category?category=all')} // Navigate to CategoryPage with 'all' category
                className="group bg-white text-purple-600 px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1"
              >
                <span className="mr-3">Shop Now</span>
                <Heart className="inline w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <button className="bg-white/20 backdrop-blur-xl text-white border-2 border-white/30 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/30 transition-all duration-500 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .rounded-4xl {
          border-radius: 2rem;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TopCategoriesPage;