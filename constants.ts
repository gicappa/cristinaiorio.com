
export interface NavItem {
  label: string;
  href: string;
}

export const AppConfig = {
  professionalName: "Cristina Iorio",
  profession: "Psicologa Psicoterapeuta",
  claim: "La mente in continuo movimento",
  contact: {
    address: "Vicolo Degli Orti 2, 21013 Gallarate (VA), Italia",
    phone: "+39 347 8035515",
    email: "cristinaiorio@tiscali.it",
    mapEmbedUrl: "https://maps.google.com/maps?q=Vicolo%20Degli%20Orti%202%2C%2021013%20Gallarate%20VA%2C%20Italy&t=&z=17&ie=UTF8&iwloc=&output=embed",
    mapLinkUrl: "https://maps.google.com/maps?q=Vicolo%20Degli%20Orti%202%2C%2021013%20Gallarate%20VA%2C%20Italy",
    piva: "02126480025",
  },
  seoKeywords: [
    "psicologa Gallarate", "psicoterapeuta Gallarate", "supporto psicologico",
    "benessere mentale", "consulenza psicologica", "terapia individuale",
    "gestione dello stress", "ansia", "depressione", "crescita personale"
  ],
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Servizi", href: "#servizi" },
    { label: "Biografia", href: "#biografia" },
    { label: "FAQ", href: "#faq"},
    { label: "Contatti", href: "#contatti" },
  ] as NavItem[],
};

/** Opens the visitor's mail client with the subject already filled in. */
export const mailtoHref =
  `mailto:${AppConfig.contact.email}` +
  `?subject=${encodeURIComponent('Richiesta informazioni')}`;

/** Strips the display spacing so the number is dialable from a phone. */
export const telHref = `tel:${AppConfig.contact.phone.replace(/\s/g, '')}`;

/**
 * Square derivatives of the portrait, served from the deploy root. The 3988px
 * original lives in `assets-src/` so it is never shipped to visitors: it is
 * 7.3MB, which no phone should download to fill a 300px frame.
 */
export const profilePhoto = {
  large: "./cristina_iorio_profile.jpg", // 1024x1024
  small: "./cristina_iorio_profile-512.jpg", // 512x512
};
