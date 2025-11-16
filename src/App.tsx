// src/App.tsx

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Capabilities from './components/Capabilities';
import ProductsDetail from './components/ProductsDetail';
import Highlights from './components/Highlights';
import ResourcesDetail from './components/ResourcesDetail';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Capabilities />
      <ProductsDetail />
      <Highlights />
      <ResourcesDetail />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;