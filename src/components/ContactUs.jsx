import React from 'react';
import './ContactUs.css'; 

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <section className="contact-info">
        <h2>Get In Touch</h2>
        <p>If you have any questions or need assistance, feel free to reach out to us. We're happy to help!</p>
        <div className="contact-details">
          <p><strong>Email:</strong> support@naturebasket.com</p>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>Address:</strong> 123 Organic Street, Green Valley, ABC 123</p>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
