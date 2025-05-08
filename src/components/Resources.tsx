
import { useTranslation } from "react-i18next";
import { ExternalLink, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const { t } = useTranslation();

  const resources = [
    {
      title: t('make_it_germany_title'),
      description: t('make_it_germany_desc'),
      url: 'https://www.make-it-in-germany.com/en/working-in-germany/professions-in-demand/nursing'
    },
    {
      title: t('recognition_title'),
      description: t('recognition_desc'),
      url: 'https://www.anerkennung-in-deutschland.de/en/interest/finder/profession'
    },
    {
      title: t('goethe_title'),
      description: t('goethe_desc'),
      url: 'https://www.goethe.de/en/spr/kup/prf.html'
    }
  ];

  return (
    <div id="resources" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <div className="flex items-center justify-center mb-4">
            <Lightbulb className="h-8 w-8 text-secondary mr-2" />
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('resources_title')}
            </h2>
          </div>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {t('resources_subtitle')}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <Card key={index} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{resource.title}</CardTitle>
                <CardDescription className="text-gray-500">{resource.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button 
                  variant="secondary" 
                  className="w-full group" 
                  asChild
                >
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    {t('visit_resource')}
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
