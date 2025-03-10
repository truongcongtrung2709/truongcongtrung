'use client'

import { fetchProjects } from '@/service/projectAPI';
import { Project } from '@/types';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { DiReact } from 'react-icons/di';
import { FaCss3 } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';
import { TbLetterM } from 'react-icons/tb';

const iconMap: Record<string, IconType> = {
  DiReact,
  FaCss3,
  RiTailwindCssFill,
  SiNextdotjs,
  SiTypescript,
  TbLetterM,
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
      setLoading(false);
    };
    loadProjects();
  }, []);

  return (
    <section id='project' className="py-32 relative bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col items-center mb-20'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-content mb-4 text-center'>My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full"></div>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse bg-white/10 rounded-3xl overflow-hidden h-[700px] border border-white/10">
                <div className="h-[250px] bg-white/20"></div>
                <div className="p-6">
                  <div className="h-6 bg-white/20 w-3/4 mb-4"></div>
                  <div className="h-4 bg-white/20 w-full mb-4"></div>
                  <div className="h-4 bg-white/20 w-1/2 mb-4"></div>
                  <div className="flex gap-2">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="h-6 w-12 bg-white/20 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {projects.map((project) => (
              <motion.a
                key={project.id}
                target='_blank'
                href={project.href}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: project.id * 0.1 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className='group relative h-[700px] rounded-3xl overflow-hidden bg-surface border border-white/10 cursor-pointer'
              >
                <motion.div className="h-[250px] relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Image
                    src={`/images/${project.image}`}
                    alt={project.title}
                    fill
                    sizes='(max-width:768px) 100vw, 33vw'
                    className='object-cover'
                    priority
                  />
                </motion.div>
                <motion.div className='p-6 h-[25px] bg-surface' transition={{ duration: 0.3 }}>
                  <div className="flex justify-between items-start mb-4 group/title">
                    <h3 className="text-2xl font-bold text-content">{project.title}</h3>
                    <ArrowUpRightIcon className='h-6 w-6 text-content/50 group-hover/title:text-primary transition-colors duration-300' />
                  </div>
                  <p className='text-content/80 mb-4'>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => {
                      const IconComponent = iconMap[tech.icon];
                      return (
                        <span key={j} className='px-3 py-1 rounded-full bg-white/5 text-content/80 text-sm border border-white/5 hover:bg-surface transition-colors flex items-center gap-1.5 group/tech'>
                          {IconComponent && <IconComponent style={{ color: tech.color }} className="w-4 h-4 transition-colors" />}
                          <span className='group-hover/tech:text-content transition-colors'>{tech.name}</span>
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}