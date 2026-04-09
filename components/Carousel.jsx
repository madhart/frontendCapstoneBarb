'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Default carousel images from public/carousel folder
const DEFAULT_CAROUSEL_IMAGES = [
  { src: '/carousel/Fatbike Winter.jpg', alt: 'Fatbike Winter', objectPosition: 'center 30%' },
  { src: '/carousel/Canada Games Cycling (27).jpg', alt: 'Canada Games Cycling' },
  { src: '/carousel/Burgeo Highway Early Morning.jpg', alt: 'Burgeo Highway Early Morning', objectPosition: 'center 35%' },
  { src: '/carousel/540467308_1403152411731072_1483248639798182605_n.jpg', alt: 'Cycling Event' },
  { src: '/carousel/IMG_7406.jpeg', alt: 'Cycling Experience', objectPosition: 'center 30%' },
  { src: '/carousel/Pouch Cove Classic 1.jpg', alt: 'Pouch Cove Classic' },
];

export default function Carousel({ 
  title, 
  description, 
  images = DEFAULT_CAROUSEL_IMAGES,
  autoScroll = true,
  scrollInterval = 5000 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll through images
  useEffect(() => {
    if (!autoScroll || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, scrollInterval);

    return () => clearInterval(interval);
  }, [autoScroll, scrollInterval, images.length]);

  if (images.length === 0) {
    return (
      <section className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-lg text-gray-600">{description}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full relative overflow-hidden">
      {/* Image Carousel */}
      <div className="relative w-full h-[400px] md:h-[500px] bg-gray-300 overflow-hidden">
        {/* Images */}
        {images.map((image, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt || `Slide ${idx + 1}`}
              fill
              className="object-cover"
              style={{ objectPosition: image.objectPosition || 'center' }}
              priority={idx === 0}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Text overlay */}
        {title && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{title}</h1>
            {description && <p className="text-lg md:text-xl text-white max-w-3xl drop-shadow-md">{description}</p>}
          </div>
        )}

        {/* Navigation dots */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-3 w-3 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Previous button */}
        {images.length > 1 && (
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/50 hover:bg-white/75 text-gray-900 p-3 rounded-full transition"
            aria-label="Previous image"
          >
            ←
          </button>
        )}

        {/* Next button */}
        {images.length > 1 && (
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/50 hover:bg-white/75 text-gray-900 p-3 rounded-full transition"
            aria-label="Next image"
          >
            →
          </button>
        )}
      </div>
    </section>
  );
}
