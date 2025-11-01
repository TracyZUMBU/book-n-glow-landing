import { createClient } from "@supabase/supabase-js";
import templateHtml from "../templates/waitlist-notification.html?raw";

interface WaitlistData {
  name: string;
  email: string;
  activity: string;
}

/**
 * Charge le template HTML depuis le fichier et remplace les placeholders
 */
export function getWaitlistNotificationTemplate(data: WaitlistData): string {
  try {
    let html = templateHtml;

    // Remplace les placeholders
    html = html.replace(/\{\{name\}\}/g, data.name || "");
    html = html.replace(/\{\{email\}\}/g, data.email || "");
    html = html.replace(/\{\{activity\}\}/g, data.activity || "");

    return html;
  } catch (error) {
    console.error("Error loading email template:", error);
    // Fallback: template HTML simple
    return `
      <!DOCTYPE html>
      <html lang="fr">
      <head><meta charset="UTF-8"><title>Nouvelle inscription</title></head>
      <body>
        <h2>Nouvelle inscription sur la liste d'attente</h2>
        <p><strong>Nom:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Activité:</strong> ${data.activity}</p>
      </body>
      </html>
    `;
  }
}

/**
 * Envoie un email en utilisant Supabase Functions
 */
export async function sendEmail(to: string, subject: string, html: string) {
  const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Supabase URL and Anon Key must be configured in environment variables"
    );
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  const { data, error } = await supabase.functions.invoke("send-email", {
    body: { to, subject, html },
  });

  if (error) {
    throw new Error(`Failed to send email: ${error.message}`);
  }

  return data;
}
