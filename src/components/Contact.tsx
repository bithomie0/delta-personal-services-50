import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const {
    t
  } = useTranslation();
  return <div id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('contact_title')}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {t('contact_subtitle')}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-gray-50 p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <Input placeholder={t('your_name')} />
              </div>
              <div>
                <Input type="email" placeholder={t('your_email')} />
              </div>
              <div>
                <Textarea placeholder={t('your_message')} className="h-32" />
              </div>
              <Button className="w-full bg-primary text-white hover:bg-primary/90">
                {t('send_message')}
              </Button>
            </form>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{t('email')}</h3>
                  <p className="mt-1 text-gray-500">info@deltapersonalservice.biz</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{t('phone')}</h3>
                  <p className="mt-1 text-gray-500">+49 176 60969006</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{t('address')}</h3>
                  <p className="mt-1 text-gray-500">
                    Berlin, Germany
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;