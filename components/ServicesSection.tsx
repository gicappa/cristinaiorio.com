
import React, { useState } from 'react';
import { SectionProps } from '../types.js'; // Added .js extension
import { CheckCircleIcon, ChevronDownIcon } from './icons.js'; // Added .js extension
import Section, { SectionHeading } from './Section.js';

const services = [
  {
    title: "Consulenza e Supporto Psicologico Individuale",
    description: "Percorsi di ascolto e accompagnamento per adulti e adolescenti che stanno attraversando disagi emotivi, relazionali o momenti di disorientamento. Obiettivo: comprendere meglio sé stessi, trovare nuove risorse, favorire il benessere quotidiano.",
    keywords: ["consulenza psicologica", "supporto emotivo", "adolescenza", "relazioni"]
  },
  {
    title: "Psicoterapia",
    description: "Interventi mirati per affrontare difficoltà più profonde e strutturate (come disturbi del comportamento alimentare e disturbi psicosomatici), con un approccio integrato e basato sull’evidenza. La psicoterapia permette di lavorare su ferite emotive, schemi disfunzionali e vissuti radicati, promuovendo un cambiamento autentico e duraturo.",
    keywords: ["psicoterapia", "percorso terapeutico", "cambiamento", "consapevolezza"]
  },
  {
    title: "EMDR – Elaborazione dei Traumi",
    description: "Approccio terapeutico riconosciuto a livello internazionale per il trattamento di traumi psicologici, esperienze dolorose o eventi critici che continuano a influenzare il presente. L’EMDR favorisce un’elaborazione profonda, aiutando a sciogliere blocchi emotivi e a ritrovare stabilità.",
    keywords: ["EMDR", "trauma", "elaborazione", "esperienze traumatiche"]
  },
  {
    title: "Mindfulness e Consapevolezza",
    description: "Utilizzo di pratiche di mindfulness a scopo clinico per migliorare la gestione dello stress, la regolazione emotiva e la presenza nel qui e ora. Uno strumento prezioso per sviluppare ascolto interiore, equilibrio e resilienza.",
    keywords: ["mindfulness", "consapevolezza", "gestione dello stress", "meditazione"]
  },
  {
    title: "Ansia e Stress",
    description: "Interventi psicologici per riconoscere, comprendere e ridurre l’impatto di ansia, attacchi di panico e stress cronico sulla vita quotidiana. Obiettivo: tornare a sentirsi al sicuro dentro di sé.",
    keywords: ["ansia", "attacchi di panico", "stress", "autocontrollo"]
  },
  {
    title: "Disturbi dell’Umore",
    description: "Supporto psicologico per affrontare depressione, distimia e alterazioni del tono dell’umore. La terapia aiuta a ritrovare vitalità, senso e direzione.",
    keywords: ["depressione", "distimia", "disturbi dell’umore", "tristezza profonda"]
  },
  {
    title: "Sostegno alla Genitorialità",
    description: "Spazi di confronto dedicati a mamme, papà o coppie che desiderano affrontare con maggiore consapevolezza il proprio ruolo genitoriale e la relazione con i figli. Attraverso una riflessione condivisa, accompagno i genitori in un percorso psico-educativo costruito insieme, che valorizza le risorse della famiglia e rispetta i bisogni di ciascuno.",
    keywords: ["genitori", "relazione genitore-figlio", "educazione", "infanzia"]
  },
  {
    title: "Crescita Personale",
    description: "Percorsi dedicati a chi desidera conoscersi meglio, potenziare l’autostima, migliorare le relazioni o orientarsi in un momento di cambiamento. La terapia come spazio per fiorire.",
    keywords: ["crescita personale", "autostima", "relazioni", "cambiamento positivo"]
  },
  {
    title: "Sostegno nei Momenti di Transizione",
    description: "Lutti, separazioni, cambi di lavoro, malattia, nuove fasi della vita. Offro uno spazio per attraversare con consapevolezza i passaggi critici dell’esistenza.",
    keywords: ["lutto", "separazione", "transizioni", "eventi critici"]
  }
];


/**
 * Collapsed to icon and title, expanding on hover, on tap, and on Enter or Space.
 *
 * Hover alone would strand the descriptions on phones, which have no hover, so
 * the button carries the real state and hover is only an extra affordance for
 * pointers. The panel is clipped rather than removed from the DOM: it stays in
 * the accessibility tree and in the page source, so screen readers and crawlers
 * still get every description.
 *
 * The animation transitions `grid-template-rows` between `0fr` and `1fr`, which
 * eases to the content's natural height without measuring it in JavaScript.
 * Browsers that cannot interpolate it simply snap open.
 */
const ServiceCard: React.FC<{ service: (typeof services)[number]; index: number }> = ({
  service,
  index,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `servizio-${index}-descrizione`;
  const buttonId = `servizio-${index}-titolo`;

  return (
    /* min-h is two lines of title plus the padding, so one- and two-line titles
       collapse to the same height and the grid rows stay even. Putting it on the
       card rather than the button means it only pads the collapsed state; once a
       card expands its content is taller anyway, so no gap opens up between the
       title and the description. */
    <article
      data-open={isOpen}
      className="group min-h-[6.125rem] rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md data-[open=true]:border-slate-300 data-[open=true]:shadow-md"
    >
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
          className="flex w-full items-start gap-3 rounded-xl p-6 text-left"
        >
          <CheckCircleIcon className="mt-0.5 h-7 w-7 flex-none text-accent" />
          <span className="flex-grow text-lg font-semibold leading-snug text-slate-800">
            {service.title}
          </span>
          <ChevronDownIcon
            aria-hidden="true"
            className="mt-1 h-5 w-5 flex-none text-slate-400 transition-transform duration-300 group-hover:rotate-180 group-data-[open=true]:rotate-180"
          />
        </button>
      </h3>

      {/* No `group-focus-within` variant here: it would fight the button's own
          state, since focus stays on the button after a click and would hold the
          panel open when that click was meant to close it. Enter and Space run
          the same toggle, so the keyboard is served by `data-open` alone.
          No `role="region"` either — with nine panels the extra landmarks are
          noise, which is what the APG advises past about six. */}
      <div
        id={panelId}
        className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] group-data-[open=true]:grid-rows-[1fr]"
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6">
            <p className="leading-relaxed text-slate-600">{service.description}</p>
            {/* A wrapper gap is what keeps wrapped rows of pills from colliding. */}
            <div className="mt-5 flex flex-wrap gap-2">
              {service.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="inline-block rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent-strong"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const ServicesSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <Section id={id} tone="light">
      <SectionHeading
        title="Servizi e Aree di Competenza"
        subtitle={
          <>
            Nel mio lavoro offro uno spazio protetto e attento in cui esplorare difficoltà, bisogni e desideri.
            I percorsi possono essere brevi o più strutturati, sempre costruiti su misura della persona.
            Mi rivolgo ad adulti, adolescenti e genitori, per affrontare insieme momenti di crisi, cambiamento, crescita.
          </>
        }
      />
      {/* items-start stops one expanded card from stretching its whole row. */}
      <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default ServicesSection;
