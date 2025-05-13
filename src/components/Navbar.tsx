
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed w-full top-0 left-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-md py-4 shadow-md'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold animated-gradient-text">
          AJVAD<span className="text-white">.</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="nav-link capitalize"
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md py-4 shadow-md border-t border-white/10 animate-fade-in">
          <div className="flex flex-col space-y-4 px-4">
            {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="nav-link capitalize py-3"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
