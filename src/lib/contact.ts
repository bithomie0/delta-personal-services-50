import { Resend } from 'resend';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Create a Resend instance with your API key
// Note: In production, this should be handled in a secure backend
const resendApiKey = "re_yourApiKey"; // Replace with your actual API key from Resend dashboard
const resend = new Resend(resendApiKey);

export const submitContactForm = async (data: ContactFormData) => {
  try {
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
    const response = await resend.emails.send({
      from: 'Delta Personal Service <noreply@yourdomain.com>', // Replace with your verified domain
      to: 'info@deltapersonalservice.biz',
      subject: `New Contact Form Submission from ${data.name}`,
      text: emailContent,
      reply_to: data.email,
    });

    return response;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
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
