import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A192F] border-t border-[#112240] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-[#64FFDA] font-bold text-xl">GJ<span className="text-white">Portfolio</span></p>
            <p className="text-gray-400 mt-2">Transforming data into actionable insights</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/gabriel-jacobina" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#64FFDA] transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-jacobina/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#64FFDA] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:gabriel.jacobina@gmail.com" className="text-gray-400 hover:text-[#64FFDA] transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-[#112240] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          
          <div className="flex space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:text-[#64FFDA] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#64FFDA] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;