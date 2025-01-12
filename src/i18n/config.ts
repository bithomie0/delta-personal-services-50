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
      "start_journey": "Start Your Journey",
      
      // About Section
      "about_title": "About Delta Personal Services",
      "about_subtitle": "Founded by two professionals, we understand both sides of international recruitment.",
      "our_story": "Our Story",
      "our_story_text": "Founded by a nurse and a successful businesswoman, Delta Personal Services combines healthcare expertise with business acumen to create perfect matches between skilled professionals and German organizations.",
      "our_mission": "Our Mission",
      "our_mission_text": "We're committed to addressing Germany's skilled worker shortage while creating life-changing opportunities for both domestic and international nursing professionals seeking to build their careers in Germany.",
      "expert_team": "Expert Team",
      "expert_team_desc": "Led by professionals with firsthand experience in healthcare and business.",
      "global_network": "Global Network",
      "global_network_desc": "Connecting talent from around the world with German opportunities.",
      "quality_first": "Quality First",
      "quality_first_desc": "Ensuring perfect matches between professionals and organizations.",
      
      // Services Section
      "services_title": "Our Services",
      "services_subtitle": "Comprehensive support for nursing professionals seeking opportunities in Germany",
      "for_nurses": "For Nursing Professionals",
      "for_nurses_desc": "Your path to a nursing career in Germany",
      "qualification": "Qualification recognition support",
      "visa_support": "Visa Application Support",
      "language_courses": "German language courses",
      "flexible_jobs": "Flexible mini-job opportunities",
      
      "for_institutions": "For Healthcare Institutions",
      "for_institutions_desc": "Access qualified nursing professionals",
      "prescreened": "Pre-screened candidates",
      "visa_docs": "Visa and documentation support",
      "placement": "Mini-job and full-time placement",
      
      "additional_services": "Additional Services",
      "additional_desc": "Comprehensive support for your journey to Germany",
      "german_course": "German Language Course with qualified teachers",
      "childhood_edu": "Early childhood education",
      "vocational": "Vocational Training / Ausbildung Application",
      "accommodation": "Accommodation and Settling in Support",
      "visa_info": "Visa application information & Support",
      "networking": "Networking within and outside our community",
      
      // Contact Section
      "contact_title": "Contact Us",
      "contact_subtitle": "Get in touch with our team to discuss your needs",
      "your_name": "Your Name",
      "your_email": "Your Email",
      "your_message": "Your Message",
      "send_message": "Send Message",
      "email": "Email",
      "phone": "Phone",
      "address": "Address",
      
      // Navigation
      "home": "Home",
      "about": "About",
      "services": "Services",
      "contact": "Contact",
      "get_started": "Get Started"
    }
  },
  de: {
    translation: {
      // Hero Section
      "gateway": "Ihr Weg zu",
      "nursing_careers": "Pflegekarrieren",
      "in_germany": "in Deutschland",
      "hero_description": "Wir vermitteln flexible Minijob-Möglichkeiten im deutschen Gesundheitswesen. Ideal für Studenten, Berufseinsteiger oder Pflegekräfte, die ein zusätzliches Einkommen suchen.",
      "start_journey": "Starten Sie Ihre Reise",
      
      // About Section
      "about_title": "Über Delta Personal Services",
      "about_subtitle": "Gegründet von zwei Fachleuten, verstehen wir beide Seiten der internationalen Rekrutierung.",
      "our_story": "Unsere Geschichte",
      "our_story_text": "Gegründet von einer Krankenpflegerin und einer erfolgreichen Geschäftsfrau, verbindet Delta Personal Services Gesundheitsexpertise mit unternehmerischem Know-how, um perfekte Matches zwischen qualifizierten Fachkräften und deutschen Organisationen zu schaffen.",
      "our_mission": "Unsere Mission",
      "our_mission_text": "Wir setzen uns dafür ein, den Fachkräftemangel in Deutschland zu beheben und dabei lebensverändernde Möglichkeiten für inländische und internationale Pflegekräfte zu schaffen, die ihre Karriere in Deutschland aufbauen möchten.",
      "expert_team": "Expertenteam",
      "expert_team_desc": "Geführt von Fachleuten mit direkter Erfahrung im Gesundheitswesen und in der Wirtschaft.",
      "global_network": "Globales Netzwerk",
      "global_network_desc": "Verbindung von Talenten aus der ganzen Welt mit deutschen Möglichkeiten.",
      "quality_first": "Qualität zuerst",
      "quality_first_desc": "Gewährleistung perfekter Übereinstimmungen zwischen Fachkräften und Organisationen.",
      
      // Services Section
      "services_title": "Unsere Leistungen",
      "services_subtitle": "Umfassende Unterstützung für Pflegefachkräfte, die Chancen in Deutschland suchen",
      "for_nurses": "Für Pflegefachkräfte",
      "for_nurses_desc": "Ihr Weg zu einer Pflegekarriere in Deutschland",
      "qualification": "Unterstützung bei der Anerkennung der Qualifikation",
      "visa_support": "Unterstützung bei der Visumbeantragung",
      "language_courses": "Deutschkurse",
      "flexible_jobs": "Flexible Minijob-Möglichkeiten",
      
      "for_institutions": "Für Gesundheitseinrichtungen",
      "for_institutions_desc": "Zugang zu qualifizierten Pflegefachkräften",
      "prescreened": "Vorgeprüfte Kandidaten",
      "visa_docs": "Unterstützung bei Visa und Dokumentation",
      "placement": "Vermittlung von Minijobs und Vollzeitstellen",
      
      "additional_services": "Zusätzliche Leistungen",
      "additional_desc": "Umfassende Unterstützung für Ihren Weg nach Deutschland",
      "german_course": "Deutschkurs mit qualifizierten Lehrkräften",
      "childhood_edu": "Frühkindliche Bildung",
      "vocational": "Ausbildung / Bewerbung für Berufsausbildung",
      "accommodation": "Unterstützung bei Unterkunft und Eingewöhnung",
      "visa_info": "Informationen und Unterstützung zur Visumbeantragung",
      "networking": "Networking innerhalb und außerhalb unserer Community",
      
      // Contact Section
      "contact_title": "Kontakt",
      "contact_subtitle": "Kontaktieren Sie unser Team, um Ihre Bedürfnisse zu besprechen",
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
      "get_started": "Loslegen"
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