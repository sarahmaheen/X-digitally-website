// HeroSection.js
import React from 'react';
import './HeroSection.css';
import LandingPage from './LandingPage';
// import AboutSection from './AboutSection';
import AboutSection from './AboutSection';
import ServiceSection from './ServiceSection';
// import Services from './Services';
// import Team from './Team';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <LandingPage />
      <AboutSection />
      <ServiceSection />
      {/* <Team /> */}
    </div>
  );
};

export default HeroSection;
