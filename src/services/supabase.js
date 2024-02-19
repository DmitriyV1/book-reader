import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yyerterombhbnmbjsbho.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5ZXJ0ZXJvbWJoYm5tYmpzYmhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcwNjg1NjksImV4cCI6MjAyMjY0NDU2OX0.3Lp7kQITy3H8PFUIjqJY1lgUjmtZyOiRq9Uml700Jyo";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
