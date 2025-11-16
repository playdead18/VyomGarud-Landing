// src/components/CTABanner.tsx

import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const CTABanner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-charcoal border-2 border-primary/30 rounded-2xl p-12 md:p-16 text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-primary/20 border border-primary rounded-full mb-6">
            <span className="text-primary font-semibold font-inter">Ready to Deploy?</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 leading-tight">
            Transform Your <span className="text-primary">Defense Operations</span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto font-inter">
            Join leading defense organizations worldwide. Schedule a consultation with our experts 
            to discover how VyomGarud can enhance your operational capabilities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg shadow-primary/30"
            >
              Schedule Demo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="tel:+918881444693"
              className="group bg-charcoal-light hover:bg-charcoal border-2 border-primary text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 flex items-center"
            >
              <Phone className="mr-2" size={20} />
              +91 8881444693
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-12 border-t border-charcoal-light">
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-inter">ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-inter">Military-Grade Security</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-inter">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;