
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Hero Section
      "gateway": "Your Gateway to",
      "nursing_careers": "Nursing Careers",
      "in_germany": "in Germany",
      "hero_description": "We connect you with flexible mini-job opportunities in German healthcare. Ideal for students, career beginners, or healthcare professionals looking for supplemental income.",
      "bridge_to_meaningful_work": "Building bridges to meaningful work by connecting qualified nursing professionals with German healthcare opportunities.",
      "start_journey": "Start Your Journey",
      "free_consultation": "Free Consultation",
      
      // About Section
      "about_title": "About Delta Personal Services",
      "about_subtitle": "Your partner for international nursing recruitment in Germany",
      "our_story": "Our Story",
      "our_story_text": "Delta Personal Services is dedicated to being a bridge between qualified nursing professionals from Asia and Africa and healthcare opportunities in Germany. We understand the challenges of cross-border recruitment and provide comprehensive support throughout the entire journey.",
      "our_mission": "Our Mission",
      "our_mission_text": "We're committed to addressing Germany's skilled worker shortage while creating life-changing opportunities for international nursing professionals seeking to build their careers in Germany.",
      "expert_team": "Trusted Partner",
      "expert_team_desc": "Building reliable relationships through personalized support and guidance.",
      "global_network": "Global Network",
      "global_network_desc": "Connecting talent from around the world with German opportunities.",
      "quality_first": "Quality First",
      "quality_first_desc": "Ensuring perfect matches between professionals and organizations.",
      
      // Services Section
      "services_title": "Our Services",
      "services_subtitle": "Comprehensive support for nursing professionals seeking opportunities in Germany",
      "for_nurses": "For Nursing Professionals",
      "for_nurses_desc": "Your path to a nursing career in Germany",
      "qualification": "Qualification recognition support (Anerkennung)",
      "visa_support": "Visa Application Support",
      "language_courses": "German language courses",
      "flexible_jobs": "Job placement with multicultural teams",
      
      "for_institutions": "For Healthcare Institutions",
      "for_institutions_desc": "Access qualified nursing professionals",
      "prescreened": "Pre-screened candidates with 4-year Bachelor's degree or equivalent",
      "visa_docs": "Visa and documentation support",
      "placement": "Comprehensive recruitment solutions",
      
      "additional_services": "Step-by-step Support",
      "additional_desc": "Comprehensive support for your journey to Germany",
      "german_course": "German Language Training",
      "childhood_edu": "Cultural Integration Support",
      "vocational": "Immigration & Qualification Recognition",
      "accommodation": "Accommodation and Settling in Support",
      "visa_info": "Document Translation & Visa Support",
      "networking": "Career Placement & Professional Integration",
      
      // Contact Section
      "contact_title": "Contact Us",
      "contact_subtitle": "Need caregivers? Get in touch with our team to discuss your needs",
      "your_name": "Your Name",
      "your_email": "Your Email",
      "your_message": "Your Message",
      "send_message": "Send Message",
      "email": "Email",
      "phone": "Phone",
      "address": "Address",
      
      // Navigation
      "home": "Home",
      "about": "About Us",
      "services": "Services",
      "contact": "Contact",
      "get_started": "Get Started",
      "study_nursing": "Study Nursing",

      // Footer translations
      "quick_links": "Quick Links",
      "follow_us": "Follow Us",
      "footer_description": "Connecting qualified nursing professionals with German healthcare opportunities.",
      "copyright": "Delta Personal Services. All rights reserved.",
      
      // New translation
      "nursing_ausbildung": "Nursing Vocational Training (Ausbildung)",
      "connecting_professionals": "Connecting qualified nursing professionals with German healthcare opportunities."
    }
  },
  de: {
    translation: {
      // Hero Section
      "gateway": "Ihr Weg zu",
      "nursing_careers": "Pflegekarrieren",
      "in_germany": "in Deutschland",
      "hero_description": "Wir vermitteln flexible Minijob-Möglichkeiten im deutschen Gesundheitswesen. Ideal für Studenten, Berufseinsteiger oder Pflegekräfte, die ein zusätzliches Einkommen suchen.",
      "bridge_to_meaningful_work": "Wir bauen Brücken zu sinnvoller Arbeit, indem wir qualifizierte Pflegefachkräfte mit deutschen Gesundheitseinrichtungen verbinden.",
      "start_journey": "Starten Sie Ihre Reise",
      "free_consultation": "Kostenlose Beratung",
      
      // About Section
      "about_title": "Über Delta Personal Services",
      "about_subtitle": "Ihr Partner für internationale Pflegekräfterekrutierung in Deutschland",
      "our_story": "Unser Auftrag",
      "our_story_text": "Delta Personal Services ist spezialisiert auf die Vermittlung von qualifiziertem Pflegepersonal in den deutschen Gesundheitssektor. Wir verstehen die Herausforderungen, die mit der grenzüberschreitenden Rekrutierung verbunden sind und bieten eine umfassende Unterstützung während des gesamten Prozesses.",
      "our_mission": "Unsere Mission",
      "our_mission_text": "Unser Ziel ist es, dem Fachkräftemangel in Deutschland entgegenzuwirken und internationalen Pflegekräften neue Perspektiven und eine berufliche Heimat in Deutschland zu bieten.",
      "expert_team": "Vertrauenswürdiger Partner",
      "expert_team_desc": "Aufbau zuverlässiger Beziehungen durch persönliche Betreuung und Begleitung.",
      "global_network": "Globales Netzwerk",
      "global_network_desc": "Verbindung von Talenten aus der ganzen Welt mit deutschen Möglichkeiten.",
      "quality_first": "Qualität zuerst",
      "quality_first_desc": "Gewährleistung perfekter Übereinstimmungen zwischen Fachkräften und Organisationen.",
      
      // Services Section
      "services_title": "Unsere Leistungen",
      "services_subtitle": "Umfassende Unterstützung für Pflegefachkräfte, die ihre berufliche Zukunft in Deutschland gestalten möchten.",
      "for_nurses": "Für Pflegefachkräfte",
      "for_nurses_desc": "Ihr Weg zu einer Pflegekarriere in Deutschland",
      "qualification": "Unterstützung bei der Anerkennung der Qualifikation",
      "visa_support": "Unterstützung bei der Visumbeantragung",
      "language_courses": "Deutschkurse",
      "flexible_jobs": "Arbeitsvermittlung in multikulturellen Teams",
      
      "for_institutions": "Für Gesundheitseinrichtungen",
      "for_institutions_desc": "Zugang zu qualifizierten Pflegefachkräften",
      "prescreened": "Vorgeprüfte Kandidaten mit 4-jährigem Bachelor-Abschluss oder gleichwertigem Abschluss",
      "visa_docs": "Unterstützung bei Visa und Dokumentation",
      "placement": "Umfassende Rekrutierungslösungen",
      
      // Contact Section
      "contact_title": "Kontakt",
      "contact_subtitle": "Brauchen Sie Pflegekräfte? Kontaktieren Sie unser Team, um Ihre Bedürfnisse zu besprechen",
      "your_name": "Ihr Name",
      "your_email": "Ihre E-Mail",
      "your_message": "Ihre Nachricht",
      "send_message": "Nachricht senden",
      "email": "E-Mail",
      "phone": "Telefon",
      "address": "Adresse",
      
      // Navigation
      "home": "Startseite",
      "about": "Über uns",
      "services": "Leistungen",
      "contact": "Kontakt",
      "get_started": "Loslegen",
      "study_nursing": "Pflegestudium",

      // Footer translations
      "quick_links": "Schnellzugriff",
      "follow_us": "Folgen Sie uns",
      "footer_description": "Verbindung qualifizierter Pflegefachkräfte mit deutschen Gesundheitseinrichtungen.",
      "copyright": "Delta Personal Services. Alle Rechte vorbehalten.",
      
      // New translation
      "nursing_ausbildung": "Pflegeausbildung",
      "connecting_professionals": "Vermittlung von Fachkräften aus dem Bereich der Pflege an die entsprechenden Einrichtungen."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
