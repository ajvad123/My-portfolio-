
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    name: 'Front End',
    skills: [
      { name: 'ReactJS', level: 90 },
      { name: 'Redux', level: 85 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Bootstrap', level: 90 },
      { name: 'Angular', level: 75 },
    ]
  },
  {
    name: 'Back End',
    skills: [
      { name: 'NodeJS', level: 88 },
      { name: 'ExpressJS', level: 85 },
      { name: 'MongoDB', level: 90 },
      { name: 'RESTful API', level: 92 },
      { name: 'Python', level: 70 },
    ]
  },
  {
    name: 'Other Skills',
    skills: [
      { name: 'Git', level: 80 },
      { name: 'AWS (EC2)', level: 75 },
      { name: 'Netlify', level: 85 },
      { name: 'Render', level: 80 },
      { name: 'MySQL', level: 75 },
    ]
  }
];

const SkillBar = ({ name, level, inView, delay }: { name: string; level: number; inView: boolean; delay: number }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setWidth(level);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [inView, level, delay]);
  
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-gray-400">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{ '--width': `${width}%`, transitionDelay: `${delay}ms` } as React.CSSProperties}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className={`section-heading ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.name}
              className={`bg-secondary rounded-lg p-6 border border-white/10 ${inView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <div className="w-3 h-3 rounded-full bg-portfolio-purple mr-2"></div>
                {category.name}
              </h3>
              
              {category.skills.map((skill, skillIndex) => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  level={skill.level} 
                  inView={inView}
                  delay={300 + (categoryIndex * 200) + (skillIndex * 100)}
                />
              ))}
            </div>
          ))}
        </div>
        
        <div className={`mt-16 p-6 bg-portfolio-indigo/10 border border-white/10 rounded-lg ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <h3 className="text-xl font-bold mb-4 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'HTML5', 'CSS3', 'Bootstrap', 'Git', 'AWS', 'REST API'].map((tech, i) => (
              <div
                key={tech}
                className="px-4 py-2 bg-secondary/80 rounded-lg border border-white/10 hover:border-portfolio-purple transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${1 + (i * 0.1)}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
