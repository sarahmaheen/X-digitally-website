// // // HeroSection.js
// // import React from 'react';
// // import './HeroSection.css';
// // import LandingPage from './LandingPage';
// // // import AboutSection from './AboutSection';
// // import AboutSection from './AboutSection';
// // import ServiceSection from './ServiceSection';
// // import TeamSection from './TeamSection';
// // // import Services from './Services';
// // // import Team from './Team';

// // const HeroSection = () => {
// //   return (
// //     <div className="hero-section">
// //       <LandingPage />
// //       <AboutSection />
// //       <ServiceSection />
// //       <TeamSection/>
// //       {/* <Team /> */}
// //     </div>
// //   );
// // };

// // export default HeroSection;














// // HeroSection.js
// import React from 'react';
// import './HeroSection.css';
// import LandingPage from './LandingPage';
// import AboutSection from './AboutSection';
// import ServiceSection from './ServiceSection';
// import TeamSection from './TeamSection';
// import Footer from './Footer';

// const HeroSection = () => {
//   return (
//     <div className="hero-section">
//       <section id="home">
//         <LandingPage />
//       </section>
//       <section id="about">
//         <AboutSection />
//       </section>
//       <section id="services">
//         <ServiceSection />
//       </section>
//       <section id="team">
//         <TeamSection />
//       </section>
//       <section id="contact">
//         <Footer />
//       </section>
//     </div>
//   );
// };

// export default HeroSection;
































// import React, { useEffect } from 'react';
// import './HeroSection.css';
// import LandingPage from './LandingPage';
// import AboutSection from './AboutSection';
// import ServiceSection from './ServiceSection';
// import TeamSection from './TeamSection';
// import Footer from './Footer';

// const HeroSection = () => {
//   useEffect(() => {
//     // Generate random boxes after component mounts
//     createRandomBoxes();
//   }, []);

//   const createRandomBoxes = () => {
//     const boxContainer = document.querySelector('.random-boxes-container');
    
//     // Number of boxes to generate
//     const numBoxes = 10;

//     for (let i = 0; i < numBoxes; i++) {
//       const box = document.createElement('div');
//       const size = Math.floor(Math.random() * (200 - 50 + 1)) + 50; // Random size between 50px and 200px
//       const posX = Math.floor(Math.random() * 100) + '%'; // Random horizontal position
//       const posY = Math.floor(Math.random() * 100) + '%'; // Random vertical position
//       const rotation = Math.floor(Math.random() * 360); // Random rotation angle
//       const borderWidth = Math.floor(Math.random() * 5) + 'px'; // Random border thickness

//       box.style.width = `${size}px`;
//       box.style.height = `${size}px`;
//       box.style.position = 'absolute';
//       box.style.top = posY;
//       box.style.left = posX;
//       box.style.transform = `rotate(${rotation}deg)`;
//       box.style.border = `${borderWidth} solid black`; // Border color is black
//       box.style.pointerEvents = 'none'; // Ensure it doesn't interact with other elements
//       box.style.zIndex = 10; // Ensure it's on top of everything else
//       box.style.borderRadius = '5px'; // Optional rounded corners

//       // Append box to the container
//       boxContainer.appendChild(box);
//     }
//   };

//   return (
//     <div className="hero-section">
//       <div className="random-boxes-container"></div> {/* This is where the random boxes will appear */}
      
//       <section id="home">
//         <LandingPage />
//       </section>
//       <section id="about">
//         <AboutSection />
//       </section>
//       <section id="services">
//         <ServiceSection />
//       </section>
//       <section id="team">
//         <TeamSection />
//       </section>
//       <section id="contact">
//         <Footer />
//       </section>
//     </div>
//   );
// };

// export default HeroSection;
















import React, { useEffect } from 'react';
import './HeroSection.css';
import LandingPage from './LandingPage';
import AboutSection from './AboutSection';
import ServiceSection from './ServiceSection';
import TeamSection from './TeamSection';
import Footer from './Footer';

const HeroSection = () => {
  useEffect(() => {
    // Generate random boxes after component mounts
    createRandomBoxes();

    // Add scroll event listener for rotation
    window.addEventListener('scroll', handleScroll);

    // IntersectionObserver to detect when TeamSection is in view
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.5, // Trigger when 50% of the section is in view
    });

    const teamSection = document.getElementById('team');
    observer.observe(teamSection);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const createRandomBoxes = () => {
    const boxContainer = document.querySelector('.random-boxes-container');
    
    // Number of boxes to generate
    const numBoxes = 10;

    for (let i = 0; i < numBoxes; i++) {
      const box = document.createElement('div');
      const size = Math.floor(Math.random() * (200 - 50 + 1)) + 50; // Random size between 50px and 200px
      const posX = Math.floor(Math.random() * 100) + '%'; // Random horizontal position
      const posY = Math.floor(Math.random() * 100) + '%'; // Random vertical position
      const rotation = Math.floor(Math.random() * 360); // Random rotation angle
      const borderWidth = Math.floor(Math.random() * 5) + 'px'; // Random border thickness

      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.position = 'absolute';
      box.style.top = posY;
      box.style.left = posX;
      box.style.transform = `rotate(${rotation}deg)`; // Initial rotation
      box.style.border = `${borderWidth} solid black`; // Border color is black
      box.style.pointerEvents = 'none'; // Ensure it doesn't interact with other elements
      box.style.zIndex = 10; // Ensure it's on top of everything else
      box.style.borderRadius = '5px'; // Optional rounded corners

      // Append box to the container
      boxContainer.appendChild(box);
    }
  };

  const handleScroll = () => {
    const boxes = document.querySelectorAll('.random-boxes-container > div');
    const scrollY = window.scrollY; // Get the scroll position

    // Iterate over each box and adjust rotation based on scroll position
    boxes.forEach((box, index) => {
      const rotationDegree = scrollY * (index + 2) / 100; // Adjust the factor as needed for rotation speed
      box.style.transform = `rotate(${rotationDegree}deg)`; // Rotate based on scroll position
    });
  };

  // Function to handle when TeamSection is in view
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Change the color of all boxes to white when TeamSection is in view
        const boxes = document.querySelectorAll('.random-boxes-container > div');
        boxes.forEach((box) => {
          box.style.borderColor = 'white'; // Change border color to white
        });
      } else {
        // Reset the color of boxes when TeamSection is out of view
        const boxes = document.querySelectorAll('.random-boxes-container > div');
        boxes.forEach((box) => {
          box.style.borderColor = 'black'; // Reset border color to black
        });
      }
    });
  };

  return (
    <div className="hero-section">
      <div className="random-boxes-container"></div> {/* This is where the random boxes will appear */}
      
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
