import { Facebook, Github, Linkedin } from 'lucide-react'



export default function Footer({ socialLinks }: { socialLinks: { github: string, facebook: string, linkedin: string } }) {
  return (
    <footer className=" border-t border-gray800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6
         lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <p className="text-gray-400">
              Crafting seamless digital experiences where innovation meets elegant design.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#project" className="text-gray-400
                         hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skill" className="text-gray-400
                         hover:text-white transition-colors">Skills</a></li>
              <li><a href="#" className="text-gray-400
                         hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400
                         hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href={socialLinks.github} target="_blank" className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group">
                <Github className='h-5 w-5 text-content/80 group-hover:text-primary transition-colors' /></a>
              <a href={socialLinks.linkedin} target="_blank" className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group">
                <Linkedin className='h-5 w-5 text-content/80 group-hover:text-primary transition-colors' /></a>
              <a href={socialLinks.facebook} target="_blank" className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group">
                <Facebook className='h-5 w-5 text-content/80 group-hover:text-primary transition-colors' /></a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Trung Truong. All rights reserved
            </p>
          </div>
        </div>

      </div>

    </footer>
  )
}