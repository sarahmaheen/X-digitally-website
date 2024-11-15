// import React, { useEffect, useState } from 'react';
// import './AboutSection.css';

// const AboutSection = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [overlayOpacity, setOverlayOpacity] = useState(1);
//   const [overlayTransform, setOverlayTransform] = useState('translateX(100%)'); // Start with overlay off-screen to the right

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const maxScroll = 600; // The scroll distance at which the overlay disappears

//       if (scrollPosition > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }

//       // Update overlay opacity and movement based on scroll position
//       if (scrollPosition < maxScroll) {
//         setOverlayOpacity(1 - scrollPosition / maxScroll); // Fade out the overlay
//         setOverlayTransform(`translateX(${100 - (scrollPosition / maxScroll) * 100}%)`); // Move overlay from right to left
//       } else {
//         setOverlayOpacity(0); // Fully fade out the overlay
//         setOverlayTransform('translateX(0)'); // Ensure the overlay reaches the left side
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="about-page">
//       {/* Overlay */}
//       <div className="overlay" style={{ opacity: overlayOpacity, transform: overlayTransform }}></div>

//       <h1 className={`title ${scrolled ? 'fixed' : ''}`}>About</h1>

//       <div className="content-container">
//         <div className={`content ${scrolled ? 'scrolled-in-left' : ''}`}>
//           <p>
//             Our company was founded with the mission to innovate and inspire.
//             From humble beginnings, we've grown to a team of passionate
//             professionals dedicated to making a positive impact in the industry.
//           </p>
//         </div>
//         <div className={`about-us-text ${scrolled ? 'scrolled-in-right' : ''}`}>
//           ABOUT US
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;





import React, { useEffect, useState } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); // Track the scroll position

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY); // Update scroll position
      if (scrollY > 900) {  // Trigger scroll effect after scrolling 100px
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-page">
      {/* Overlay */}
      <div
        className="overlay"
        style={{
          transform: `translateX(${scrolled ? `-${scrollPosition * 1.2}px` : '0px'})`,  // Slow down the movement with a multiplier (0.05)
        }}
      ></div>

      <h1 className={`title ${scrolled ? 'fixed' : ''}`}>LET US KNOW</h1>

      <div className="content-container">
        <div className={`content ${scrolled ? 'scrolled-in-left' : ''}`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dolorum minus maxime velit autem nulla vero excepturi in optio modi quia quod possimus obcaecati est fuga culpa cum a corporis at rerum. Aspernatur, perferendis nobis non autem delectus optio ullam nisi quos odit omnis error quam culpa, nihil facilis corrupti!
          </p>
        </div>
        <div className={`about-us-text ${scrolled ? 'scrolled-in-right' : ''}`}>
          OUR STORY
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
