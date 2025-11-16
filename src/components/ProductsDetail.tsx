// src/components/ProductsDetail.tsx

import React from 'react';
import { Camera, Crosshair, Radio, Battery, Gauge, Shield, Layers, Zap } from 'lucide-react';

const ProductsDetail: React.FC = () => {
  const products = [
    {
      id: 'surveillance',
      title: 'Surveillance Drones',
      subtitle: 'High-Altitude Reconnaissance Systems',
      description: 'Advanced surveillance platforms designed for long-range intelligence gathering and real-time monitoring operations.',
      features: [
        { icon: <Camera size={20} />, text: '4K Ultra HD camera with 30x optical zoom' },
        { icon: <Radio size={20} />, text: 'Secure encrypted data transmission up to 50km' },
        { icon: <Battery size={20} />, text: 'Flight time: 8-12 hours continuous operation' },
        { icon: <Gauge size={20} />, text: 'Operating altitude: up to 6,000 meters' },
      ],
      specs: [
        { label: 'Max Speed', value: '120 km/h' },
        { label: 'Payload', value: '5 kg' },
        { label: 'Range', value: '50 km' },
        { label: 'Endurance', value: '12 hours' },
      ],
    },
    {
      id: 'combat',
      title: 'Combat UAVs',
      subtitle: 'Tactical Strike Capabilities',
      description: 'Military-grade unmanned combat aerial vehicles engineered for precision strikes and tactical superiority in hostile environments.',
      features: [
        { icon: <Crosshair size={20} />, text: 'Precision-guided munitions delivery system' },
        { icon: <Shield size={20} />, text: 'Advanced threat detection and countermeasures' },
        { icon: <Zap size={20} />, text: 'Rapid deployment within 5 minutes' },
        { icon: <Radio size={20} />, text: 'Beyond-line-of-sight control capability' },
      ],
      specs: [
        { label: 'Max Speed', value: '180 km/h' },
        { label: 'Payload', value: '15 kg' },
        { label: 'Range', value: '100 km' },
        { label: 'Endurance', value: '6 hours' },
      ],
    },
    {
      id: 'swarm',
      title: 'Swarm Systems',
      subtitle: 'Coordinated Multi-Drone Operations',
      description: 'Revolutionary swarm technology enabling coordinated operations of multiple drones for enhanced area coverage and tactical effectiveness.',
      features: [
        { icon: <Layers size={20} />, text: 'Simultaneous control of up to 20 units' },
        { icon: <Radio size={20} />, text: 'Mesh network communication protocol' },
        { icon: <Gauge size={20} />, text: 'AI-powered autonomous coordination' },
        { icon: <Shield size={20} />, text: 'Redundant systems for mission continuity' },
      ],
      specs: [
        { label: 'Units', value: 'Up to 20' },
        { label: 'Coverage', value: '100 km²' },
        { label: 'Coordination', value: 'Real-time' },
        { label: 'Deployment', value: '< 10 min' },
      ],
    },
  ];

  return (
    <section id="products-detail" className="py-20 bg-dark relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <span className="text-primary font-semibold font-inter">Our Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Military-Grade <span className="text-primary">UAV Systems</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-inter">
            Engineered for excellence, designed for dominance
          </p>
        </div>

        {/* Products */}
        <div className="space-y-20">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`grid lg:grid-cols-2 gap-12 items-center animate-slide-up ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-4">
                  <span className="text-primary text-sm font-semibold font-inter">{product.subtitle}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
                  {product.title}
                </h3>
                
                <p className="text-gray-300 text-lg mb-8 font-inter leading-relaxed">
                  {product.description}
                </p>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="bg-primary/10 p-2 rounded-lg mt-1">
                        <div className="text-primary">{feature.icon}</div>
                      </div>
                      <p className="text-gray-300 font-inter flex-1">{feature.text}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="bg-primary hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 text-center"
                  >
                    Request Quote
                  </a>
                  <a
                    href="#contact"
                    className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 text-center"
                  >
                    Technical Specs
                  </a>
                </div>
              </div>

              {/* Specs Card */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-charcoal border border-charcoal-light rounded-2xl p-8">
                  <h4 className="text-xl font-bold mb-6 font-poppins">Technical Specifications</h4>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="text-center p-4 bg-dark rounded-lg border border-charcoal-light hover:border-primary/50 transition-colors">
                        <div className="text-3xl font-bold text-primary mb-2 font-poppins">
                          {spec.value}
                        </div>
                        <div className="text-sm text-gray-400 font-inter">
                          {spec.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Additional Info */}
                  <div className="mt-8 pt-8 border-t border-charcoal-light">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-400 font-inter">Certification</span>
                      <span className="text-white font-semibold font-inter">ISO 9001:2015</span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-400 font-inter">Delivery Time</span>
                      <span className="text-white font-semibold font-inter">8-12 weeks</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 font-inter">Warranty</span>
                      <span className="text-white font-semibold font-inter">3 years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsDetail;