import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add('animate-fade-in');
    }
    
    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add('animate-fade-in');
      }
    }, 400);
    
    setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.classList.add('animate-fade-in');
      }
    }, 800);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] to-[#0A192F]/90"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#0A192F] to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <p className="text-[#64FFDA] font-mono opacity-0 transition-opacity duration-1000" ref={subtitleRef}>Hi, my name is</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight opacity-0 transition-opacity duration-1000" ref={titleRef}>
              <span className="block">Gabriel Jacobina</span>
              <span className="block text-gray-400 mt-2">Data Analyst</span>
            </h1>
            
            <p className="text-gray-400 text-lg max-w-xl opacity-0 transition-opacity duration-1000" ref={subtitleRef}>
              I transform complex data into actionable insights. Specializing in data visualization, statistical analysis, and machine learning to help organizations make data-driven decisions.
            </p>
            
            <div className="pt-4 opacity-0 transition-opacity duration-1000" ref={ctaRef}>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-transparent hover:bg-[#64FFDA]/10 text-[#64FFDA] border border-[#64FFDA] px-6 py-3 rounded-md transition-all duration-300 flex items-center space-x-2"
              >
                Download CV
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-transparent hover:bg-[#64FFDA]/10 text-[#64FFDA] border border-[#64FFDA] px-6 py-3 rounded-md transition-all duration-300 flex items-center space-x-2"
              >
                View My Projects
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="w-full h-full max-w-md mx-auto">
              <div className="aspect-square rounded-full bg-[#112240] absolute inset-0 animate-morph"></div>
              <div className="aspect-square rounded-full bg-[#64FFDA]/10 absolute inset-0 animate-morph animation-delay-2000"></div>
              <div className="aspect-square rounded-full border-2 border-[#64FFDA]/20 absolute inset-0 animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;