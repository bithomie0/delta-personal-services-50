import { Briefcase, UserCheck, Building, FileCheck, Stethoscope, GraduationCap, Globe, Clock, Home, Network, Book } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('services_title')}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {t('services_subtitle')}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Stethoscope className="h-6 w-6 text-secondary mr-2" />
                {t('for_nurses')}
              </CardTitle>
              <CardDescription>
                {t('for_nurses_desc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-secondary mr-2" />
                  {t('qualification')}
                </li>
                <li className="flex items-center">
                  <FileCheck className="h-5 w-5 text-secondary mr-2" />
                  {t('visa_support')}
                </li>
                <li className="flex items-center">
                  <Globe className="h-5 w-5 text-secondary mr-2" />
                  {t('language_courses')}
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-secondary mr-2" />
                  {t('flexible_jobs')}
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="h-6 w-6 text-secondary mr-2" />
                {t('for_institutions')}
              </CardTitle>
              <CardDescription>
                {t('for_institutions_desc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <UserCheck className="h-5 w-5 text-secondary mr-2" />
                  {t('prescreened')}
                </li>
                <li className="flex items-center">
                  <FileCheck className="h-5 w-5 text-secondary mr-2" />
                  {t('visa_docs')}
                </li>
                <li className="flex items-center">
                  <Briefcase className="h-5 w-5 text-secondary mr-2" />
                  {t('placement')}
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-6 w-6 text-secondary mr-2" />
                {t('additional_services')}
              </CardTitle>
              <CardDescription>
                {t('additional_desc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center">
                  <Book className="h-5 w-5 text-secondary mr-2" />
                  {t('german_course')}
                </li>
                <li className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-secondary mr-2" />
                  {t('childhood_edu')}
                </li>
                <li className="flex items-center">
                  <Briefcase className="h-5 w-5 text-secondary mr-2" />
                  {t('vocational')}
                </li>
                <li className="flex items-center">
                  <Home className="h-5 w-5 text-secondary mr-2" />
                  {t('accommodation')}
                </li>
                <li className="flex items-center">
                  <FileCheck className="h-5 w-5 text-secondary mr-2" />
                  {t('visa_info')}
                </li>
                <li className="flex items-center">
                  <Network className="h-5 w-5 text-secondary mr-2" />
                  {t('networking')}
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;