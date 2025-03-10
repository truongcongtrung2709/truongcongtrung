'use client'

import { fetchSkills } from '@/service/skillAPI';
import { Skill } from '@/types';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbLetterM } from 'react-icons/tb';

// const skills = [
//   { name: "HTML", icon: FaHtml5, color: "#E34F26", description: "Building structured web pages with semantic HTML." },
//   { name: "CSS", icon: FaCss3, color: "#1572B6", description: "Styling websites with CSS and animations." },
//   { name: "JavaScript", icon: FaJs, color: "#F7DF1E", description: "Creating interactive web applications." },
//   { name: "React.js", icon: FaReact, color: "#61DAFB", description: "Developing UI with component-based architecture." },
//   { name: "Next.js", icon: SiNextdotjs, color: "#000000", description: "Building server-side rendered and static web apps." },
//   { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4", description: "Utility-first styling for rapid UI development." },
//   { name: "Material UI", icon: TbLetterM, color: "#007FFF", description: "Creating elegant UIs with Material Design." },
//   { name: "TypeScript", icon: SiTypescript, color: "#3178C6", description: "Adding static typing to JavaScript projects." }
// ];
const iconMap: Record<string, IconType> = {
  FaHtml5,
  FaCss3,
  SiTailwindcss,
  FaJs,
  FaReact,
  SiNextdotjs,
  SiTypescript,
  TbLetterM,
};

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const loadSkills = async () => {
      const data = await fetchSkills();
      setSkills(data);
      setLoading(false);
    }
    loadSkills();
  }, [])
  return (
    <section id='skill' className="pb-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col items-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-content mb-4 text-center'>My Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full"></div>
        </motion.div>

        {/* Skill Grid */}
        {loading ? (
          // Hiển thị skeleton khi đang tải dữ liệu
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/20 rounded-xl p-6 flex flex-col items-center text-center animate-pulse"
              >
                <div className="w-12 h-12 mb-4 bg-white/20 rounded-full"></div>
                <div className="w-24 h-5 bg-white/20 rounded-md"></div>
                <div className="w-32 h-4 bg-white/10 rounded-md mt-2"></div>
              </div>
            ))}
          </div>
        ) : (
          // Hiển thị dữ liệu thực khi đã load xong
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, i) => {
              const IconComponent = iconMap[skill.image];
              return(
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center transition-all hover:bg-surface hover:scale-105"
                >
                  {/* Skill Icon */}
                  {IconComponent && <IconComponent style={{ color: skill.color }} className="w-12 h-12 transition-colors mb-4" />}
                  {/* Skill Title */}
                  <h3 className="text-xl font-bold text-content">{skill.name}</h3>
                  {/* Skill Description */}
                  <p className="text-content/80 mt-2">{skill.description}</p>
                </motion.div>
              )
              
            })}
          </div>
        )}

      </div>
    </section >
  );
}
