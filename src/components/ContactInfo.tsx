import React from 'react';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <Building2 className="flex-shrink-0 h-10 w-10 text-[#6c2cac] mr-2"/>,
      text: '3rd Floor, Jac Tower, Ikkandawarier Road, Thrissur - 680005, Kerala.'
    },
    {
      icon: <Phone className="flex-shrink-0 h-10 w-10 text-[#6c2cac] mr-2"/>,
      text: '+91 9846396677'
    },
    {
      icon: <Mail className="flex-shrink-0 h-10 w-10 text-[#6c2cac] mr-2"/>,
      text: 'info@acctnue.com'
    }
  ];

  return (
    <div>
      <h3 className="font-sans text-2xl font-semibold mb-4 text-white">Get in Touch</h3>
      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-center text-xl">
            {detail.icon}
            <span className="font-sans text-white text-xl">{detail.text}</span>
          </div>
        ))}
        <div className="flex items-center text-xl">
          <MapPin className="flex-shrink-0 h-10 w-10 text-[#6c2cac] mr-2"/>
          <a href="https://maps.app.goo.gl/73S6abC3bcZ5ACcs5" 
           className="font-sans text-white text-xl underline hover:text-[#b063ff]">Get Directions</a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;