import React from 'react';
import './Certificates.css';

// Import your certificate images
import cert1 from '../assets/images/cert/cert1.jpg';
import cert2 from '../assets/images/cert/cert2.jpg';
import cert3 from '../assets/images/cert/cert3.jpg';
import cert4 from '../assets/images/cert/cert4.jpg';
import cert5 from '../assets/images/cert/cert5.jpg';
import cert6 from '../assets/images/cert/cert6.jpg';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Certificate of Recognition',
      subtitle: 'Theme Interpretation',
      issuer: 'Information and Communications Technology Association of Zambia (ICTAZ)',
      date: 'April 2025',
      description:
        'Recognized at the 16th ICTAZ AGM for outstanding interpretation of the theme "From Copper to Code," highlighting AI\'s role in Zambia\'s digital transformation and youth-driven innovation.',
      link: cert1,  // Changed to image URL
      icon: 'fa-award',
      image: cert1,
    },
    {
      id: 2,
      title: 'ICTAZ Student Membership',
      subtitle: '',
      issuer: 'Information and Communications Technology Association of Zambia (ICTAZ)',
      date: 'March 2025',
      description:
        'Renewed student membership with ICTAZ, reaffirming commitment to ethical standards, continued learning, and active participation in Zambia\'s ICT professional community.',
      link: cert2,  // Changed to image URL
      icon: 'fa-id-card',
      image: cert2,
    },
    {
      id: 3,
      title: 'Certificate of Participation',
      subtitle: 'AI & Robotics Competition',
      issuer: 'STEM Foundation',
      date: 'September 2024',
      description:
        'Participated in the AI and Robotics Competition organized by the STEM Foundation, showcasing practical knowledge in artificial intelligence, robotics design, and innovation-driven problem solving.',
      link: cert3,  // Changed to image URL
      icon: 'fa-robot',
      image: cert3,
    },
    {
      id: 4,
      title: 'ICTAZ Student Membership',
      subtitle: '',
      issuer: 'Information and Communications Technology Association of Zambia (ICTAZ)',
      date: 'March 2023',
      description:
        'Awarded student membership by ICTAZ, affirming commitment to professional growth and adherence to industry standards in Zambia\'s ICT sector.',
      link: cert4,  // Changed to image URL
      icon: 'fa-id-card',
      image: cert4,
    },
    {
      id: 5,
      title: 'Certificate of Participation',
      subtitle: 'Mastering Microcontrollers & PCBs',
      issuer: 'Chalimbana University | IEEE UNZA',
      date: 'June 29 – July 2, 2024',
      description:
        'Participated in a 4-day intensive seminar on mastering microcontrollers and PCBs, gaining practical and technical insights in embedded systems design.',
      link: cert5,  // Changed to image URL
      icon: 'fa-microchip',
      image: cert5,
    },
    {
      id: 6,
      title: 'Certificate of Leadership',
      subtitle: 'Vice Secretary & Acting President',
      issuer: 'Chalimbana University ICT Student Chapter',
      date: '2024',
      description:
        'Recognized for exceptional leadership, serving as Vice Secretary and Acting President. Provided strategic direction that advanced the ICT Association\'s objectives.',
      link: cert6,  // Changed to image URL
      icon: 'fa-users-cog',
      image: cert6,
    },
  ];

  return (
    <section id="certifications" className="certificates-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="highlight">Certifications</span>
          </h2>
          <p className="section-subtitle">Professional recognitions and achievements</p>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-image-container">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className="certificate-image"
                />
              </div>
              <div className="card-content">
                <div className="card-header">
                  <i className={`fas ${cert.icon}`}></i>
                  <div>
                    <h3>{cert.title}</h3>
                    {cert.subtitle && <h4>{cert.subtitle}</h4>}
                  </div>
                </div>
                <div className="certificate-meta">
                  <span className="issuer">{cert.issuer}</span>
                  <span className="date">{cert.date}</span>
                </div>
                <p className="certificate-description">{cert.description}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    View Certificate <i className="fas fa-external-link-alt"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;