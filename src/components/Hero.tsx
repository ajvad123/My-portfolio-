import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Canvas animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match container
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = '#4f46e5';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(79, 70, 229, ${1 - distance/100})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      
      connectParticles();
      requestAnimationFrame(animate);
    }

    animate();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle CV download
  const handleDownloadCV = () => {
    // Replace this URL with the actual path to your CV file
    const cvUrl = 'https://drive.google.com/file/d/12YQMDN-FBqxs-gQk_WFGqOXvLuwlhv7p/view';
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'https://drive.google.com/file/d/12YQMDN-FBqxs-gQk_WFGqOXvLuwlhv7p/view';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 mt-16">
        <div className="flex flex-col items-start max-w-3xl">
          <h3 className="text-xl md:text-2xl font-medium text-portfolio-blue mb-2 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Hello, I'm
          </h3>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Mohammad <span className="animated-gradient-text">Ajvad</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Full Stack MERN Developer
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            Building scalable web applications with modern technologies. 
            Experienced in React, Node.js, Express, and MongoDB.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <Button 
              className="bg-portfolio-blue hover:bg-portfolio-blue/90 text-white px-6 py-6" 
              onClick={() => scrollToSection('contact')}
            >
              Get in touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              className="border-portfolio-purple hover:bg-portfolio-purple/10 text-white px-6 py-6 group transition-all duration-300"
              onClick={handleDownloadCV}
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download CV
            </Button>
          </div>
          
          <div className="flex gap-4 animate-fade-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <a 
              href="https://github.com/ajvad123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/20 hover:border-portfolio-blue hover:bg-portfolio-blue/20 transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/Mohammad-Ajvad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/20 hover:border-portfolio-blue hover:bg-portfolio-blue/20 transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:mohammadajvad5@gmail.com"
              className="p-2 rounded-full border border-white/20 hover:border-portfolio-blue hover:bg-portfolio-blue/20 transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;