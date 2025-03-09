'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

const experiences = [
  {
    company: "BIXSO Company: Solutions for Enterprises",
    time: "8/2023 - 2/2025 (1 year 6 months)",
    description: `
      - Built and developed projects using Next.js to create smooth and responsive user experiences.  
      - Collaborated closely with the backend team to integrate RESTful APIs into the front-end application, ensuring consistency and performance.  
      - Utilized Redux to manage application state and enhance data management.  
      - Coordinated with the design team to implement user-friendly and aesthetically pleasing interfaces from Figma designs.  
      - Participated in testing and optimization to improve performance and user experience.  
      - Addressed technical issues, ensuring stable and smooth product operations.  
    `,
    image: "/images/bixso.jpg"
  },
  {
    company: "Cyberskill Company: Digital Transformation Solutions",
    time: "01/2020 - 05/2022 (2 years 5 months)",
    description: `
      - Led front-end development for multiple web applications using Next.js, ensuring optimized and responsive UI.  
      - Worked closely with backend developers to integrate RESTful APIs for seamless data synchronization.  
      - Applied Redux state management, enhancing data flow and application scalability.  
      - Translated Figma mockups into pixel-perfect user interfaces while maintaining design consistency.  
      - Conducted performance tuning and testing, resolving bottlenecks for a better user experience.  
      - Proactively handled technical issues, ensuring smooth application operations and timely project delivery.  
    `,
    image: "/images/cyber-skill.png"
  },
];

export default function Experience() {
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
                    src={exp.image}
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
      </div>
    </section>
  );
}
