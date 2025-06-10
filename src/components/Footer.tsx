import React from 'react';
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="flex justify-center border-t border-[#e7edf3] mt-10">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <div className="flex flex-col gap-6 px-5 py-10 text-center @container">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-[#4c749a] hover:text-[#2a8fed] transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-[#4c749a] hover:text-[#2a8fed] transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-[#4c749a] hover:text-[#2a8fed] transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-[#4c749a] hover:text-[#2a8fed] transition-colors">
              <Facebook size={24} />
            </a>
          </div>
          <p className="text-[#4c749a] text-base font-normal leading-normal">© 2025 Lonn Obee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;