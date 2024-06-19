// src/App.jsx

import React from 'react';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import ContactMe from './components/ContactMe.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
