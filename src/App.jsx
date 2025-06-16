import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import './App.css';

export default function App() {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 min-h-screen font-sans">
      {/* Header with Photo and Claim */}
      <div className="flex flex-col items-center py-16 px-4">
        <img
          src="/IMG_1818_R1_SQ.jpg"
          alt="Cristina Iorio"
          className="rounded-full shadow-2xl w-64 h-64 object-cover mb-8 border-4 border-blue-300"
        />
        <h1 className="text-5xl font-extrabold text-blue-900 mb-2">Cristina Iorio</h1>
        <h2 className="text-xl italic text-blue-700 mb-6">la mente in continuo movimento.</h2>
        <h3 className="text-2xl text-gray-700">Psicologa Psicoterapeuta</h3>
      </div>

      {/* Chi sono */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 pb-16"
      >
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-200">
          <h3 className="text-3xl font-semibold mb-4 text-blue-800">Chi sono</h3>
          <p className="text-gray-700 leading-relaxed">
            Sono la Dott.ssa Cristina Iorio, psicologa e psicoterapeuta. Da anni affianco le persone nei loro percorsi di crescita, sostegno e benessere psicologico.
          </p>
        </div>
      </motion.div>

      {/* Aree di competenza */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto px-4 pb-16"
      >
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-200">
          <h3 className="text-3xl font-semibold mb-4 text-blue-800">Aree di competenza</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Disturbi d'ansia e attacchi di panico</li>
            <li>Depressione e disturbi dell'umore</li>
            <li>Problemi relazionali e di coppia</li>
            <li>Sostegno in momenti di crisi personale</li>
            <li>Gestione dello stress e crescita personale</li>
            <li>Supporto psicologico per adolescenti</li>
          </ul>
        </div>
      </motion.div>

      {/* Contatti */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-4xl mx-auto px-4 pb-16"
      >
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-200">
          <h3 className="text-3xl font-semibold mb-4 text-blue-800">Contatti</h3>
          <div className="flex items-center mb-4">
            <MapPin className="mr-2 text-blue-600" />
            <span>Vicolo Degli Orti 1, 21013 Gallarate</span>
          </div>
          <div className="flex items-center mb-4">
            <Phone className="mr-2 text-blue-600" />
            <span>+39 (347) 8035515</span>
          </div>
          <div className="flex items-center mb-8">
            <Mail className="mr-2 text-blue-600" />
            <span>cristinaiorio@tiscali.it</span>
          </div>
          <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Studio Cristina Iorio"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps?q=Vicolo+Degli+Orti+1,+21013+Gallarate&output=embed"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
