import React, { useState, useEffect } from 'react';
import { Menu, Globe, MapPin, Send, Linkedin, Mail, ExternalLink, Download, Award, Github } from 'lucide-react';
import { Button } from './components/Button';
import { FadeIn } from './components/FadeIn';
import { NavOverlay } from './components/NavOverlay';
import { Marquee } from './components/Marquee';
import { PROJECTS, SKILLS, CERTIFICATIONS, INTERNSHIPS } from './constants';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener for navbar styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F3F3F3] text-black font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      
      {/* --- Navbar --- */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 flex justify-between items-center px-6 md:px-12 py-6 ${scrolled ? 'bg-[#F3FF3F]/90 backdrop-blur-md border-b border-black/5' : 'bg-transparent'}`}>
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-6 h-6 bg-black group-hover:rotate-45 transition-transform duration-500"></div>
          <span className="text-2xl font-black tracking-tighter">KARTHIK MARELLA.</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8">
          <a href="#about" className="text-sm font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4">About</a>
          <a href="#skills" className="text-sm font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4">Skills</a>
          <a href="#projects" className="text-sm font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4">Projects</a>
          <a href="#internship" className="text-sm font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4">Internship</a>
          <a href="#resume" className="text-sm font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4">Resume</a>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <button onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      <NavOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* --- Hero Section --- */}
      <header className="relative px-6 md:px-12 pt-32 pb-12">
        <div className="max-w-7xl w-full mx-auto">
          <FadeIn delay={200}>
            <div className="flex flex-col md:flex-row justify-end items-start md:items-end gap-8">
              <div className="flex flex-col items-end gap-6">
                <div className="flex gap-4">
                   <span className="animate-bounce">↓</span>
                   <span className="font-mono text-sm">SCROLL TO EXPLORE</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </header>

      <Marquee text="AI RESEARCHER • CLOUD ENGINEER • MACHINE LEARNING • ARTIFICIAL INTELLIGENCE • OPEN TO WORK •" />

      {/* --- About Section --- */}
      <section id="about" className="py-24 px-6 md:px-12 border-b border-black bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Title */}
          <div className="md:col-span-4">
            <FadeIn>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">About<br/>Me</h2>
            </FadeIn>
          </div>

          {/* Bio Text */}
          <div className="md:col-span-8">
            <FadeIn delay={200}>
               <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed text-gray-800 border-l-4 border-orange-600 pl-6">
                 <p>
                   I am an AI & ML Enthusiast passionate about building intelligent systems powered by large language models, autonomous AI agents, and cloud-native platforms. I design, deploy, and optimize end-to-end machine learning workflows with DevOps precision, ensuring they are scalable, reliable, and ready for real-world use.
                   My goal is to bridge the gap between theoretical AI concepts and practical, user-centric applications—transforming complex ideas into intelligent, production-ready solutions that create meaningful impact. 
                 </p>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- Skills (Formerly Services) --- */}
      <section id="skills" className="bg-black text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-4">SKILLS & EXPERTISE</h2>
              <p className="text-gray-400 max-w-xl">Leveraging cutting-edge technology to build robust intelligent systems.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-gray-800">
            {SKILLS.map((skill) => (
              <div key={skill.id} className="p-8 border-b md:border-b-0 lg:border-r border-gray-800 last:border-r-0 hover:bg-white/5 transition-colors duration-300 group">
                <h3 className="text-5xl font-black text-gray-800 group-hover:text-white transition-colors duration-300 mb-4">0{skill.id}</h3>
                <p className="text-xl font-bold uppercase mb-2">{skill.title}</p>
                <p className="font-mono text-orange-500 text-sm">{skill.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Projects (Formerly Work) --- */}
      <section id="projects" className="py-24 px-6 md:px-12 border-b border-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <FadeIn>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">Projects</h2>
            </FadeIn>
            <div className="hidden md:block">
              <Button variant="outline" onClick={() => window.open('https://github.com/KarthikMarella4', '_blank')}>View GitHub</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12">
            {PROJECTS.map((project, index) => (
              <FadeIn key={project.id} delay={index * 100}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="group block cursor-pointer">
                  <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-gray-200">
                    <div className="absolute inset-0 bg-orange-600 mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                         <div className="bg-white p-2 rounded-full">
                             <ExternalLink size={20} />
                         </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest z-20">
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-start border-b border-black pb-2 mb-2">
                       <span className="text-sm font-mono font-bold">{project.role}</span>
                       <span className="text-sm font-mono font-bold text-orange-600">{project.year}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black uppercase leading-none group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 mt-2 max-w-md">{project.description}</p>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- Internship Section --- */}
      <section id="internship" className="py-24 px-6 md:px-12 bg-black text-white border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
           <FadeIn>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-16 text-right">Internship<br/>Experience</h2>
           </FadeIn>

           <div className="space-y-0">
              {INTERNSHIPS.map((internship) => (
                <FadeIn key={internship.id}>
                  <div className="group flex flex-col md:flex-row gap-8 md:gap-16 py-12 border-t border-gray-800 hover:bg-white/10 transition-colors duration-300 px-4 -mx-4">
                    <div className="md:w-1/3">
                      <span className="text-sm font-bold font-mono bg-white text-black px-2 py-1 inline-block mb-2">{internship.period}</span>
                      <h3 className="text-3xl font-black uppercase">{internship.company}</h3>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-bold mb-4 text-orange-600 uppercase tracking-widest">{internship.role}</h4>
                      
                      {Array.isArray(internship.description) ? (
                        <ul className="list-disc list-outside ml-5 space-y-2 text-lg font-medium text-gray-400 max-w-2xl">
                          {internship.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-lg font-medium text-gray-400 max-w-2xl">{internship.description}</p>
                      )}

                    </div>
                  </div>
                </FadeIn>
              ))}
           </div>
        </div>
      </section>

      {/* --- Certifications Section --- */}
      <section id="certifications" className="py-24 px-6 md:px-12 bg-white border-b border-black">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-4 uppercase">Certifications</h2>
              <p className="text-gray-600 max-w-xl">Professional credentials validating cloud and AI expertise.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CERTIFICATIONS.map((cert) => (
              <FadeIn key={cert.id} delay={cert.id * 100}>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block border-2 border-black p-8 hover:bg-black hover:text-white transition-colors duration-300 group cursor-pointer">
                  <Award className="w-10 h-10 mb-4 text-orange-600" />
                  <h3 className="text-2xl font-black uppercase leading-tight mb-2">{cert.title}</h3>
                  <p className="font-mono text-sm font-bold text-gray-500 group-hover:text-gray-400">{cert.issuer}</p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- Resume Section --- */}
     <section id="resume" className="py-32 px-6 md:px-12 text-center">
  <FadeIn>
    <div className="max-w-3xl mx-auto space-y-8">
      <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
        Ready to see the<br/>Full Picture?
      </h2>

      <div className="flex justify-center">
        <Button
          asChild
          variant="primary"
          className="text-lg px-12 py-6 flex items-center justify-center gap-3"
        >
          <a
            href="Karthik_Marella_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3"
          >
            <Download className="w-6 h-6" />
            <span>Download Resume</span>
          </a>
        </Button>
      </div>
    </div>
  </FadeIn>
</section>




      {/* --- Contact Section --- */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-orange-600 text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <FadeIn>
              <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-12 leading-none">
                Let's<br/>Work<br/>Together
              </h2>
            </FadeIn>
            <p className="text-xl font-medium mb-8 max-w-md">
                
            </p>
            
          </div>

          <div className="bg-[#F3F3F3] p-8 md:p-12 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
             <div className="space-y-12">
                <div className="flex items-start gap-6">
                  <Send className="w-8 h-8 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-black uppercase mb-2">Get in Touch</h3>
                    <a href="mailto:karthikmarella24@gmail.com" className="text-lg font-medium hover:text-orange-600 transition-colors">
                      karthikmarella24@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <MapPin className="w-8 h-8 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-black uppercase mb-2">Based In</h3>
                    <p className="text-lg font-medium leading-tight">
                      Hyderabad, India<br />
                      Available for Remote Work
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <Globe className="w-8 h-8 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-black uppercase mb-2">Connect</h3>
                    <div className="flex gap-4 mt-2">
                        <a href="https://www.linkedin.com/in/karthik-marella24" target="_blank" rel="noopener noreferrer" className="font-mono font-bold border-b-2 border-transparent hover:border-black transition-colors">LINKEDIN</a>
                        <a href="https://github.com/KarthikMarella4" target="_blank" rel="noopener noreferrer" className="font-mono font-bold border-b-2 border-transparent hover:border-black transition-colors">GITHUB</a>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-black text-[#F3F3F3] pt-20 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="space-y-8">
            <div className="text-5xl font-black tracking-tighter">KARTHIK MARELLA.</div>
            <div className="flex gap-6 items-center">
              <a href="https://www.linkedin.com/in/karthik-marella24" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <Linkedin className="w-6 h-6 hover:text-orange-600 cursor-pointer transition-colors" />
              </a>
              <a href="https://github.com/KarthikMarella4" target="_blank" rel="noopener noreferrer" title="GitHub">
                <Github className="w-6 h-6 hover:text-orange-600 cursor-pointer transition-colors" />
              </a>
              <a href="https://medium.com/@karthikmarella24" target="_blank" rel="noopener noreferrer" title="Medium">
                <svg className="w-6 h-6 hover:text-orange-600 cursor-pointer transition-colors fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
              <a href="mailto:karthikmarella24@gmail.com" title="Email">
                <Mail className="w-6 h-6 hover:text-orange-600 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-600">
           <p>&copy; 2025 KARTHIK MARELLA. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}