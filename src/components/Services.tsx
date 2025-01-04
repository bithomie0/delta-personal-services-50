import { Briefcase, UserCheck, Building, FileCheck } from "lucide-react";
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
            Comprehensive recruitment solutions for both job seekers and organizations
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="h-6 w-6 text-primary mr-2" />
                For Job Seekers
              </CardTitle>
              <CardDescription>
                Find your dream job in Germany
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <UserCheck className="h-5 w-5 text-secondary mr-2" />
                  Professional CV review and optimization
                </li>
                <li className="flex items-center">
                  <FileCheck className="h-5 w-5 text-secondary mr-2" />
                  Document verification assistance
                </li>
                <li className="flex items-center">
                  <Building className="h-5 w-5 text-secondary mr-2" />
                  Direct placement with top employers
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="h-6 w-6 text-primary mr-2" />
                For Organizations
              </CardTitle>
              <CardDescription>
                Find skilled professionals for your team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <UserCheck className="h-5 w-5 text-secondary mr-2" />
                  Access to pre-screened candidates
                </li>
                <li className="flex items-center">
                  <FileCheck className="h-5 w-5 text-secondary mr-2" />
                  Compliance and documentation support
                </li>
                <li className="flex items-center">
                  <Briefcase className="h-5 w-5 text-secondary mr-2" />
                  Tailored recruitment solutions
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