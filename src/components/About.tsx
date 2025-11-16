// src/components/About.tsx

import React from 'react';
import { Shield, Cpu, Radio } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <span className="text-primary font-semibold font-inter">About VyomGarud</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 leading-tight">
              Redefining Aerial <span className="text-primary">Superiority</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 font-inter leading-relaxed">
              VyomGarud specializes in developing cutting-edge unmanned aerial vehicle (UAV) systems 
              engineered for defense, surveillance, and critical mission operations. Our drones combine 
              military-grade durability with advanced AI-powered autonomy.
            </p>
            
            <p className="text-gray-400 mb-8 font-inter leading-relaxed">
              With a commitment to precision engineering and innovation, we deliver solutions that 
              operate in the harshest environments while maintaining uncompromising reliability. 
              Our systems are trusted by defense organizations and security agencies worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#capabilities"
                className="bg-primary hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 text-center"
              >
                View Capabilities
              </a>
              <a
                href="#contact"
                className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 text-center"
              >
                Request Demo
              </a>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-dark border border-charcoal-light p-6 rounded-lg hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Shield className="text-primary" size={28} />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2 font-poppins">Military-Grade Build</h3>
                  <p className="text-gray-400 font-inter">
                    Ruggedized components designed to withstand extreme conditions and hostile environments.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-dark border border-charcoal-light p-6 rounded-lg hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Cpu className="text-primary" size={28} />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2 font-poppins">AI-Powered Autonomy</h3>
                  <p className="text-gray-400 font-inter">
                    Advanced machine learning algorithms for intelligent navigation and decision-making.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-dark border border-charcoal-light p-6 rounded-lg hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Radio className="text-primary" size={28} />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2 font-poppins">Secure Communications</h3>
                  <p className="text-gray-400 font-inter">
                    Military-grade encryption ensures secure, real-time data transmission over long ranges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;