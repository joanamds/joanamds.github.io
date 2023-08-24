import React from 'react';
import Home from './Home';
import Header from '../components/Header';
import '../styles/PageTheme.css'
import AboutMe from './AboutMe';
import Projects from './Projects';
import Tools from '../components/Tools';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <Home />
      <AboutMe />
      <Tools />
      <Projects />
    </div>
  );
}

export default LandingPage;
