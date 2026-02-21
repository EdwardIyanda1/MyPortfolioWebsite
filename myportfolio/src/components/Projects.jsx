import { FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "OnShopX",
      type: "E-Commerce",
      description: "A full-scale e-commerce platform with authenticated flows and responsive architecture.",
      tech: "JavaScript / HTML / CSS & Django / Python",
      link: "https://github.com/edwardiyanda1/OnShopX",
      preview: "https://onshopx.vercel.app/"
    },
    {
      title: "Lead City Voices",
      type: "Application",
      description: "Digital platform for student media, featuring program tracking and media distribution.",
      tech: "React Native & Django / Fullstack",
      link: "https://github.com/edwardiyanda1/lead-city-voices",
      preview: "https://lead-city-voices.vercel.app/"
    },
    {
      title: "LeatheredByB",
      type: "Brand Website",
      description: "Dynamic catalog and filtering system for a premium leather goods manufacturer.",
      tech: "Django / Python",
      link: "https://github.com/edwardiyanda1/leatherdbyb",
      preview: "https://leatheredbyb.onrender.com/"
    },
    {
      title: "BloodDeck",
      type: "Social Initiative",
      description: "Application developed for the Hult Prize 2026 competition focusing on social impact.",
      tech: "Python & React ",
      link: "https://github.com/edwardiyanda1"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-[#0a0a0a] border-t border-white/10">
      <div className="container mx-auto px-6">
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-16">03. Selected Work</h2>

        <div className="flex flex-col space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="group block">
              <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
                
                {/* Visual Live Preview for Project */}
                <a href={project.preview || project.link} target="_blank" rel="noreferrer" className="md:col-span-7 bg-zinc-900 aspect-video overflow-hidden rounded-sm relative block cursor-pointer">
                   {/* Dark overlay that fades on hover */}
                   <div className="absolute inset-0 bg-[#0a0a0a] opacity-40 group-hover:opacity-0 transition-opacity duration-700 z-20 pointer-events-none"></div>
                   
                   {/* Live Iframe Wrapper with hover scaling */}
                   <div className="relative w-full h-full overflow-hidden bg-zinc-800 scale-100 group-hover:scale-105 transition-transform duration-1000 origin-center">
                     {project.preview ? (
                       /* Desktop Force Trick:
                          w-[400%] h-[400%] makes the iframe 4x larger.
                          scale-[0.25] shrinks it back down to fit exactly into the container.
                       */
                       <iframe 
                         src={project.preview} 
                         title={`${project.title} Live Preview`}
                         className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] border-0 pointer-events-none bg-white"
                         loading="lazy"
                         sandbox="allow-scripts allow-same-origin"
                       />
                     ) : (
                       <div className="w-full h-full flex items-center justify-center text-zinc-700 tracking-widest uppercase text-sm font-medium">
                         Live Preview Unavailable
                       </div>
                     )}
                   </div>
                </a>

                {/* Project Details */}
                <div className="md:col-span-5 flex flex-col justify-center h-full">
                  <span className="text-zinc-500 text-xs tracking-widest uppercase mb-4">{project.type}</span>
                  <a href={project.preview || project.link} target="_blank" rel="noreferrer">
                    <h3 className="text-4xl md:text-5xl text-white font-medium tracking-tighter mb-6 group-hover:text-zinc-300 transition-colors cursor-pointer">
                      {project.title}
                    </h3>
                  </a>
                  <p className="text-zinc-400 font-light text-lg mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Footer with Tech Stack and Links */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-6">
                    <span className="text-zinc-500 text-sm tracking-wide">{project.tech}</span>
                    
                    <div className="flex space-x-4">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors" title="View Source">
                          <FaGithub size={20} />
                        </a>
                      )}
                      {project.preview && (
                        <a href={project.preview} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors" title="Live Preview">
                          <FaExternalLinkAlt size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;