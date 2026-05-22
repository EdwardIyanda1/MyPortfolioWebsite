import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        // Fetch your repositories, sorted by most recently updated
        const response = await fetch('https://api.github.com/users/EdwardIyanda1/repos?sort=updated&per_page=12');
        
        if (!response.ok) {
          throw new Error('Failed to fetch from GitHub API');
        }

        const data = await response.json();
        
        // Filter out forks and map the GitHub data to fit our premium UI structure
        const formattedProjects = data
          .filter(repo => !repo.fork)
          .map(repo => ({
            id: repo.id,
            // Format name to look cleaner (replace hyphens/underscores with spaces)
            title: repo.name.replace(/[-_]/g, ' '),
            type: repo.homepage ? "Live Application" : "Open Source Repository",
            description: repo.description || "A custom software solution focusing on robust architecture and seamless execution.",
            tech: repo.language || "Multi-Language / Configuration",
            link: repo.html_url,
            preview: repo.homepage || null // Pulls from the 'Website' field in GitHub repo settings
          }));

        setProjects(formattedProjects);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
        // Fallback data just in case the API rate limits or fails
        setProjects([
          {
            id: 1,
            title: "OnShopX",
            type: "E-Commerce",
            description: "A full-scale e-commerce platform with authenticated flows and responsive architecture.",
            tech: "JavaScript",
            link: "https://github.com/edwardiyanda1/OnShopX",
            preview: "https://onshopx.vercel.app/"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubRepos();
  }, []);

  return (
    <section id="projects" className="py-32 bg-[#0a0a0a] border-t border-white/10">
      <div className="container mx-auto px-6">
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-16">03. Selected Work</h2>

        {loading ? (
          // Elegant Loading State
          <div className="flex justify-center items-center py-20 text-zinc-500 tracking-widest uppercase text-sm animate-pulse">
            Fetching Repositories...
          </div>
        ) : (
          <div className="flex flex-col space-y-24">
            {projects.map((project) => (
              <div key={project.id} className="group block">
                <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
                  
                  {/* Visual Live Preview for Project */}
                  <a href={project.preview || project.link} target="_blank" rel="noreferrer" className="md:col-span-7 bg-zinc-900 aspect-video overflow-hidden rounded-sm relative block cursor-pointer">
                     {/* Dark overlay that fades on hover */}
                     <div className="absolute inset-0 bg-[#0a0a0a] opacity-40 group-hover:opacity-0 transition-opacity duration-700 z-20 pointer-events-none"></div>
                     
                     {/* Live Iframe Wrapper with hover scaling */}
                     <div className="relative w-full h-full overflow-hidden bg-zinc-800 scale-100 group-hover:scale-105 transition-transform duration-1000 origin-center">
                       {project.preview ? (
                         /* Desktop Force Trick: Shrinks a massive iframe down to fit */
                        <iframe 
                        src={project.preview} 
                        title={`${project.title} Live Preview`}
                        className="w-full h-full border-0 bg-white"
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
                      <h3 className="text-4xl md:text-5xl text-white font-medium tracking-tighter mb-6 group-hover:text-zinc-300 transition-colors cursor-pointer capitalize">
                        {project.title}
                      </h3>
                    </a>
                    <p className="text-zinc-400 font-light text-lg mb-8 leading-relaxed line-clamp-3">
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
        )}
      </div>
    </section>
  );
};

export default Projects;