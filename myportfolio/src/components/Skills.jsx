import { FaArrowRight } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { 
      category: "Core Languages", 
      items: "JavaScript (ES6+), TypeScript, Python, HTML5/CSS3" 
    },
    { 
      category: "Frontend Architecture", 
      items: "React, Next.js, Vue.js, Angular, Tailwind CSS" 
    },
    { 
      category: "Backend & Systems", 
      items: "Node.js, Django, RESTful APIs, Firebase" 
    },
    { 
      category: "Mobile & Tooling", 
      items: "React Native, Expo, Vite, Git, System Architecture" 
    }
  ];

  return (
    <section id="skills" className="py-32 bg-[#0a0a0a] border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h2 className="text-sm uppercase tracking-widest text-zinc-500">02. Expertise</h2>
          </div>
          
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 border-t border-white/10">
              {skills.map((skill, index) => (
                <div key={index} className="group flex flex-col md:flex-row md:items-center py-8 border-b border-white/10 hover:bg-white/5 transition-colors cursor-default relative overflow-hidden">
                  
                  <h3 className="text-white text-xl md:text-2xl font-medium tracking-tighter w-1/3 mb-4 md:mb-0 pl-4 group-hover:pl-6 transition-all duration-300">
                    {skill.category}
                  </h3>
                  
                  <p className="text-zinc-400 font-light text-lg pl-4 md:pl-0 flex-grow">
                    {skill.items}
                  </p>

                  {/* Subtle interactive arrow that fades and slides in on hover */}
                  {/* <div className="hidden md:flex items-center justify-end pr-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <FaArrowRight className="text-zinc-500" />
                  </div> */}
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;