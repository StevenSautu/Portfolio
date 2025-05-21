// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/skills';
import ProjectsSection from './components/ProjectsSection';
import Achievements from './components/achievements';
import Certificates from './components/Certificates';
import ContactForm from './components/ContactForm';
import ScrollToTop from './components/ScrollToTop';
import DarkModeToggle from './components/DarkModeToggle';
import Footer from './components/Footer';

// Project data moved to separate file (recommended)
import { projects } from './components/ProjectsSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <ProjectsSection projects={projects} />
        <Certificates />
        <Achievements />
        <ContactForm />
      </main>
      <ScrollToTop />
      <DarkModeToggle />
      <Footer />
    </div>
  );
}

export default App;