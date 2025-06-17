
import React, { useState }  from 'react';
import { SectionProps, ContactFormData } from '../types.js'; // Added .js extension
import { AppConfig } from '../constants.js'; // Added .js extension
import { MailIcon, PhoneIcon, LocationMarkerIcon } from './icons.js'; // Added .js extension

const ContactSection: React.FC<SectionProps> = ({ id }) => {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // This is where you would integrate with an email sending service or backend API
    console.log('Form data submitted:', formData);
    
    setSubmitMessage('Messaggio inviato con successo! Ti risponderò al più presto.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // setTimeout(() => setSubmitMessage(''), 5000); // Clear message after 5 seconds
  };


  return (
    <section id={id} className={`py-16 md:py-20 bg-slate-100 px-4 sm:px-6 lg:px-8`}>
      <div className="container mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center text-${AppConfig.colors.textPrimary} mb-12`}>
          Contattami
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className={`text-2xl font-semibold text-${AppConfig.colors.textPrimary} mb-6`}>Richiedi Informazioni o un Appuntamento</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium text-${AppConfig.colors.textSecondary}`}>Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`mt-1 block w-full px-3 py-2 border border-${AppConfig.colors.border} rounded-md shadow-sm focus:outline-none focus:ring-${AppConfig.colors.primary} focus:border-${AppConfig.colors.primary} sm:text-sm`}
                />
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm font-medium text-${AppConfig.colors.textSecondary}`}>Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`mt-1 block w-full px-3 py-2 border border-${AppConfig.colors.border} rounded-md shadow-sm focus:outline-none focus:ring-${AppConfig.colors.primary} focus:border-${AppConfig.colors.primary} sm:text-sm`}
                />
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-medium text-${AppConfig.colors.textSecondary}`}>Messaggio</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`mt-1 block w-full px-3 py-2 border border-${AppConfig.colors.border} rounded-md shadow-sm focus:outline-none focus:ring-${AppConfig.colors.primary} focus:border-${AppConfig.colors.primary} sm:text-sm`}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-${AppConfig.colors.primary} hover:bg-${AppConfig.colors.primaryHover} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${AppConfig.colors.primary} disabled:opacity-50`}
                >
                  {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
                </button>
              </div>
              {submitMessage && (
                <p className={`text-sm ${submitMessage.includes('successo') ? `text-green-600` : `text-red-600`} mt-4 text-center`}>{submitMessage}</p>
              )}
            </form>
            <p className="mt-6 text-xs text-slate-500">
              Cliccando su "Invia Messaggio", accetti il trattamento dei tuoi dati personali come descritto nella <a href="#privacy" className={`text-${AppConfig.colors.primary} hover:underline`}>Privacy Policy</a>.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className={`text-2xl font-semibold text-${AppConfig.colors.textPrimary} mb-4`}>Informazioni di Contatto</h3>
              <div className="space-y-3 text-lg">
                <p className={`flex items-start text-${AppConfig.colors.textSecondary}`}>
                  <LocationMarkerIcon className={`w-6 h-6 text-${AppConfig.colors.primary} mr-3 mt-1 flex-shrink-0`} />
                  <span>{AppConfig.contact.address}</span>
                </p>
                <p className={`flex items-center text-${AppConfig.colors.textSecondary}`}>
                  <PhoneIcon className={`w-6 h-6 text-${AppConfig.colors.primary} mr-3 flex-shrink-0`} />
                  <a href={`tel:${AppConfig.contact.phone.replace(/\s/g, '')}`} className={`hover:text-${AppConfig.colors.primary}`}>{AppConfig.contact.phone}</a>
                </p>
                <p className={`flex items-center text-${AppConfig.colors.textSecondary}`}>
                  <MailIcon className={`w-6 h-6 text-${AppConfig.colors.primary} mr-3 flex-shrink-0`} />
                  <a href={`mailto:${AppConfig.contact.email}`} className={`hover:text-${AppConfig.colors.primary}`}>{AppConfig.contact.email}</a>
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
               <h3 className={`text-xl font-semibold text-${AppConfig.colors.textPrimary} p-4 text-center`}>Come Raggiungermi</h3>
              <iframe
                src={AppConfig.contact.mapEmbedUrl}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa dello studio della Dott.ssa Cristina Iorio"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;