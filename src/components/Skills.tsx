import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const skillCategories = [
  {
    title: 'Data Analysis & Visualization',
    skills: [
      { name: 'Metabase', proficiency: 'Expert' },
      { name: 'Power BI', proficiency: 'Advanced' },
      { name: 'Superset', proficiency: 'Intermediate' },
      { name: 'Looker', proficiency: 'Beginner' }
    ]
  },
  {
    title: 'Programming & Databases',
    skills: [
      { name: 'SQL', proficiency: 'Expert' },
      { name: 'Python', proficiency: 'Advanced' },
      { name: 'MongoDB', proficiency: 'Intermediate' },
      { name: 'Spark', proficiency: 'Beginner' }
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Hubspot', proficiency: 'Expert' },
      { name: 'Git', proficiency: 'Intermediate' },
      { name: 'AWS/GCP', proficiency: 'Beginner' }
    ]
  }
];

const SkillCard = ({ name, proficiency }: { name: string; proficiency: string }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-[#1D3461] rounded-lg transition-all duration-300 hover:bg-[#1D3461]/80">
      <span className="text-white font-medium">{name}</span>
      <span className={`text-sm px-2 py-1 rounded ${
        proficiency === 'Expert' ? 'bg-green-500/20 text-green-300' :
        proficiency === 'Advanced' ? 'bg-blue-500/20 text-blue-300' :
        proficiency === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
        'bg-gray-500/20 text-gray-300'
      }`}>
        {proficiency}
      </span>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-[#0A192F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-[#64FFDA] mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Proficient in industry-standard tools and technologies for data analysis, visualization, and insights generation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`bg-[#112240] p-6 rounded-lg shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-[#64FFDA]/20 pb-2">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skillIndex}
                    name={skill.name}
                    proficiency={skill.proficiency}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;