import { FaGithub, FaLinkedinIn, FaTwitter, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Section */}
          <div className="md:col-span-7 lg:col-span-8 relative z-20">
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs font-medium mb-6 ml-1">
              Based in Ibadan, Nigeria
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-[8rem] leading-[0.9] font-medium tracking-tighter mb-8">
              EDWARD <br />
              <span className="text-zinc-600">IYANDA.</span>
            </h1>
            
            <div className="max-w-xl mt-12 md:mt-16">
              <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed mb-10">
                Software Engineering Student & Developer focused on building scalable, sophisticated digital experiences and full-stack applications.
              </p>
              
              <div className="flex items-center gap-6 text-zinc-500">
                <a href="https://github.com/edwardiyanda1" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaGithub size={24} /></a>
                <a href="https://www.linkedin.com/in/edwardiyanda" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaLinkedinIn size={24} /></a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaTwitter size={24} /></a>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:col-span-5 lg:col-span-4 mt-12 md:mt-0 relative group">
            
            {/* Floating Code Icon 1 (Top Left) */}
            <div className="absolute -left-6 lg:-left-10 top-1/4 z-30 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 rounded-sm shadow-2xl transform transition-transform duration-700 group-hover:-translate-y-4 group-hover:-translate-x-2">
              <span className="font-mono text-zinc-300 font-medium tracking-widest text-sm">&lt;/&gt;</span>
            </div>

            {/* Floating Code Icon 2 (Bottom Right) */}
            <div className="absolute -right-4 lg:-right-8 bottom-1/4 z-30 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 rounded-sm shadow-2xl transform transition-transform duration-700 group-hover:translate-y-4 group-hover:translate-x-2">
              <span className="font-mono text-zinc-300 font-medium tracking-widest text-sm">&#123; : &#125;</span>
            </div>

            {/* Minimalist offset border accent */}
            <div className="absolute inset-0 border border-zinc-800 translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            
            <div className="aspect-[3/4] overflow-hidden bg-zinc-900 relative z-20">
              {/* Subtle dark overlay that fades out on hover */}
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