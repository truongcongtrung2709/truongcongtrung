export interface Project {
  id: number;
  title: string;
  href: string;
  description: string;
  tech: { name: string; icon: string; color: string }[];
  image: string;
}
export interface Skill {
  id: number;
  name: string;
  image: string;
  description: string;
  color: string;
}

export interface Experience {
  id:number;
  company:string;
  time: string;
  description:string;
  image:string;
}
