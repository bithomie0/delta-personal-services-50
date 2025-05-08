
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Imprint = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{t("imprint_title")}</h1>
          
          <div className="space-y-8">
            <section className="bg-white p-6 shadow rounded-lg">
              <h2 className="text-xl font-semibold mb-4">{t("company_registration")}</h2>
              <p className="mb-4">{t("company_registration_text")}</p>
              <p>{t("recruitment_agency")}</p>
            </section>
            
            <section className="bg-white p-6 shadow rounded-lg">
              <h2 className="text-xl font-semibold mb-4">{t("company_address")}</h2>
              <p>Delta Personal Service UG</p>
              <p>Nouneystraße 5</p>
              <p>40822 Mettmann</p>
              <p>{i18n.language === 'en' ? 'Germany' : 'Deutschland'}</p>
            </section>
            
            <section className="bg-white p-6 shadow rounded-lg">
              <h2 className="text-xl font-semibold mb-4">{t("tax_registration")}</h2>
              <p>{t("tax_registration_number")}</p>
            </section>
            
            <section className="bg-white p-6 shadow rounded-lg">
              <h2 className="text-xl font-semibold mb-4">{t("management")}</h2>
              <p>{t("managing_director")}</p>
              <p>Gladys Lufen</p>
            </section>
            
            <section className="bg-white p-6 shadow rounded-lg">
              <h2 className="text-xl font-semibold mb-4">{t("contact_info")}</h2>
              <p>Email: info(@)deltapersonalservice.biz</p>
              <p>Phone: +49(0)17660969006</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Imprint;
