import React, { useState, useEffect } from 'react';
import { BookOpen } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-4 py-3 md:px-10 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-slate-50'
      }`}
    >
      <div className="flex items-center gap-4 text-[#0d151b]">
        <div className="size-4">
          <BookOpen className="w-full h-full" />
        </div>
        <h2 className="text-[#0d151b] text-lg font-bold leading-tight tracking-[-0.015em]">Lonn Obee</h2>
      </div>
      
      <div className="flex flex-1 justify-end gap-2 md:gap-8">
        <nav className="hidden md:flex items-center gap-4 lg:gap-9">
          <button 
            onClick={() => scrollToSection('services')}
            className="text-[#0d151b] text-sm font-medium leading-normal hover:text-[#2a8fed] transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-[#0d151b] text-sm font-medium leading-normal hover:text-[#2a8fed] transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="text-[#0d151b] text-sm font-medium leading-normal hover:text-[#2a8fed] transition-colors"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-[#0d151b] text-sm font-medium leading-normal hover:text-[#2a8fed] transition-colors"
          >
            Contact
          </button>
        </nav>
        
        <button
          onClick={() => scrollToSection('contact')}
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2a8fed] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#1a7fd8] transition-colors"
        >
          <span className="truncate">Book a Consultation</span>
        </button>
      </div>
    </header>
  );
};

export default Header;