
import React from 'react';
import Navbar from './components/Navbar.js'; // Added .js extension
import HeroSection from './components/HeroSection.js'; // Added .js extension
import ServicesSection from './components/ServicesSection.js'; // Added .js extension
import BioSection from './components/BioSection.js'; // Added .js extension
import ContactSection from './components/ContactSection.js'; // Added .js extension
import FaqSection from './components/FaqSection.js'; // Added .js extension
import Footer from './components/Footer.js'; // Added .js extension
import { AppConfig } from './constants.js'; // Added .js extension

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#contenuto"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
      >
        Vai al contenuto
      </a>
      <Navbar navItems={AppConfig.navLinks} />
      <main id="contenuto" className="flex-grow">
        <HeroSection id="home" />
        <ServicesSection id="servizi" />
        <BioSection id="biografia" />
        <FaqSection id="faq" />
        <ContactSection id="contatti" />
      </main>
      <Footer />
    </div>
  );
};

export default App;
