
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  
  // Function to generate the correct link based on current location
  const getLink = (section: string) => {
    return location.pathname !== "/" ? `/#${section}` : `#${section}`;
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/36a3b81e-c8d0-4c00-b559-d5923562a8dc.png" 
                alt="Delta Personal Services Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <Link to="/" className="ml-3 text-xl font-bold text-primary">Delta Personal Services</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href={getLink("home")} className="text-gray-700 hover:text-secondary">{t('home')}</a>
            <a href={getLink("about")} className="text-gray-700 hover:text-secondary">{t('about')}</a>
            <a href={getLink("services")} className="text-gray-700 hover:text-secondary">{t('services')}</a>
            <a href={getLink("contact")} className="text-gray-700 hover:text-secondary">{t('contact')}</a>
            <Link to="/portal/login" className="text-gray-700 hover:text-secondary">{t('jobPortal')}</Link>
            <LanguageToggle />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-secondary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href={getLink("home")} className="block px-3 py-2 text-gray-700 hover:text-secondary">{t('home')}</a>
              <a href={getLink("about")} className="block px-3 py-2 text-gray-700 hover:text-secondary">{t('about')}</a>
              <a href={getLink("services")} className="block px-3 py-2 text-gray-700 hover:text-secondary">{t('services')}</a>
              <a href={getLink("contact")} className="block px-3 py-2 text-gray-700 hover:text-secondary">{t('contact')}</a>
              <Link to="/portal/login" className="block px-3 py-2 text-gray-700 hover:text-secondary">{t('jobPortal')}</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
