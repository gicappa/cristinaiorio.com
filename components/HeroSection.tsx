
import React from 'react';
import { SectionProps } from '../types.js'; // Added .js extension
import { AppConfig, mailtoHref, profilePhoto } from '../constants.js'; // Added .js extension
import { Band, proseClasses } from './Section.js';

/**
 * Two bands under one landmark: the portrait and headline, then the existing
 * introduction below it. The second band deliberately carries no heading, and
 * stays inside this section rather than becoming an unnamed landmark of its own.
 */
const HeroSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id}>
      <div className="bg-white py-14 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-center md:gap-14 md:text-left">
            <img
              src={profilePhoto.large}
              srcSet={`${profilePhoto.small} 512w, ${profilePhoto.large} 1024w`}
              sizes="(min-width: 768px) 20rem, 16rem"
              width={1024}
              height={1024}
              fetchPriority="high"
              decoding="async"
              alt={`Ritratto di ${AppConfig.professionalName}, ${AppConfig.profession}`}
              className="h-64 w-64 flex-none rounded-2xl object-cover shadow-xl ring-1 ring-slate-900/5 md:h-80 md:w-80"
            />

            <div className="md:flex-1">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-800 md:text-5xl lg:text-6xl">
                {AppConfig.professionalName}
              </h1>
              <p className="mt-3 text-lg font-semibold uppercase tracking-[0.15em] text-brand md:text-xl">
                {AppConfig.profession}
              </p>

              <p className="brand-claim mt-6 text-3xl text-brand md:text-4xl">
                &ldquo;{AppConfig.claim}&rdquo;
              </p>

              <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center md:justify-start">
                <a
                  href={mailtoHref}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-brand px-8 text-lg font-semibold text-white shadow-md transition hover:bg-brand-hover"
                >
                  Contattami
                </a>
                <a
                  href="#servizi"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-slate-300 px-8 text-lg font-semibold text-slate-700 transition hover:border-brand hover:text-brand"
                >
                  Servizi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Band tone="tinted">
        <div className={`${proseClasses} space-y-6 text-slate-700`}>
          <p className="text-xl leading-relaxed">
            Ho sempre pensato che ogni essere umano custodisca in sé un movimento profondo, a volte silenzioso, altre volte impetuoso. Un movimento fatto di emozioni, pensieri, memorie, sogni. È questo movimento interiore che mi ha spinta, anni fa, a scegliere la psicologia e che mi guida nel mio lavoro, oggi e in ogni momento.
          </p>
          <p>
            Lavoro con persone che attraversano fasi di vita complesse, momenti in cui si fa fatica a capire, a scegliere, a reggere il peso di ciò che accade. Persone che sentono il bisogno di ritrovarsi, riconoscersi, vivere le trasformazioni. O semplicemente di fermarsi e tornare a respirare.
          </p>
          <p>
            Nel mio studio offro uno spazio sicuro, umano, dove accogliere con rispetto ciò che c’è, senza giudizio. Credo in una terapia che non impone, ma accompagna. Che non forza, ma mostra. Che aiuta a fare pace con le parti ferite e a dare fiducia a quelle vitali.
          </p>
          <p className="border-t border-brand/20 pt-6 text-center text-xl font-medium leading-relaxed text-brand">
            Non sempre possiamo cambiare ciò che ci è accaduto ma possiamo cambiare il modo in cui lo abitiamo.
          </p>
        </div>
        <p className="mx-auto mt-8 hidden max-w-3xl text-sm text-slate-500">
          Parole chiave per trovarmi: {AppConfig.seoKeywords.join(', ')}.
        </p>
      </Band>
    </section>
  );
};

export default HeroSection;
