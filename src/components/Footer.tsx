// src/components/Footer.tsx

import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="text-2xl font-bold font-poppins mb-4 inline-block">
              <span className="text-white">Vyom</span>
              <span className="text-primary">Garud</span>
            </a>
            <p className="text-gray-400 mb-6 font-inter max-w-md">
              Advanced UAV systems engineered for defense, surveillance, and critical missions. 
              Precision engineering meets autonomous intelligence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark hover:bg-primary/20 p-3 rounded-lg transition-colors group"
              >
                <Twitter className="text-gray-400 group-hover:text-primary transition-colors" size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark hover:bg-primary/20 p-3 rounded-lg transition-colors group"
              >
                <Linkedin className="text-gray-400 group-hover:text-primary transition-colors" size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark hover:bg-primary/20 p-3 rounded-lg transition-colors group"
              >
                <Github className="text-gray-400 group-hover:text-primary transition-colors" size={20} />
              </a>
              <a
                href="mailto:info@vyomgarud.com"
                className="bg-dark hover:bg-primary/20 p-3 rounded-lg transition-colors group"
              >
                <Mail className="text-gray-400 group-hover:text-primary transition-colors" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-3 font-inter">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#capabilities" className="text-gray-400 hover:text-primary transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Services</h3>
            <ul className="space-y-3 font-inter">
              <li>
                <a href="#capabilities" className="text-gray-400 hover:text-primary transition-colors">
                  Defense Systems
                </a>
              </li>
              <li>
                <a href="#capabilities" className="text-gray-400 hover:text-primary transition-colors">
                  Surveillance
                </a>
              </li>
              <li>
                <a href="#capabilities" className="text-gray-400 hover:text-primary transition-colors">
                  Training & Support
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-charcoal-light pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-inter mb-4 md:mb-0">
            © {currentYear} VyomGarud. All rights reserved. | Designed for excellence.
          </p>
          <div className="flex space-x-6 text-sm font-inter">
            <a href="#home" className="text-gray-400 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#home" className="text-gray-400 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#home" className="text-gray-400 hover:text-primary transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;