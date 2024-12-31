import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Duration for animation
  }, []);

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            className="relative flex  rounded-lg overflow-hidden"
          >
            <img
              src="/assets/about_us.jpg"
              alt="Professional team meeting"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="200"
          >
            <h2 className="font-heading text-white text-6xl font-bold mb-6">About Us</h2>
            <p className="font-sans text-white mb-4">
              At O K Tony Associates, we are a forward-thinking firm dedicated to providing
              innovative accounting and financial solutions that empower businesses to thrive
              in a complex and ever-evolving marketplace.
            </p>
            <p className="font-sans text-white mb-6">
              Through our trusted brand Acctnue,
              we offer a one-stop solution for all your business needs, delivering a comprehensive
              range of services that ensure your financial operations are streamlined, strategic,
              and designed for growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
