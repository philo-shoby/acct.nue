import React from 'react';
import { ChevronDown } from 'lucide-react';
import { scrollToSection } from '../../utils/scroll';

const Hero = () => {
  return (
    <div className="relative pt-16 min-h-screen flex flex-col items-center justify-center">
      <img
        src="/assets/landing_page.gif"
        alt="Professional team meeting"
        className="flex relative inset-0 w-full sm:w-[70%] h-[70%] object-cover"
      />
      <div className="relative z-10 flex flex-col items-end justify-end">
        <ChevronDown 
          className="w-8 h-8 mx-auto text-[#b063ff] animate-bounce cursor-pointer"
          onClick={() => scrollToSection('about')}
        />
      </div>
    </div>
  );
};

export default Hero;