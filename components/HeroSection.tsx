
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
          {AppConfig.profession}
        </p>
        
        <p className={`brand-claim text-3xl md:text-4xl text-${AppConfig.colors.primary} my-6`}>
          "{AppConfig.claim}"
        </p>

        <p className={`max-w-2xl mx-auto text-lg text-${AppConfig.colors.textSecondary} mb-8`}>
          Ho sempre pensato che ogni essere umano custodisca in sé un movimento profondo, a volte silenzioso, altre volte impetuoso. Un movimento fatto di emozioni, pensieri, memorie, sogni.È questo movimento interiore che mi ha spinta, anni fa, a scegliere la psicologia e che mi guida nel mio lavoro, oggi e in ogni momento.
          Lavoro con persone che attraversano fasi di vita complesse, momenti in cui si fa fatica a capire, a scegliere, a reggere il peso di ciò che accade.Persone che sentono il bisogno di ritrovarsi, riconoscersi, vivere le trasformazioni.O semplicemente di fermarsi e tornare a respirare.
          Nel mio studio offro uno spazio sicuro, umano, dove accogliere con rispetto ciò che c’è, senza giudizio.Credo in una terapia che non impone, ma accompagna. Che non forza, ma mostra. Che aiuta a fare pace con le parti ferite e a dare fiducia a quelle vitali.
          Non sempre possiamo cambiare ciò che ci è accaduto ma possiamo cambiare il modo in cui lo abitiamo.

        </p>
        <p className={`max-w-3xl mx-auto text-sm text-slate-500 mb-8 hidden`}>
          Parole chiave per trovarmi: {AppConfig.seoKeywords.join(', ')}.
        </p>
        <a
          href="#contatti"
          className={`bg-${AppConfig.colors.primary} text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-${AppConfig.colors.primaryHover} transition duration-300 text-lg`}
        >
          Contattami
        </a>
      </div>
    </section>
  );
};

export default HeroSection;