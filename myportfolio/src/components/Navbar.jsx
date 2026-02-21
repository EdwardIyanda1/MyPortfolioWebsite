import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <div className="text-lg font-medium text-white tracking-tighter uppercase">
          E. Iyanda
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-zinc-400 text-sm uppercase tracking-widest font-medium">
          <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#skills" className="hover:text-white transition-colors">Expertise</a></li>
          <li><a href="#projects" className="hover:text-white transition-colors">Work</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-zinc-400 hover:text-white text-xl transition-colors" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 absolute w-full left-0 top-full">
          <ul className="flex flex-col px-6 py-8 space-y-6 text-zinc-400 text-xs uppercase tracking-widest font-medium">
            <li><a href="#about" onClick={toggleMenu} className="block hover:text-white">About</a></li>
            <li><a href="#skills" onClick={toggleMenu} className="block hover:text-white">Expertise</a></li>
            <li><a href="#projects" onClick={toggleMenu} className="block hover:text-white">Work</a></li>
            <li><a href="#contact" onClick={toggleMenu} className="block hover:text-white">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;