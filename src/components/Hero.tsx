
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div id="home" className="pt-24 pb-16 bg-gradient-to-br from-white to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">{t('gateway')}</span>
              <span className="block text-primary">{t('nursing_careers')}</span>
              <span className="block text-secondary">{t('in_germany')}</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              <span className="hidden">{t('hero_description')}</span>
              {t('bridge_to_meaningful_work')}
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto lg:mx-0">
              <Button className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90">
                {t('free_consultation')} <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img
                className="w-full rounded-lg"
                src="/lovable-uploads/07938fde-7a20-45ba-8f51-8734b2ab49da.png"
                alt="Nursing professionals in Germany"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
