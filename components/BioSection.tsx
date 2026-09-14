import React from 'react';
import { SectionProps } from '../types.js'; // Added .js extension
import { AppConfig } from '../constants.js'; // Added .js extension
import Section, { SectionHeading, proseClasses } from './Section.js';

const qualifications = [
  <><strong>Laurea in Psicologia Clinica e di Comunità</strong> - Università degli Studi di Torino</>,
  <><strong>Specializzazione in Psicoterapia a indirizzo psicodinamico</strong> - Istituto Alfred Adler di Milano</>,
  <><strong>Iscritta all'Ordine degli Psicologi della Lombardia</strong> dal 2001 - n. 03/6316</>,
  <><strong>Abilitata all'esercizio della psicoterapia</strong></>,
  <><strong>EMDR</strong> (Eye Movement Desensitization and Reprocessing) per il trattamento dei traumi</>,
  <><strong>Mindfulness clinica</strong>, come strumento di consapevolezza e regolazione emotiva</>,
];

const collaborations = [
  <><strong>i Consultori Familiari dell'ASL di Gallarate e Sesto Calende</strong> come consulente psicologa</>,
  <><strong>i Servizi Minori e Famiglie dei Comuni del Distretto di Gallarate</strong></>,
  <><strong>il Gruppo TeMA - Gruppo Guida Multidisciplinare</strong>, di cui sono stata membro fondatore, per progetti di prevenzione e recupero rivolti a minori vittime di abuso</>,
];

/** list-outside gives wrapped bullets a hanging indent instead of tucking them under the marker. */
const listClasses = 'list-disc list-outside space-y-2 pl-5 text-slate-600 marker:text-brand/50';

const subheadingClasses = 'text-2xl font-semibold text-slate-800';

const BioSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <Section id={id} tone="tinted">
      <SectionHeading title="Biografia e Formazione" />

      <div className={`${proseClasses} space-y-6 text-slate-700`}>
        <p>
          Mi chiamo Cristina Iorio e sono psicologa e psicoterapeuta. Da oltre vent’anni accompagno le persone nei loro percorsi di cambiamento, crescita e consapevolezza.
        </p>
        <p>
          Credo che ognuno possieda dentro di sé le risorse per affrontare anche le esperienze più complesse. Il mio compito è offrire uno spazio di ascolto autentico, accogliente, in cui sentirsi visti e riconosciuti, uno spazio dove poter esplorare la propria storia, trovare nuovi significati e ricontattare ciò che nutre e sostiene.
        </p>
        <p>
          Costruisco insieme alla persona un'alleanza terapeutica basata sulla fiducia, sulla presenza e sul rispetto, cuore vivo di ogni percorso.
        </p>

        <div className="rounded-r-lg border-l-4 border-brand bg-brand-soft p-6">
          <h3 className={`${subheadingClasses} mb-4`}>Formazione e Qualifiche</h3>
          <ul className={listClasses}>
            {qualifications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="pt-4">
          <h3 className={`${subheadingClasses} mb-4`}>Esperienze Professionali e Aree di Approfondimento</h3>
          <p className="mb-3">
            Ho maturato esperienza sia in ambito pubblico che privato, lavorando con adulti, adolescenti e famiglie.
            Per diversi anni ho collaborato con:
          </p>
          <ul className={listClasses}>
            {collaborations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="mt-6">
            Oggi lavoro come <strong>libera professionista</strong> nel mio studio a Gallarate e presso il poliambulatorio Centro Baroncini di Sesto Calende. Sono attiva anche come <strong>formatrice e supervisore</strong> per operatori dei settori psico-socio-educativo.
          </p>

          <h3 className={`${subheadingClasses} mb-4 mt-10`}>Uno sguardo in avanti</h3>
          <p>
            La <strong>formazione continua</strong> è una parte essenziale del mio modo di essere terapeuta.
            Credo nel valore di uno sguardo sempre aggiornato, capace di coniugare esperienza clinica e conoscenze scientifiche, professionalità e umanità.
          </p>
        </div>

        <p className="brand-claim pt-4 text-center text-2xl text-brand">{AppConfig.claim}</p>
      </div>
    </Section>
  );
};

export default BioSection;
