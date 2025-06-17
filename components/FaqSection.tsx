
import React, { useState } from 'react';
import { SectionProps } from '../types.js'; // Added .js extension
import { AppConfig } from '../constants.js'; // Added .js extension
import { ChevronDownIcon, ChevronUpIcon } from './icons.js'; // Added .js extension

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Quanto dura una seduta di consulenza psicologica?",
    answer: "Generalmente una seduta individuale dura circa 50 minuti. La durata può variare in base alle esigenze specifiche e al tipo di intervento."
  },
  {
    question: "Con che frequenza si svolgono gli incontri?",
    answer: "La frequenza degli incontri viene concordata insieme durante il primo colloquio e può variare (settimanale, quindicinale) in base agli obiettivi e alle necessità."
  },
  {
    question: "È garantita la privacy e la riservatezza?",
    answer: "Assolutamente sì. Tutto ciò che emerge durante le sedute è coperto dal segreto professionale, nel pieno rispetto del codice deontologico degli psicologi."
  },
  {
    question: "Come posso prenotare un primo colloquio?",
    answer: "Puoi contattarmi telefonicamente al numero +39 347 8035515 o inviare una richiesta tramite il modulo di contatto presente su questo sito. Sarò lieta di fornirti tutte le informazioni necessarie."
  },
  {
    question: "Cosa succede durante il primo colloquio?",
    answer: "Il primo colloquio è un momento di conoscenza reciproca. Serve a definire la problematica, a comprendere le tue aspettative e a valutare insieme se e come iniziare un percorso psicologico. Non è vincolante."
  }
];

const FaqItemComponent: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
        aria-expanded={isOpen}
      >
        <h4 className={`text-lg font-medium text-${AppConfig.colors.textPrimary}`}>{item.question}</h4>
        {isOpen ? <ChevronUpIcon className={`w-5 h-5 text-${AppConfig.colors.primary}`} /> : <ChevronDownIcon className={`w-5 h-5 text-${AppConfig.colors.primary}`} />}
      </button>
      {isOpen && (
        <div className={`mt-3 text-${AppConfig.colors.textSecondary} text-base leading-relaxed`}>
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};


const FaqSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className={`py-16 md:py-20 bg-white px-4 sm:px-6 lg:px-8`}>
      <div className="container mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center text-${AppConfig.colors.textPrimary} mb-12`}>
          Domande Frequenti (FAQ)
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItemComponent key={index} item={faq} />
          ))}
        </div>
         <p className="text-center mt-12 text-slate-500">
          Se hai altre domande, non esitare a <a href="#contatti" className={`text-${AppConfig.colors.primary} hover:underline`}>contattarmi</a>.
        </p>
      </div>
    </section>
  );
};

export default FaqSection;