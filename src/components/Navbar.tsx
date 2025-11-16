// src/components/Navbar.tsx

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavItem } from '../types';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let closeTimer: NodeJS.Timeout;

  const handleMouseEnter = (dropdown: string) => {
    clearTimeout(closeTimer);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    closeTimer = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Contact', href: '#contact' },
  ];

  const productItems = [
    { title: 'Surveillance Drones', desc: 'High-altitude reconnaissance systems' },
    { title: 'Combat UAVs', desc: 'Tactical strike capabilities' },
    { title: 'Swarm Systems', desc: 'Coordinated multi-drone operations' },
  ];

  const resourceItems = [
    { title: 'Documentation', desc: 'Technical specifications' },
    { title: 'Case Studies', desc: 'Real-world deployments' },
    { title: 'Webinars', desc: 'Expert training sessions' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold font-poppins">
              <span className="text-white">Vyom</span>
              <span className="text-primary">Garud</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 font-inter font-medium"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-gray-300 hover:text-primary transition-colors duration-300 font-inter font-medium flex items-center">
                  Products
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                
                {activeDropdown === 'products' && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-80 bg-charcoal border border-charcoal-light rounded-lg shadow-2xl p-4 animate-fade-in z-50"
                    onMouseEnter={() => handleMouseEnter('products')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="space-y-3">
                      {productItems.map((item, idx) => (
                        <a
                          key={idx}
                          href="#capabilities"
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-colors"
                        >
                          <div className="font-semibold text-white hover:text-primary transition-colors">
                            {item.title}
                          </div>
                          <div className="text-sm text-gray-400 mt-1">{item.desc}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-gray-300 hover:text-primary transition-colors duration-300 font-inter font-medium flex items-center">
                  Resources
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                
                {activeDropdown === 'resources' && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-80 bg-charcoal border border-charcoal-light rounded-lg shadow-2xl p-4 animate-fade-in z-50"
                    onMouseEnter={() => handleMouseEnter('resources')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="space-y-3">
                      {resourceItems.map((item, idx) => (
                        <a
                          key={idx}
                          href="#contact"
                          className="block p-3 rounded-lg hover:bg-primary/10 transition-colors"
                        >
                          <div className="font-semibold text-white hover:text-primary transition-colors">
                            {item.title}
                          </div>
                          <div className="text-sm text-gray-400 mt-1">{item.desc}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <a
                href="#contact"
                className="bg-primary hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-charcoal border-t border-charcoal-light">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-300 hover:text-primary transition-colors duration-300 font-inter py-2"
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile Products */}
            <div className="border-t border-charcoal-light pt-3 mt-3">
              <div className="text-gray-400 text-sm font-semibold mb-2 font-inter">Products</div>
              {productItems.map((item, idx) => (
                <a
                  key={idx}
                  href="#capabilities"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-300 hover:text-primary transition-colors duration-300 font-inter py-2 pl-4"
                >
                  {item.title}
                </a>
              ))}
            </div>

            {/* Mobile Resources */}
            <div className="border-t border-charcoal-light pt-3 mt-3">
              <div className="text-gray-400 text-sm font-semibold mb-2 font-inter">Resources</div>
              {resourceItems.map((item, idx) => (
                <a
                  key={idx}
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-300 hover:text-primary transition-colors duration-300 font-inter py-2 pl-4"
                >
                  {item.title}
                </a>
              ))}
            </div>
            
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block bg-primary hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold text-center transition-all duration-300 mt-4"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;