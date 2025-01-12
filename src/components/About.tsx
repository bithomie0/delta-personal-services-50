import { Users, Award, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('about_title')}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {t('about_subtitle')}
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="text-lg font-medium text-gray-900">{t('our_story')}</div>
              <p className="mt-4 text-gray-500">
                {t('our_story_text')}
              </p>
            </div>

            <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="text-lg font-medium text-gray-900">{t('our_mission')}</div>
              <p className="mt-4 text-gray-500">
                {t('our_mission_text')}
              </p>
            </div>
          </div>

          <div className="mt-16">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {t('expert_team')}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {t('expert_team_desc')}
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <Globe className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {t('global_network')}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {t('global_network_desc')}
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <Award className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {t('quality_first')}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {t('quality_first_desc')}
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;