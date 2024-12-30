import React from 'react';
import { services } from '../../constants/services';

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-white text-7xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group bg-white rounded-md shadow-lg overflow-hidden relative h-[400px]">
              {/* Main Service Image and Text */}
              <div className="relative h-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-all group-hover:opacity-0"
                />
                {/* Title and Description */}
                <div className="absolute top-53 bg-white bg-opacity-0 p-6 flex flex-col">
                  <h3 className="font-heading text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="font-sans text-gray-600">{service.description}</p>
                </div>
              </div>

              {/* Display Sub-Services on Hover */}
              <div className="absolute inset-0 bg-white bg-opacity-90 p-6 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-left">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {service.subServices.map((subService, index) => (
                    <li key={index} className="font-sans text-[#1d1d1b]">
                      {subService}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
