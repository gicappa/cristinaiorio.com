
import React from 'react';
import { SectionProps } from '../types';
import { AppConfig } from '../constants';

const BlogSection: React.FC<SectionProps> = ({ id }) => {
  // Placeholder blog posts
  const posts = [
    { title: "Comprendere l'Ansia: Sintomi e Strategie", date: "15 Luglio 2024", excerpt: "Un approfondimento sull'ansia, come riconoscerla e i primi passi per affrontarla...", image: "https://picsum.photos/seed/blog1/400/250" },
    { title: "L'Importanza dell'Autostima nella Crescita Personale", date: "2 Agosto 2024", excerpt: "Esploriamo come coltivare una sana autostima sia cruciale per il benessere psicologico...", image: "https://picsum.photos/seed/blog2/400/250" },
    { title: "Mindfulness: Vivere il Presente con Consapevolezza", date: "10 Settembre 2024", excerpt: "Introduzione alla mindfulness e ai suoi benefici per la gestione dello stress e delle emozioni...", image: "https://picsum.photos/seed/blog3/400/250" },
  ];

  return (
    <section id={id} className={`py-16 md:py-20 bg-slate-100 px-4 sm:px-6 lg:px-8`}>
      <div className="container mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center text-${AppConfig.colors.textPrimary} mb-12`}>
          Blog e Approfondimenti
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className={`text-xl font-semibold text-${AppConfig.colors.textPrimary} mb-2`}>{post.title}</h3>
                <p className={`text-sm text-slate-500 mb-2`}>{post.date}</p>
                <p className={`text-${AppConfig.colors.textSecondary} text-sm mb-4 flex-grow`}>{post.excerpt}</p>
                <a href="#" className={`mt-auto text-sm text-${AppConfig.colors.primary} hover:underline font-semibold`}>Leggi di più →</a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-slate-600">
          Questa sezione sarà presto arricchita con articoli e riflessioni sul benessere psicologico.
        </p>
      </div>
    </section>
  );
};

export default BlogSection;
