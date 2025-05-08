
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  const { t } = useTranslation();

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            {t("team_title")}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            {t("team_description")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Gladys Lufen */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3 bg-gray-100 flex items-center justify-center">
                  <div className="w-full h-60 sm:h-full flex items-center justify-center">
                    <Avatar className="h-40 w-40 sm:h-48 sm:w-48">
                      <AvatarImage 
                        src="/lovable-uploads/ff30a633-dc5c-43e8-a2fe-d8684f3443bd.png" 
                        alt="Gladys Lufen" 
                      />
                      <AvatarFallback className="text-3xl">GL</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="sm:w-2/3 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Gladys Lufen</h3>
                  <p className="text-sm text-secondary font-semibold mb-4">{t("team_managing_director")}</p>
                  <p className="text-gray-600">{t("gladys_description")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Jackline Conley */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3 bg-gray-100 flex items-center justify-center">
                  <div className="w-full h-60 sm:h-full flex items-center justify-center">
                    <Avatar className="h-40 w-40 sm:h-48 sm:w-48">
                      <AvatarImage 
                        src="/lovable-uploads/36a3b81e-c8d0-4c00-b559-d5923562a8dc.png" 
                        alt="Jackline Conley" 
                      />
                      <AvatarFallback className="text-3xl">JC</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="sm:w-2/3 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Jackline Conley</h3>
                  <p className="text-sm text-secondary font-semibold mb-4">{t("team_member_role")}</p>
                  <p className="text-gray-600">{t("jackline_description")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;
