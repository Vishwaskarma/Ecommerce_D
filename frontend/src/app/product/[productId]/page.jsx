"use client"
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Star, Heart, Share2, ShoppingCart, Minus, Plus, Shield, Truck, RotateCcw,
  Award, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, MapPin, Clock,
  Check, X, Eye, Zap, Package, CreditCard, Gift, Users, MessageSquare,
  ThumbsUp, ThumbsDown, Flag, Camera, Play, Volume2, VolumeX, Maximize,
  Filter, ArrowLeft, Info, AlertCircle, Sparkles, Home, Coffee, Shirt
} from 'lucide-react';

const ProductDetailPage = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');

  // State variables
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [selectedReviewFilter, setSelectedReviewFilter] = useState('all');
  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);

  // Complete product database with enhanced data
  const allProductsDetailed = {
    // Electronics
    elec1: {
      id: 'elec1',
      name: 'iPhone 15 Pro Max',
      brand: 'Apple',
      model: '2023 Edition',
      price: 134900,
      originalPrice: 149900,
      rating: 4.8,
      totalReviews: 1234,
      reviewBreakdown: { 5: 876, 4: 234, 3: 78, 2: 31, 1: 15 },
      discount: 10,
      availability: 'In Stock',
      estimatedDelivery: '2-3 days',
      category: 'Smartphones',
      sku: 'APL-IPH15PM-256-TB',
      images: [
        { url: '📱', alt: 'iPhone 15 Pro Max Front View', type: 'image' },
        { url: '📱', alt: 'iPhone 15 Pro Max Back View', type: 'image' },
        { url: '📱', alt: 'iPhone 15 Pro Max Side View', type: 'image' },
        { url: '🎥', alt: 'Product Demo Video', type: 'video' },
        { url: '📱', alt: 'iPhone 15 Pro Max Box Contents', type: 'image' }
      ],
      variants: [
        { name: '128GB', price: 129900, originalPrice: 139900, available: true },
        { name: '256GB', price: 134900, originalPrice: 149900, available: true },
        { name: '512GB', price: 154900, originalPrice: 169900, available: true },
        { name: '1TB', price: 184900, originalPrice: 199900, available: false }
      ],
      colors: [
        { name: 'Titanium Black', hex: '#1a1a1a', available: true },
        { name: 'Titanium White', hex: '#f5f5f5', available: true },
        { name: 'Titanium Blue', hex: '#4a90e2', available: true },
        { name: 'Titanium Natural', hex: '#d4af37', available: false }
      ],
      shortDescription: 'The most powerful iPhone ever with A17 Pro chip, titanium design, and advanced camera system.',
      fullDescription: `Experience the pinnacle of smartphone technology with the iPhone 15 Pro Max. Crafted from premium titanium, this revolutionary device combines unprecedented performance with elegant design.

The A17 Pro chip delivers desktop-class performance in your pocket, enabling console-quality gaming, professional video editing, and lightning-fast AI processing. The advanced camera system features a 48MP main camera with 2x zoom, ultra-wide lens, and telephoto capabilities for stunning photography and videography.`,
      keyFeatures: [
        { icon: Zap, title: 'A17 Pro Chip', description: '3-nanometer technology for ultimate performance and efficiency' },
        { icon: Camera, title: '48MP Camera System', description: 'Advanced photography with multiple focal lengths and Night mode' },
        { icon: Shield, title: 'Titanium Design', description: 'Aerospace-grade titanium for strength and lightweight feel' },
        { icon: Eye, title: 'Super Retina XDR', description: '6.7" display with ProMotion, HDR10, and Dolby Vision' }
      ],
      specifications: {
        'Display': {
          'Screen Size': '6.7 inches',
          'Resolution': '2796 x 1290 pixels',
          'Technology': 'Super Retina XDR OLED',
          'Refresh Rate': '120Hz ProMotion'
        },
        'Performance': {
          'Processor': 'A17 Pro 6-core chip',
          'GPU': '6-core GPU',
          'Neural Engine': '16-core Neural Engine',
          'RAM': '8GB'
        }
      }
    },
    elec2: {
      id: 'elec2',
      name: 'Samsung 65" 4K Smart TV',
      brand: 'Samsung',
      model: 'Neo QLED QN65QN95C',
      price: 89999,
      originalPrice: 119999,
      rating: 4.6,
      totalReviews: 856,
      reviewBreakdown: { 5: 456, 4: 234, 3: 98, 2: 45, 1: 23 },
      discount: 25,
      availability: 'In Stock',
      estimatedDelivery: '3-5 days',
      category: 'Television',
      sku: 'SAM-QN65QN95C-BK',
      images: [
        { url: '📺', alt: 'Samsung TV Front View', type: 'image' },
        { url: '📺', alt: 'Samsung TV Back View', type: 'image' },
        { url: '📺', alt: 'Samsung TV Side Profile', type: 'image' },
        { url: '🎥', alt: 'TV Demo Video', type: 'video' }
      ],
      variants: [
        { name: '55"', price: 74999, originalPrice: 99999, available: true },
        { name: '65"', price: 89999, originalPrice: 119999, available: true },
        { name: '75"', price: 139999, originalPrice: 179999, available: true }
      ],
      colors: [
        { name: 'Titan Black', hex: '#2c2c2c', available: true },
        { name: 'Silver', hex: '#c0c0c0', available: true }
      ],
      shortDescription: 'Premium 4K Neo QLED Smart TV with Quantum HDR and advanced AI upscaling.',
      fullDescription: `Transform your viewing experience with Samsung's flagship Neo QLED technology. This 65-inch 4K Smart TV delivers stunning picture quality with Quantum HDR, bringing every detail to life with incredible brightness and contrast.`,
      keyFeatures: [
        { icon: Eye, title: 'Neo QLED Display', description: 'Quantum Mini LED technology for precise brightness control' },
        { icon: Zap, title: 'Neural Quantum Processor 4K', description: 'AI-powered upscaling for enhanced picture quality' },
        { icon: Package, title: 'Smart TV Platform', description: 'Access to streaming apps and smart features' },
        { icon: Shield, title: 'Object Tracking Sound', description: 'Audio that follows the action on screen' }
      ],
      specifications: {
        'Display': {
          'Screen Size': '65 inches',
          'Resolution': '3840 x 2160 (4K UHD)',
          'Panel Type': 'Neo QLED',
          'HDR Support': 'HDR10, HDR10+, HLG'
        },
        'Smart Features': {
          'Operating System': 'Tizen OS',
          'Voice Control': 'Bixby, Alexa, Google Assistant',
          'Connectivity': 'Wi-Fi 6, Bluetooth 5.2',
          'HDMI Ports': '4 (HDMI 2.1 x2)'
        }
      }
    },
    // Fashion
    fash1: {
      id: 'fash1',
      name: 'Premium Cotton Casual Shirt',
      brand: 'Zara',
      model: 'Comfort Fit Collection',
      price: 2499,
      originalPrice: 3999,
      rating: 4.3,
      totalReviews: 567,
      reviewBreakdown: { 5: 234, 4: 178, 3: 89, 2: 45, 1: 21 },
      discount: 38,
      availability: 'In Stock',
      estimatedDelivery: '2-3 days',
      category: 'Men\'s Clothing',
      sku: 'ZRA-CS-001-BL',
      images: [
        { url: '👔', alt: 'Casual Shirt Front', type: 'image' },
        { url: '👔', alt: 'Casual Shirt Back', type: 'image' },
        { url: '👔', alt: 'Shirt Detail View', type: 'image' },
        { url: '👔', alt: 'Model Wearing Shirt', type: 'image' }
      ],
      variants: [
        { name: 'Small', price: 2499, originalPrice: 3999, available: true },
        { name: 'Medium', price: 2499, originalPrice: 3999, available: true },
        { name: 'Large', price: 2499, originalPrice: 3999, available: true },
        { name: 'X-Large', price: 2499, originalPrice: 3999, available: false }
      ],
      colors: [
        { name: 'Navy Blue', hex: '#1e3a8a', available: true },
        { name: 'White', hex: '#ffffff', available: true },
        { name: 'Light Blue', hex: '#93c5fd', available: true },
        { name: 'Black', hex: '#000000', available: true }
      ],
      shortDescription: '100% premium cotton casual shirt with comfort fit and wrinkle-free technology.',
      fullDescription: 'Crafted from premium 100% cotton, this casual shirt combines comfort with style. Features wrinkle-free technology for easy maintenance and a comfortable fit that works for both casual and semi-formal occasions.',
      keyFeatures: [
        { icon: Shirt, title: '100% Cotton', description: 'Premium cotton fabric for comfort and breathability' },
        { icon: Shield, title: 'Wrinkle Free', description: 'Easy-care fabric that resists wrinkles' },
        { icon: Award, title: 'Regular Fit', description: 'Classic fit that suits most body types' },
        { icon: Truck, title: 'Machine Washable', description: 'Easy care and maintenance' }
      ],
      specifications: {
        'Material': {
          'Fabric': '100% Cotton',
          'Weight': '180 GSM',
          'Finish': 'Wrinkle-resistant',
          'Care': 'Machine wash cold'
        },
        'Design': {
          'Collar': 'Button-down',
          'Sleeves': 'Long sleeves with button cuffs',
          'Fit': 'Regular fit',
          'Closure': 'Button front'
        }
      }
    }
  };

  // Function to get product by ID with fallback data
  const getProductById = (id) => {
    return allProductsDetailed[id] || {
      id: id || 'elec1',
      name: 'iPhone 15 Pro Max',
      brand: 'Apple',
      model: '2023 Edition',
      price: 134900,
      originalPrice: 149900,
      rating: 4.8,
      totalReviews: 1234,
      reviewBreakdown: { 5: 876, 4: 234, 3: 78, 2: 31, 1: 15 },
      discount: 10,
      availability: 'In Stock',
      estimatedDelivery: '2-3 days',
      category: 'Smartphones',
      sku: 'APL-IPH15PM-256-TB',
      images: [
        { url: '📱', alt: 'iPhone 15 Pro Max Front View', type: 'image' },
        { url: '📱', alt: 'iPhone 15 Pro Max Back View', type: 'image' },
        { url: '📱', alt: 'iPhone 15 Pro Max Side View', type: 'image' },
        { url: '🎥', alt: 'Product Demo Video', type: 'video' }
      ],
      variants: [
        { name: '128GB', price: 129900, originalPrice: 139900, available: true },
        { name: '256GB', price: 134900, originalPrice: 149900, available: true },
        { name: '512GB', price: 154900, originalPrice: 169900, available: true }
      ],
      colors: [
        { name: 'Titanium Black', hex: '#1a1a1a', available: true },
        { name: 'Titanium White', hex: '#f5f5f5', available: true },
        { name: 'Titanium Blue', hex: '#4a90e2', available: true }
      ],
      shortDescription: 'The most powerful iPhone ever with A17 Pro chip, titanium design, and advanced camera system.',
      fullDescription: 'Experience the pinnacle of smartphone technology with the iPhone 15 Pro Max.',
      keyFeatures: [
        { icon: Zap, title: 'A17 Pro Chip', description: '3-nanometer technology for ultimate performance' },
        { icon: Camera, title: '48MP Camera System', description: 'Advanced photography capabilities' }
      ],
      specifications: {
        'Display': {
          'Screen Size': '6.7 inches',
          'Resolution': '2796 x 1290 pixels'
        }
      }
    };
  };

  const product = getProductById(productId);

  // Sample reviews data
  const reviews = [
    {
      id: 'rev1',
      userName: 'Rajesh Kumar',
      userImage: '👤',
      rating: 5,
      date: '2024-01-15',
      title: 'Exceptional Performance and Camera Quality',
      review: 'The product exceeded my expectations. The quality is phenomenal, especially considering the price point. Highly recommended for anyone looking for premium features.',
      helpful: 45,
      verified: true,
      images: ['📱', '📱']
    },
    {
      id: 'rev2',
      userName: 'Priya Sharma',
      userImage: '👤',
      rating: 4,
      date: '2024-01-10',
      title: 'Great product but expensive',
      review: 'Amazing build quality and performance. The features work as advertised and the design is premium. However, the price point is quite high.',
      helpful: 32,
      verified: true,
      images: []
    },
    {
      id: 'rev3',
      userName: 'Amit Singh',
      userImage: '👤',
      rating: 5,
      date: '2024-01-08',
      title: 'Perfect for my needs',
      review: 'This product is perfect for what I needed. The quality is excellent and it works exactly as described. Great value for money.',
      helpful: 28,
      verified: true,
      images: ['📱']
    }
  ];

  const relatedProducts = [
    { id: 'acc1', name: 'Compatible Accessory 1', price: 4500, originalPrice: 5500, image: '🔌', rating: 4.6 },
    { id: 'acc2', name: 'Compatible Accessory 2', price: 2999, originalPrice: 3999, image: '📱', rating: 4.5 },
    { id: 'acc3', name: 'Compatible Accessory 3', price: 24900, originalPrice: 26900, image: '🎧', rating: 4.8 }
  ];

  const offers = [
    {
      title: 'Bank Offer',
      description: '10% instant discount with HDFC Bank Credit Cards',
      savings: '₹' + Math.floor(product.price * 0.1).toLocaleString(),
      terms: 'Valid on minimum purchase of ₹50,000'
    },
    {
      title: 'Exchange Offer',
      description: 'Get additional discount on exchange of old product',
      savings: 'Up to ₹45,000',
      terms: 'Value depends on model and condition'
    },
    {
      title: 'No Cost EMI',
      description: '0% EMI available on 3, 6, 9, 12 months',
      savings: 'Save on interest',
      terms: 'Available with select banks and cards'
    }
  ];

  const services = [
    { name: 'Free Delivery', icon: Truck, description: 'No delivery charges on orders above ₹499' },
    { name: '10-day Return', icon: RotateCcw, description: 'Easy returns within 10 days of delivery' },
    { name: 'Warranty Included', icon: Award, description: 'Genuine products with warranty' },
    { name: '24/7 Support', icon: MessageSquare, description: 'Round-the-clock customer support' }
  ];

  const warranties = [
    { name: '1 Year Warranty', icon: Shield, included: true, price: 0 },
    { name: 'Extended 2 Years', icon: Shield, included: false, price: Math.floor(product.price * 0.15) },
    { name: 'Premium 3 Years', icon: Award, included: false, price: Math.floor(product.price * 0.25) }
  ];

  // Initialize variants and colors
  useEffect(() => {
    if (product.variants && product.variants.length > 0 && !selectedVariant) {
      const availableVariant = product.variants.find(v => v.available);
      setSelectedVariant(availableVariant?.name || product.variants[0].name);
    }
    if (product.colors && product.colors.length > 0 && !selectedColor) {
      const availableColor = product.colors.find(c => c.available);
      setSelectedColor(availableColor?.name || product.colors[0].name);
    }
  }, [product, selectedVariant, selectedColor]);

  // Get current variant price
  const getCurrentVariant = () => {
    if (!product.variants || !selectedVariant) return null;
    return product.variants.find(v => v.name === selectedVariant);
  };

  const currentVariant = getCurrentVariant();
  const displayPrice = currentVariant ? currentVariant.price : product.price;
  const displayOriginalPrice = currentVariant ? currentVariant.originalPrice : product.originalPrice;

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Info },
    { id: 'specifications', name: 'Specifications', icon: Filter },
    { id: 'reviews', name: 'Reviews', icon: MessageSquare },
    { id: 'related', name: 'Related Products', icon: Package }
  ];

  const reviewFilters = [
    { id: 'all', name: 'All Reviews', count: reviews.length },
    { id: '5', name: '5 Star', count: reviews.filter(r => r.rating === 5).length },
    { id: '4', name: '4 Star', count: reviews.filter(r => r.rating === 4).length },
    { id: 'verified', name: 'Verified', count: reviews.filter(r => r.verified).length }
  ];

  const getFilteredReviews = () => {
    let filtered = reviews;
    if (selectedReviewFilter === 'verified') {
      filtered = reviews.filter(r => r.verified);
    } else if (selectedReviewFilter !== 'all') {
      filtered = reviews.filter(r => r.rating === parseInt(selectedReviewFilter));
    }
    return filtered;
  };

  const ImageGallery = () => (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative bg-gray-50 rounded-2xl overflow-hidden aspect-square">
        <div className="w-full h-full flex items-center justify-center">
          {product.images[selectedImage]?.type === 'video' ? (
            <div className="relative w-full h-full bg-black flex items-center justify-center">
              <div className="text-8xl">🎥</div>
              {!showVideoPlayer && (
                <button
                  onClick={() => setShowVideoPlayer(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/40 transition-colors"
                >
                  <Play className="w-16 h-16 text-white" />
                </button>
              )}
            </div>
          ) : (
            <div className="text-8xl opacity-60">{product.images[selectedImage]?.url}</div>
          )}
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))}
          disabled={selectedImage === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={() => setSelectedImage(Math.min(product.images.length - 1, selectedImage + 1))}
          disabled={selectedImage === product.images.length - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-3 rounded-full transition-all duration-300 ${
              isFavorite ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600 hover:text-red-500'
            }`}
          >
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-3 bg-white/80 text-gray-600 rounded-full hover:text-purple-600 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Thumbnail Strip */}
      <div className="flex gap-2 overflow-x-auto">
        {product.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              selectedImage === index ? 'border-purple-500 shadow-lg' : 'border-gray-200'
            }`}
          >
            <div className="w-full h-full bg-gray-100 flex items-center justify-center relative">
              <div className="text-2xl opacity-60">{image.url}</div>
              {image.type === 'video' && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-1 hover:text-purple-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <ChevronRight className="w-4 h-4" />
            <span>{product.category}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-purple-600 font-medium">{product.brand}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Image Gallery */}
          <div>
            <ImageGallery />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-purple-600 font-medium">{product.brand}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">{product.category}</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.model}</p>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center bg-green-500 text-white px-3 py-1 rounded-lg">
                  <span className="font-semibold">{product.rating}</span>
                  <Star className="w-4 h-4 ml-1" />
                </div>
                <span className="text-gray-600">{product.totalReviews.toLocaleString()} reviews</span>
                <span className="text-green-600 font-medium">{product.availability}</span>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-bold text-gray-800">₹{displayPrice.toLocaleString()}</span>
                <span className="text-xl text-gray-500 line-through">₹{displayOriginalPrice.toLocaleString()}</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full font-semibold">
                  {Math.round(((displayOriginalPrice - displayPrice) / displayOriginalPrice) * 100)}% OFF
                </span>
              </div>
              <p className="text-green-600 font-medium flex items-center gap-1">
                <Check className="w-4 h-4" />
                You save ₹{(displayOriginalPrice - displayPrice).toLocaleString()}
              </p>
            </div>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  {product.category === 'Smartphones' ? 'Storage Options' : 
                   product.category.includes('Clothing') ? 'Size' : 'Options'}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.variants.map(variant => (
                    <button
                      key={variant.name}
                      onClick={() => setSelectedVariant(variant.name)}
                      disabled={!variant.available}
                      className={`p-4 border-2 rounded-xl text-center transition-all duration-300 ${
                        selectedVariant === variant.name
                          ? 'border-purple-500 bg-purple-50'
                          : variant.available
                          ? 'border-gray-200 hover:border-purple-300'
                          : 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                      }`}
                    >
                      <div className="font-semibold">{variant.name}</div>
                      <div className="text-sm text-gray-600">₹{variant.price.toLocaleString()}</div>
                      {!variant.available && (
                        <div className="text-xs text-red-500 mt-1">Out of Stock</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Colors</h3>
                <div className="flex gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      disabled={!color.available}
                      className={`w-12 h-12 rounded-full border-4 transition-all duration-300 ${
                        selectedColor === color.name
                          ? 'border-purple-500 shadow-lg scale-110'
                          : color.available 
                          ? 'border-gray-300 hover:border-purple-300' 
                          : 'border-gray-200 opacity-50 cursor-not-allowed'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {!color.available && (
                        <div className="w-full h-full bg-red-500/20 rounded-full flex items-center justify-center">
                          <X className="w-4 h-4 text-red-500" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                {selectedColor && (
                  <p className="text-sm text-gray-600 mt-2">
                    Selected: {product.colors.find(c => c.name === selectedColor)?.name}
                  </p>
                )}
              </div>
            )}

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-800">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="flex-1 bg-orange-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Services */}
            <div className="grid grid-cols-2 gap-4">
              {services.map(service => {
                const IconComponent = service.icon;
                return (
                  <div key={service.name} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                    <IconComponent className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="font-medium text-sm">{service.name}</div>
                      <div className="text-xs text-gray-600">{service.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Delivery Info */}
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Truck className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-800">Delivery Information</span>
              </div>
              <div className="text-sm text-blue-700">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Deliver to Mumbai 400001 - {product.estimatedDelivery}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="w-4 h-4" />
                  <span>Order within 4 hours for same day dispatch</span>
                </div>
              </div>
            </div>

            {/* Offers */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-800">Available Offers</h3>
              {offers.map((offer, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <Gift className="w-5 h-5 text-green-600 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-semibold text-green-800">{offer.title}</div>
                    <div className="text-sm text-green-700 mb-1">{offer.description}</div>
                    <div className="text-xs text-green-600">Save {offer.savings} • {offer.terms}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-xl shadow-lg">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {tabs.map(tab => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 font-medium transition-all duration-300 whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50'
                        : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {tab.name}
                    {tab.id === 'reviews' && (
                      <span className="bg-gray-200 text-xs px-2 py-1 rounded-full">
                        {product.totalReviews}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Short Description */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Product Overview</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{product.shortDescription}</p>
                  
                  <div className="relative">
                    <p className={`text-gray-600 leading-relaxed transition-all duration-300 ${
                      showFullDescription ? '' : 'line-clamp-4'
                    }`}>
                      {product.fullDescription}
                    </p>
                    <button
                      onClick={() => setShowFullDescription(!showFullDescription)}
                      className="text-purple-600 hover:text-purple-700 font-medium mt-2 flex items-center gap-1"
                    >
                      {showFullDescription ? 'Read Less' : 'Read More'}
                      {showFullDescription ? 
                        <ChevronUp className="w-4 h-4" /> : 
                        <ChevronDown className="w-4 h-4" />
                      }
                    </button>
                  </div>
                </div>

                {/* Key Features */}
                {product.keyFeatures && product.keyFeatures.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {product.keyFeatures.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                          <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                            <div className="bg-purple-100 p-3 rounded-lg">
                              <IconComponent className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                              <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Warranty Options */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Warranty Options</h3>
                  <div className="space-y-4">
                    {warranties.map((warranty, index) => {
                      const IconComponent = warranty.icon;
                      return (
                        <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-purple-300 transition-colors duration-300">
                          <div className="flex items-center gap-3">
                            <IconComponent className="w-5 h-5 text-purple-600" />
                            <span className="font-medium text-gray-800">{warranty.name}</span>
                            {warranty.included && (
                              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                                Included
                              </span>
                            )}
                          </div>
                          {!warranty.included && (
                            <div className="text-right">
                              <div className="font-semibold text-gray-800">
                                ₹{warranty.price.toLocaleString()}
                              </div>
                              <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                                Add to Cart
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="space-y-8">
                <h3 className="text-xl font-semibold text-gray-800">Technical Specifications</h3>
                {Object.entries(product.specifications).map(([category, specs]) => (
                  <div key={category} className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">{category}</h4>
                    <div className="grid gap-3">
                      {Object.entries(specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                          <span className="text-gray-600">{key}</span>
                          <span className="font-medium text-gray-800 text-right">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {/* Review Summary */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                  <div className="flex items-center gap-8 mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-800 mb-2">{product.rating}</div>
                      <div className="flex items-center justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="text-gray-600">{product.totalReviews} reviews</div>
                    </div>
                    
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map(rating => (
                        <div key={rating} className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-600 w-4">{rating}</span>
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-yellow-400 h-2 rounded-full"
                              style={{
                                width: `${((product.reviewBreakdown[rating] || 0) / product.totalReviews) * 100}%`
                              }}
                            />
                          </div>
                          <span className="text-sm text-gray-600 w-8">
                            {product.reviewBreakdown[rating] || 0}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors duration-300">
                    Write a Review
                  </button>
                </div>

                {/* Review Filters */}
                <div className="flex flex-wrap gap-3">
                  {reviewFilters.map(filter => (
                    <button
                      key={filter.id}
                      onClick={() => setSelectedReviewFilter(filter.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedReviewFilter === filter.id
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {filter.name} ({filter.count})
                    </button>
                  ))}
                </div>

                {/* Reviews List */}
                <div className="space-y-6">
                  {getFilteredReviews().slice(0, currentReviewPage * 3).map(review => (
                    <div key={review.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">{review.userImage}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-gray-800">{review.userName}</h4>
                              <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className={`w-4 h-4 ${
                                        i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                      }`} 
                                    />
                                  ))}
                                </div>
                                {review.verified && (
                                  <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                                    <Check className="w-3 h-3" />
                                    Verified
                                  </div>
                                )}
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          
                          <h5 className="font-medium text-gray-800 mb-2">{review.title}</h5>
                          <p className="text-gray-600 mb-4 leading-relaxed">{review.review}</p>
                          
                          {review.images.length > 0 && (
                            <div className="flex gap-2 mb-4">
                              {review.images.map((img, idx) => (
                                <div key={idx} className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                                  <div className="text-2xl opacity-60">{img}</div>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          <div className="flex items-center gap-4 text-sm">
                            <button className="flex items-center gap-1 text-gray-600 hover:text-green-600 transition-colors">
                              <ThumbsUp className="w-4 h-4" />
                              Helpful ({review.helpful})
                            </button>
                            <button className="flex items-center gap-1 text-gray-600 hover:text-red-600 transition-colors">
                              <ThumbsDown className="w-4 h-4" />
                              Not Helpful
                            </button>
                            <button className="flex items-center gap-1 text-gray-600 hover:text-orange-600 transition-colors">
                              <Flag className="w-4 h-4" />
                              Report
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {getFilteredReviews().length > currentReviewPage * 3 && (
                  <div className="text-center">
                    <button
                      onClick={() => setCurrentReviewPage(prev => prev + 1)}
                      className="bg-gray-100 text-gray-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300"
                    >
                      Load More Reviews
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'related' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Related Products</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedProducts.map(relatedProduct => (
                    <div key={relatedProduct.id} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                      <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                        <div className="text-4xl opacity-60">{relatedProduct.image}</div>
                      </div>
                      
                      <h4 className="font-medium text-gray-800 mb-2 line-clamp-2">{relatedProduct.name}</h4>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                          <span>{relatedProduct.rating}</span>
                          <Star className="w-3 h-3 ml-1" />
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <span className="font-bold text-gray-800">₹{relatedProduct.price.toLocaleString()}</span>
                        <span className="text-gray-500 line-through text-sm">₹{relatedProduct.originalPrice.toLocaleString()}</span>
                      </div>
                      
                      <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
                        View Product
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar - Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex gap-3 shadow-lg z-50">
        <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
        <button className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-semibold">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;