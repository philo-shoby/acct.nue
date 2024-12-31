import React from 'react';
import { ChevronDown } from 'lucide-react';
import { scrollToSection } from '../../utils/scroll';

const Hero = () => {
  return (
    <div className="relative pt-16 min-h-screen flex flex-col items-center justify-center">
      {/* Video background */}
      <video
        className="relative inset-0 w-[60%] h-[60%] object-cover"
        src="./assets/homepage.mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex flex-col items-end justify-end">
        <div className="mt-12">
          <ChevronDown 
            className="w-8 h-8 mx-auto text-[#b063ff] animate-bounce cursor-pointer"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;