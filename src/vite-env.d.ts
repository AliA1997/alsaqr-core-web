/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly VITE_PUBLIC_BASE_URL: string;
  readonly VITE_PUBLIC_BASE_API_URL: string;
  readonly VITE_PUBLIC_IS_TEST_MODE: string;
  readonly VITE_PUBLIC_HUGGINGFACE_NSFW_CHECKER: string;
  readonly VITE_PUBLIC_HUGGINGFACE_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
