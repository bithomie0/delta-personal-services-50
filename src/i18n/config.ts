
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
      
      // Team Section
      "team_title": "Our Team",
      "team_description": "Get to know the Delta Personal Service team. We are always available to assist you and support you with your questions & concerns.",
      "team_managing_director": "Managing Director",
      "team_member_role": "Co-Founder",
      "gladys_description": "A qualified nurse with experience in healthcare systems who understands both international and German healthcare needs.",
      "jackline_description": "An entrepreneur with childcare business background who helps healthcare professionals transition smoothly to German institutions.",
      "gladys_expertise_1": "Healthcare System Expert",
      "gladys_expertise_2": "Registered Nurse",
      "jackline_expertise_1": "Entrepreneur",
      "jackline_expertise_2": "Childcare Expert",
      
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
      "nursing_ausbildung": "Nursing Vocational Training (Ausbildung)",
      
      // Resources Section
      "resources_title": "Useful Resources",
      "resources_subtitle": "Helpful information for nursing professionals planning to work in Germany",
      "make_it_germany_title": "Make it in Germany",
      "make_it_germany_desc": "Official website for qualified professionals seeking to work in Germany with specific information for nursing careers",
      "recognition_title": "Recognition Finder",
      "recognition_desc": "Tool to find out how to get your foreign professional qualification recognized in Germany",
      "goethe_title": "Goethe-Institut",
      "goethe_desc": "Information about German language courses and exams needed for working in Germany",
      "visit_resource": "Visit Resource",
      
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
      "connecting_professionals": "Connecting qualified nursing professionals with German healthcare opportunities.",
      
      // Imprint translations
      "imprint": "Imprint",
      "imprint_title": "Imprint",
      "company_registration": "Company Registration",
      "company_registration_text": "Delta Personal Service UG is a German registered company.",
      "recruitment_agency": "We are also registered as a professional and trusted Recruitment Agency with German authorities.",
      "company_address": "Address",
      "tax_registration": "Tax Registration",
      "tax_registration_number": "Tax Registration number, Wuppertal: 147/5815/2168",
      "management": "Management",
      "managing_director": "Managing Director",
      "contact_info": "Contact Information"
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
      "expert_team": "Persönlicher Begleiter",
      "expert_team_desc": "Wir bauen Vertrauen durch persönliche Betreuung und individuelle Begleitung auf.",
      "global_network": "Globales Netzwerk",
      "global_network_desc": "Verbindung von Talenten aus der ganzen Welt mit deutschen Möglichkeiten.",
      "quality_first": "Qualität zuerst",
      "quality_first_desc": "Gewährleistung perfekter Übereinstimmungen zwischen Fachkräften und Organisationen.",
      
      // Team Section
      "team_title": "Unser Team",
      "team_description": "Lernen Sie das Team von Delta Personal Service näher kennen. Wir stehen Ihnen jederzeit zur Verfügung und unterstützen Sie stets bei Ihren Fragen & Anliegen.",
      "team_managing_director": "Geschäftsführerin",
      "team_member_role": "Mitgründerin",
      "gladys_description": "Eine qualifizierte Krankenschwester mit Erfahrung im Gesundheitswesen, die sowohl internationale als auch deutsche Gesundheitsbedürfnisse versteht.",
      "jackline_description": "Eine Unternehmerin mit Hintergrund im Kinderbetreuung, die Gesundheitsfachkräften einen reibungslosen Übergang zu deutschen Institutionen ermöglicht.",
      "gladys_expertise_1": "Gesundheitssystem-Expertin",
      "gladys_expertise_2": "Examinierte Krankenschwester",
      "jackline_expertise_1": "Unternehmerin",
      "jackline_expertise_2": "Kinderbetreuungs-Expertin",
      
      // Services Section
      "services_title": "Unsere Services",
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
      
      // Updated translations for additional services section
      "additional_services": "Schrittweise Unterstützung",
      "additional_desc": "Umfassende Unterstützung für Ihre Reise nach Deutschland",
      "german_course": "Deutschsprachkurse A1 bis B2 speziell für Pflegekräfte",
      "childhood_edu": "Kulturelle Integrationsunterstützung",
      "vocational": "Einwanderungs- und Anerkennungsunterstützung",
      "accommodation": "Unterkunft und Eingewöhnungshilfe",
      "visa_info": "Dokumentenübersetzung & Visa-Unterstützung",
      "networking": "Berufsvermittlung & berufliche Integration",
      "nursing_ausbildung": "Pflegeausbildung",
      
      // Resources Section
      "resources_title": "Nützliche Ressourcen",
      "resources_subtitle": "Hilfreiche Informationen für Pflegefachkräfte, die in Deutschland arbeiten möchten",
      "make_it_germany_title": "Make it in Germany",
      "make_it_germany_desc": "Offizielle Website für qualifizierte Fachkräfte, die in Deutschland arbeiten möchten, mit spezifischen Informationen für Pflegeberufe",
      "recognition_title": "Anerkennungsfinder",
      "recognition_desc": "Tool zur Ermittlung, wie Sie Ihre ausländische Berufsqualifikation in Deutschland anerkennen lassen können",
      "goethe_title": "Goethe-Institut",
      "goethe_desc": "Informationen über Deutschkurse und Prüfungen, die für die Arbeit in Deutschland erforderlich sind",
      "visit_resource": "Ressource besuchen",
      
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
      "connecting_professionals": "Vermittlung von Fachkräften aus dem Bereich der Pflege an die entsprechenden Einrichtungen.",
      
      // Imprint translations
      "imprint": "Impressum",
      "imprint_title": "Impressum",
      "company_registration": "Unternehmensregistrierung",
      "company_registration_text": "Delta Personal Service UG ist ein in Deutschland registriertes Unternehmen.",
      "recruitment_agency": "Wir sind auch als professionelle und vertrauenswürdige Rekrutierungsagentur bei deutschen Behörden registriert.",
      "company_address": "Adresse",
      "tax_registration": "Steuerregistrierung",
      "tax_registration_number": "Steuerregistrierungsnummer, Wuppertal: 147/5815/2168",
      "management": "Geschäftsführung",
      "managing_director": "Managing Director",
      "contact_info": "Kontaktinformationen"
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
