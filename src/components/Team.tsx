
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Gladys Lufen */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="w-full sm:w-2/5 p-6 flex justify-center">
                  <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <AspectRatio ratio={1/1} className="h-full w-full">
                      {!gladysImageError ? (
                        <Avatar className="h-full w-full">
                          <AvatarImage 
                            src="/lovable-uploads/c00b4304-005f-441e-b559-f239d786c71d.png" 
                            alt="Gladys Lufen"
                            onError={handleGladysImageError}
                            className="object-cover h-full w-full"
                          />
                          <AvatarFallback className="text-3xl bg-secondary text-secondary-foreground h-full w-full flex items-center justify-center">
                            GL
                          </AvatarFallback>
                        </Avatar>
                      ) : (
                        <Avatar className="h-full w-full">
                          <AvatarImage 
                            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=300&h=300" 
                            alt="Gladys Lufen"
                            className="object-cover h-full w-full"
                          />
                          <AvatarFallback className="text-3xl bg-secondary text-secondary-foreground h-full w-full flex items-center justify-center">
                            GL
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </AspectRatio>
                  </div>
                </div>
                <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Gladys Lufen</h3>
                  <p className="text-sm text-secondary font-semibold mb-4" style={{ color: "#30D5C8" }}>{t("team_managing_director")}</p>
                  <p className="text-gray-600">{t("gladys_description")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Jackline Conley */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="w-full sm:w-2/5 p-6 flex justify-center">
                  <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <AspectRatio ratio={1/1} className="h-full w-full">
                      {!jacklineImageError ? (
                        <Avatar className="h-full w-full">
                          <AvatarImage 
                            src="/lovable-uploads/3b711b06-13ad-4492-9f46-5e5821f1a0ae.png" 
                            alt="Jackline Conley"
                            onError={handleJacklineImageError}
                            className="object-cover h-full w-full"
                          />
                          <AvatarFallback className="text-3xl bg-secondary text-secondary-foreground h-full w-full flex items-center justify-center">
                            JC
                          </AvatarFallback>
                        </Avatar>
                      ) : (
                        <Avatar className="h-full w-full">
                          <AvatarImage 
                            src="https://images.unsplash.com/photo-1581091226825-6a2a5aee158?auto=format&fit=crop&w=300&h=300" 
                            alt="Jackline Conley"
                            className="object-cover h-full w-full"
                          />
                          <AvatarFallback className="text-3xl bg-secondary text-secondary-foreground h-full w-full flex items-center justify-center">
                            JC
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </AspectRatio>
                  </div>
                </div>
                <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Jackline Conley</h3>
                  <p className="text-sm text-secondary font-semibold mb-4" style={{ color: "#30D5C8" }}>{t("team_member_role")}</p>
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
