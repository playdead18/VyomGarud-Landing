// src/components/Testimonials.tsx

import React from 'react';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Col. Rajesh Kumar',
      role: 'Operations Director',
      company: 'Defense Research Organization',
      content: 'VyomGarud systems have exceeded our expectations in field operations. The reliability and precision are unmatched in critical surveillance missions.',
      rating: 5,
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Chief Technology Officer',
      company: 'National Security Agency',
      content: 'The autonomous capabilities and real-time intelligence gathering have revolutionized our tactical operations. Outstanding engineering.',
      rating: 5,
    },
    {
      name: 'Maj. Gen. Vikram Singh',
      role: 'Strategic Command',
      company: 'Armed Forces',
      content: 'Deployment speed and mission success rate with VyomGarud UAVs are exceptional. A game-changer for modern defense strategies.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <span className="text-primary font-semibold font-inter">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Trusted by <span className="text-primary">Defense Leaders</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-inter">
            Real feedback from organizations that rely on VyomGarud systems
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-charcoal border border-charcoal-light p-8 rounded-lg hover:border-primary/50 transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="text-primary/30 group-hover:text-primary/50 transition-colors" size={40} />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-primary fill-primary" size={16} />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 font-inter leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-charcoal-light">
                <div className="font-semibold text-white font-poppins">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-400 font-inter mt-1">
                  {testimonial.role}
                </div>
                <div className="text-sm text-primary font-inter">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-400 font-inter">Missions Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-gray-400 font-inter">Countries Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">99.8%</div>
            <div className="text-gray-400 font-inter">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-400 font-inter">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;