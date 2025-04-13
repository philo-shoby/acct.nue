const ContactForm = () => {
  return (
    <div className="map-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.7359421890174!2d76.22271867408422!3d10.52145196384699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6a6d9eadfe8d07b1%3A0x7b3e0b39554dc4bf!2sO%20K%20Tony%20Associates!5e0!3m2!1sen!2sin!4v1744577106569!5m2!1sen!2sin"
          width="600" 
          height="450" 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: '0' }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
  );
};

export default ContactForm;