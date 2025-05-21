import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AboutMe.css';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import profileImage from '../assets/images/steve.jpg';

const AboutMe = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    axios.get('https://api.countapi.xyz/hit/sautusteve.dev/visits')
      .then(res => setVisitCount(res.data.value))
      .catch(err => console.error('Visitor count error:', err));
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="content-wrapper">
          <div className="profile-section">
            <div className="profile-image-container">
              <img 
                src={profileImage} 
                alt="Sautu Steven" 
                className="profile-image" 
              />
            </div>
            <div className="intro-text">
              <div className="intro-header">
                <h2 className="greeting">Hi!, I'm</h2>
                <h1 className="name">Sautu Steven</h1>
                <h3 className="title">Software Developer</h3>
              </div>
              <div className="intro-content">
                <p className="description">
                  I'm an aspiring and results-driven software developer with a strong foundation in Information and Communication Technology. 
                  Now in my final year at Chalimbana University, I blend academic knowledge with hands-on experience from projects, internships, 
                  and tech initiatives. I focus on building scalable, user-friendly software that solves real-world challenges, especially in education, 
                  agriculture, and public service. I'm also an articulate public speaker, passionate about sharing insights and inspiring others through 
                  tech conversations. My goal is to use technology to promote inclusion, accessibility, and sustainable progress...
                </p>

                <div className="cta-buttons">
                  <a href="#contact" className="btn primary-btn">Get in Touch</a>
                  <a href="#projects" className="btn secondary-btn">View Projects</a>
                </div>

                <div className="social-icons">
                  <a href="https://github.com/StevenSautu" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/sautu-steven-8b697228b" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaLinkedin />
                  </a>
                  <a href="https://facebook.com/steve.erics.sautu" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaFacebook />
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaTwitter />
                  </a>
                  <div className="visitor-count">
                    👁️ {String(visitCount).padStart(5, '0')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;