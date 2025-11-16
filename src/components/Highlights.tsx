// src/components/Highlights.tsx

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Highlights: React.FC = () => {
  const highlights: string[] = [
    'ISO 9001:2015 certified manufacturing processes ensuring consistent quality',
    'Operating range exceeding 50km with AES-256 encrypted communications',
    'Deployment ready in under 5 minutes with modular payload systems',
  ];

  return (
    <section className="py-20 bg-charcoal relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Visual */}
          <div className="relative animate-slide-up">
            <div className="bg-gradient-to-br from-primary/20 to-transparent p-8 rounded-2xl border border-primary/30">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold">V</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-inter">VyomGarud Systems</div>
                    <div className="text-xl font-bold font-poppins">Performance Excellence</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center p-4 bg-dark/50 rounded-lg border border-charcoal-light">
                    <div className="text-3xl font-bold text-primary mb-1">50+</div>
                    <div className="text-xs text-gray-400 font-inter">km Range</div>
                  </div>
                  <div className="text-center p-4 bg-dark/50 rounded-lg border border-charcoal-light">
                    <div className="text-3xl font-bold text-primary mb-1">4K</div>
                    <div className="text-xs text-gray-400 font-inter">Video</div>
                  </div>
                  <div className="text-center p-4 bg-dark/50 rounded-lg border border-charcoal-light">
                    <div className="text-3xl font-bold text-primary mb-1">5min</div>
                    <div className="text-xs text-gray-400 font-inter">Deploy</div>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300 font-inter">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Military-Grade Encryption</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 font-inter">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>All-Weather Operation</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 font-inter">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Real-Time Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Highlights */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <span className="text-primary font-semibold font-inter">Key Highlights</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 leading-tight">
              Built for <span className="text-primary">Mission Success</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 font-inter">
              Our UAV systems are engineered to exceed the most demanding operational requirements 
              with proven reliability in real-world deployments.
            </p>

            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 group animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-primary group-hover:scale-110 transition-transform" size={24} />
                  </div>
                  <p className="text-gray-300 font-inter leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-primary hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 text-center"
              >
                Schedule Consultation
              </a>
              <a
                href="#capabilities"
                className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 text-center"
              >
                Technical Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;