import { supabase } from "@/integrations/supabase/client";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  try {
    // Send email using Supabase Edge Function
    const response = await supabase.functions.invoke("send-email", {
      body: data
    });
    
    if (response.error) {
      console.error("Error from edge function:", response.error);
      return { error: { message: response.error.message || "Failed to send email" } };
    }
    
    return response.data;
  } catch (error) {
    console.error("Failed to send email:", error);
    return { error: { message: error instanceof Error ? error.message : "Unknown error occurred" } };
  }
};

// Keep for backward compatibility during transition
export const submitContactFormLegacy = async (data: ContactFormData) => {
  const webhookUrl = "https://hook.eu2.make.com/omlrepmdcrih45sfoaxz43k9vwere1ch";
  
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "no-cors",
    body: JSON.stringify({
      ...data,
      timestamp: new Date().toISOString(),
      source: window.location.origin,
    }),
  });

  return response;
};
