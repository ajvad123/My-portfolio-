import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projectsData = [
  {
    title: 'GrandGathering',
    description: 'Event Management Web Site using MERN stack with jwt, multer, nodemailer, and more.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/ajvad123/GrandGathering',
    demo: 'https://spiffy-arithmetic-382d7d.netlify.app/'
  },
  {
    title: 'Redux-Cart',
    description: 'A simple e-commerce store with features like user management, Cart, Wishlist, orders etc.',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
    github: 'https://github.com/ajvad123/reduxCart',
    demo: 'https://gentle-pixie-9eb3ee.netlify.app/'
  },
  {
    title: 'Media player',
    description: 'Explores media player for YouTube video upload and management with video, category management, and history tracking.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/ajvad123/react_mp3',
    demo: 'https://media-player-demo.netlify.app'
  },
  {
    title: 'IT Consulting Company',
    description: 'IT Consulting Company web Application Using MERN STACK.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/ajvad123',
    demo: 'https://ajvad123.github.io/ITConsultancy-/'
  },
  {
    title: 'Daralsuraa',
    description: 'Ladies Garment Boutique Website for a shop in UAE created using React.js and React Bootstrap.',
    tags: ['React', 'Bootstrap', 'CSS'],
    github: 'https://github.com/ajvad123/daralsuraa',  // Update with correct link
    demo: 'https://daralsuraa.com'
  },
  {
    title: 'HappyEnglish',
    description: 'Accounting software for an online English institute built with React frontend and Python & MySQL backend.',
    tags: ['React', 'Python', 'MySQL'],
    github: 'https://github.com/ajvad123/happyEnglish',  // Update with correct link
    demo: 'https://happyenglish-demo.netlify.app'
  },
];

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // State for the floating button position and animation
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Animation for the floating button
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setPosition({
          x: Math.sin(Date.now() / 1000) * 10,
          y: Math.cos(Date.now() / 1500) * 10
        });
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="projects" className="py-20 relative">
      {/* Floating Latest Project Button */}
      <div
        className={`fixed bottom-10 right-10 z-50 ${inView ? 'animate-fade-in' : 'opacity-0'}`}
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.5s ease-out'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Button
          onClick={() => window.open('https://cirton.netlify.app/', '_blank', 'noopener,noreferrer')}
          className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple hover:shadow-lg hover:shadow-portfolio-purple/30 transition-all duration-300 group px-6 py-6 rounded-full"
        >
          <span className="flex items-center">
            <Sparkles className="h-5 w-5 mr-2 text-yellow-300 animate-pulse" />
            <span>Check Out My Latest Task!</span>
            <ExternalLink className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Button>
      </div>

      {/* Latest Project Banner */}
      <div className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple mb-12 py-4 px-6 rounded-lg mx-auto max-w-4xl shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Sparkles className="h-6 w-6 text-yellow-300 animate-pulse mr-3" />
            <h3 className="text-xl font-bold text-white">New Project: Wep Application For a Travel Company</h3>
          </div>
          <Button 
            onClick={() => window.open('https://cirton.netlify.app/', '_blank', 'noopener,noreferrer')}
            className="bg-white text-portfolio-purple hover:bg-gray-100 transition-all"
          >
            View Project <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <h2 className={`section-heading ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projectsData.map((project, index) => (
            <div 
              key={project.title}
              className={`project-card ${inView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Project Image placeholder - would be replaced with actual images */}
              <div className="h-48 bg-gradient-to-br from-portfolio-blue to-portfolio-purple/50 flex items-center justify-center">
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="border-portfolio-purple text-white">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3 mt-4">
                  {project.github && (
                    <Button 
                      variant="ghost" 
                      className="hover:bg-portfolio-blue/20" 
                      size="sm"
                      onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.demo && (
                    <Button 
                      variant="ghost" 
                      className="hover:bg-portfolio-purple/20" 
                      size="sm"
                      onClick={() => window.open(project.demo, '_blank', 'noopener,noreferrer')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-12 text-center ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <Button 
            onClick={() => window.open('https://github.com/ajvad123')}
            className="bg-portfolio-purple hover:bg-portfolio-purple/90"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;