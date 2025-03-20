


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
