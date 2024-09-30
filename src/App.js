import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop - windowHeight / 2 < scrollPosition) {
        setActiveSection(sections[i]);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60, // Adjust for header height
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header activeSection={activeSection} onNavClick={scrollToSection} />
      <main className="flex-grow pt-16">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
};

export default App;