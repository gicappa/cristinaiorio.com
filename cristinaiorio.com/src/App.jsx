import React from 'react';
import { MapPin, Phone, Mail, Calendar, Compass, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import './App.css';

export default function App() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 min-h-screen font-sans">
      {/* Header with Photo and Claim */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-100 opacity-20 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_70%)] z-10"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center py-20 px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/IMG_1818_R1_SQ.jpg"
              alt="Cristina Iorio"
              className="rounded-full shadow-xl w-64 h-64 object-cover mb-8 border-4 border-white"
            />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <h1 className="text-5xl font-extrabold text-blue-800 mb-2">Cristina Iorio</h1>
            <h2 className="text-xl italic text-blue-600 mb-6 font-light">"La mente in continuo movimento"</h2>
            <div className="inline-block bg-blue-800 text-white px-6 py-2 rounded-full text-xl shadow-lg">
              Psicologa Psicoterapeuta
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Chi sono */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <Compass className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-3xl font-semibold text-blue-800">Chi sono</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Sono la Dott.ssa Cristina Iorio, psicologa e psicoterapeuta. Da anni affianco le persone nei loro percorsi di crescita, sostegno e benessere psicologico, con un approccio empatico e personalizzato per ogni paziente.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              Credo fermamente nel potere trasformativo della terapia e nel valore della relazione terapeutica come strumento di cambiamento e crescita personale.
            </p>
          </div>
        </motion.div>

        {/* Aree di competenza */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <Heart className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-3xl font-semibold text-blue-800">Aree di competenza</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Disturbi d'ansia e attacchi di panico",
                "Depressione e disturbi dell'umore",
                "Problemi relazionali e di coppia",
                "Sostegno in momenti di crisi personale",
                "Gestione dello stress e crescita personale",
                "Supporto psicologico per adolescenti"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start"
                >
                  <div className="bg-blue-200 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contatti */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <Calendar className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-3xl font-semibold text-blue-800">Contatti</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-100"
                >
                  <div className="bg-blue-600 text-white rounded-full p-3 mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-600 font-medium">Indirizzo</div>
                    <span className="text-gray-700">Vicolo Degli Orti 1, 21013 Gallarate</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-100"
                >
                  <div className="bg-blue-600 text-white rounded-full p-3 mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-600 font-medium">Telefono</div>
                    <span className="text-gray-700">+39 (347) 8035515</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-100"
                >
                  <div className="bg-blue-600 text-white rounded-full p-3 mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-600 font-medium">Email</div>
                    <span className="text-gray-700">cristinaiorio@tiscali.it</span>
                  </div>
                </motion.div>
              </div>
              
              <div className="w-full rounded-xl overflow-hidden shadow-lg border border-blue-100">
                <iframe
                  title="Studio Cristina Iorio"
                  width="100%"
                  height="100%"
                  style={{ minHeight: "300px" }}
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://www.google.com/maps?q=Vicolo+Degli+Orti+1,+21013+Gallarate&output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8 mt-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h4 className="text-xl font-medium mb-4">Dott.ssa Cristina Iorio</h4>
          <p className="text-blue-100">Psicologa Psicoterapeuta - P.IVA: 03456789012</p>
          <div className="mt-4 text-blue-200 text-sm">
            © {new Date().getFullYear()} - Tutti i diritti riservati
          </div>
        </div>
      </footer>
    </div>
  );
}
