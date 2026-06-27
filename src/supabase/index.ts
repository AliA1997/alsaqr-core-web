// Supabase client — lazily created from runtime config (no inlined secrets).
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getConfig } from "../config";

let client: SupabaseClient | undefined;

export function getSupabase(): SupabaseClient {
  if (!client) {
    const { supabaseUrl, supabaseAnonKey } = getConfig();
    client = createClient(supabaseUrl, supabaseAnonKey);
  }
  return client;
}
