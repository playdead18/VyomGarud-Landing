// src/App.tsx

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Highlights from './components/Highlights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <Highlights />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;