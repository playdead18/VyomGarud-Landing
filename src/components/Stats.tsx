// src/components/Stats.tsx

import React from 'react';
import { TrendingUp, Award, Users, Globe } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: '150%',
      label: 'Performance Increase',
      description: 'Compared to conventional systems',
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: '12+',
      label: 'Industry Awards',
      description: 'For innovation and excellence',
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: '50+',
      label: 'Expert Team',
      description: 'Aerospace and defense specialists',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: '30+',
      label: 'Partner Nations',
      description: 'Global defense collaborations',
    },
  ];

  return (
    <section className="py-20 bg-charcoal relative overflow-hidden">
      {/* Diagonal Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute transform rotate-45 -left-20 top-0 w-40 h-full bg-primary"></div>
        <div className="absolute transform rotate-45 -right-20 top-0 w-40 h-full bg-primary"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <div className="text-primary">{stat.icon}</div>
              </div>

              {/* Value */}
              <div className="text-5xl font-bold text-white mb-2 font-poppins group-hover:text-primary transition-colors">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-lg font-semibold text-gray-300 mb-2 font-inter">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-sm text-gray-500 font-inter">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;