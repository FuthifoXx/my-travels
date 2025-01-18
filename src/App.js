import React from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Tours from './components/Tours';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />

      <Services />
      <Tours />
      <Footer />
    </React.Fragment>
  );
}

export default App;
