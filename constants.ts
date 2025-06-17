
export interface NavItem {
  label: string;
  href: string;
}

export const AppConfig = {
  professionalName: "Cristina Iorio", 
  profession: "Psicologa Psicoterapeuta",
  claim: "La mente in continuo movimento",
  contact: {
    address: "Vicolo Degli Orti 1, 21013 Gallarate (VA), Italia",
    phone: "+39 347 8035515",
    email: "cristinaiorio@tiscali.it", 
    mapEmbedUrl: "https://maps.google.com/maps?q=Vicolo%20Degli%20Orti%201%2C%2021013%20Gallarate%20VA%2C%20Italy&t=&z=17&ie=UTF8&iwloc=&output=embed"
  },
  seoKeywords: [
    "psicologa Gallarate", "psicoterapeuta Gallarate", "supporto psicologico", 
    "benessere mentale", "consulenza psicologica", "terapia individuale", 
    "gestione dello stress", "ansia", "depressione", "crescita personale"
  ],
  navLinks: [
    { label: "Home", href: "#home" },
    // { label: "Servizi", href: "#servizi" },
    // { label: "Biografia", href: "#biografia" },
    // { label: "Testimonianze", href: "#testimonianze"}, // Removed
    // { label: "Blog", href: "#blog"}, // Removed
    // { label: "FAQ", href: "#faq"},
    // { label: "Contatti", href: "#contatti" },
  ] as NavItem[],
  colors: { 
    primary: 'red-700',        
    primaryHover: 'red-800',   
    primaryLight: 'red-600',   
    primaryBgSoft: 'red-50',   
    primaryTextSoft: 'red-800',
    
    accent: 'amber-600',        
    accentHover: 'amber-700',   
    accentLight: 'amber-500',   
    accentBgSoft: 'amber-50',   
    accentTextSoft: 'amber-800',

    textPrimary: 'slate-800',   
    textSecondary: 'slate-600', 
    background: 'slate-50',     
    border: 'slate-300',        
  }
};

// IMPORTANT: Ensure the image file 'cristina_iorio_profile.jpg' is placed in the root deployment directory.
export const PlaceholderImageFemaleProfessional = "./cristina_iorio_profile.jpg"; // Path updated to be relative
