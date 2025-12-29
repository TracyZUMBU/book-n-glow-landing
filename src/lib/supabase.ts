import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

// Utiliser des valeurs par défaut valides pour permettre l'initialisation sur lovable.dev
// Ces valeurs ne fonctionneront pas réellement mais permettront à l'app de se charger
// Les erreurs apparaîtront lors de l'utilisation réelle de Supabase si les variables sont manquantes
const supabaseUrl =
  import.meta.env.VITE_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
