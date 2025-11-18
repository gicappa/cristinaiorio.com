import React from 'react';
import { SectionProps } from '../types.js'; // Added .js extension
import { AppConfig } from '../constants.js'; // Added .js extension

const BioSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className={`py-16 md:py-20 bg-white px-4 sm:px-6 lg:px-8`}>
      <div className="container mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center text-${AppConfig.colors.textPrimary} mb-12`}>
          Biografia e Formazione
        </h2>

        <div className="max-w-3xl mx-auto text-lg text-slate-700 space-y-6">
          <p>
            Mi chiamo Cristina Iorio e sono psicologa e psicoterapeuta. Da oltre vent’anni accompagno le persone nei loro percorsi di cambiamento, crescita e consapevolezza.
          </p>
          <p>
            Credo che ognuno possieda dentro di sé le risorse per affrontare anche le esperienze più complesse. Il mio compito è offrire uno spazio di ascolto autentico, accogliente, in cui sentirsi visti e riconosciuti, uno spazio dove poter esplorare la propria storia, trovare nuovi significati e ricontattare ciò che nutre e sostiene.
          </p>
          <p>
            Costruisco insieme alla persona un'alleanza terapeutica basata sulla fiducia, sulla presenza e sul rispetto, cuore vivo di ogni percorso.
          </p>
          
          <div className={`bg-${AppConfig.colors.primaryBgSoft} p-6 rounded-lg border-l-4 border-${AppConfig.colors.primary}`}>
            <h3 className={`text-2xl font-semibold text-${AppConfig.colors.textPrimary} mb-4`}>Formazione e Qualifiche</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-600">              
              <li><strong>Laurea in Psicologia Clinica e di Comunità</strong> - Università degli Studi di Torino</li>
              <li><strong>Specializzazione in Psicoterapia a indirizzo psicodinamico</strong> - Istituto Alfred Adler di Milano</li>
              <li><strong>Iscritta all'Ordine degli Psicologi della Lombardia</strong> dal 2001 - n. 03/6316</li>
              <li><strong>Abilitata all'esercizio della psicoterapia</strong></li>
              <li><strong>EMDR</strong> (Eye Movement Desensitization and Reprocessing) per il trattamento dei traumi</li>
              <li><strong>Mindfulness clinica</strong>, come strumento di consapevolezza e regolazione emotiva</li>
            </ul>
          </div>
          
          <div className="mt-8">
            <h3 className={`text-2xl font-semibold text-${AppConfig.colors.textPrimary} mb-4`}>Esperienze Professionali e Aree di Approfondimento</h3>
            <p className="mb-2">Ho maturato esperienza sia in ambito pubblico che privato, lavorando con adulti, adolescenti e famiglie.
            Per diversi anni ho collaborato con:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li><strong>i Consultori Familiari dell'ASL di Gallarate e Sesto Calende</strong> come consulente psicologa</li>
              <li><strong>i Servizi Minori e Famiglie dei Comuni del Distretto di Gallarate</strong></li>
              <li><strong>il Gruppo TeMA - Gruppo Guida Multidisciplinare</strong>, di cui sono stata membro fondatore, per progetti di prevenzione e recupero rivolti a minori vittime di abuso</li>
            </ul>
          
            <p className="mt-8">
              Oggi lavoro come <strong>libera professionista</strong> nel mio studio a Gallarate e presso il poliambulatorio Centro Baroncini di Sesto Calende. Sono attiva anche come <strong>formatrice e supervisore</strong> per operatori dei settori psico-socio-educativo.
            </p>
            
            <h3>Uno sguardo in avanti</h3>
            <p className="mt-8">
              La <strong>formazione continua</strong> è una parte essenziale del mio modo di essere terapeuta.
              Credo nel valore di uno sguardo sempre aggiornato, capace di coniugare esperienza clinica e conoscenze scientifiche, professionalità e umanità.            
            </p>
          </div>
          <p className={`brand-claim text-center text-2xl text-${AppConfig.colors.primary} mt-10`}>{AppConfig.claim}</p>
        </div>
      </div>
    </section>
  );
};
export default BioSection;
