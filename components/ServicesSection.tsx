
import React from 'react';
import { SectionProps } from '../types.js'; // Added .js extension
import { AppConfig } from '../constants.js'; // Added .js extension
import { CheckCircleIcon } from './icons.js'; // Added .js extension

const services = [
  {
    title: "Consulenza e Supporto Psicologico Individuale",
    description: "Percorsi personalizzati per adulti e adolescenti volti a comprendere e superare disagi emotivi, relazionali o esistenziali.",
    keywords: ["terapia individuale", "supporto psicologico"]
  },
  {
    title: "Gestione dell'Ansia e dello Stress",
    description: "Strategie e tecniche per riconoscere, affrontare e ridurre l'impatto di ansia, attacchi di panico e stress cronico sulla vita quotidiana.",
    keywords: ["ansia", "gestione dello stress"]
  },
  {
    title: "Trattamento dei Disturbi dell'Umore",
    description: "Supporto specializzato per affrontare depressione, distimia e altre difficoltà legate all'umore, promuovendo il recupero del benessere.",
    keywords: ["depressione", "disturbi dell'umore"]
  },
  {
    title: "Sostegno alla Crescita Personale",
    description: "Percorsi mirati a sviluppare l'autostima, migliorare le capacità comunicative e relazionali, e raggiungere i propri obiettivi personali e professionali.",
    keywords: ["crescita personale", "autostima"]
  },
  {
    title: "Supporto nelle Fasi di Cambiamento",
    description: "Accompagnamento psicologico durante periodi di transizione significativi come lutti, separazioni, cambiamenti lavorativi o nuove fasi della vita.",
    keywords: ["cambiamento", "lutto", "separazione"]
  },
  {
    title: "Psicoterapia",
    description: "Interventi psicoterapeutici mirati per affrontare problematiche più profonde e strutturate, utilizzando approcci basati sull'evidenza scientifica.",
    keywords: ["psicoterapeuta Gallarate", "psicoterapia"]
  }
];

const ServicesSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className={`py-16 md:py-20 bg-slate-100 px-4 sm:px-6 lg:px-8`}>
      <div className="container mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center text-${AppConfig.colors.textPrimary} mb-4`}>
          Servizi e Aree di Competenza
        </h2>
        <p className={`text-center text-lg text-${AppConfig.colors.textSecondary} mb-12 max-w-2xl mx-auto`}>
          Offro un approccio empatico e professionale per aiutarti a navigare le sfide della vita e a coltivare il tuo benessere mentale.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className={`w-8 h-8 text-${AppConfig.colors.accent} mr-3`} />
                <h3 className={`text-xl font-semibold text-${AppConfig.colors.textPrimary}`}>{service.title}</h3>
              </div>
              <p className={`text-${AppConfig.colors.textSecondary} flex-grow`}>{service.description}</p>
              <div className="mt-4">
                {service.keywords.map(keyword => (
                  <span key={keyword} className={`inline-block bg-${AppConfig.colors.accentBgSoft} text-${AppConfig.colors.accentTextSoft} text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full`}>
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;