
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Loader, Key } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { 
  ContactFormData, 
  submitContactForm, 
  isResendConfigured, 
  initializeResendApi, 
  loadSavedApiKey 
} from "@/lib/contact";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [configured, setConfigured] = useState(false);
  const [showApiConfig, setShowApiConfig] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();

  // Check for saved API key on component mount
  useEffect(() => {
    const hasKey = loadSavedApiKey();
    setConfigured(hasKey);
  }, []);

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

  const saveApiKey = () => {
    if (apiKey) {
      const success = initializeResendApi(apiKey);
      if (success) {
        setConfigured(true);
        setShowApiConfig(false);
        toast({
          title: "Success!",
          description: "Resend API key has been saved.",
        });
      }
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

        {/* API Key Configuration Section */}
        {!configured && (
          <div className="mt-8 max-w-lg mx-auto">
            <Alert className="bg-amber-50 border-amber-200">
              <AlertDescription>
                <p>You need to configure your Resend API key to enable the contact form.</p>
                <Button 
                  variant="outline" 
                  className="mt-2"
                  onClick={() => setShowApiConfig(!showApiConfig)}
                >
                  <Key className="mr-2 h-4 w-4" />
                  {showApiConfig ? "Hide API Key Form" : "Configure API Key"}
                </Button>
              </AlertDescription>
            </Alert>
          </div>
        )}

        {showApiConfig && !configured && (
          <div className="mt-4 max-w-lg mx-auto bg-gray-50 p-6 rounded-lg border">
            <h3 className="text-lg font-medium">Enter your Resend API Key</h3>
            <p className="mt-1 text-sm text-gray-500">This key will be stored in your browser's localStorage.</p>
            <div className="mt-4 space-y-4">
              <Input
                type="password"
                placeholder="re_XXXXXXXXXXXX"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
              <Button 
                onClick={saveApiKey}
                disabled={!apiKey}
                className="w-full bg-primary text-white hover:bg-primary/90"
              >
                Save API Key
              </Button>
            </div>
          </div>
        )}

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
                disabled={isSubmitting || !configured}
                className="w-full bg-primary text-white hover:bg-primary/90"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    <span>{t('send_message')}</span>
                  </>
                )}
              </Button>
              {!configured && (
                <p className="text-sm text-center text-amber-600">
                  Please configure your Resend API key to enable form submission
                </p>
              )}
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
