import { Users, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Delta Personal Services
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Founded by two professionals, we understand both sides of international recruitment.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="text-lg font-medium text-gray-900">Our Story</div>
              <p className="mt-4 text-gray-500">
                Founded by a nurse and a successful businesswoman, 
                Delta Personal Services combines healthcare expertise with business acumen 
                to create perfect matches between skilled professionals and German organizations.
              </p>
            </div>

            <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="text-lg font-medium text-gray-900">Our Mission</div>
              <p className="mt-4 text-gray-500">
                We're committed to addressing Germany's skilled worker shortage while creating 
                life-changing opportunities for both domestic and international nursing professionals 
                seeking to build their careers in Germany.
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
                    Expert Team
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Led by professionals with firsthand experience in healthcare and business.
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
                    Global Network
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Connecting talent from around the world with German opportunities.
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
                    Quality First
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Ensuring perfect matches between professionals and organizations.
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