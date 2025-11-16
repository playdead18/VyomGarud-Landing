// src/components/Hero.tsx

import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"></div>

      {/* Animated Circles */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-charcoal border border-primary/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm text-gray-300 font-inter">Next-Generation UAV Systems</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-poppins mb-6 leading-tight">
            <span className="text-white">Vyom</span>
            <span className="text-primary">Garud</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto font-inter">
            Precision Engineering Meets Autonomous Intelligence
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-inter">
            Military-grade UAV systems designed for critical missions. Advanced autonomy, unmatched reliability, superior performance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#capabilities"
              className="group bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg shadow-primary/30"
            >
              Explore Capabilities
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#about"
              className="group bg-charcoal hover:bg-charcoal-light border border-primary/30 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 flex items-center"
            >
              <Play className="mr-2" size={20} />
              Watch Demo
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-400 font-inter">km Range</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-400 font-inter">Operations</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-gray-400 font-inter">Reliability</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-primary mb-2">ISO</div>
              <div className="text-gray-400 font-inter">Certified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;