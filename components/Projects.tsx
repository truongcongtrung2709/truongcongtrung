'use client'

import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import Image from 'next/image';
import { DiReact } from 'react-icons/di';
import { FaCss3 } from 'react-icons/fa';
import { RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';
import { TbLetterM } from 'react-icons/tb';

const projects = [
  {
    title: "Livestream Soccer - Saybong.tv",
    href: "https://github.com/BIXSO-PTY-LTD/say-bong-frontend",
    description: 'Developed a platform for livestreaming soccer matches, displaying schedules, result,rankings and highlight videos.',
    tech: [
      { name: "Next.js", icon: SiNextdotjs, color: "000000" },
      { name: "Material UI", icon: TbLetterM, color: "000000" },
      { name: "Typescript", icon: SiTypescript, color: "000000" },
    ],
    image: '/images/saybong.svg'
  },
  {
    title: "Vdream-Entertainment",
    href: "https://github.com/truongcongtrung2709/vdream-entertainment",
    description: 'Developed a website project introducing the company, using Next.js on the frontend and Laravel on the backend.',
    tech: [
      { name: "Next.js", icon: SiNextdotjs, color: "000000" },
      { name: "Material UI", icon: TbLetterM, color: "000000" },
      { name: "Typescript", icon: SiTypescript, color: "000000" },
    ],
    image: '/images/v-dream.png'
  },
  {
    title: "Teamie - Store and Restaurant Management Application",
    href: "https://teamie.vn/",
    description: 'Developed and optimized the user interface for a management application designed for stores and restaurants. Implemented responsive design and integrated with backend APIs to manage orders, inventory, and customer data.',
    tech: [
      { name: "React", icon: DiReact, color: "#61DAFB" },
      { name: "CSS", icon: FaCss3, color: "000000" },
    ],
    image: '/images/teamieapp.png'

  },
  {
    title: "OrderHQ - Online Shopping System from South Korea",
    href: "https://orderhanquoc.com/",
    description: "Developed the frontend for an online shopping system catering to Korean products. Focused on designing intuitive user interfaces, integrating payment gateways, and handling product catalogs dynamically.",
    tech: [
      { name: "Next.js", icon: SiNextdotjs, color: "000000" },
      { name: "Tailwind", icon: RiTailwindCssFill, color: "#06B6D4" },
    ],
    image: '/images/order-han-quoc.png'
  },
  {
    title: "Arval - European Car Rescue and Garage Service Application",
    href: "https://www.arval.com/",
    description: "Contributed to building the mobile interface for a European car rescue and garage service app. Focused on integrating real-time location tracking, service bookings, and payment systems, ensuring a smooth user experience",
    tech: [
      { name: "React", icon: RiReactjsFill, color: "#61DAFB" },
      { name: "CSS", icon: FaCss3, color: "000000" },
      { name: "Typescript", icon: SiTypescript, color: "000000" },
    ],
    image: '/images/arval.png'
  }
]
export default function Projects() {
  return (
    <section id='project' className="py-32 relative bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col items-center mb-20'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-content mb-4 text-center'>My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full"></div>

        </motion.div>
        {/* Project Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              target='_blank'
              href={project.href}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                y:-10,
                transition:{duration:0.2}
              }}
              className='group relative h-[700px] rounded-3xl overflow-hidden bg-surface border border-white/10 cursor-pointer'
            >
              {/* Image Section */}
              <motion.div className="h-[250px] relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={project.image as string}
                  alt={project.title}
                  fill
                  sizes='(max-width:768px) 100vw, 33vw'
                  className='object-cover'
                  priority
                />


              </motion.div>

              {/* Content Section */}
              <motion.div
                className='p-6 h-[25px] bg-surface'
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-start mb-4 group/title">
                  <h3 className="text-2xl font-bold text-content">{project.title}</h3>
                  <ArrowUpRightIcon className='h-6 w-6 text-content/50 group-hover/title:text-primary transition-colors duration-300' />
                </div>
                <p className='text-content/80 mb-4'>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {
                    project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className='px-3 py-1 rounded-full bg-white/5 text-content/80 text-sm border border-white/5 hover:bg-surface transition-colors flex items-center gap-1.5 group/tech'
                      >
                        <tech.icon
                          style={{ color: tech.color }}
                          className='w-4 h-4 transition-colors' />
                        <span className='group-hover/tech:text-content transition-colors'>{tech.name}</span>
                      </span>
                    ))
                  }
                </div>
              </motion.div>



            </motion.a>
          ))}
        </div>
      </div>

    </section>
  )
}