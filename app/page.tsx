import Contact from "@/components/contact";
import Experience from "@/components/Experiences";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";

export default function Home() {
   const socialLinks = {
    github: "https://github.com/truongcongtrung2709",
    linkedin: "https://www.linkedin.com/in/trungtruong2709/",
    facebook: "https://www.facebook.com/truongcotrung/"
  }
  return (
    <div className="min-h-screen">
      <Navbar socialLinks={socialLinks} />
      <Hero />
      <Projects/>
      <Skill/>
      <Experience/>
      <Contact/>
      <Footer socialLinks={socialLinks}/>
    </div>
  );
}
