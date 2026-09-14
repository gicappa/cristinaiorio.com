
import React from 'react';
import { SectionProps } from '../types.js'; // Added .js extension
import { AppConfig, mailtoHref, telHref } from '../constants.js'; // Added .js extension
import { MailIcon, PhoneIcon, LocationMarkerIcon } from './icons.js'; // Added .js extension
import Section, { SectionHeading } from './Section.js';

/**
 * Purely presentational. The previous version rendered a form that reported
 * success while only calling console.log, so nothing was ever sent; contact now
 * hands off to the visitor's own mail client.
 */
const ContactSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <Section id={id} tone="tinted">
      <SectionHeading title="Contattami" />

      {/* Two equal-height cards side by side, then the map spanning both, so the
          column with less content does not leave a void beside the other. */}
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="mb-3 text-2xl font-semibold text-slate-800">
            Richiedi Informazioni o un Appuntamento
          </h3>
          <p className="mb-6 flex-grow leading-relaxed text-slate-600">
            Scrivimi una email: si aprirà il tuo programma di posta, già pronto per il messaggio.
          </p>

          <a
            href={mailtoHref}
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-3 rounded-lg bg-brand px-6 text-lg font-semibold text-white shadow-md transition hover:bg-brand-hover"
          >
            <MailIcon className="h-6 w-6 flex-none" />
            Scrivimi una email
          </a>

          {/* Shown as selectable text so the address is usable even with no mail client configured. */}
          <p className="mt-4 break-words text-center text-sm text-slate-500">
            oppure copia l’indirizzo:{' '}
            <span className="font-medium text-slate-700">{AppConfig.contact.email}</span>
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="mb-4 text-2xl font-semibold text-slate-800">Informazioni di Contatto</h3>
          {/* min-h-[44px] on each link keeps phone and email comfortable to tap. */}
          <ul className="space-y-2 text-lg">
            <li className="flex items-start text-slate-600">
              <LocationMarkerIcon className="mr-3 mt-3 h-6 w-6 flex-shrink-0 text-brand" />
              <a
                href={AppConfig.contact.mapLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] items-center rounded-sm hover:text-brand hover:underline"
              >
                {AppConfig.contact.address}
              </a>
            </li>
            <li className="flex items-center text-slate-600">
              <PhoneIcon className="mr-3 h-6 w-6 flex-shrink-0 text-brand" />
              <a
                href={telHref}
                className="flex min-h-[44px] items-center rounded-sm hover:text-brand hover:underline"
              >
                {AppConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center text-slate-600">
              <MailIcon className="mr-3 h-6 w-6 flex-shrink-0 text-brand" />
              <a
                href={mailtoHref}
                className="flex min-h-[44px] items-center break-all rounded-sm hover:text-brand hover:underline"
              >
                {AppConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm md:col-span-2">
          <h3 className="p-4 text-center text-xl font-semibold text-slate-800">Come Raggiungermi</h3>
          <iframe
            src={AppConfig.contact.mapEmbedUrl}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa dello studio della Dott.ssa Cristina Iorio"
            className="block w-full"
          ></iframe>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
