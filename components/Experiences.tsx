'use client'

import { fetchExperiences } from '@/service/expAPI';
import { Experience } from '@/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// const experiences = [
//   {
//     company: "BIXSO Company: Solutions for Enterprises",
//     time: "8/2023 - 11/2025 (1 year 3 months)",
//     description: `
//       - Developed front-end applications with Next.js, delivering seamless and responsive user experiences.  
//       - Integrated RESTful APIs into the front-end, collaborating with backend teams to ensure data consistency and performance.
//       - Implemented Redux for efficient state management and enhanced data handling.
//       - Worked closely with designers to transform Figma mockups into intuitive and visually appealing interfaces.  
//       - Conducted testing and optimization processes to enhance performance and user engagement.
//       - Resolved technical challenges, ensuring smooth functionality and reliable application operations. 
//     `,
//     image: "/images/bixso.jpg"
//   },
//   {
//     company: "Cyberskill Company: Digital Transformation Solutions",
//     time: "01/2021 - 03/2022 (1 years 2 months)",
//     description: `
//       - Developed front-end for multiple web applications using Next.js, ensuring an optimized and responsive UI. 
//       - Collaborated closely with backend developers to integrate RESTful APIs for seamless data synchronization.
//       - Implemented Redux state management, improving data flow and application scalability.
//       - Translated Figma mockups into pixel-perfect user interfaces while maintaining design consistency. 
//       - Conducted performance tuning and testing, resolving bottlenecks for a better user experience.  
//       - Proactively handled technical issues, ensuring smooth application operations and timely project delivery.  
//     `,
//     image: "/images/cyber-skill.png"
//   },
// ];

export default function Experiences() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadExperiences = async () => {
      const data = await fetchExperiences()
      setExperiences(data);
      setLoading(false);
    }
    loadExperiences();
  }, [])
  return (
    <section id="experience" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-content">My Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full mx-auto mt-3"></div>
        </motion.div>

        {/* Experience Grid */}
        {loading ? (
          // Skeleton khi đang tải dữ liệu
          <div className="gap-10">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center p-6 rounded-xl bg-white/5 border border-white/10 animate-pulse"
              >
                {/* Left: Skeleton Image */}
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                  <div className="relative w-full h-24 bg-white/10 rounded-lg"></div>
                </div>

                {/* Right: Skeleton Content */}
                <div className="md:w-2/3 text-center md:text-left">
                  <div className="w-32 h-6 bg-white/20 rounded-md"></div>
                  <div className="w-24 h-4 bg-white/10 rounded-md my-2"></div>
                  <div className="w-full h-4 bg-white/10 rounded-md"></div>
                  <div className="w-2/3 h-4 bg-white/10 rounded-md mt-1"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Hiển thị dữ liệu thật khi load xong
          <div className="gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col md:flex-row items-center p-6 rounded-xl"
              >
                {/* Left: Image */}
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                  <div className="relative w-full h-24">
                    <Image
                      src={`/images/${exp.image}`}
                      alt={exp.company}
                      fill
                      className="object-contain hover:scale-150 transition-all"
                      priority
                    />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="md:w-2/3 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-content">{exp.company}</h3>
                  <p className="text-content/50 text-sm my-2">{exp.time}</p>
                  <p className="text-content/80 whitespace-pre-line">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section >
  );
}
