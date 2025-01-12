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