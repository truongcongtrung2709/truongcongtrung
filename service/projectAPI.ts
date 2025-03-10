import { supabase } from '@/lib/supabase';
import { Project } from '@/types';

export const fetchProjects = async (): Promise<Project[]> => {
  const { data, error } = await supabase.from("projects").select("*");
  if (error) {
    console.error("Lỗi khi fetch data:", error);
    return [];
  }
  return data || [];
};
