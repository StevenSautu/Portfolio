import React, { useState, useEffect } from 'react';
import './Header.css';
import resumePDF from '../assets/documents/Steven_Sautu_CV.pdf'; 

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const handleNavLinkClick = () => setMobileMenuOpen(false);

  const handleDownload = () => {
    // Optional: Track download event
    console.log('CV downloaded');
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        {/* Desktop Header */}
        <div className="desktop-header">
          <div className="header-profile">
            <div className="avatar">
              <span>SS</span>
            </div>
            <div className="header-text">
              <h1>Steven Sautu</h1>
              <h2>Full Stack Developer</h2>
            </div>
          </div>
          
          <nav className="desktop-nav">
            <ul>
              <li><a href="#about" onClick={handleNavLinkClick}>About Me</a></li>
              <li><a href="#skills" onClick={handleNavLinkClick}>Skills</a></li>
              <li><a href="#projects" onClick={handleNavLinkClick}>Projects</a></li>
              <li><a href="#certifications" onClick={handleNavLinkClick}>Certificates</a></li>
              <li><a href="#achievements" onClick={handleNavLinkClick}>Achievements</a></li>
              <li><a href="#contact" onClick={handleNavLinkClick}>Contact</a></li>
            </ul>
          </nav>

          <div className="cta-container">
            <a 
              href={resumePDF} 
              className="resume-btn" 
              download="Steven_Sautu_CV.pdf"
              onClick={handleDownload}
            >
              Download CV
            </a>
          </div>
        </div>
        
        {/* Mobile Header */}
        <div className="mobile-header">
          <div className="header-profile-mobile">
            <div className="avatar-mobile">
              <span>SS</span>
            </div>
            <div className="header-text-mobile">
              <h1>Steven Sautu</h1>
              <h2>Full Stack Developer</h2>
            </div>
          </div>
          
          <button onClick={toggleMobileMenu} className="menu-button" aria-label="Toggle menu">
            <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#about" onClick={handleNavLinkClick}>About Me</a></li>
            <li><a href="#skills" onClick={handleNavLinkClick}>Skills</a></li>
            <li><a href="#projects" onClick={handleNavLinkClick}>Projects</a></li>
            <li><a href="#certifications" onClick={handleNavLinkClick}>Certificates</a></li>
            <li><a href="#achievements" onClick={handleNavLinkClick}>Achievements</a></li>
            <li><a href="#contact" onClick={handleNavLinkClick}>Contact</a></li>
            <li className="mobile-cta">
              <a 
                href={resumePDF} 
                className="resume-btn-mobile" 
                download="Steven_Sautu_CV.pdf"
                onClick={handleDownload}
              >
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;