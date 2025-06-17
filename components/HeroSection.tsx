
import React from 'react';
import { SectionProps } from '../types.js'; // Added .js extension
import { AppConfig, PlaceholderImageFemaleProfessional } from '../constants.js'; // Added .js extension

const HeroSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className={`bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center`}>
      <div className="container mx-auto">
        {/* 
          IMPORTANT: Ensure the image file 'cristina_iorio_profile.jpg' 
          is placed in the root deployment directory for it to be visible.
          The 'src' below references this path.
        */}
        <img 
          src={PlaceholderImageFemaleProfessional} 
          alt={`Foto ${AppConfig.professionalName}`} 
          className={`rounded-2xl shadow-xl mx-auto h-72 w-72 md:h-96 md:w-96 object-cover mb-8`}
          aria-describedby="photo-caption"
        />
        <p id="photo-caption" className="sr-only">Ritratto di Cristina Iorio</p>
        
        <h1 className={`text-4xl md:text-5xl font-extrabold text-${AppConfig.colors.textPrimary} mb-4`}>
          {AppConfig.professionalName}
        </h1>
        <p className={`text-xl md:text-2xl text-${AppConfig.colors.primary} font-semibold mb-6`}>
          {AppConfig.profession} a Gallarate
        </p>
        
        <p className={`brand-claim text-3xl md:text-4xl text-${AppConfig.colors.primary} my-6`}>
          "{AppConfig.claim}"
        </p>

        {/* <p className={`max-w-2xl mx-auto text-lg text-${AppConfig.colors.textSecondary} mb-8`}>
          Benvenuti nel mio spazio dedicato al benessere psicologico. Offro supporto e consulenza psicologica per affrontare momenti di difficoltà, migliorare la consapevolezza di sé e promuovere una crescita personale autentica. Insieme possiamo esplorare percorsi per ritrovare equilibrio e serenità.
        </p>
        <p className={`max-w-3xl mx-auto text-sm text-slate-500 mb-8`}>
          Parole chiave per trovarmi: {AppConfig.seoKeywords.join(', ')}.
        </p>
        <a
          href="#contatti"
          className={`bg-${AppConfig.colors.primary} text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-${AppConfig.colors.primaryHover} transition duration-300 text-lg`}
        >
          Contattami
        </a> */}
      </div>
    </section>
  );
};

export default HeroSection;