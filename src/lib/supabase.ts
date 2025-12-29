import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY || "";

// Suppression de la vérification pour permettre le chargement sur lovable.dev
// Les erreurs apparaîtront lors de l'utilisation réelle de Supabase si les variables sont manquantes

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
