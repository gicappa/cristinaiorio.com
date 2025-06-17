import React from 'react';
import { SectionProps } from '../types.js'; // Added .js extension
import { AppConfig } from '../constants.js'; // Added .js extension

const BioSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className={`py-16 md:py-20 bg-white px-4 sm:px-6 lg:px-8`}>
      <div className="container mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center text-${AppConfig.colors.textPrimary} mb-12`}>
          Chi Sono: Biografia e Formazione
        </h2>
        <div className="max-w-3xl mx-auto text-lg text-slate-700 space-y-6">
          <p>
            Sono Cristina Iorio, psicologa e psicoterapeuta con una profonda passione per il benessere mentale e la crescita personale. Il mio percorso professionale è guidato dalla convinzione che ogni individuo possieda le risorse interiori per superare le difficoltà e vivere una vita più piena e significativa.
          </p>
          <p>
            Il mio approccio è empatico, accogliente e non giudicante. Credo fermamente nell'importanza di creare un'alleanza terapeutica solida, basata sulla fiducia e sul rispetto reciproco, come fondamento per un percorso di cambiamento efficace.
          </p>
          
          <div className={`bg-${AppConfig.colors.primaryBgSoft} p-6 rounded-lg border-l-4 border-${AppConfig.colors.primary}`}>
            <h3 className={`text-2xl font-semibold text-${AppConfig.colors.textPrimary} mb-4`}>Formazione e Qualifiche</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li><strong>Laurea in Psicologia:</strong> [Inserire nome Università e anno di conseguimento]</li>
              <li><strong>Specializzazione in Psicoterapia:</strong> [Inserire nome Scuola di Specializzazione, indirizzo e anno di conseguimento]</li>
              <li><strong>Abilitazione Professionale:</strong> [Inserire dettagli sull'abilitazione]</li>
              <li><strong>Iscrizione Albo degli Psicologi:</strong> [Inserire numero iscrizione e Ordine Regionale, es: Ordine degli Psicologi della Lombardia, n. XXXXX]</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className={`text-2xl font-semibold text-${AppConfig.colors.textPrimary} mb-4`}>Esperienze Professionali e Aree di Approfondimento</h3>
            <p className="mb-2">
              Nel corso della mia carriera, ho maturato esperienza in [descrivere brevemente i contesti, es: ambito clinico privato, collaborazioni con enti, ecc.]. 
              Le mie aree di maggiore interesse e approfondimento includono:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>[Area di approfondimento 1, es: Disturbi d'ansia e panico]</li>
              <li>[Area di approfondimento 2, es: Dinamiche relazionali e di coppia]</li>
              <li>[Area di approfondimento 3, es: Tecniche di rilassamento e mindfulness]</li>
              <li>[Altre eventuali esperienze o specializzazioni]</li>
            </ul>
          </div>
          
          <p className="mt-8">
            Considero la formazione continua un elemento imprescindibile della mia professione, per offrire interventi sempre aggiornati e basati sulle più recenti evidenze scientifiche.
          </p>
          <p className={`brand-claim text-center text-2xl text-${AppConfig.colors.primary} mt-10`}>
            "{AppConfig.claim}"
          </p>
        </div>
      </div>
    </section>
  );
};

export default BioSection;