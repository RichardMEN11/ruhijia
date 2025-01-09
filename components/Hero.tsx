'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
// Import your local images
import community1 from '@/public/images/community1.jpg';
import community2 from '@/public/images/community2.jpg';
import community3 from '@/public/images/community3.jpg';
import community4 from '@/public/images/community4.jpg';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: community1,
      title: 'Making a Difference Together',
      subtitle:
        'Join us in building stronger communities and brighter futures.',
    },
    {
      image: community2,
      title: 'Empowering Communities',
      subtitle: 'Creating lasting change through collective action.',
    },
    {
      image: community3,
      title: 'Building Tomorrow',
      subtitle: 'Investing in our future through community initiatives.',
    },
    {
      image: community4,
      title: 'United in Purpose',
      subtitle: 'Working together to create meaningful impact.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt="Community impact"
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1
                className={`text-4xl md:text-6xl font-bold mb-4 transition-all duration-700 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                {slide.title}
              </h1>
              <p
                className={`text-xl md:text-2xl mb-8 transition-all duration-700 delay-100 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                {slide.subtitle}
              </p>
              <button
                className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-700 delay-200 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                Get Involved
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
