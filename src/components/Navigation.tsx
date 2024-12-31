import React, { useState } from 'react';
import { navItems } from '../constants/navigation';
import { scrollToSection } from '../utils/scroll';
import AOS from 'aos'; // Make sure AOS is imported

const Navigation = () => {
  // State to handle the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Function to handle scrolling and refreshing AOS
  const handleNavigation = (item: string) => {
    scrollToSection(item); // Smooth scroll
    AOS.refresh(); // Trigger AOS refresh to trigger animations
    closeMobileMenu(); // Close the mobile menu when a menu item is clicked
  };

  return (
    <nav className="fixed top-0 w-full bg-[#0f0f0f] z-50 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <img
              src="/assets/acctnue_logo.png"
              alt="Acctnue Logo"
              className="ml-2 w-35 h-20 img-fluid"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="text-white hover:text-[#b063ff] capitalize transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Mobile Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-white">
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu (Hidden by default, shown when hamburger is clicked) */}
        <div
          className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-[#1d1d1b]`}
        >
          <div className="relative p-4">
            {/* Close Button */}
            <button
              onClick={closeMobileMenu}
              className="absolute top-4 right-4 text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigation(item)} // Updated to call handleNavigation
                  className="text-white hover:text-[#b063ff] capitalize transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
