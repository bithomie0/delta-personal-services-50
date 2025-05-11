
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Loader } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { ContactFormData, submitContactForm } from "@/lib/contact";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await submitContactForm(data);
      
      if (response.error) {
        throw new Error(response.error.message || "Failed to send email");
      }
      
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="py-16 bg-white">
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input
                  {...register("name", { required: "Name is required" })}
                  placeholder={t('your_name')}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div>
                <Input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  type="email"
                  placeholder={t('your_email')}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div>
                <Textarea
                  {...register("message", { required: "Message is required" })}
                  placeholder={t('your_message')}
                  className={`h-32 ${errors.message ? "border-red-500" : ""}`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white hover:bg-primary/90"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send />
                    <span>{t('send_message')}</span>
                  </>
                )}
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
                  <p className="mt-1 text-gray-500">+49 176 60969006 | +49 15901187546</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{t('address')}</h3>
                  <p className="mt-1 text-gray-500">
                    Nourneystr. 5 40822, Mettmann Germany
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
