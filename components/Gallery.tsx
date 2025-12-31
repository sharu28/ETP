import React from 'react';
import LocalImage from './LocalImage.tsx';
import { IMAGES } from '../constants.tsx';

const Gallery: React.FC = () => {
  const images = IMAGES.gallery;

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Escape Experience</h2>
          <p className="text-gray-600">A sneak peek at what your 9 days in paradise will look like.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`${img.span} relative group overflow-hidden rounded-2xl h-64 md:h-80 shadow-md hover:shadow-xl transition-all duration-500 bg-gray-100`}
            >
              <LocalImage
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none">
                <p className="text-white font-bold text-lg">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;