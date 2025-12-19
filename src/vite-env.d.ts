/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly RESEND_API_KEY?: string;
  readonly CONTACT_EMAIL?: string;
  readonly PORT?: string;
  readonly VITE_PUBLIC_SUPABASE_URL?: string;
  readonly VITE_PUBLIC_SUPABASE_ANON_KEY?: string;
  readonly VITE_ADMIN_PROVIDERS_PAGE_ACCESS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
