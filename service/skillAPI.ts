import { supabase } from '@/lib/supabase';
import { Skill } from '@/types';

export const fetchSkills = async (): Promise<Skill[]> => {
  const { data, error } = await supabase.from("skills").select("*")
  if (error) {
    console.error("Fetch skills failed")
  }
  return data || [];
};