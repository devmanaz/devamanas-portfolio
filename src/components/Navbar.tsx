import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-auto z-50">
      <div 
        className={`transition-all duration-300 rounded-full border px-8 md:px-12 py-3.5 flex items-center justify-between md:min-w-[750px] ${
          isScrolled 
            ? 'bg-[#0f1117]/40 backdrop-blur-xl saturate-150 border-white/15 shadow-2xl shadow-black/50' 
            : 'bg-white/[0.02] backdrop-blur-lg border-white/10'
        }`}
      >
        {/* Left: Logo */}
        <a href="#" className="text-xl font-bold tracking-tight text-white pl-2">
          Devamanas<span className="text-accent">.</span>
        </a>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 pr-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/60 hover:text-white transition-colors text-xs font-semibold tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white/80 pr-2 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[calc(100%+16px)] left-0 w-full bg-[#0f1117]/98 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col gap-6 md:hidden shadow-2xl z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold tracking-widest uppercase text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
