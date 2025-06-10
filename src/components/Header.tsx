import React, { useState, useEffect } from 'react';
import { BookOpen, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-4 py-3 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-slate-50'
      }`}
    >
      <div className="flex items-center gap-4 text-[#0d151b]">
        <div className="size-4">
          <BookOpen className="w-full h-full" />
        </div>
        <h2 className="text-[#0d151b] text-lg font-bold leading-tight tracking-[-0.015em]">Lonn Obee</h2>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
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

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={() => scrollToSection('contact')}
          className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-3 bg-[#2a8fed] text-slate-50 text-xs font-bold leading-normal tracking-[0.015em] hover:bg-[#1a7fd8] transition-colors"
        >
          <span className="truncate">Book</span>
        </button>
        
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-[#0d151b] hover:text-[#2a8fed] transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-[#e7edf3] md:hidden">
          <nav className="flex flex-col p-4 gap-4">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-[#0d151b] text-sm font-medium leading-normal hover:text-[#2a8fed] transition-colors text-left py-2"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[#0d151b] text-sm font-medium leading-normal hover:text-[#2a8fed] transition-colors text-left py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-[#0d151b] text-sm font-medium leading-normal hover:text-[#2a8fed] transition-colors text-left py-2"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#0d151b] text-sm font-medium leading-normal hover:text-[#2a8fed] transition-colors text-left py-2"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;