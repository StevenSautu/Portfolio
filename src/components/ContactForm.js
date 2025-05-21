import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    console.log('Sending email with:', templateParams);

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      );

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus({
        submitting: false,
        submitted: false,
        error: err?.text || 'Failed to send message. Please try again later.'
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-container">
          <div className="contact-info-card">
            <h3>Contact Information</h3>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone Number</h4>
                  <p>+260973608983</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fab fa-whatsapp"></i>
                <div>
                  <h4>WhatsApp</h4>
                  <p>+260973608983</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>sautusteve@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>Lusaka, Zambia</p>
                </div>
              </div>
            </div>

            <h3 className="social-title">Social Media Links</h3>
            <div className="social-links-contact">
              <a href="https://github.com/StevenSautu" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i><span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/sautu-steven-8b697228b" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i><span>LinkedIn</span>
              </a>
              <a href="https://facebook.com/steve.erics.sautu" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i><span>Facebook</span>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i><span>Twitter/X</span>
              </a>
            </div>
          </div>

          <div className="contact-form-card">
            <h3>Send Me a Message</h3>
            {status.error && (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i>
                <p>{status.error}</p>
              </div>
            )}
            {status.submitted ? (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <p>Thank you for your message! I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your Message"
                    rows="5"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={status.submitting}
                >
                  {status.submitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
