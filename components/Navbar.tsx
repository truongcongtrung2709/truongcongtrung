'use client'

import React, { useState } from 'react'
import { motion } from "framer-motion"
import MenuItem from './MenuItem'
import { Facebook, Github, Linkedin, Menu, X } from 'lucide-react'

const navItems = [
  {name:"About", href:'#about'},
  {name:"Projects", href:'#project'},
  {name:"Skills", href:'#skill'},
  {name:"Experience", href:'#experience'},
  {name:"Contact", href:'#contact'},
]
export default function Navbar  ({ socialLinks }: { socialLinks: { github: string, facebook: string, linkedin: string } }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <motion.nav
      initial={{y:-500}}
      animate={{y:0}}
      className={`fixed w-full z-50 shadow-2xl shadow-primary/10 backdrop-blur-lg bg-background/50 transition-all duration-300 ease-out`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
           <motion.a
            href='#'
            whileHover={{scale:1.05}}
            className='flex items-center gap-2 group'
           >
           <div className="relative h-12 w-12 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-tertiary animate-spin-slow [mask-image:linear-gradient(transparent,white)]" />
              <div className="absolute inset-[2px] bg-background rounded-full flex items-center justify-center">
                <span className="font-bold bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
                  TCT
                </span>
              </div>

            </div>
            <span className="font-semibold text-content/90 group-hover:text-primary transition-colors">
              Trung.
            </span>
           </motion.a>
           {/* Menu Items */}
           <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6 px-4 py-2 rounded-full shadow-lg">
            {navItems.map((navItem,index) =>(
              <MenuItem key={navItem.name} index={index} href={navItem.href}   >{navItem.name}</MenuItem>
            ))}
            </div>
           <div className="h-6 w-px bg-white/10 mx-2">
           </div>
           {/* Social */}
           <div className="flex gap-4">
            <a href={socialLinks.github} target="_blank" className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group">
            <Github className='h-5 w-5 text-content/80 group-hover:text-primary transition-colors'/></a>
            <a href={socialLinks.linkedin} target="_blank" className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group">
            <Linkedin className='h-5 w-5 text-content/80 group-hover:text-primary transition-colors'/></a>
            <a href={socialLinks.facebook} target="_blank" className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group">
            <Facebook className='h-5 w-5 text-content/80 group-hover:text-primary transition-colors'/></a>
           </div>
           </div>
           <button className='md:hidden p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors'
           onClick={()=> setIsMenuOpen(!isMenuOpen)}
           >
            {isMenuOpen ? (
              <X className='h-6 w-6 text-content/80'/>
            ):(
              <Menu className='h-6 w-6 text-content/80'/>
            )}
           </button>
        </div>
        {isMenuOpen &&(
          <motion.div className='md:hidden mt-4 pb-4 space-y-4'>
            {
              navItems.map((item)=> (
                <a 
                className='block px-4 py-2 text-content/80 hover:text-primary hover:bg-white/5 rounded-lg transition-colors'
                key={item.name} 
                href={item.href}
                onClick={()=> setIsMenuOpen(false)}
                >{item.name}
                </a>
              ))
            }
            <div className="pt-4 border-t border-white/5 flex gap-4">
            <a href={socialLinks.github} target="_blank" className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group">
            <Github className='h-5 w-5 text-content/80 group-hover:text-primary transition-colors'/></a>
            <a href={socialLinks.linkedin} target="_blank" className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group">
            <Linkedin className='h-5 w-5 text-content/80 group-hover:text-primary transition-colors'/></a>
            <a href={socialLinks.facebook} target="_blank" className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group">
            <Facebook className='h-5 w-5 text-content/80 group-hover:text-primary transition-colors'/></a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>  )
}
