import { supabase } from "@/lib/supabase";
import { Experience } from "@/types";

export const fetchExperiences = async (): Promise<Experience[]> =>{
  const {data,error} = await supabase.from("experiences").select("*")
  if(error){
    console.error("Fetch failed", error)
  }
  return data || [];

}