'use client'

import React from 'react'
import { motion } from 'framer-motion';

const MenuItem = ({children,href,index} : {children:React.ReactNode;index:number;href:string;
}) => {
  return (
    <motion.a
      href={href}
      initial={{opacity:0, y:-20}}
      animate={{y:0,opacity:1}}
      whileHover={{scale:1.05}}
      whileTap={{scale:0.95}}

      transition={{
        delay:index * 0.1,
        duration:0.3,
        ease:"easeOut"
      }}
    className='relative overflow-hidden px-2 py-1'>
      <span className='text-content/80 hover:text-primary transition-colors'>{children}</span>
    </motion.a>
  )
}

export default MenuItem