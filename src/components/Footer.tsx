
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  
  // Function to generate the correct link based on current location
  const getLink = (section: string) => {
    return location.pathname !== "/" ? `/#${section}` : `#${section}`;
  };
  
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold">Delta Personal Services</h3>
            <p className="mt-4 text-gray-400">
              {t("footer_description")}
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">{t("quick_links")}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={getLink("home")} className="text-gray-400 hover:text-white">{t("home")}</a>
              </li>
              <li>
                <a href={getLink("about")} className="text-gray-400 hover:text-white">{t("about")}</a>
              </li>
              <li>
                <a href={getLink("services")} className="text-gray-400 hover:text-white">{t("services")}</a>
              </li>
              <li>
                <a href={getLink("contact")} className="text-gray-400 hover:text-white">{t("contact")}</a>
              </li>
              <li>
                <Link to="/portal/login" className="text-gray-400 hover:text-white">{t("jobPortal")}</Link>
              </li>
              <li>
                <Link to="/imprint" className="text-gray-400 hover:text-white">{t("imprint")}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">{t("follow_us")}</h3>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.facebook.com/share/1BzEKmKHui/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
