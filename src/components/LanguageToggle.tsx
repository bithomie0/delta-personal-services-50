
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="rounded-full font-medium text-sm"
      title={i18n.language === 'en' ? 'Switch to German' : 'Auf Englisch umschalten'}
    >
      {i18n.language === 'en' ? 'DE' : 'EN'}
    </Button>
  );
};

export default LanguageToggle;
