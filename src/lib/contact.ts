import { Resend } from 'resend';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Create a Resend instance with your API key
// In production, this should be handled in a secure backend
let resendApiKey = ""; // Will be set by the user
let resend: Resend | null = null;

// Function to initialize the Resend API with your key
export const initializeResendApi = (apiKey: string) => {
  resendApiKey = apiKey;
  resend = new Resend(apiKey);
  // Save to localStorage for persistence (not secure for production)
  localStorage.setItem('resendApiKey', apiKey);
  return !!apiKey;
};

// Check if we have a saved API key
export const loadSavedApiKey = () => {
  const savedKey = localStorage.getItem('resendApiKey');
  if (savedKey) {
    initializeResendApi(savedKey);
    return true;
  }
  return false;
};

// Check if the API key is set
export const isResendConfigured = () => {
  return !!resendApiKey && !!resend;
};

export const submitContactForm = async (data: ContactFormData) => {
  try {
    // Check if Resend is configured
    if (!resend) {
      // Try to load from localStorage
      if (!loadSavedApiKey()) {
        return { error: { message: "Resend API key is not configured" } };
      }
    }
    
    // Format the email content
    const emailContent = `
      Name: ${data.name}
      Email: ${data.email}
      
      Message:
      ${data.message}
      
      Timestamp: ${new Date().toISOString()}
      Source: ${window.location.origin}
    `;

    // Send email using Resend
    const response = await resend!.emails.send({
      from: 'Delta Personal Service <noreply@yourdomain.com>', // Replace with your verified domain
      to: 'info@deltapersonalservice.biz',
      subject: `New Contact Form Submission from ${data.name}`,
      text: emailContent,
      reply_to: data.email,
    });

    return response;
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
