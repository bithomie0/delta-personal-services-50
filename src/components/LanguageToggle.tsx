import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="w-10 h-10 rounded-full"
      title={i18n.language === 'en' ? 'Switch to German' : 'Auf Englisch umschalten'}
    >
      <Languages className="h-5 w-5" />
    </Button>
  );
};

export default LanguageToggle;