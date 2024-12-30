const ContactForm = () => {
  return (
    <div className="map-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.6837978184452!2d76.2246587694887!3d10.521511017907224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7efb4d6dd2903%3A0x71f04bf446566aeb!2sJAC%20Tower%2C%20Ikkanda%20Warrior%20Rd%2C%20East%20Fort%2C%20Pallikkulam%2C%20Thrissur%2C%20Kerala%20680001!5e0!3m2!1sen!2sin!4v1735590715145!5m2!1sen!2sin"
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