
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const experienceData = [
  {
    title: 'Full Stack Developer',
    company: 'Zenox Software Solutions',
    period: 'present',
    location: 'Manjeri, India',
    current: true,
  },
  {
    title: 'Full Stack Developer Trainee',
    company: 'Luminar Technolab',
    period: '',
    location: 'Calicut, India',
    current: false,
  },
  {
    title: 'Python and Django - Intern',
    company: 'Camino Infotech',
    period: '',
    location: 'Ernakulam, India',
    current: false,
  },
  {
    title: 'Tuition Teacher (offline)',
    company: 'Grace Education',
    period: '',
    location: 'Calicut, India',
    current: false,
  }
];

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className={`section-heading ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          Professional Experience
        </h2>

        <div className={`mt-12 relative ${inView ? '' : 'opacity-0'}`}>
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item ${inView ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="mb-1 flex items-center">
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${exp.current ? 'bg-portfolio-blue/20 text-portfolio-blue' : 'bg-white/10 text-white/70'}`}>
                  {exp.current ? 'Current' : 'Previous'}
                </span>
              </div>
              <h3 className="text-xl font-bold mt-2">{exp.title}</h3>
              <div className="flex items-center text-gray-400 mt-1">
                <Briefcase className="h-4 w-4 mr-2" />
                <span>{exp.company}</span>
              </div>
              <div className="flex items-center text-gray-400 mt-1">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{exp.period || 'Past experience'} | {exp.location}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <div className="bg-secondary rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-4">Certificates</h3>
            <div className="flex items-start">
              <div className="h-10 w-10 bg-portfolio-purple/20 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-portfolio-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div style={{marginTop:'6px'}}>
                <h4 className="font-semibold"> <a href="https://drive.google.com/file/d/1w5OrRoRWunMjVDPv_BWogDt0LqXCZr3g/view">Certificate of completion (python)</a></h4>

                <p className="text-gray-400"></p>
              </div>

            </div>
            <div style={{marginTop:'2px'}} className="flex items-start">
              <div className="h-10 w-10 bg-portfolio-purple/20 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-portfolio-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div style={{marginTop:'6px'}} >
                <h4 className="font-semibold"> <a href="https://drive.google.com/file/d/172-44DVcd85--HB8jLoTvGYbj1-nukk_/view">National Council of Technology and Training(MEARN)</a></h4>
              
              </div>

            </div>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default Experience;
