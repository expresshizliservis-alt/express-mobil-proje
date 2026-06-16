// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// Linkler ve anahtarlar kodun içinden tamamen söküldü, .env dosyasından güvenle çekiliyor.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
