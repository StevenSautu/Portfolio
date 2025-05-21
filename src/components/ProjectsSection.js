import React from 'react';
import './ProjectsSection.css';
import { FaGithub } from 'react-icons/fa';
import agrivisionImg from '../assets/images/projects/agrivision.jpg';
import zentraImg from '../assets/images/projects/Logo-zentra.jpg';
import sctImg from '../assets/images/projects/sct-logo.jpg';
import smtImg from '../assets/images/projects/smt-logo.jpg';
import vsImg from '../assets/images/projects/vs-logo.jpg';

export const projects = [
  {
    id: 1,
    title: "AgriVision",
    description: "An AI-based plant health monitoring system that uses image recognition and drone technology to identify diseases and pests. The system also recommends local stores for farmers to purchase appropriate treatments, enhancing precision agriculture and crop management.",
    technologies: ["Kotlin", "TensorFlow", "Drone Tech", "Python"],
    imageUrl: agrivisionImg,
    githubUrl: "https://github.com/StevenSautu"
  },
  {
    id: 2,
    title: "Zentra",
    description: "A smart shopping trolley system designed for shopping malls that uses barcode scanning technology. As items are placed in the trolley, the system scans and displays the total amount along with the shopper's budget, enabling a seamless and budget-aware shopping experience.",
    technologies: ["IoT", "React Native", "Node.js", "MongoDB"],
    imageUrl: zentraImg,
    githubUrl: "https://github.com/StevenSautu"
  },
  {
    id: 3,
    title: "Voices and Signs",
    description: "Created an inclusive application designed to assist hearing-impaired individuals by translating spoken language into sign language through visual representations.",
    technologies: ["Python", "OpenCV", "React"],
    imageUrl: vsImg,
    githubUrl: "https://github.com/StevenSautu"
  },
  {
    id: 4,
    title: "Social Cash Transfer",
    description: "A secure web-based system with fingerprint authentication to ensure beneficiaries receive social cash transfers directly, preventing fraud and unauthorized access.",
    technologies: ["PHP", "JavaScript", "MySQL", "Fingerprint API"],
    imageUrl: sctImg,
    githubUrl: "https://github.com/StevenSautu/social_cash_transfer"
  },
  {
    id: 5,
    title: "School Monthly Return System",
    description: "A digital platform for schools to submit monthly reports (e.g., enrollment, attendance, performance) to DEBS, replacing manual processes and improving efficiency and data accuracy.",
    technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    imageUrl: smtImg,
    githubUrl: "https://github.com/StevenSautu/school-monthly-return"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="highlight">Projects</span>
          </h2>
          <p className="section-subtitle">Innovative solutions and technical implementations</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, technologies, imageUrl, githubUrl }) => {
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/400x220?text=Project+Image';
    e.target.alt = 'Project image not available';
  };

  const isLogoImage = [agrivisionImg, smtImg, sctImg, vsImg].includes(imageUrl);

  return (
    <div className="project-card">
      <div className={`project-image-container ${isLogoImage ? 'logo-image' : ''}`}>
        <img 
          src={imageUrl} 
          alt={`${title} project screenshot`} 
          onError={handleImageError}
          loading="lazy"
          className={`project-image ${isLogoImage ? 'logo-img' : ''}`}
        />
        {githubUrl && (
          <div className="github-overlay">
            <a 
              href={githubUrl} 
              className="github-link" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`View ${title} on GitHub`}
            >
              <FaGithub />
              <span>View Code</span>
            </a>
          </div>
        )}
      </div>
      <div className="project-content">
        <div className="content-header">
          <h3>{title}</h3>
        </div>
        <p className="project-description">{description}</p>
        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;