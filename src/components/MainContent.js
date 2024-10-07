import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Certifications from './Certifications';
import Contact from './Contact';

const MainContent = () => {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
};

export default MainContent;