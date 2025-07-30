import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://fxjuhpgmqnefukzwnwvn.supabase.co";

console.log(process.env.SUPABASE_API_KEY)

export const supabase = createClient(
    supabaseUrl,
    process.env.SUPABASE_API_KEY
);