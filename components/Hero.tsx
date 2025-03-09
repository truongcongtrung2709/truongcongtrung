'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100])
  return (
    <section className='min-h-[800px] relative overflow-hidden bg-[url(/bg.jpg)] bg-cover bg-center bg-no-repeat
'>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="max-w-7xl mx-auto px-6 pt-32 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div className="relative lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-6'
            >
              Front-End

              <br />

              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className='bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent'
              >
                Developer
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className='text-xl text-content/80 mb-8'
            >
              <p className='mb-4'>
                Hey there! I&apos;m Trung, a developer skilled in Next.js, React, and TypeScript, crafting seamless interfaces and integrating APIs effortlessly.
              </p>
              <div className="flex items-center text-base">
                <p>Short-term goal: Expanding knowledge and deepening technical expertise.</p>
                <p>Long-term goal: Becoming a Fullstack Developer and taking on leadership roles.</p>

              </div>

            </motion.div>

            <motion.a
              href='/cv.pdf'
              target='_blank'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className='relative overflow-hidden px-8 py-4 rounded-full bg-surface hover:border-primary/30 transition-all hover:bg-gradient-to-r  from-tertiary  to-primary opacity-0 group-hover:opacity-100 group'
            >
              <span className=' text-content group-hover:text-black transition-colors'>My CV</span>
              <div className="absolute  "></div>
            </motion.a>

          </motion.div>
          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className='lg:w-1/2 relative'
            style={{ y }}
          >
            <div className='relative w-full aspect-square group'>
              {/* Animated Border */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}

              >

              </motion.div>
              {/* Floating Animation */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className='relative w-full aspect-square rounded-3xl overflow-hidden border border-white/10 bg-surface backdrop-blur-sm'
              >
                <Image src="/portfolio.jpg"
                  alt="Avatar"
                  fill
                  className='object-cover scale-110 group-hover:scale-100 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.6
                  }}
                  className='absolute bottom-8 left-8'
                >
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero