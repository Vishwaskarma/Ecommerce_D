"use client";
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'; // Import useSearchParams
import { useRouter } from 'next/navigation';
import { 
  Filter, Search, Grid, List, ChevronDown, ChevronUp, X, Star, Heart,
  SlidersHorizontal, ArrowUpDown, Eye, ShoppingCart, Zap, Shield,
  Truck, Award, ChevronLeft, ChevronRight, MapPin, Clock, Percent,
  Sparkles, Home, Gamepad2, Coffee, Leaf, Shirt, Grid3X3
} from 'lucide-react';

const CategoryPage = () => {
  const searchParams = useSearchParams(); // Get query parameters
  const initialCategory = searchParams.get('category') || 'electronics'; // Default to 'electronics' if no category is provided
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popularity');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedFilters, setSelectedFilters] = useState({
    brand: [],
    rating: [],
    features: []
  });
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const router = useRouter();

  const categories = {
    all: { 
      name: 'All Categories', 
      emoji: '🛍️', 
      color: 'from-slate-400 to-slate-600',
      icon: Grid3X3
    },
    electronics: { 
      name: 'Electronics', 
      emoji: '⚡', 
      color: 'from-blue-400 to-indigo-600',
      icon: Zap
    },
    fashion: { 
      name: 'Fashion', 
      emoji: '👗', 
      color: 'from-pink-400 to-rose-600',
      icon: Shirt
    },
    home: { 
      name: 'Home & Living', 
      emoji: '🏠', 
      color: 'from-emerald-400 to-green-600',
      icon: Home
    },
    beauty: { 
      name: 'Beauty & Care', 
      emoji: '✨', 
      color: 'from-purple-400 to-violet-600',
      icon: Sparkles
    },
    cafe: { 
      name: 'Café & Coffee', 
      emoji: '☕', 
      color: 'from-amber-400 to-orange-600',
      icon: Coffee
    },
    toys: { 
      name: 'Toys & Games', 
      emoji: '🎮', 
      color: 'from-cyan-400 to-teal-600',
      icon: Gamepad2
    },
    fresh: { 
      name: 'Fresh Produce', 
      emoji: '🥬', 
      color: 'from-lime-400 to-green-600',
      icon: Leaf
    }
  };

  // Comprehensive Product Data for All Categories
  const allProducts = {
    electronics: [
      {
        id: 'elec1',
        name: 'iPhone 15 Pro Max 256GB',
        brand: 'Apple',
        price: 134900,
        originalPrice: 149900,
        rating: 4.8,
        reviews: 1234,
        image: '📱',
        discount: 10,
        features: ['5G Ready', 'Wireless Charging', 'Face ID'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Smartphones'
      },
      {
        id: 'elec2',
        name: 'Samsung 65" 4K Smart TV',
        brand: 'Samsung',
        price: 89999,
        originalPrice: 119999,
        rating: 4.6,
        reviews: 856,
        image: '📺',
        discount: 25,
        features: ['4K Ultra HD', 'Smart TV', 'HDR'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Television'
      },
      {
        id: 'elec3',
        name: 'MacBook Air M2 13-inch',
        brand: 'Apple',
        price: 114900,
        originalPrice: 134900,
        rating: 4.9,
        reviews: 567,
        image: '💻',
        discount: 15,
        features: ['M2 Chip', 'Retina Display', '8GB RAM'],
        inStock: true,
        fastDelivery: false,
        assured: true,
        category: 'Laptops'
      },
      {
        id: 'elec4',
        name: 'Sony WH-1000XM5 Headphones',
        brand: 'Sony',
        price: 29990,
        originalPrice: 34990,
        rating: 4.7,
        reviews: 423,
        image: '🎧',
        discount: 14,
        features: ['Noise Cancelling', 'Wireless', '30Hr Battery'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Audio'
      },
      {
        id: 'elec5',
        name: 'Canon EOS R6 Mark II',
        brand: 'Canon',
        price: 249999,
        originalPrice: 289999,
        rating: 4.8,
        reviews: 234,
        image: '📷',
        discount: 14,
        features: ['24.2MP', '4K Video', 'Image Stabilization'],
        inStock: false,
        fastDelivery: false,
        assured: true,
        category: 'Cameras'
      },
      {
        id: 'elec6',
        name: 'iPad Pro 12.9" M2 128GB',
        brand: 'Apple',
        price: 112900,
        originalPrice: 124900,
        rating: 4.7,
        reviews: 345,
        image: '📱',
        discount: 10,
        features: ['M2 Chip', 'Liquid Retina XDR', 'Apple Pencil'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Tablets'
      }
    ],
    
    fashion: [
      {
        id: 'fash1',
        name: 'Premium Cotton Casual Shirt',
        brand: 'Zara',
        price: 2499,
        originalPrice: 3999,
        rating: 4.3,
        reviews: 567,
        image: '👔',
        discount: 38,
        features: ['100% Cotton', 'Wrinkle Free', 'Regular Fit'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Men\'s Clothing'
      },
      {
        id: 'fash2',
        name: 'Designer Floral Dress',
        brand: 'H&M',
        price: 1899,
        originalPrice: 2899,
        rating: 4.5,
        reviews: 234,
        image: '👗',
        discount: 34,
        features: ['Summer Collection', 'Breathable', 'Machine Wash'],
        inStock: true,
        fastDelivery: false,
        assured: true,
        category: 'Women\'s Clothing'
      },
      {
        id: 'fash3',
        name: 'Premium Leather Boots',
        brand: 'Nike',
        price: 8999,
        originalPrice: 12999,
        rating: 4.6,
        reviews: 456,
        image: '👢',
        discount: 31,
        features: ['Genuine Leather', 'Waterproof', 'Anti-slip'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Footwear'
      },
      {
        id: 'fash4',
        name: 'Luxury Watch Collection',
        brand: 'Fossil',
        price: 15999,
        originalPrice: 21999,
        rating: 4.7,
        reviews: 189,
        image: '⌚',
        discount: 27,
        features: ['Stainless Steel', 'Water Resistant', '2 Year Warranty'],
        inStock: true,
        fastDelivery: false,
        assured: true,
        category: 'Accessories'
      },
      {
        id: 'fash5',
        name: 'Designer Handbag',
        brand: 'Coach',
        price: 25999,
        originalPrice: 35999,
        rating: 4.8,
        reviews: 123,
        image: '👜',
        discount: 28,
        features: ['Genuine Leather', 'Multiple Compartments', 'Gold Hardware'],
        inStock: false,
        fastDelivery: false,
        assured: true,
        category: 'Bags'
      },
      {
        id: 'fash6',
        name: 'Sports Running Shoes',
        brand: 'Adidas',
        price: 4999,
        originalPrice: 6999,
        rating: 4.4,
        reviews: 678,
        image: '👟',
        discount: 29,
        features: ['Breathable Mesh', 'Cushioned Sole', 'Lightweight'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Sports'
      }
    ],

    home: [
      {
        id: 'home1',
        name: 'Premium Sofa Set 3+2',
        brand: 'Urban Ladder',
        price: 45999,
        originalPrice: 65999,
        rating: 4.6,
        reviews: 234,
        image: '🛋️',
        discount: 30,
        features: ['Fabric Upholstery', 'Wooden Frame', '5 Year Warranty'],
        inStock: true,
        fastDelivery: false,
        assured: true,
        category: 'Furniture'
      },
      {
        id: 'home2',
        name: 'Smart LED Table Lamp',
        brand: 'Philips',
        price: 3499,
        originalPrice: 4999,
        rating: 4.4,
        reviews: 456,
        image: '💡',
        discount: 30,
        features: ['Smart Control', 'Adjustable Brightness', 'Eye Care'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Lighting'
      },
      {
        id: 'home3',
        name: 'Luxury Bedsheet Set',
        brand: 'Raymond',
        price: 2799,
        originalPrice: 3999,
        rating: 4.5,
        reviews: 567,
        image: '🛏️',
        discount: 30,
        features: ['100% Cotton', 'Double Bed', 'Machine Wash'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Bedding'
      },
      {
        id: 'home4',
        name: 'Ceramic Dinnerware Set',
        brand: 'Corelle',
        price: 4999,
        originalPrice: 7999,
        rating: 4.7,
        reviews: 234,
        image: '🍽️',
        discount: 38,
        features: ['24 Piece Set', 'Microwave Safe', 'Break Resistant'],
        inStock: true,
        fastDelivery: false,
        assured: true,
        category: 'Kitchen'
      },
      {
        id: 'home5',
        name: 'Persian Style Carpet',
        brand: 'Carpet Mart',
        price: 12999,
        originalPrice: 18999,
        rating: 4.3,
        reviews: 189,
        image: '🪄',
        discount: 32,
        features: ['Hand Woven', '6x4 Feet', 'Stain Resistant'],
        inStock: false,
        fastDelivery: false,
        assured: false,
        category: 'Decor'
      },
      {
        id: 'home6',
        name: 'Air Purifier with HEPA',
        brand: 'Dyson',
        price: 32999,
        originalPrice: 39999,
        rating: 4.8,
        reviews: 345,
        image: '🌬️',
        discount: 18,
        features: ['HEPA Filter', 'Smart Sensors', 'App Control'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Appliances'
      }
    ],

    beauty: [
      {
        id: 'beauty1',
        name: 'Premium Face Serum with Vitamin C',
        brand: 'L\'Oreal',
        price: 2499,
        originalPrice: 3999,
        rating: 4.5,
        reviews: 789,
        image: '🧴',
        discount: 38,
        features: ['Organic', 'Anti-Aging', 'Vitamin C'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Skincare'
      },
      {
        id: 'beauty2',
        name: 'Matte Liquid Lipstick Set',
        brand: 'Maybelline',
        price: 1299,
        originalPrice: 1899,
        rating: 4.2,
        reviews: 456,
        image: '💄',
        discount: 32,
        features: ['Long Lasting', 'Matte Finish', 'Cruelty Free'],
        inStock: true,
        fastDelivery: false,
        assured: true,
        category: 'Makeup'
      },
      {
        id: 'beauty3',
        name: 'Professional Hair Dryer',
        brand: 'Dyson',
        price: 34999,
        originalPrice: 39999,
        rating: 4.8,
        reviews: 234,
        image: '💨',
        discount: 13,
        features: ['Ionic Technology', 'Multiple Settings', 'Heat Protection'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Hair Care'
      },
      {
        id: 'beauty4',
        name: 'Luxury Perfume Collection',
        brand: 'Chanel',
        price: 8999,
        originalPrice: 12999,
        rating: 4.7,
        reviews: 567,
        image: '🌸',
        discount: 31,
        features: ['Long Lasting', 'Premium Fragrance', 'Gift Box'],
        inStock: true,
        fastDelivery: false,
        assured: true,
        category: 'Fragrance'
      },
      {
        id: 'beauty5',
        name: 'Anti-Aging Night Cream',
        brand: 'Olay',
        price: 1899,
        originalPrice: 2699,
        rating: 4.4,
        reviews: 678,
        image: '🌙',
        discount: 30,
        features: ['Anti-Aging', 'Moisturizing', 'Dermatologist Tested'],
        inStock: false,
        fastDelivery: false,
        assured: true,
        category: 'Skincare'
      },
      {
        id: 'beauty6',
        name: 'Professional Makeup Brush Set',
        brand: 'MAC',
        price: 4999,
        originalPrice: 7999,
        rating: 4.6,
        reviews: 345,
        image: '🖌️',
        discount: 38,
        features: ['15 Piece Set', 'Synthetic Bristles', 'Travel Case'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Makeup Tools'
      }
    ],

    cafe: [
      {
        id: 'cafe1',
        name: 'Premium Arabica Coffee Beans',
        brand: 'Blue Tokai',
        price: 899,
        originalPrice: 1299,
        rating: 4.6,
        reviews: 456,
        image: '☕',
        discount: 31,
        features: ['Single Origin', 'Medium Roast', '250g Pack'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Coffee Beans'
      },
      {
        id: 'cafe2',
        name: 'Espresso Machine Deluxe',
        brand: 'Breville',
        price: 45999,
        originalPrice: 59999,
        rating: 4.8,
        reviews: 234,
        image: '☕',
        discount: 23,
        features: ['15 Bar Pressure', 'Milk Frother', 'Programmable'],
        inStock: true,
        fastDelivery: false,
        assured: true,
        category: 'Coffee Machines'
      },
      {
        id: 'cafe3',
        name: 'Ceramic Coffee Mug Set',
        brand: 'Borosil',
        price: 1299,
        originalPrice: 1899,
        rating: 4.4,
        reviews: 678,
        image: '☕',
        discount: 32,
        features: ['Set of 6', 'Microwave Safe', 'Ergonomic Handle'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Coffee Accessories'
      },
      {
        id: 'cafe4',
        name: 'French Press Coffee Maker',
        brand: 'Bodum',
        price: 2999,
        originalPrice: 3999,
        rating: 4.5,
        reviews: 345,
        image: '☕',
        discount: 25,
        features: ['Borosilicate Glass', '1L Capacity', 'Heat Resistant'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Brewing Equipment'
      },
      {
        id: 'cafe5',
        name: 'Cold Brew Coffee Concentrate',
        brand: 'Third Wave',
        price: 699,
        originalPrice: 999,
        rating: 4.3,
        reviews: 234,
        image: '🧊',
        discount: 30,
        features: ['Ready to Drink', 'Low Acidity', '200ml Bottle'],
        inStock: false,
        fastDelivery: false,
        assured: true,
        category: 'Ready to Drink'
      },
      {
        id: 'cafe6',
        name: 'Coffee Grinder Electric',
        brand: 'Cuisinart',
        price: 3499,
        originalPrice: 4999,
        rating: 4.7,
        reviews: 189,
        image: '⚡',
        discount: 30,
        features: ['Burr Grinder', '18 Settings', 'Large Capacity'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Coffee Equipment'
      }
    ],

    toys: [
      {
        id: 'toys1',
        name: 'LEGO Creator Expert Car',
        brand: 'LEGO',
        price: 12999,
        originalPrice: 16999,
        rating: 4.8,
        reviews: 345,
        image: '🚗',
        discount: 24,
        features: ['1000+ Pieces', 'Ages 12+', 'Detailed Model'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Building Blocks'
      },
      {
        id: 'toys2',
        name: 'Remote Control Drone',
        brand: 'DJI',
        price: 8999,
        originalPrice: 11999,
        rating: 4.6,
        reviews: 456,
        image: '🚁',
        discount: 25,
        features: ['HD Camera', '30 Min Flight', 'Easy Control'],
        inStock: true,
        fastDelivery: false,
        assured: true,
        category: 'Remote Control'
      },
      {
        id: 'toys3',
        name: 'Educational Robot Kit',
        brand: 'Arduino',
        price: 4999,
        originalPrice: 6999,
        rating: 4.7,
        reviews: 234,
        image: '🤖',
        discount: 29,
        features: ['STEM Learning', 'Programmable', 'Ages 8+'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Educational'
      },
      {
        id: 'toys4',
        name: 'Interactive Gaming Console',
        brand: 'Nintendo',
        price: 29999,
        originalPrice: 34999,
        rating: 4.9,
        reviews: 567,
        image: '🎮',
        discount: 14,
        features: ['Portable', 'HD Graphics', 'Multiplayer'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Gaming'
      },
      {
        id: 'toys5',
        name: 'Dollhouse Playset',
        brand: 'Barbie',
        price: 3999,
        originalPrice: 5999,
        rating: 4.4,
        reviews: 678,
        image: '🏠',
        discount: 33,
        features: ['3 Floors', 'Furniture Included', 'Ages 3+'],
        inStock: false,
        fastDelivery: false,
        assured: true,
        category: 'Dolls'
      },
      {
        id: 'toys6',
        name: 'Science Experiment Kit',
        brand: 'National Geographic',
        price: 2499,
        originalPrice: 3499,
        rating: 4.5,
        reviews: 345,
        image: '🔬',
        discount: 29,
        features: ['50+ Experiments', 'Safe Materials', 'Educational Guide'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Science Kits'
      }
    ],

    fresh: [
      {
        id: 'fresh1',
        name: 'Organic Fresh Apples',
        brand: 'Farm Fresh',
        price: 199,
        originalPrice: 249,
        rating: 4.5,
        reviews: 567,
        image: '🍎',
        discount: 20,
        features: ['Organic', 'Fresh', '1 KG Pack'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Fruits'
      },
      {
        id: 'fresh2',
        name: 'Fresh Spinach Leaves',
        brand: 'Green Valley',
        price: 49,
        originalPrice: 69,
        rating: 4.3,
        reviews: 234,
        image: '🥬',
        discount: 29,
        features: ['Farm Fresh', 'Pesticide Free', '250g Bundle'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Vegetables'
      },
      {
        id: 'fresh3',
        name: 'Premium Basmati Rice',
        brand: 'India Gate',
        price: 899,
        originalPrice: 1199,
        rating: 4.6,
        reviews: 456,
        image: '🌾',
        discount: 25,
        features: ['Aged Rice', '5 KG Pack', 'Long Grain'],
        inStock: true,
        fastDelivery: false,
        assured: true,
        category: 'Grains'
      },
      {
        id: 'fresh4',
        name: 'Fresh Paneer Block',
        brand: 'Amul',
        price: 120,
        originalPrice: 140,
        rating: 4.4,
        reviews: 678,
        image: '🧀',
        discount: 14,
        features: ['Fresh Daily', '200g Pack', 'High Protein'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Dairy'
      },
      {
        id: 'fresh5',
        name: 'Organic Honey',
        brand: 'Dabur',
        price: 299,
        originalPrice: 399,
        rating: 4.7,
        reviews: 345,
        image: '🍯',
        discount: 25,
        features: ['100% Pure', '500g Bottle', 'No Added Sugar'],
        inStock: false,
        fastDelivery: false,
        assured: true,
        category: 'Natural Products'
      },
      {
        id: 'fresh6',
        name: 'Free Range Eggs',
        brand: 'Country Eggs',
        price: 89,
        originalPrice: 99,
        rating: 4.5,
        reviews: 234,
        image: '🥚',
        discount: 10,
        features: ['Free Range', '6 Piece Tray', 'Protein Rich'],
        inStock: true,
        fastDelivery: true,
        assured: true,
        category: 'Eggs'
      }
    ]
  };

  // Get all products or category-specific products
  const getCurrentProducts = () => {
    if (selectedCategory === 'all') {
      return Object.values(allProducts).flat();
    }
    return allProducts[selectedCategory] || [];
  };

  // Get unique brands for current category
  const getBrands = () => {
    const products = getCurrentProducts();
    return [...new Set(products.map(p => p.brand))].sort();
  };

  // Get unique features for current category
  const getFeatures = () => {
    const products = getCurrentProducts();
    const allFeatures = products.flatMap(p => p.features);
    return [...new Set(allFeatures)].sort();
  };

  const sortOptions = [
    { value: 'popularity', label: 'Popularity' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' },
    { value: 'rating', label: 'Customer Rating' }
  ];

  const ratings = [5, 4, 3, 2];

  // Filter and sort products
  const getFilteredProducts = () => {
    let products = getCurrentProducts();

    // Apply search filter
    if (searchQuery) {
      products = products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply price filter
    products = products.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Apply brand filter
    if (selectedFilters.brand.length > 0) {
      products = products.filter(p => selectedFilters.brand.includes(p.brand));
    }

    // Apply rating filter
    if (selectedFilters.rating.length > 0) {
      const minRating = Math.min(...selectedFilters.rating);
      products = products.filter(p => p.rating >= minRating);
    }

    // Apply features filter
    if (selectedFilters.features.length > 0) {
      products = products.filter(p => 
        selectedFilters.features.some(feature => p.features.includes(feature))
      );
    }

    // Apply sorting
    products.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.id.localeCompare(a.id);
        default:
          return b.reviews - a.reviews;
      }
    });

    return products;
  };

  const toggleFilter = (type, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value) 
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  };

  const toggleFavorite = (e, productId) => {
    e.preventDefault(); // Prevent navigation when clicking favorite
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const clearAllFilters = () => {
    setSelectedFilters({ brand: [], rating: [], features: [] });
    setPriceRange([0, 100000]);
    setSearchQuery('');
  };

  // Update max price range when category changes
  useEffect(() => {
    const products = getCurrentProducts();
    const maxPrice = products.length > 0 ? Math.max(...products.map(p => p.price)) : 100000;
    setPriceRange([0, maxPrice]);
    setSelectedFilters({ brand: [], rating: [], features: [] });
    setSearchQuery('');
    setCurrentPage(1);
  }, [selectedCategory]);

  // Fixed ProductCard component with proper navigation
  const ProductCard = ({ product }) => {
const handleProductClick = () => {
  // Navigate to product detail page with product ID
  router.push(`/product/${product.id}`);
};

    const handleActionClick = (e, action) => {
      e.preventDefault();
      e.stopPropagation();
      
      if (action === 'favorite') {
        toggleFavorite(e, product.id);
      } else if (action === 'quickView') {
        // Handle quick view
        console.log('Quick view for:', product.id);
      } else if (action === 'addToCart') {
        // Handle add to cart
        console.log('Add to cart:', product.id);
      }
    };

    return (
      <div 
        onClick={handleProductClick}
        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200 transform hover:scale-105 cursor-pointer"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gray-50">
          <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
            <div className="text-6xl opacity-60">{product.image}</div>
          </div>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.discount > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                -{product.discount}%
              </span>
            )}
            {product.assured && (
              <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                <Shield className="w-3 h-3 mr-1" />
                Assured
              </span>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={(e) => handleActionClick(e, 'favorite')}
              className={`p-2 rounded-full transition-colors duration-300 ${
                favorites.includes(product.id) 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
              }`}
            >
              <Heart className="w-4 h-4" />
            </button>
            <button 
              onClick={(e) => handleActionClick(e, 'quickView')}
              className="p-2 bg-white text-gray-600 rounded-full hover:bg-purple-50 hover:text-purple-600 transition-colors duration-300"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
          
          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                Out of Stock
              </span>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-4">
          <div className="mb-2">
            <span className="text-sm text-purple-600 font-medium">{product.brand}</span>
            <span className="text-xs text-gray-500 ml-2">• {product.category}</span>
          </div>
          
          <h3 className="font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
            {product.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
              <span>{product.rating}</span>
              <Star className="w-3 h-3 ml-1" />
            </div>
            <span className="text-gray-500 text-sm">({product.reviews})</span>
          </div>
          
          {/* Price */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl font-bold text-gray-800">₹{product.price.toLocaleString()}</span>
            {product.originalPrice > product.price && (
              <span className="text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
            )}
          </div>
          
          {/* Features */}
          <div className="flex flex-wrap gap-1 mb-4">
            {product.features.slice(0, 2).map(feature => (
              <span key={feature} className="text-xs bg-purple-50 text-purple-600 px-2 py-1 rounded-full">
                {feature}
              </span>
            ))}
          </div>
          
          {/* Delivery Info */}
          <div className="flex items-center gap-4 mb-4 text-xs text-gray-600">
            {product.fastDelivery && (
              <div className="flex items-center gap-1">
                <Truck className="w-3 h-3 text-green-500" />
                <span>Fast Delivery</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>Free Delivery</span>
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <button 
            onClick={(e) => handleActionClick(e, 'addToCart')}
            disabled={!product.inStock}
            className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
              product.inStock
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105 active:scale-95'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            {product.inStock ? (
              <div className="flex items-center justify-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </div>
            ) : (
              'Notify Me'
            )}
          </button>
        </div>
      </div>
    );
  };

  const filteredProducts = getFilteredProducts();
  const productsPerPage = 12;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Breadcrumb */}
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
              <span>Home</span>
              <ChevronRight className="w-4 h-4" />
              <span>Categories</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-purple-600 font-medium">{categories[selectedCategory].name}</span>
            </div>
            
            {/* Category Selector Mobile */}
            <div className="md:hidden">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                {Object.entries(categories).map(([key, cat]) => (
                  <option key={key} value={key}>{cat.emoji} {cat.name}</option>
                ))}
              </select>
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-600'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Selection Tabs - Desktop */}
      <div className="hidden md:block bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-4">
            {Object.entries(categories).map(([key, cat]) => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === key
                      ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{cat.emoji} {cat.name}</span>
                  {selectedCategory === key && (
                    <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                      {getCurrentProducts().length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Category Header */}
        <div className={`relative overflow-hidden rounded-2xl p-8 mb-6 bg-gradient-to-br ${categories[selectedCategory].color} text-white`}>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-6xl">{categories[selectedCategory].emoji}</div>
              <div>
                <h1 className="text-4xl font-bold mb-2">{categories[selectedCategory].name}</h1>
                <p className="text-white/90">
                  {selectedCategory === 'all' 
                    ? `Explore all ${Object.values(allProducts).flat().length} amazing products across all categories`
                    : `Discover ${getCurrentProducts().length} amazing products in this category`
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200 mb-4"
            >
              <span className="flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5" />
                Filters
              </span>
              {showFilters ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>

            {/* Filters Panel */}
            <div className={`bg-white rounded-lg border border-gray-200 ${showFilters || 'max-lg:hidden'}`}>
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800">Filters</h3>
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Clear All
                  </button>
                </div>
              </div>

              {/* Search */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Price Range */}
              <div className="p-4 border-b border-gray-200">
                <h4 className="font-medium text-gray-800 mb-3">Price Range</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max={Math.max(...getCurrentProducts().map(p => p.price))}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-purple-500"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹{priceRange[0].toLocaleString()}</span>
                    <span>₹{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Brand Filter */}
              {getBrands().length > 0 && (
                <div className="p-4 border-b border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-3">Brand</h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {getBrands().map(brand => (
                      <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedFilters.brand.includes(brand)}
                          onChange={() => toggleFilter('brand', brand)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Rating Filter */}
              <div className="p-4 border-b border-gray-200">
                <h4 className="font-medium text-gray-800 mb-3">Customer Rating</h4>
                <div className="space-y-2">
                  {ratings.map(rating => (
                    <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.rating.includes(rating)}
                        onChange={() => toggleFilter('rating', rating)}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-700">{rating} & above</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Features Filter */}
              {getFeatures().length > 0 && (
                <div className="p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Features</h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {getFeatures().map(feature => (
                      <label key={feature} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedFilters.features.includes(feature)}
                          onChange={() => toggleFilter('features', feature)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Sort and Results Bar */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-gray-600">
                  Showing <span className="font-semibold">{startIndex + 1}-{Math.min(startIndex + productsPerPage, filteredProducts.length)}</span> of <span className="font-semibold">{filteredProducts.length}</span> products
                </div>
                
                <div className="flex items-center gap-4">
                  <label className="text-sm text-gray-600">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {displayedProducts.length > 0 ? (
              <div className={`grid gap-6 mb-8 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {displayedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
                <button
                  onClick={clearAllFilters}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                <button 
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const page = i + Math.max(1, currentPage - 2);
                  if (page > totalPages) return null;
                  
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                        currentPage === page
                          ? 'bg-purple-600 text-white'
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
                
                <button 
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;