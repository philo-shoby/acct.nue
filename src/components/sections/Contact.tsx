import React from 'react';
import ContactInfo from '../ContactInfo';
import ContactForm from '../ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-6xl font-bold text-white text-center mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;