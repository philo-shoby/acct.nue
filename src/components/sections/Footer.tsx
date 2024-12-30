import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-6">
      <div className="container mx-auto text-center">
        <p className="font-sans">&copy; {new Date().getFullYear()} Acctnue. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
