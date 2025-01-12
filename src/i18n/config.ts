import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Hero Section
      "hero_title": "Your Gateway to Professional Success in Germany",
      "hero_subtitle": "We connect talented professionals with German companies, creating lasting career opportunities.",
      "hero_cta": "Start Your Journey",
      
      // About Section
      "about_title": "About Delta Personal Services",
      "about_subtitle": "Founded by two African-German professionals, we understand both international and domestic recruitment.",
      "our_story": "Our Story",
      "our_story_text": "With years of experience in recruitment and HR management, we've built a reputation for excellence in connecting talent with opportunity.",
      "our_mission": "Our Mission",
      "our_mission_text": "To bridge the gap between international talent and German employers, creating successful, long-lasting professional relationships.",
      "expert_team": "Expert Team",
      "expert_team_desc": "Our experienced consultants provide personalized guidance throughout your journey.",
      "global_network": "Global Network",
      "global_network_desc": "Access to a vast network of professionals and companies across industries.",
      "quality_first": "Quality First",
      "quality_first_desc": "We maintain high standards in all our services and partnerships.",

      // Services Section
      "services_title": "Our Services",
      "services_subtitle": "Comprehensive recruitment solutions tailored to your needs",
      "recruitment_title": "Professional Recruitment",
      "recruitment_desc": "End-to-end recruitment services for companies and job seekers",
      "consulting_title": "Career Consulting",
      "consulting_desc": "Expert guidance for professional development and career advancement",
      "integration_title": "Integration Support",
      "integration_desc": "Assistance with relocation and cultural integration in Germany",
      "learn_more": "Learn More",

      // Contact Section
      "contact_title": "Contact Us",
      "contact_subtitle": "Get in touch with our team",
      "name_label": "Name",
      "email_label": "Email",
      "message_label": "Message",
      "send_message": "Send Message",
      "name_placeholder": "Your name",
      "email_placeholder": "Your email",
      "message_placeholder": "Your message",

      // Navigation
      "home": "Home",
      "about": "About",
      "services": "Services",
      "contact": "Contact",
      "get_started": "Get Started",

      // Footer translations
      "quick_links": "Quick Links",
      "follow_us": "Follow Us",
      "footer_description": "Connecting skilled professionals with German organizations for a brighter future.",
      "copyright": "Delta Personal Services. All rights reserved.",
    }
  },
  de: {
    translation: {
      // Hero Section
      "hero_title": "Ihr Tor zum beruflichen Erfolg in Deutschland",
      "hero_subtitle": "Wir verbinden talentierte Fachkräfte mit deutschen Unternehmen und schaffen dauerhafte Karrieremöglichkeiten.",
      "hero_cta": "Starten Sie Ihre Reise",
      
      // About Section
      "about_title": "Über Delta Personal Services",
      "about_subtitle": "Gegründet von zwei afrikanisch-deutschen Fachleuten, verstehen wir sowohl internationale als auch nationale Personalvermittlung.",
      "our_story": "Unsere Geschichte",
      "our_story_text": "Mit jahrelanger Erfahrung in der Personalvermittlung und im HR-Management haben wir uns einen Ruf für exzellente Verbindungen zwischen Talent und Chancen aufgebaut.",
      "our_mission": "Unsere Mission",
      "our_mission_text": "Die Überbrückung der Kluft zwischen internationalen Talenten und deutschen Arbeitgebern, um erfolgreiche, langfristige berufliche Beziehungen zu schaffen.",
      "expert_team": "Experten-Team",
      "expert_team_desc": "Unsere erfahrenen Berater bieten persönliche Begleitung während Ihrer gesamten Reise.",
      "global_network": "Globales Netzwerk",
      "global_network_desc": "Zugang zu einem umfangreichen Netzwerk von Fachkräften und Unternehmen aus verschiedenen Branchen.",
      "quality_first": "Qualität zuerst",
      "quality_first_desc": "Wir halten hohe Standards in allen unseren Dienstleistungen und Partnerschaften ein.",

      // Services Section
      "services_title": "Unsere Leistungen",
      "services_subtitle": "Umfassende Rekrutierungslösungen nach Ihren Bedürfnissen",
      "recruitment_title": "Professionelle Rekrutierung",
      "recruitment_desc": "Ganzheitliche Rekrutierungsservices für Unternehmen und Arbeitssuchende",
      "consulting_title": "Karriereberatung",
      "consulting_desc": "Expertenhilfe für berufliche Entwicklung und Karrierefortschritt",
      "integration_title": "Integrationshilfe",
      "integration_desc": "Unterstützung bei Umzug und kultureller Integration in Deutschland",
      "learn_more": "Mehr erfahren",

      // Contact Section
      "contact_title": "Kontakt",
      "contact_subtitle": "Nehmen Sie Kontakt mit unserem Team auf",
      "name_label": "Name",
      "email_label": "E-Mail",
      "message_label": "Nachricht",
      "send_message": "Nachricht senden",
      "name_placeholder": "Ihr Name",
      "email_placeholder": "Ihre E-Mail",
      "message_placeholder": "Ihre Nachricht",

      // Navigation
      "home": "Startseite",
      "about": "Über uns",
      "services": "Leistungen",
      "contact": "Kontakt",
      "get_started": "Loslegen",

      // Footer translations
      "quick_links": "Schnellzugriff",
      "follow_us": "Folgen Sie uns",
      "footer_description": "Wir verbinden qualifizierte Fachkräfte mit deutschen Organisationen für eine bessere Zukunft.",
      "copyright": "Delta Personal Services. Alle Rechte vorbehalten.",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;