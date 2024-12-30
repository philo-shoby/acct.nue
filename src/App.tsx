import React from 'react';
import { ArrowUpCircle } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-[#b063ff] text-white p-2 rounded-full shadow-lg hover:bg-[#6c2cac] transition-colors"
      >
        <ArrowUpCircle className="h-8 w-8" />
      </button>
    </div>
  );
}

export default App;