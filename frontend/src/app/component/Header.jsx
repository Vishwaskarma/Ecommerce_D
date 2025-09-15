"use client";
import { useRouter } from 'next/navigation';
import {useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Heart, Menu, X, LogOut, Settings, Package, UserCircle, Crown, Star, Gift, Sparkles, Home, ChevronDown } from 'lucide-react';

const Header = () => {
  const router = useRouter();
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('HOME');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mock authentication
  useEffect(() => {
    // Simulate user data without localStorage
    const mockUser = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      membershipLevel: 'Premium'
    };
    setUser(mockUser);
    setIsLoggedIn(true);
  }, []);


  const handleNavigate = (path) => {
    router.push(path);
  };

  const handleLogin = () => {
    const mockUser = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      membershipLevel: 'Premium'
    };
    setUser(mockUser);
    setIsLoggedIn(true);
    setIsUserMenuOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setIsUserMenuOpen(false);
  };

  const navItems = [
    { name: 'HOME', href: '/', icon: Home },
    { name: 'LUXURY', href: '/luxury', icon: Crown },
    { name: 'MENS', href: '/mens', icon: null },
    { name: 'WOMENS', href: '/womens', icon: null },
    { name: 'KIDS', href: '/kids', icon: null },
    { name: 'PERFUME', href: '/perfume', icon: null },
    { name: 'BAGS', href: '/bags', icon: null },
    { name: 'HOT OFFERS', href: '/offers', icon: Gift },
  ];

  const categoryMenus = {
    'LUXURY': ['Watches', 'Jewelry', 'Designer Items'],
    'MENS': ['Clothing', 'Shoes', 'Accessories'],
    'WOMENS': ['Dresses', 'Shoes', 'Handbags'],
    'KIDS': ['Boys', 'Girls', 'Toys'],
  };

  return (
    <>
      {/* Premium Top Bar - Hidden on small screens */}
      <div className="bg-gradient-to-r from-slate-900 via-green-900 to-slate-900 text-white py-2 relative overflow-hidden hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="font-light tracking-wide">Free Shipping on Orders $100+</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <Crown className="w-3 h-3 text-yellow-400" />
                <span className="font-light tracking-wide">Premium Members Get 20% Off</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-light tracking-wide">24/7 Support</span>
              <div className="w-px h-3 bg-white/30"></div>
              <span className="font-light tracking-wide">Track Order</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50' 
          : 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-100/50'
      }`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-teal-100 to-green-100 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Mobile Header */}
          <div className="flex items-center justify-between h-16 md:h-20 lg:hidden">
            {/* Mobile Menu Button - Only show on small devices */}
            <div className="sm:hidden">
              <button
                className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:from-gray-200 hover:to-gray-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? 
                  <X size={18} className="text-gray-600" /> : 
                  <Menu size={18} className="text-gray-600" />
                }
              </button>
            </div>
            
            {/* Spacer for medium devices where hamburger is hidden */}
            <div className="hidden sm:block lg:hidden w-10"></div>

            {/* Mobile Logo - Centered on medium devices, left-aligned on small */}
            <div className="flex items-center sm:flex-1 sm:justify-center lg:justify-start">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-9 h-9 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg font-bold tracking-wider">K</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <Crown className="w-1.5 h-1.5 text-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent tracking-tight">
                    KANIDHI
                  </span>
                  <span className="text-[8px] text-gray-500 font-light tracking-widest -mt-0.5">
                    L U X U R Y
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Right Icons */}
            <div className="flex items-center space-x-3">
              {/* Mobile Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="w-9 h-9 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300"
                aria-label="Search"
              >
                <Search size={16} className="text-green-600" />
              </button>

              {/* Mobile User */}
              {isLoggedIn ? (
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="relative"
                  aria-label="User menu"
                >
                  <div className="w-9 h-9 rounded-xl border border-green-300 p-0.5 bg-gray-200 flex items-center justify-center">
                    <User size={16} className="text-gray-600" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 border border-white rounded-full flex items-center justify-center">
                    <Crown className="w-1.5 h-1.5 text-white" />
                  </div>
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="w-9 h-9 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center"
                  aria-label="Login"
                >
                  <User size={16} className="text-green-600" />
                </button>
              )}

              {/* Mobile Cart */}
              <button className="relative" aria-label="Cart">
                <div className="w-9 h-9 bg-gradient-to-br from-teal-100 to-green-100 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300">
                  <ShoppingBag size={16} className="text-teal-600" />
                </div>
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-teal-500 to-green-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-medium text-[10px]">
                  2
                </span>
              </button>
            </div>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between h-20 py-4">
            {/* Desktop Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                    <span className="text-white text-xl font-bold tracking-wider">K</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-md">
                    <Crown className="w-2 h-2 text-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent tracking-tight group-hover:scale-105 transition-transform duration-300">
                    KANNIDHI
                  </span>
                  <span className="text-xs text-gray-500 font-light tracking-widest -mt-1">
                    L U X U R Y  •  S T Y L E
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative group">
                <div
                  className={`flex items-center border-2 rounded-2xl bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-xl transition-all duration-500 shadow-lg ${
                    isSearchFocused 
                      ? 'border-green-500 shadow-xl shadow-green-500/25 scale-105' 
                      : 'border-gray-200 group-hover:border-gray-300 group-hover:shadow-xl'
                  }`}
                >
                  <div className="pl-6 pr-4 py-1">
                    <Search className={`w-5 h-5 transition-colors duration-300 ${
                      isSearchFocused ? 'text-green-500' : 'text-gray-400'
                    }`} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search luxury products, brands, categories..."
                    className="flex-1 px-2 py-3.5 text-sm bg-transparent outline-none font-light placeholder-gray-400 focus:placeholder-gray-300"
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    aria-label="Search products"
                  />
                  <button className="m-1 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25 font-medium">
                    <Search size={18} />
                  </button>
                </div>

                {/* Search Suggestions */}
                {isSearchFocused && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-2xl p-4 z-50">
                    <div className="text-xs text-gray-500 font-medium mb-3 tracking-wide">TRENDING SEARCHES</div>
                    <div className="flex flex-wrap gap-2">
                      {['Luxury Watches', 'Designer Bags', 'Premium Perfumes', 'Fashion Jewelry'].map((term, index) => (
                        <span key={index} className="px-3 py-1.5 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-lg text-xs font-medium cursor-pointer hover:from-green-100 hover:to-emerald-100 transition-colors duration-200">
                          {term}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Right Icons */}
            <div className="flex items-center space-x-8">
              {/* Desktop User Menu */}
              <div className="relative">
                {isLoggedIn ? (
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex flex-col items-center group relative"
                    aria-label="User menu"
                  >
                    <div className="relative">
                      <div className="w-10 h-10 rounded-2xl border-2 border-gradient-to-r from-green-500 to-emerald-500 p-0.5 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-full h-full rounded-xl flex items-center justify-center bg-gray-200">
                          <User size={20} className="text-gray-600" />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-500 to-green-500 border-2 border-white rounded-full flex items-center justify-center">
                        <Crown className="w-2 h-2 text-white" />
                      </div>
                    </div>
                    <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-green-600 transition-colors duration-300 max-w-20 truncate">
                      {user?.name?.split(' ')[0] || 'User'}
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={handleLogin}
                    className="flex flex-col items-center group"
                    aria-label="Login"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:from-green-200 group-hover:to-emerald-200">
                      <User size={20} className="text-green-600 group-hover:text-green-700" />
                    </div>
                    <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-green-600 transition-colors duration-300">
                      Login
                    </span>
                  </button>
                )}

                {/* Desktop User Dropdown */}
                {isLoggedIn && isUserMenuOpen && (
                  <div className="absolute right-0 mt-4 w-80 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-200/50 py-6 z-50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 opacity-50"></div>
                    
                    <div className="px-6 pb-6 border-b border-gray-200/50 relative">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-2xl border-2 border-gradient-to-r from-green-500 to-emerald-500 p-0.5 flex items-center justify-center bg-gray-200">
                            <User size={24} className="text-gray-600" />
                          </div>
                          <div className="absolute -top-1 -right-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-1">
                            <Crown className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-lg font-semibold text-gray-900">{user?.name}</p>
                          <p className="text-sm text-gray-500">{user?.email}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="px-2 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-lg text-xs font-medium">
                              {user?.membershipLevel || 'Premium'}
                            </span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="py-2 relative">
                      {[
                        { icon: UserCircle, label: 'My Profile', href: '/profile', color: 'text-green-600' },
                        { icon: Package, label: 'My Orders', href: '/orders', color: 'text-emerald-600' },
                        { icon: Heart, label: 'Wishlist', href: '/wishlist', color: 'text-teal-600' },
                        { icon: Settings, label: 'Settings', href: '/settings', color: 'text-gray-600' }
                      ].map((item, index) => (
                        <button
                          key={index}
                          className="flex items-center w-full px-6 py-3 text-sm text-gray-700 hover:bg-white/70 hover:text-gray-900 transition-all duration-200 group"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <item.icon size={18} className={`mr-4 ${item.color} group-hover:scale-110 transition-transform duration-200`} />
                          {item.label}
                          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                          </div>
                        </button>
                      ))}
                    </div>
                    
                    <div className="border-t border-gray-200/50 pt-2 relative">
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-6 py-3 text-sm text-red-600 hover:bg-red-50/70 transition-all duration-200 group"
                      >
                        <LogOut size={18} className="mr-4 group-hover:scale-110 transition-transform duration-200" />
                        Sign Out
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Wishlist */}
           <button
    onClick={() => handleNavigate('/wishlist')}
    className="flex flex-col items-center relative group"
    aria-label="Wishlist"
  >
    <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:from-green-200 group-hover:to-emerald-200 relative overflow-hidden">
      <Heart size={20} className="text-green-600 group-hover:text-green-700 group-hover:fill-green-600 transition-all duration-300" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
    </div>
    <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-green-600 transition-colors duration-300">
      Wishlist
    </span>
    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium shadow-lg">
      3
    </span>
  </button>

              {/* Cart */}
             <button
    onClick={() => handleNavigate('/cart')}
    className="flex flex-col items-center relative group"
    aria-label="Cart"
  >
    <div className="w-10 h-10 bg-gradient-to-br from-teal-100 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:from-teal-200 group-hover:to-green-200 relative overflow-hidden">
      <ShoppingBag size={20} className="text-teal-600 group-hover:text-green-700 transition-all duration-300" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
    </div>
    <span className="text-xs font-medium text-gray-600 mt-2 group-hover:text-teal-600 transition-colors duration-300">
      Cart
    </span>
    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-teal-500 to-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium shadow-lg animate-pulse">
      2
    </span>
  </button>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:block bg-gradient-to-r from-white/80 via-gray-50/80 to-white/80 backdrop-blur-xl border-t border-gray-200/50">
            <div className="flex items-center justify-center space-x-12 h-16">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`flex items-center space-x-2 text-sm font-medium transition-all duration-300 relative group py-2 ${
                    activeTab === item.name ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {item.icon && <item.icon size={16} className="text-green-500 group-hover:scale-110 transition-transform duration-200" />}
                  <span className="tracking-wide">{item.name}</span>
                  <span className={`absolute inset-x-0 -bottom-4 h-1 bg-gradient-to-r from-green-500 to-emerald-500 transition-transform duration-300 rounded-full ${
                    activeTab === item.name ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden">
          <div className="flex items-center p-4 border-b border-gray-200">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="w-10 h-10 flex items-center justify-center mr-3"
            >
              <X size={20} className="text-gray-600" />
            </button>
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-3 bg-gray-50 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-green-500 transition-all duration-300"
                autoFocus
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
          <div className="p-4">
            <div className="text-sm text-gray-500 mb-3">Recent Searches</div>
            <div className="space-y-2">
              {['Luxury Watches', 'Designer Bags', 'Premium Perfumes'].map((term, index) => (
                <button key={index} className="flex items-center w-full px-4 py-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <Search size={16} className="text-gray-400 mr-3" />
                  <span className="text-gray-700">{term}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modern Mobile Navigation Menu - Only show on small devices */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 sm:hidden overflow-y-auto">
          <div className="p-4">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg font-bold">K</span>
                </div>
                <div>
                  <div className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    KANNIDHI
                  </div>
                  <div className="text-xs text-gray-500 font-light tracking-wide">LUXURY STORE</div>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>

            {/* User Section */}
            {isLoggedIn ? (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-green-200">
                    <User size={20} className="text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{user?.name}</div>
                    <div className="text-sm text-gray-600">{user?.email}</div>
                    <div className="flex items-center space-x-1 mt-1">
                      <Crown size={12} className="text-yellow-500" />
                      <span className="text-xs text-green-600 font-medium">{user?.membershipLevel}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 mb-6">
                <button
                  onClick={handleLogin}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                >
                  Sign In to Your Account
                </button>
              </div>
            )}

            {/* Navigation Categories */}
            <div className="space-y-1 mb-6">
              {navItems.map((item, index) => (
                <div key={item.name}>
                  <button
                    onClick={() => setActiveTab(activeTab === item.name ? '' : item.name)}
                    className={`flex items-center justify-between w-full px-4 py-4 text-left font-medium transition-all duration-300 rounded-xl ${
                      activeTab === item.name 
                        ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon && <item.icon size={20} className={activeTab === item.name ? 'text-green-600' : 'text-gray-500'} />}
                      <span className="text-base">{item.name}</span>
                    </div>
                    {categoryMenus[item.name] && (
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-300 ${
                          activeTab === item.name ? 'rotate-180 text-green-600' : 'text-gray-400'
                        }`} 
                      />
                    )}
                  </button>
                  
                  {/* Subcategories */}
                  {categoryMenus[item.name] && activeTab === item.name && (
                    <div className="ml-6 mt-2 space-y-2">
                      {categoryMenus[item.name].map((subItem, subIndex) => (
                        <button
                          key={subIndex}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
                        >
                          {subItem}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button className="flex flex-col items-center p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl hover:from-red-100 hover:to-pink-100 transition-all duration-300">
                <Heart size={24} className="text-red-500 mb-2" />
                <span className="text-sm font-medium text-gray-700">Wishlist</span>
                <span className="text-xs text-gray-500">3 items</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
                <Package size={24} className="text-blue-500 mb-2" />
                <span className="text-sm font-medium text-gray-700">Orders</span>
                <span className="text-xs text-gray-500">Track</span>
              </button>
            </div>

            {/* User Menu Items (when logged in) */}
            {isLoggedIn && (
              <div className="border-t border-gray-200 pt-4 space-y-1">
                <div className="text-sm font-semibold text-gray-600 mb-3 px-4">ACCOUNT</div>
                {[
                  { icon: UserCircle, label: 'My Profile', color: 'text-green-600' },
                  { icon: Package, label: 'Order History', color: 'text-blue-600' },
                  { icon: Settings, label: 'Settings', color: 'text-gray-600' },
                  { icon: Gift, label: 'Rewards', color: 'text-purple-600' }
                ].map((item, index) => (
                  <button
                    key={index}
                    className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-all duration-200"
                  >
                    <item.icon size={18} className={`mr-3 ${item.color}`} />
                    <span className="text-base">{item.label}</span>
                  </button>
                ))}
                
                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-3 mt-4 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
                >
                  <LogOut size={18} className="mr-3" />
                  <span className="text-base">Sign Out</span>
                </button>
              </div>
            )}

            {/* Support Section */}
            <div className="border-t border-gray-200 pt-4 mt-6">
              <div className="text-sm font-semibold text-gray-600 mb-3 px-4">SUPPORT</div>
              <div className="grid grid-cols-1 gap-2">
                <button className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-all duration-200">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-green-600 text-sm">📞</span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium">Customer Support</div>
                    <div className="text-xs text-gray-500">24/7 Available</div>
                  </div>
                </button>
                <button className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-all duration-200">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-blue-600 text-sm">📦</span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium">Track Order</div>
                    <div className="text-xs text-gray-500">Real-time updates</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile User Menu Overlay - Only show on small devices */}
      {isUserMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 sm:hidden">
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 max-h-[70vh] overflow-y-auto">
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>
            
            {isLoggedIn ? (
              <>
                <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center">
                    <User size={24} className="text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-semibold text-gray-900">{user?.name}</div>
                    <div className="text-sm text-gray-600">{user?.email}</div>
                    <div className="flex items-center space-x-2 mt-2">
                      <Crown size={14} className="text-yellow-500" />
                      <span className="text-sm text-green-600 font-medium">{user?.membershipLevel}</span>
                      <div className="flex ml-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {[
                    { icon: UserCircle, label: 'My Profile', color: 'text-green-600' },
                    { icon: Package, label: 'My Orders', color: 'text-blue-600' },
                    { icon: Heart, label: 'Wishlist', color: 'text-red-600' },
                    { icon: Settings, label: 'Settings', color: 'text-gray-600' }
                  ].map((item, index) => (
                    <button
                      key={index}
                      className="flex items-center w-full px-4 py-4 text-gray-700 hover:bg-gray-50 rounded-xl transition-all duration-200"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <item.icon size={20} className={`mr-4 ${item.color}`} />
                      <span className="text-base">{item.label}</span>
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-4 mt-4 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 border-t border-gray-200"
                >
                  <LogOut size={20} className="mr-4" />
                  <span className="text-base">Sign Out</span>
                </button>
              </>
            ) : (
              <div className="text-center py-8">
                <User size={48} className="text-gray-400 mx-auto mb-4" />
                <div className="text-lg font-semibold text-gray-900 mb-2">Welcome to Kanidhi</div>
                <div className="text-sm text-gray-600 mb-6">Sign in to access your account</div>
                <button
                  onClick={handleLogin}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Bottom Navigation for Mobile - Only show on small devices */}
     <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200/50 z-40 sm:hidden">
    <div className="grid grid-cols-5 h-16">
      {[
        { icon: Home, label: 'Home', color: 'text-green-600' },
        { icon: Search, label: 'Search', color: 'text-blue-600', action: () => setIsSearchOpen(true) },
        { icon: ShoppingBag, label: 'cart', color: 'text-purple-600', badge: '2', action: () => handleNavigate('/cart') },
        { icon: Heart, label: 'wishlist', color: 'text-red-600', badge: '3', action: () => handleNavigate('/wishlist') },
        { icon: User, label: 'Profile', color: 'text-gray-600', action: () => setIsUserMenuOpen(true) }
      ].map((item, index) => (
        <button
          key={index}
          onClick={item.action}
          className="flex flex-col items-center justify-center py-2 px-1 relative group"
        >
          <div className="relative">
            <item.icon size={20} className={`${item.color} group-hover:scale-110 transition-all duration-200`} />
            {item.badge && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-medium text-[10px]">
                {item.badge}
              </span>
            )}
          </div>
          <span className={`text-xs mt-1 ${item.color} font-medium`}>{item.label}</span>
        </button>
      ))}
    </div>
  </div>

      {/* Demo Login Button */}
      {!isLoggedIn && (
        <div className="fixed top-20 right-4 z-50 lg:bottom-6 lg:top-auto">
          <button
            onClick={handleLogin}
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-xl shadow-2xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-medium hover:scale-105 text-sm lg:text-base"
          >
            ✨ Demo Login
          </button>
        </div>
      )}

      {/* Backdrop */}
      {(isMobileMenuOpen || isUserMenuOpen || isSearchOpen) && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 lg:z-40"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsUserMenuOpen(false);
            setIsSearchOpen(false);
          }}
        />
      )}

      {/* Padding for bottom navigation on mobile */}
      <div className="h-16 lg:hidden"></div>
    </>
  );
};

export default Header;