
import React from 'react';
import { SectionProps } from '../types';
import { AppConfig } from '../constants';

const TestimonialsSection: React.FC<SectionProps> = ({ id }) => {
  const testimonials = [
    {
      quote: "La Dott.ssa Iorio mi ha aiutato a superare un periodo molto difficile. La sua empatia e professionalità sono state fondamentali.",
      name: "Maria R.",
      role: "Paziente" 
    },
    {
      quote: "Un percorso che mi ha cambiato la vita. Ho imparato tanto su me stesso e su come gestire le mie emozioni. Grazie di cuore.",
      name: "Luca B.",
      role: "Paziente"
    },
    {
      quote: "Consiglio vivamente la Dott.ssa Iorio. Un'ottima professionista, attenta e capace di creare un ambiente sicuro e accogliente.",
      name: "Sofia G.",
      role: "Paziente"
    }
  ];

  return (
    <section id={id} className={`py-16 md:py-20 bg-white px-4 sm:px-6 lg:px-8`}>
      <div className="container mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center text-${AppConfig.colors.textPrimary} mb-12`}>
          Dicono di Me (Testimonianze)
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
              <p className={`text-${AppConfig.colors.textSecondary} italic mb-4`}>"{testimonial.quote}"</p>
              <p className={`font-semibold text-${AppConfig.colors.textPrimary}`}>{testimonial.name}</p>
              <p className={`text-sm text-slate-500`}>{testimonial.role}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-slate-500 italic">
          (Queste testimonianze sono esemplificative e create a scopo illustrativo. Le testimonianze reali saranno raccolte nel rispetto della privacy.)
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
