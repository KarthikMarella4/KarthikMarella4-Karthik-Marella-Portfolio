import React, { useState, useEffect } from 'react';
import { Menu, Globe, MapPin, Send, Linkedin, Mail, ExternalLink, Download, Award, Github, ArrowUp } from 'lucide-react';
import { Button } from './components/Button';
import { FadeIn } from './components/FadeIn';
import { NavOverlay } from './components/NavOverlay';
import { Marquee } from './components/Marquee';
import { PROJECTS, SKILLS, CERTIFICATIONS, INTERNSHIPS } from './constants';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll listener for navbar styling and progress bar
  useEffect(() => {
    const handleScroll = () => {
      // Navbar background toggle
      setScrolled(window.scrollY > 50);

      // Back to top button visibility
      setShowBackToTop(window.scrollY > 400);

      // Scroll Progress calculation
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-[#F3F3F3] text-black font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden relative">
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1.5 bg-orange-600 z-[60] transition-all duration-150 ease-out origin-left"
        style={{ transform: `scaleX(${scrollProgress})`, width: '100%' }}
      />

      {/* Visual Enhancements */}
      <div className="fixed inset-0 pointer-events-none z-[5] opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* --- Navbar --- */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 flex justify-between items-center px-6 md:px-12 py-6 
        ${scrolled 
          ? 'bg-[#F3FF3F]/90 backdrop-blur-md border-b border-black/5' 
          : 'bg-transparent'
        }`}>
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-6 h-6 bg-black group-hover:rotate-45 transition-transform duration-500"></div>
          <span className="text-2xl font-black tracking-tighter">KARTHIK MARELLA.</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8">
          {['About', 'Skills', 'Projects', 'Internship', 'Resume'].map((item) => (
             <a 
               key={item}
               href={`#${item.toLowerCase()}`} 
               className="text-sm font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4"
             >
               {item}
             </a>
          ))}
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

      <Marquee text="AI Engineer • Machine Learning • LLMs • AI Agents • MLOps • DevOps • Cloud Engineer • n8n Workflows • Generative AI • Open To Work •
" />

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
                  I am an AI & ML enthusiast specializing in building intelligent systems using LLMs, AI agents, and cloud-native technologies. I enjoy designing intuitive, user-focused AI features that solve real problems and improve everyday workflows.
                  I’m constantly exploring emerging AI tools, automation techniques, and workflow orchestration platforms like n8n to build smarter, more efficient systems.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS.map((skill) => (
              <div key={skill.id} className="p-8 border border-white/20 hover:border-orange-500 hover:bg-white/5 transition-all duration-300 group">
                <h3 className="text-3xl font-black text-gray-800 group-hover:text-white transition-colors duration-300 mb-6">0{skill.id}</h3>
                <p className="text-xl font-bold uppercase mb-4 text-orange-500">{skill.title}</p>
                
                {/* Updated Skills Display: Badges instead of simple text string */}
                <div className="flex flex-wrap gap-2">
                  {skill.detail.split('/').map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 text-xs font-mono border border-white/10 rounded-sm hover:bg-orange-600 hover:border-orange-600 transition-colors">
                      {item.trim()}
                    </span>
                  ))}
                </div>
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
                  <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-gray-200 border-2 border-transparent group-hover:border-black transition-all">
                    <div className="absolute inset-0 bg-orange-600 mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                         <div className="bg-white p-2 rounded-full shadow-lg">
                             <ExternalLink size={20} className="text-black" />
                         </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest z-20 text-black border border-black">
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
      <section id="internship" className="py-24 px-6 md:px-12 bg-black text-white border-b border-gray-800 relative overflow-hidden">
        {/* Decorative elements for internship */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
           <FadeIn>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-16 text-right">Internship<br/>Experience</h2>
           </FadeIn>

           <div className="space-y-0">
              {INTERNSHIPS.map((internship) => (
                <FadeIn key={internship.id}>
                  <div className="group flex flex-col md:flex-row gap-8 md:gap-16 py-12 border-t border-gray-800 hover:bg-white/5 transition-colors duration-300 px-4 -mx-4">
                    <div className="md:w-1/3">
                      <span className="text-sm font-bold font-mono bg-white text-black px-2 py-1 inline-block mb-2 transform group-hover:-rotate-2 transition-transform">{internship.period}</span>
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
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block border-2 border-black p-8 hover:bg-black hover:text-white transition-all duration-300 group cursor-pointer hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(234,88,12,1)]">
                  <Award className="w-10 h-10 mb-4 text-orange-600 group-hover:text-white transition-colors" />
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
            <Download className="w-6 h-6 relative top-[1px]" /> 
            <span className="tracking-wide font-semibold">
              Download Resume
            </span>
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

          <div className="bg-[#F3F3F3] p-8 md:p-12 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 border-4 border-black">
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
      <footer className="bg-black text-[#F3F3F3] pt-20 pb-8 px-6 md:px-12 border-t">
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

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-black text-white p-4 transition-all duration-300 z-50 hover:bg-orange-600 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>

    </div>
  );
}