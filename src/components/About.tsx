
import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className={`section-heading ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          About Me
        </h2>
        
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-6">
              As a Full Stack Web Developer with over a year of experience at Zenox Software, 
              I have been instrumental in building the company's web development processes, 
              creating scalable client solutions, and mentoring aspiring developers through 
              the EduZenox training program.
            </p>
            <p className="text-lg mb-6">
              Proficient in JavaScript, React.js, Node.js, Express.js, and MongoDB, 
              I specialize in developing responsive front-end applications and robust 
              back-end systems to meet business needs.
            </p>
            <p className="text-lg">
              I'm passionate about creating efficient, user-friendly applications that solve 
              real-world problems. My background in education as a tuition teacher has given 
              me strong communication skills, which help me collaborate effectively in team settings.
            </p>
          </div>
          
          <div className="flex flex-col space-y-6">
            <div className="bg-secondary rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-portfolio-blue mr-2"></span>
                Education
              </h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-medium">B.voc Software Development</h4>
                  <p className="text-gray-400">St.Michael's college cherthala</p>
                  <p className="text-sm text-gray-500">2020 – 2023 | Alappuzha, India</p>
                </li>
                <li>
                  <h4 className="font-medium">Secondary level education - Bio Science</h4>
                  <p className="text-gray-400">Ghss, Karuvarakkundu</p>
                  <p className="text-sm text-gray-500">2018 – 2020 | Malappuram, India</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-secondary rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-portfolio-purple mr-2"></span>
                Personal Interests
              </h3>
              <div className="flex flex-wrap gap-3 mt-4">
                {['Teaching', 'Editing', 'Coding', 'Travelling'].map((interest) => (
                  <div 
                    key={interest}
                    className="px-4 py-2 bg-secondary/50 rounded-full border border-white/10 hover:border-portfolio-blue transition-colors"
                  >
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
