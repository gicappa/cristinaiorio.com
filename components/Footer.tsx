import React from 'react';
import { AppConfig } from '../constants.js'; // Added .js extension

const Footer: React.FC = () => {
  return (
    <footer className={`bg-slate-800 text-slate-300 py-8 px-4 sm:px-6 lg:px-8`}>
      <div className="container mx-auto text-center">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} {AppConfig.professionalName}. Tutti i diritti riservati.
        </p>
        <p className="mb-2 text-sm">
          Studio: {AppConfig.contact.address} | P.IVA: {AppConfig.contact.piva}
        </p>
        <p className={`brand-claim text-lg text-${AppConfig.colors.primaryLight} mb-4`}>
          "{AppConfig.claim}"
        </p>
        <div className="space-x-4 text-sm">
          {/* These links should point to actual policy pages or trigger modals with policy text */}
          <a href="#privacy-policy" className="hover:text-white hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="#cookie-policy" className="hover:text-white hover:underline">Cookie Policy</a>
        </div>
        <p className="mt-4 text-xs text-slate-400">
          Sito web realizzato con cura.
        </p>
      </div>
    </footer>
  );
};

export default Footer;