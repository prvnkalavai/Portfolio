import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Certifications from './Certifications';

const MainContent = () => {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certifications />
    </div>
  );
};

export default MainContent;