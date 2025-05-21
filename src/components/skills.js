import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "UI/UX Design",
      icon: "fa-pencil-ruler",
      description: "Creating intuitive interfaces and engaging user experiences",
      skills: ["Figma", "Photoshop", "Illustrator"]
    },
    {
      category: "App Development",
      icon: "fa-mobile-alt",
      description: "Building performant mobile applications for Android platform",
      skills: ["Java", "Kotlin", "Android SDK"]
    },
    {
      category: "Web Development",
      icon: "fa-code",
      description: "Developing full-stack web applications and services",
      skills: ["PHP", "JavaScript", "React", "Node.js"]
    },
    {
      category: "Database",
      icon: "fa-database",
      description: "Designing and optimizing relational database systems",
      skills: ["MySQL", "MariaDB", "ERD Design", "MongoDB"]
    },
    {
      category: "Embedded Systems",
      icon: "fa-microchip",
      description: "Programming microcontrollers and IoT devices",
      skills: ["C++", "Arduino", "IoT"]
    },
    {
      category: "Public Speaking",
      icon: "fa-comments",
      description: "Engaging audiences through technical presentations and workshops",
      skills: [
        "Technical presentations",
        "Conference speaking",
        "Workshop facilitation"
      ]
    },
    {
      category: "Team Leadership",
      icon: "fa-users",
      description: "Leading technical teams with focus on agile methodologies",
      skills: [
        "Team Building",
        "Project Management",
        "Agile Methodologies"
      ]
    },
    {
      category: "Tools",
      icon: "fa-tools",
      description: "Development tools and version control",
      skills: ["Git", "Github", "VS Code","Android Studio"]
    },
    {
      category: "Systems",
      icon: "fa-desktop",
      description: "Operating systems expertise",
      skills: ["Windows", "Linux (Mint, Ubuntu, Parrot & Kali)"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="highlight">Skills</span> & Expertise
          </h2>
          <p className="section-subtitle">Areas of technical proficiency and leadership</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="card-header">
                <i className={`fas ${category.icon}`}></i>
                <h3>{category.category}</h3>
              </div>
              <p className="card-description">{category.description}</p>
              <ul className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    <span className="skill-bullet"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;