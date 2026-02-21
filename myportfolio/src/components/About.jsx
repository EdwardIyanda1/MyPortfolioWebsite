import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <section id="about" className="py-32 bg-[#0a0a0a] border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-8">01. Profile</h2>
            <div className="aspect-[3/4] overflow-hidden bg-zinc-900 rounded-sm">
              <img src="/img/img.png" alt="Edward Iyanda" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80" />
            </div>
          </div>

          <div className="md:col-span-8 md:pt-14">
            <h3 className="text-3xl md:text-5xl text-white font-medium tracking-tighter mb-12">
              Edward Mofifoluwa Iyanda
            </h3>
            
            <div className="flex space-x-8 border-b border-white/10 mb-10">
              {['about', 'experience', 'education'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 uppercase text-xs tracking-widest font-medium transition-colors ${
                    activeTab === tab 
                      ? 'text-white border-b-2 border-white' 
                      : 'text-zinc-600 hover:text-zinc-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="text-zinc-400 font-light leading-relaxed text-lg md:text-xl min-h-[250px]">
              {activeTab === 'about' && (
                <div className="space-y-6 animate-fadeIn">
                  <p>I am a 200-level software engineering student at Lead City University. I specialize in building full-stack applications with a focus on seamless user experiences and robust backend architecture.</p>
                  <p>Working primarily with React Native, Python, Django, and modern JavaScript, I am driven by the intersection of design and complex problem-solving.</p>
                </div>
              )}
              {activeTab === 'experience' && (
                <div className="space-y-10 animate-fadeIn">
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-white font-medium text-xl">Lead City Voices</h4>
                      <span className="text-zinc-500 text-sm">2026 — Present</span>
                    </div>
                    <p className="text-zinc-400">Developing platform features and managing digital multimedia integration for the university's premier media group.</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-white font-medium text-xl">OnShopX</h4>
                      <span className="text-zinc-500 text-sm">Feb 2025 — Feb 2026</span>
                    </div>
                    <p className="text-zinc-400">Architected and developed a full-scale e-commerce platform featuring authenticated flows, responsive design, and dynamic product management.</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-white font-medium text-xl">TechBridgers</h4>
                      <span className="text-zinc-500 text-sm">2022 — 2026</span>
                    </div>
                    <p className="text-zinc-400">Engineered custom web and mobile applications for various businesses, focusing on process automation and digital transformation.</p>
                  </div>
                </div>
              )}
              {activeTab === 'education' && (
                <div className="animate-fadeIn">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-white font-medium text-xl">B.Sc. Software Engineering</h4>
                    <span className="text-zinc-500 text-sm">200 Level</span>
                  </div>
                  <h5 className="text-zinc-300 mb-4">Lead City University</h5>
                  <p className="text-zinc-400">Core focus on software architecture, full-stack web development, and mobile application engineering.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;