const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] pt-32 pb-12 border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <h2 className="text-[12vw] leading-none font-medium tracking-tighter text-zinc-800 select-none">
              IYANDA.
            </h2>
          </div>
          
          <div className="flex flex-col space-y-4 text-right">
            <a href="https://github.com/edwardiyanda1" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white text-sm tracking-widest uppercase transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/edwardiyanda" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white text-sm tracking-widest uppercase transition-colors">LinkedIn</a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white text-sm tracking-widest uppercase transition-colors">Twitter</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 text-zinc-600 text-xs tracking-widest uppercase">
          <p>&copy; {currentYear} Edward Iyanda.</p>
          <p className="mt-4 md:mt-0">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;