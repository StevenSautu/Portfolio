import React, { useState, useEffect } from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      enableDarkMode();
    }
  }, []);

  const enableDarkMode = () => {
    setIsDarkMode(true);
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  };

  const disableDarkMode = () => {
    setIsDarkMode(false);
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  };

  const toggleDarkMode = () => {
    if (isDarkMode) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  };

  return (
    <button 
      className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="toggle-switch">
        {isDarkMode ? (
          <i className="fas fa-sun"></i>
        ) : (
          <i className="fas fa-moon"></i>
        )}
      </div>
    </button>
  );
};

export default DarkModeToggle;