
import React from 'react';
import { SectionProps } from '../types.js'; // Added .js extension
import { CheckCircleIcon } from './icons.js'; // Added .js extension
import Section, { SectionHeading } from './Section.js';

const services = [
  {
    title: "Consulenza e Supporto Psicologico Individuale",
    description: "Percorsi di ascolto e accompagnamento per adulti e adolescenti che stanno attraversando disagi emotivi, relazionali o momenti di disorientamento. Obiettivo: comprendere meglio sé stessi, trovare nuove risorse, favorire il benessere quotidiano.",
    keywords: ["consulenza psicologica", "supporto emotivo", "adolescenza", "relazioni"]
  },
  {
    title: "Psicoterapia",
    description: "Interventi mirati per affrontare difficoltà più profonde e strutturate (come disturbi del comportamento alimentare e disturbi psicosomatici), con un approccio integrato e basato sull’evidenza .La psicoterapia permette di lavorare su ferite emotive, schemi disfunzionali e vissuti radicati, promuovendo un cambiamento autentico e duraturo.",
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
          >
            {/* items-start keeps the icon anchored to the first line when a title wraps. */}
            <div className="mb-4 flex items-start gap-3">
              <CheckCircleIcon className="mt-0.5 h-7 w-7 flex-none text-accent" />
              <h3 className="text-lg font-semibold leading-snug text-slate-800">{service.title}</h3>
            </div>
            <p className="flex-grow leading-relaxed text-slate-600">{service.description}</p>
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
          </article>
        ))}
      </div>
    </Section>
  );
};

export default ServicesSection;
