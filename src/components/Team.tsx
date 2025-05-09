
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

const Team = () => {
  const { t } = useTranslation();
  const [gladysImageError, setGladysImageError] = useState(false);
  const [jacklineImageError, setJacklineImageError] = useState(false);
  
  const handleGladysImageError = () => {
    setGladysImageError(true);
    toast({
      title: "Image loading error",
      description: "Gladys's profile image couldn't be loaded. Showing fallback.",
    });
  };
  
  const handleJacklineImageError = () => {
    setJacklineImageError(true);
    toast({
      title: "Image loading error",
      description: "Jackline's profile image couldn't be loaded. Showing fallback.",
    });
  };
  
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {/* Gladys Lufen */}
          <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border-0">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="shrink-0 flex justify-center">
                  <Avatar className="h-48 w-48 rounded-full bg-gray-100">
                    {!gladysImageError ? (
                      <AvatarImage 
                        src="/lovable-uploads/c00b4304-005f-441e-b559-f239d786c71d.png" 
                        alt="Gladys Lufen"
                        onError={handleGladysImageError}
                        className="object-cover object-center"
                      />
                    ) : (
                      <AvatarImage 
                        src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=300&h=300" 
                        alt="Gladys Lufen"
                        className="object-cover object-center"
                      />
                    )}
                    <AvatarFallback className="text-3xl bg-gray-100 text-gray-500">GL</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Gladys Lufen</h3>
                  <p className="text-sm font-medium mb-2 text-secondary">{t("team_managing_director")}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4 justify-center sm:justify-start">
                    <Badge variant="secondary" className="text-xs">{t("gladys_expertise_1")}</Badge>
                    <Badge variant="secondary" className="text-xs">{t("gladys_expertise_2")}</Badge>
                  </div>
                  
                  <p className="text-gray-600">{t("gladys_description")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Jackline Conley */}
          <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border-0">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="shrink-0 flex justify-center">
                  <Avatar className="h-48 w-48 rounded-full bg-gray-100">
                    {!jacklineImageError ? (
                      <AvatarImage 
                        src="/lovable-uploads/3b711b06-13ad-4492-9f46-5e5821f1a0ae.png" 
                        alt="Jackline Conley"
                        onError={handleJacklineImageError}
                        className="object-cover object-top"
                      />
                    ) : (
                      <AvatarImage 
                        src="https://images.unsplash.com/photo-1581091226825-6a2a5aee158?auto=format&fit=crop&w=300&h=300" 
                        alt="Jackline Conley"
                        className="object-cover object-top"
                      />
                    )}
                    <AvatarFallback className="text-3xl bg-gray-100 text-gray-500">JC</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Jackline Conley</h3>
                  <p className="text-sm font-medium mb-2 text-secondary">{t("team_member_role")}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4 justify-center sm:justify-start">
                    <Badge variant="secondary" className="text-xs">{t("jackline_expertise_1")}</Badge>
                    <Badge variant="secondary" className="text-xs">{t("jackline_expertise_2")}</Badge>
                  </div>
                  
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
