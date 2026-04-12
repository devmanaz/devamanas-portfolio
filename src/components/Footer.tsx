import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 backdrop-blur-sm bg-white/[0.02]">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-center text-center md:text-left">
        
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="text-2xl font-bold tracking-tighter text-white mb-2">
            Devamanas<span className="text-accent">.</span>
          </a>
          <p className="text-white/50 text-sm font-medium">Content. Strategy. Growth.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/devamanashere/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all">
            <Instagram size={20} />
          </a>
          <a href="https://www.linkedin.com/in/devamanas/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all">
            <Linkedin size={20} />
          </a>
          <a href="mailto:devamanashere@gmail.com" className="p-3 bg-white/5 rounded-full border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Devamanas. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
