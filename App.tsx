
import React from 'react';
import Navbar from './components/Navbar.js'; // Added .js extension
import HeroSection from './components/HeroSection.js'; // Added .js extension
import ServicesSection from './components/ServicesSection.js'; // Added .js extension
import BioSection from './components/BioSection.js'; // Added .js extension
import ContactSection from './components/ContactSection.js'; // Added .js extension
// import TestimonialsSection from './components/TestimonialsSection'; // Removed
// import BlogSection from './components/BlogSection'; // Removed
import FaqSection from './components/FaqSection.js'; // Added .js extension
import Footer from './components/Footer.js'; // Added .js extension
import { AppConfig } from './constants.js'; // Added .js extension

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar navItems={AppConfig.navLinks} />
      <main className="flex-grow">
        <HeroSection id="home" />
        <ServicesSection id="servizi" />
        <BioSection id="biografia" />
        {/* <TestimonialsSection id="testimonianze" /> Removed */}
        {/* <BlogSection id="blog" /> Removed */}
        <FaqSection id="faq" />
        <ContactSection id="contatti" />
      </main>
      <Footer />
    </div>
  );
};

export default App;