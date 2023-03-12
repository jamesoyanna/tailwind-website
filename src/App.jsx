import React from 'react';
import Analytics from './components/Analytics';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
