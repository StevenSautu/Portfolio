import React from 'react';
import './achievements.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTrophy, 
  faUserTie, 
  faRobot, 
  faMedal,
  faGraduationCap,
  faPlug,
  faHandshake,
  faCamera
} from '@fortawesome/free-solid-svg-icons';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Theme Interpretation Recognition",
      organization: "ICTAZ 16th AGM",
      description: "Honored for outstanding interpretation of the theme 'From Copper to Code', showcasing how AI can drive Zambia's digital transformation.",
      date: "April 2025",
      icon: faTrophy
    },
    {
      id: 2,
      title: "Secretary General",
      organization: "CHAU-ICTAZ Student Association (2023–2025)",
      description: "Successfully led tech initiatives and student engagement under the Chalimbana University ICTAZ Chapter.",
      date: "2023–2025",
      icon: faUserTie
    },
    {
      id: 3,
      title: "Participant – AI & Robotics Competition",
      organization: "STEM Foundation",
      description: "Represented in the national AI and Robotics competition, showcasing innovation in artificial intelligence and robotics solutions.",
      date: "September 2024",
      icon: faRobot
    },
    {
      id: 4,
      title: "Champion – Student Chapter Project Competition",
      organization: "14th ICTAZ AGM",
      description: "CHAU-ICTAZ Student Chapter won the project competition among universities, recognized for outstanding innovation and teamwork.",
      date: "2023",
      icon: faMedal
    },
    {
      id: 5,
      title: "ICTAZ Student Membership",
      organization: "Information and Communications Technology Association of Zambia",
      description: "Recognized student member committed to professional development in Zambia's ICT sector.",
      date: "2023–2025",
      icon: faGraduationCap
    },
    {
      id: 6,
      title: "Mastering Microcontrollers & PCBs Seminar",
      organization: "Chalimbana University | IEEE UNZA",
      description: "Completed intensive 4-day seminar on microcontroller programming and PCB design.",
      date: "June 29 – July 2, 2024",
      icon: faPlug
    },
    {
      id: 7,
      title: "Conference Volunteer",
      organization: "ICTAZ at Avani Victoria Falls Resort",
      description: "Assisted with event coordination and support, contributing to the smooth running of the conference.",
      date: "March 28th – April 2nd, 2025",
      icon: faHandshake
    },
    {
      id: 8,
      title: "Photographer & Social Media Coordinator",
      organization: "Tech Trend - TechXpo at Mulungushi Conference Centre",
      description: "Captured high-quality event photos and managed social media content to boost event visibility and engagement.",
      date: "2023 & 2024",
      icon: faCamera
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="highlight">Achievements</span> & <span className="highlight">Volunteering</span>
          </h2>
          <p className="section-subtitle">Recognitions and community contributions</p>
        </div>
        
        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              <div className="card-header">
                <div className="achievement-icon">
                  <FontAwesomeIcon icon={achievement.icon} />
                </div>
                <div>
                  <h3>{achievement.title}</h3>
                  <p className="organization">{achievement.organization}</p>
                </div>
              </div>
              <p className="description">{achievement.description}</p>
              <div className="achievement-footer">
                <span className="date">{achievement.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;