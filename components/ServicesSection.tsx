
import React from 'react';
import { SectionProps } from '../types.js'; // Added .js extension
import { AppConfig } from '../constants.js'; // Added .js extension
import { CheckCircleIcon } from './icons.js'; // Added .js extension

const services = [
  {
    title: "Consulenza e Supporto Psicologico Individuale",
    description: "Percorsi di ascolto e accompagnamento per adulti e adolescenti che stanno attraversando disagi emotivi, relazionali o momenti di disorientamento.Obiettivo: comprendere meglio sé stessi, trovare nuove risorse, favorire il benessere quotidiano.",
    keywords: ["consulenza psicologica", "supporto emotivo", "adolescenza", "relazioni"]
  },
  {
    title: "Psicoterapia",
    description: "Interventi mirati per affrontare difficoltà più profonde e strutturate (come disturbi del comportamento alimentare e disturbi psicosomatici), con un approccio integrato e basato sull’evidenza.La psicoterapia permette di lavorare su ferite emotive, schemi disfunzionali e vissuti radicati, promuovendo un cambiamento autentico e duraturo.",
    keywords: ["psicoterapia", "gpercorso terapeutico", "cambiamento", "consapevolezza"]
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
    <section id={id} className={`py-16 md:py-20 bg-slate-100 px-4 sm:px-6 lg:px-8`}>
      <div className="container mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center text-${AppConfig.colors.textPrimary} mb-4`}>
          Servizi e Aree di Competenza
        </h2>
        <p className={`text-center text-lg text-${AppConfig.colors.textSecondary} mb-12 max-w-2xl mx-auto`}>
          Nel mio lavoro offro uno spazio protetto e attento in cui esplorare difficoltà, bisogni e desideri. 
          I percorsi possono essere brevi o più strutturati, sempre costruiti su misura della persona.
          Mi rivolgo ad adulti, adolescenti e genitori, per affrontare insieme momenti di crisi, cambiamento, crescita.
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