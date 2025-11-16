// src/components/Capabilities.tsx

import React from 'react';
import { Target, Shield, Zap, Users } from 'lucide-react';
import { Capability } from '../types';

const Capabilities: React.FC = () => {
  const capabilities: Capability[] = [
    {
      title: 'Autonomous Navigation',
      description: 'Advanced AI-powered pathfinding and obstacle avoidance systems enable autonomous flight in complex environments with real-time route optimization.',
      icon: <Target className="w-10 h-10" />,
    },
    {
      title: 'Military-Grade Systems',
      description: 'Ruggedized hardware and weatherproof construction designed for harsh operational conditions with redundant safety systems.',
      icon: <Shield className="w-10 h-10" />,
    },
    {
      title: 'Real-Time Intelligence',
      description: 'High-resolution surveillance cameras with thermal imaging and instant encrypted data transmission for time-critical operations.',
      icon: <Zap className="w-10 h-10" />,
    },
    {
      title: 'Swarm Technology',
      description: 'Coordinated multi-drone operations with distributed intelligence for enhanced area coverage and mission effectiveness.',
      icon: <Users className="w-10 h-10" />,
    },
  ];

  return (
    <section id="capabilities" className="py-20 bg-dark relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <span className="text-primary font-semibold font-inter">Our Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Advanced <span className="text-primary">Technology</span> Suite
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-inter">
            Cutting-edge features engineered for mission-critical operations
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group bg-charcoal border border-charcoal-light p-8 rounded-lg hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <div className="text-primary">{capability.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 font-poppins group-hover:text-primary transition-colors">
                {capability.title}
              </h3>
              <p className="text-gray-400 font-inter leading-relaxed">
                {capability.description}
              </p>

              {/* Hover Line */}
              <div className="w-0 h-1 bg-primary mt-6 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <a
            href="#contact"
            className="inline-block bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/30"
          >
            Request Technical Specifications
          </a>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;