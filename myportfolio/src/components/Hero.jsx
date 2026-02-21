import { FaGithub, FaLinkedinIn, FaTwitter, FaArrowDown, FaReact, FaPython, FaNodeJs, FaAngular, FaVuejs } from 'react-icons/fa';
import { SiNextdotjs, SiVite, SiTypescript } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 bg-[#0a0a0a] text-white relative overflow-hidden">
      
      {/* Senior Dev Touch: Subtle technical grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Section */}
          <div className="md:col-span-7 lg:col-span-8 relative z-20">
            
            <h1 className="text-6xl md:text-8xl lg:text-[8rem] leading-[0.9] font-medium tracking-tighter mb-8">
              EDWARD <br />
              <span className="text-zinc-600">IYANDA.</span>
            </h1>
            
            <div className="max-w-xl mt-12 md:mt-16">
              {/* Senior Dev Touch: Authority Copywriting */}
              <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed mb-10">
                Full-Stack Software Engineer specializing in scalable architectures, robust backend systems, and high-performance digital experiences.
              </p>
              
              <div className="flex items-center gap-6 text-zinc-500 mb-12">
                <a href="https://github.com/edwardiyanda1" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaGithub size={24} /></a>
                <a href="https://www.linkedin.com/in/edwardiyanda" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaLinkedinIn size={24} /></a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaTwitter size={24} /></a>
                <span className="w-12 h-[1px] bg-zinc-800 ml-4"></span>
                <span className="text-zinc-600 text-xs tracking-widest uppercase">Ibadan, NG</span>
              </div>

              {/* Senior Dev Touch: Fast Facts / Metrics */}
              <div className="flex gap-10 border-t border-white/5 pt-8">
                <div>
                  <h4 className="text-3xl font-medium text-white mb-1">04+</h4>
                  <p className="text-zinc-500 text-xs tracking-widest uppercase">Years Exp.</p>
                </div>
                <div>
                  <h4 className="text-3xl font-medium text-white mb-1">20+</h4>
                  <p className="text-zinc-500 text-xs tracking-widest uppercase">Projects</p>
                </div>
                <div>
                  <h4 className="text-3xl font-medium text-white mb-1">99.9%</h4>
                  <p className="text-zinc-500 text-xs tracking-widest uppercase">Commitment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:col-span-5 lg:col-span-4 mt-12 md:mt-0 relative group">
            
            {/* --- THE TECH CONSTELLATION --- */}
            
            {/* React (Top Left) */}
            <div className="absolute -left-6 lg:-left-12 top-[15%] z-30 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transform transition-all duration-700 group-hover:-translate-y-6 group-hover:-translate-x-6">
              <FaReact className="text-[#61DAFB] text-3xl animate-[spin_10s_linear_infinite]" />
            </div>

            {/* Vue.js (Middle Left) */}
            <div className="absolute -left-8 lg:-left-16 top-[45%] z-30 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 w-12 h-12 rounded-full shadow-2xl flex items-center justify-center transform transition-all duration-700 group-hover:-translate-x-8">
              <FaVuejs className="text-[#4FC08D] text-xl" />
            </div>

            {/* TypeScript (Bottom Left) */}
            <div className="absolute -left-4 lg:-left-8 bottom-[20%] z-30 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transform transition-all duration-700 group-hover:translate-y-6 group-hover:-translate-x-6">
              <SiTypescript className="text-[#3178C6] text-2xl" />
            </div>

            {/* Vite (Top Center) */}
            <div className="absolute left-[30%] -top-8 z-30 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 w-12 h-12 rounded-full shadow-2xl flex items-center justify-center transform transition-all duration-700 group-hover:-translate-y-8">
              <SiVite className="text-[#646CFF] text-xl" />
            </div>

            {/* Node.js (Top Right) */}
            <div className="absolute right-0 lg:-right-4 -top-4 z-30 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transform transition-all duration-700 group-hover:-translate-y-6 group-hover:translate-x-6">
              <FaNodeJs className="text-[#339933] text-2xl" />
            </div>

            {/* Next.js (Middle Right) */}
            <div className="absolute -right-8 lg:-right-14 top-[40%] z-30 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transform transition-all duration-700 group-hover:translate-x-8">
              <SiNextdotjs className="text-white text-3xl" />
            </div>

            {/* Python (Bottom Right) */}
            <div className="absolute -right-4 lg:-right-8 bottom-[15%] z-30 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transform transition-all duration-700 group-hover:translate-y-6 group-hover:translate-x-6">
              <FaPython className="text-[#3776AB] text-3xl" />
            </div>

            {/* Angular (Bottom Center) */}
            <div className="absolute right-[30%] -bottom-6 z-30 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 w-12 h-12 rounded-full shadow-2xl flex items-center justify-center transform transition-all duration-700 group-hover:translate-y-8">
              <FaAngular className="text-[#DD0031] text-xl" />
            </div>

            {/* Minimalist offset border accent */}
            <div className="absolute inset-0 border border-zinc-800 translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            
            <div className="aspect-[3/4] overflow-hidden bg-zinc-900 relative z-20">
              <div className="absolute inset-0 bg-[#0a0a0a] opacity-30 group-hover:opacity-0 transition-opacity duration-700 z-10 pointer-events-none"></div>
              
              <img 
                src="/img/img.png" 
                alt="Edward Iyanda" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-10 left-6 text-zinc-600 animate-bounce">
        <a href="#about"><FaArrowDown size={20} className="hover:text-white transition-colors" /></a>
      </div>
    </section>
  );
};

export default Hero;