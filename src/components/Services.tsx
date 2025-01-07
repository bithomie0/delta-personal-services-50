import { Briefcase, UserCheck, Building, FileCheck, Stethoscope, GraduationCap, Globe, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  return (
    <div id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Comprehensive support for nursing professionals seeking opportunities in Germany
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Stethoscope className="h-6 w-6 text-secondary mr-2" />
                For Nursing Professionals
              </CardTitle>
              <CardDescription>
                Your path to a nursing career in Germany
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-secondary mr-2" />
                  Qualification recognition support
                </li>
                <li className="flex items-center">
                  <Globe className="h-5 w-5 text-secondary mr-2" />
                  German language courses
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-secondary mr-2" />
                  Flexible mini-job opportunities
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="h-6 w-6 text-secondary mr-2" />
                For Healthcare Institutions
              </CardTitle>
              <CardDescription>
                Access qualified nursing professionals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <UserCheck className="h-5 w-5 text-secondary mr-2" />
                  Pre-screened candidates
                </li>
                <li className="flex items-center">
                  <FileCheck className="h-5 w-5 text-secondary mr-2" />
                  Visa and documentation support
                </li>
                <li className="flex items-center">
                  <Briefcase className="h-5 w-5 text-secondary mr-2" />
                  Mini-job and full-time placement
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