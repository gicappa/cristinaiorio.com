
import React, { useState } from 'react';
import { SectionProps } from '../types.js'; // Added .js extension
import { AppConfig } from '../constants.js'; // Added .js extension
import { ChevronDownIcon } from './icons.js'; // Added .js extension
import Section, { SectionHeading } from './Section.js';

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
    answer: `Puoi contattarmi telefonicamente al numero ${AppConfig.contact.phone} oppure scrivermi una email all'indirizzo ${AppConfig.contact.email}. Sarò lieta di fornirti tutte le informazioni necessarie.`
  },
  {
    question: "Cosa succede durante il primo colloquio?",
    answer: "Il primo colloquio è un momento di conoscenza reciproca. Serve a definire la problematica, a comprendere le tue aspettative e a valutare insieme se e come iniziare un percorso psicologico. Non è vincolante."
  }
];

const FaqItemComponent: React.FC<{ item: FaqItem; index: number }> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-slate-200">
      <h3>
        <button
          id={buttonId}
          onClick={() => setIsOpen(!isOpen)}
          className="flex min-h-[56px] w-full items-center justify-between gap-4 py-4 text-left"
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className="text-lg font-medium text-slate-800">{item.question}</span>
          {/* One rotating chevron rather than swapping two icons. */}
          <ChevronDownIcon
            className={`h-5 w-5 flex-none text-brand transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
        <p className="pb-5 pr-8 leading-relaxed text-slate-600">{item.answer}</p>
      </div>
    </div>
  );
};

const FaqSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <Section id={id} tone="light">
      <SectionHeading title="Domande Frequenti (FAQ)" />
      <div className="mx-auto max-w-3xl">
        {faqs.map((faq, index) => (
          <FaqItemComponent key={faq.question} item={faq} index={index} />
        ))}
      </div>
      <p className="mt-12 text-center text-slate-500">
        Se hai altre domande, non esitare a{' '}
        <a href="#contatti" className="font-medium text-brand hover:underline">
          contattarmi
        </a>
        .
      </p>
    </Section>
  );
};

export default FaqSection;
