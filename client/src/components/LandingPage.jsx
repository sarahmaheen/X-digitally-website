import React, { useRef, useEffect, useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const videoRef = useRef(null);
  const [videoExpanded, setVideoExpanded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);

      if (scrollY > 100) {
        setVideoExpanded(true);
      } else {
        setVideoExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page">
      <div className="heading-container">
        <div className="Landing-heading">
          <h1 style={{ transform: `translateX(${scrollPosition % 2 === 0 ? scrollPosition / 2 : -scrollPosition / 3}px)` }}>TAKING</h1>
          <h1 style={{ transform: `translateX(${scrollPosition % 2 !== 0 ? scrollPosition / 2 : -scrollPosition / 3}px)` }}>BRANDS</h1>
          <h1 style={{ transform: `translateX(${scrollPosition % 2 === 0 ? scrollPosition / 2 : -scrollPosition / 3}px)` }}>FURTHER</h1>
        </div>
        <p className="small-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quo sed quidem vero labore, dolore natus pariatur, consectetur, recusandae vel sequi deleniti nisi tenetur esse similique modi aliquid soluta! Ab.
        </p>
      </div>
      <div className="video-wrapper">
    <div className={`video-container ${videoExpanded ? 'expanded' : ''}`} ref={videoRef}>
      <video
        src="https://player.vimeo.com/progressive_redirect/playback/915942735/rendition/1080p/file.mp4?loc=external&log_user=0&signature=52d91869d19c75b2be2e9fd201df1ad0adb99a2ff432a4df2208042ad374a635"
        autoPlay
        muted
        loop
      />
    </div>
  </div>
    </div>
  );
};

export default LandingPage;
