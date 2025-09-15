'use client';

import Image from 'next/image';
import { Dancing_Script } from 'next/font/google';
import patek from '../../../public/Brand/patek.jpg';
import richardMille from '../../../public/Brand/Richard.png';
import audemars from '../../../public/Brand/audamars.png';
import vacheron from '../../../public/Brand/vacheron.png';
import lange from '../../../public/Brand/alnge.png';

// Initialize Dancing Script font
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
  weight: ['400', '700'], // Include weights you need
});

const brands = [
  {
    name: 'Patek Philippe',
    image: patek,
    description: 'Timeless elegance and unmatched complications. Creator of the $31M Grandmaster Chime.',
  },
  {
    name: 'Richard Mille',
    image: richardMille,
    description: 'Avant-garde design meets extreme engineering. Known for ultra-light, high-tech watches.',
  },
  {
    name: 'Audemars Piguet',
    image: audemars,
    description: 'Inventor of the Royal Oak. Bold, iconic, and revolutionary in luxury sports watches.',
  },
  {
    name: 'Vacheron Constantin',
    image: vacheron,
    description: 'Oldest Swiss watchmaker. Creator of the most complicated watch ever made.',
  },
  {
    name: 'A. Lange & Söhne',
    image: lange,
    description: 'German precision and poetic craftsmanship. Revered for its mechanical artistry.',
  },
];

export default function OurBrand() {
  return (
    <div className={`my-20 px-6 ${dancingScript.variable}`}>
      <h2
        className="text-4xl font-semibold text-center mb-12 text-gray-900 tracking-wide"
        style={{ fontFamily: 'var(--font-dancing-script)' }}
      >
        🏆 Our Brand Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-4 text-center"
          >
            <div className="w-full h-[200px] flex items-center justify-center overflow-hidden mb-4">
              <Image
                src={brand.image}
                alt={brand.name}
                className="object-contain max-h-full"
              />
            </div>
            <h3
              className="text-xl font-semibold text-gray-800 mb-2"
              style={{ fontFamily: 'var(--font-dancing-script)' }}
            >
              {brand.name}
            </h3>
            <p className="text-sm text-gray-600">{brand.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}