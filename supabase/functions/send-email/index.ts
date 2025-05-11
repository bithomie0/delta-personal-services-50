
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Set CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const contactData: ContactFormData = await req.json();
    console.log("Received form data:", contactData);

    // Format the email content
    const emailContent = `
      Name: ${contactData.name}
      Email: ${contactData.email}
      
      Message:
      ${contactData.message}
      
      Timestamp: ${new Date().toISOString()}
      Source: Delta Personal Service Website
    `;

    // Send email using Resend
    const response = await resend.emails.send({
      from: "Delta Personal Service <noreply@deltapersonalservice.biz>", 
      to: "info@deltapersonalservice.biz",
      subject: `New Contact Form Submission from ${contactData.name}`,
      text: emailContent,
      reply_to: contactData.email,
    });

    console.log("Email sent successfully:", response);

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in send-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
