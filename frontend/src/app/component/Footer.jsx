"use client"

import React from 'react';
import { 
  ShoppingBag, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Linkedin,
  Heart,
  Award,
  Truck,
  Shield,
  CreditCard,
  ArrowRight,
  Star
} from 'lucide-react';

const EcommerceFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="font-['Work_Sans'] bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Responsive Newsletter Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 py-8 sm:py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPgo8L2c+CjwvZz4KPHN2Zz4=')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">Stay in the Loop</h2>
            <p className="text-green-100 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4 sm:px-0">
              Get exclusive deals, latest trends, and insider news delivered straight to your inbox
            </p>
          </div>
          
          <div className="max-w-md mx-auto px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row rounded-xl sm:rounded-2xl bg-white p-1.5 sm:p-2 shadow-2xl gap-2 sm:gap-0">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border-0 focus:outline-none text-gray-700 placeholder-gray-500 text-sm sm:text-base"
                />
              </div>
              <button className="bg-green-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:bg-green-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2 group text-sm sm:text-base">
                Subscribe
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="text-green-100 text-xs sm:text-sm mt-3 text-center">
              Join 50,000+ subscribers and never miss our updates
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Main Footer */}
      <div className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
            
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">ShopMart</h3>
              </div>
              
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Your trusted partner for premium quality products. We bring you the best shopping experience with unmatched customer service and authentic products.
              </p>
              
              <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center sm:justify-start">
                {[
                  { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
                  { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
                  { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
                  { icon: Youtube, href: '#', color: 'hover:text-red-600' },
                  { icon: Linkedin, href: '#', color: 'hover:text-blue-700' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg sm:rounded-xl flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                {[
                  'About Us',
                  'Contact Us',
                  'Track Your Order',
                  'Return & Exchange',
                  'Size Guide',
                  'Care Instructions',
                  'Gift Cards'
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center gap-2 group justify-center sm:justify-start text-sm sm:text-base"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">Categories</h4>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                {[
                  'Electronics',
                  'Fashion & Clothing',
                  'Home & Garden',
                  'Sports & Outdoors',
                  'Health & Beauty',
                  'Books & Media',
                  'Toys & Games'
                ].map((category, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center gap-2 group justify-center sm:justify-start text-sm sm:text-base"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">Get in Touch</h4>
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex items-start gap-3 sm:gap-4 justify-center sm:justify-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-gray-900 font-semibold text-sm sm:text-base">Visit Our Store</p>
                    <p className="text-gray-600 text-xs sm:text-sm">123 Shopping Street, Commerce City, CC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-gray-900 font-semibold text-sm sm:text-base">Call Us</p>
                    <p className="text-gray-600 text-xs sm:text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-gray-900 font-semibold text-sm sm:text-base">Email Us</p>
                    <p className="text-gray-600 text-xs sm:text-sm">support@shopmart.com</p>
                  </div>
                </div>
              </div>

              {/* Customer Rating */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-green-100 max-w-xs mx-auto sm:mx-0">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-900">4.9/5</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">Based on 12,000+ reviews</p>
              </div>
            </div>
          </div>

          {/* Responsive Trust Badges */}
          <div className="border-t border-gray-200 pt-8 sm:pt-12 mb-8 sm:mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: Truck, title: 'Free Shipping', desc: 'On orders over $50' },
                { icon: Shield, title: 'Secure Payment', desc: '100% protected' },
                { icon: Award, title: 'Quality Guarantee', desc: 'Certified products' },
                { icon: CreditCard, title: 'Easy Returns', desc: '30-day policy' }
              ].map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <h5 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{feature.title}</h5>
                  <p className="text-gray-600 text-xs sm:text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Responsive Payment Methods */}
          <div className="border-t border-gray-200 pt-6 sm:pt-8 mb-6 sm:mb-8">
            <div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between">
              <div className="text-center md:text-left">
                <h5 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Secure Payment Methods</h5>
                <div className="flex gap-2 sm:gap-3 justify-center md:justify-start flex-wrap">
                  {['Visa', 'Mastercard', 'PayPal', 'Apple Pay', 'Google Pay', 'Stripe'].map((payment, index) => (
                    <div key={index} className="w-10 h-6 sm:w-12 sm:h-8 bg-white border border-gray-200 rounded-md sm:rounded-lg flex items-center justify-center shadow-sm">
                      <span className="text-xs font-semibold text-gray-600">{payment.slice(0, 4)}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h5 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Download Our App</h5>
                <div className="flex gap-2 sm:gap-3 justify-center">
                  <button className="bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm hover:bg-gray-800 transition-colors">
                    App Store
                  </button>
                  <button className="bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm hover:bg-gray-800 transition-colors">
                    Google Play
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Responsive Bottom Bar */}
          <div className="border-t border-gray-200 pt-6 sm:pt-8">
            <div className="flex flex-col items-center gap-3 sm:gap-4 md:flex-row md:justify-between">
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-gray-600 text-xs sm:text-sm text-center">
                <span>© {currentYear} ShopMart. Made with</span>
                <div className="flex items-center gap-1 sm:gap-2">
                  <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 fill-red-500" />
                  <span>for amazing shopping experience.</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-center">Privacy Policy</a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-center">Terms of Service</a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-center">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceFooter;