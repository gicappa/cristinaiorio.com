import React from 'react';
import { AppConfig } from '../constants.js'; // Added .js extension

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 px-5 py-10 text-slate-300 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl text-center">
        <p className="brand-claim mb-6 text-2xl text-brand-light">
          &ldquo;{AppConfig.claim}&rdquo;
        </p>
        <p className="mb-2">
          &copy; {new Date().getFullYear()} {AppConfig.professionalName}. Tutti i diritti riservati.
        </p>
        <p className="mb-4 text-sm text-slate-400">
          Studio: {AppConfig.contact.address} | P.IVA: {AppConfig.contact.piva}
        </p>
        <div className="flex items-center justify-center gap-2 text-sm">
          {/* These links should point to actual policy pages or trigger modals with policy text */}
          <a
            href="#privacy-policy"
            className="inline-flex min-h-[44px] items-center rounded-sm px-2 hover:text-white hover:underline"
          >
            Privacy Policy
          </a>
          <span aria-hidden="true" className="text-slate-600">|</span>
          <a
            href="#cookie-policy"
            className="inline-flex min-h-[44px] items-center rounded-sm px-2 hover:text-white hover:underline"
          >
            Cookie Policy
          </a>
        </div>
        <p className="mt-6 text-xs text-slate-500">
          Sito web realizzato con cura.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
