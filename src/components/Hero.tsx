
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return <div id="home" className="pt-24 pb-16 bg-gradient-to-br from-white to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">{t('gateway')}</span>
              <span className="block text-primary">{t('nursing_careers')}</span>
              <span className="block text-secondary">{t('in_germany')}</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-medium">
              {t('connecting_professionals')}
            </p>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img className="w-full rounded-lg" src="/lovable-uploads/95c852e5-5706-4ad4-bfad-efedb2a25e07.png" alt="Healthcare professional with heart symbol" />
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;
