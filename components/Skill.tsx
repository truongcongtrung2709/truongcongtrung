'use client'

import { motion } from 'framer-motion';
import { FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbLetterM } from 'react-icons/tb';

const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26", description: "Building structured web pages with semantic HTML." },
  { name: "CSS", icon: FaCss3, color: "#1572B6", description: "Styling websites with CSS and animations." },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E", description: "Creating interactive web applications." },
  { name: "React.js", icon: FaReact, color: "#61DAFB", description: "Developing UI with component-based architecture." },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", description: "Building server-side rendered and static web apps." },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4", description: "Utility-first styling for rapid UI development." },
  { name: "Material UI", icon: TbLetterM, color: "#007FFF", description: "Creating elegant UIs with Material Design." },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", description: "Adding static typing to JavaScript projects." }
];

export default function Skills() {
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center transition-all hover:bg-surface hover:scale-105"
            >
              {/* Skill Icon */}
              <skill.icon className="w-12 h-12 mb-4" style={{ color: skill.color }} />
              {/* Skill Title */}
              <h3 className="text-xl font-bold text-content">{skill.name}</h3>
              {/* Skill Description */}
              <p className="text-content/80 mt-2">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
