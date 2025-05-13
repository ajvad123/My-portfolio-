
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/80 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold animated-gradient-text mb-2">
              AJVAD<span className="text-white">.</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Full Stack MERN Developer specializing in building exceptional digital experiences.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/ajvad123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-portfolio-blue/20 hover:text-portfolio-blue transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/Mohammad-Ajvad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-portfolio-blue/20 hover:text-portfolio-blue transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:mohammadajvad5@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-portfolio-blue/20 hover:text-portfolio-blue transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Mohammad Ajvad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
