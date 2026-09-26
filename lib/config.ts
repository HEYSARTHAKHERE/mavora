export type EnvConfig = {
  appUrl: string;
  supabaseUrl: string;
  supabaseAnonKey: string;
  databaseUrl: string;
};

export function getEnvConfig(): EnvConfig {
  return {
    appUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
    databaseUrl: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/mavora',
  };
}
