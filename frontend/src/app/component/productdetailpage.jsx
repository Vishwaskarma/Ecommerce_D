import React from 'react';
import Image from 'next/image';

// Mock product data - in a real app you'd fetch this from your database
const getProductData = (category, id) => {
  const products = {
    watches: [
      {
        id: 1,
        title: "Rolex Submariner",
        description: "The iconic diving watch with automatic movement and 300m water resistance.",
        price: 8999,
        images: [
          "/images/watch-1.jpg",
          "/images/watch-2.jpg",
          "/images/watch-3.jpg"
        ],
        specifications: {
          movement: "Automatic",
          caseMaterial: "Oystersteel",
          waterResistance: "300m",
          powerReserve: "70 hours"
        }
      }
    ],
    clothing: [
      {
        id: 1,
        title: "Premium Cashmere Coat",
        description: "Handwoven cashmere coat for ultimate comfort and style.",
        price: 599,
        images: [
          "/images/coat-1.jpg",
          "/images/coat-2.jpg",
          "/images/coat-3.jpg"
        ],
        specifications: {
          material: "100% Cashmere",
          origin: "Scotland",
          care: "Dry clean only"
        }
      }
    ]
  };

  return products[category]?.find(p => p.id === parseInt(id)) || null;
};

export default function ProductDetail({ params }) {
  const { category, id } = params;
  const product = getProductData(category, id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {product.images.slice(1).map((img, i) => (
              <div key={i} className="relative aspect-square bg-gray-100 rounded-md overflow-hidden">
                <Image
                  src={img}
                  alt={`${product.title} ${i + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <div className="text-2xl font-semibold text-amber-600 mb-4">${product.price.toLocaleString()}</div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Specifications</h2>
            <ul className="space-y-1">
              {Object.entries(product.specifications).map(([key, value]) => (
                <li key={key} className="flex">
                  <span className="font-medium w-40 capitalize">{key}:</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex space-x-4">
            <div className="flex items-center border rounded-md overflow-hidden">
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200">-</button>
              <span className="px-4">1</span>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200">+</button>
            </div>
            <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-md transition-colors">
              Add to Cart
            </button>
          </div>

          <div className="mt-6 pt-6 border-t">
            <div className="flex items-center space-x-2 text-gray-600">
              <span>Free shipping</span>
              <span>•</span>
              <span>30-day returns</span>
              <span>•</span>
              <span>Secure checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You may also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Map through related products here */}
        </div>
      </div>
    </div>
  );
}