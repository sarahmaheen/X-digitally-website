// // HeroSection.js
// import React from 'react';
// import './HeroSection.css';
// import LandingPage from './LandingPage';
// // import AboutSection from './AboutSection';
// import AboutSection from './AboutSection';
// import ServiceSection from './ServiceSection';
// import TeamSection from './TeamSection';
// // import Services from './Services';
// // import Team from './Team';

// const HeroSection = () => {
//   return (
//     <div className="hero-section">
//       <LandingPage />
//       <AboutSection />
//       <ServiceSection />
//       <TeamSection/>
//       {/* <Team /> */}
//     </div>
//   );
// };

// export default HeroSection;














// HeroSection.js
import React from 'react';
import './HeroSection.css';
import LandingPage from './LandingPage';
import AboutSection from './AboutSection';
import ServiceSection from './ServiceSection';
import TeamSection from './TeamSection';
import Footer from './Footer';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <section id="home">
        <LandingPage />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServiceSection />
      </section>
      <section id="team">
        <TeamSection />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default HeroSection;
