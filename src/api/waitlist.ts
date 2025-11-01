import {
  getWaitlistNotificationTemplate,
  sendEmail,
} from "@/services/sendEmail";
import { createClient } from "@supabase/supabase-js";

interface WaitlistData {
  firstName: string;
  email: string;
  activity: string;
}

export const submitToWaitlist = async (data: WaitlistData) => {
  try {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error("Supabase URL and Anon Key must be configured");
    }

    createClient(supabaseUrl, supabaseAnonKey);

    const notificationHtml = getWaitlistNotificationTemplate({
      name: data.firstName,
      email: data.email,
      activity: data.activity,
    });

    const contactEmail =
      import.meta.env.VITE_CONTACT_EMAIL || "contact@book-n-glow.fr";

    await sendEmail(
      contactEmail,
      `Nouvelle inscription à la waitlist - ${data.firstName}`,
      notificationHtml
    );

    return {
      success: true,
      message: "Inscription réussie",
    };
  } catch (error) {
    console.error("Erreur:", error);
    throw error;
  }
};
