// import React from 'react';
// import './TeamSection.css';
// import sara from '../assests/teams/sara.png'
// import juveria from '../assests/teams/juveria.png'
// import abbas from '../assests/teams/abbas.png'
// import haseeb from '../assests/teams/haseeb.png'
// import junaid from '../assests/teams/junaid.png'

// const isPrime = (num) => {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// };

// const TeamSection = () => {
//   const teamMembers = [
//     { id: 1, name: 'John Doe', role: 'Developer', image: sara },
//     { id: 2, name: 'Jane Smith', role: 'Designer', image: haseeb },
//     { id: 3, name: 'Mike Brown', role: 'Founder & CEO', image: juveria },
//     { id: 4, name: 'Emma Wilson', role: 'SEO', image: abbas },
//     { id: 5, name: 'Chris Lee', role: 'Designer', image: junaid },
//     // add more members as needed
//   ];

//   return (
//     <div className="team-main-container">
//       <div className="team-members-container">
//   {teamMembers.map((member, index) => (
//     <div
//       key={member.id}
//       className={`team-box ${isPrime(index + 1) ? 'prime-box' : 'regular-box'}`}
//     >
//       <div className="image-wrapper">
//         <img src={member.image} alt={member.name} className="team-image" />
//       </div>
//       <h3 className="team-name">{member.name}</h3>
//       <p className="team-role">{member.role}</p>
//     </div>
//   ))}
// </div>

//       <div className="team-info-container">
//         <h2>Our Team</h2>
//         <p>We have a skilled team ready to tackle any challenge with dedication and expertise.</p>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium aliquid provident natus cupiditate? Ea, repellat, quibusdam consequuntur quo, dolorem nam accusantium quidem expedita et id enim. Labore ullam, est voluptas corporis atque iste quidem veritatis eaque eius error perferendis aspernatur, maxime nobis! Dolorem, laborum!</p>
//       </div>
//     </div>
//   );
// };

// export default TeamSection;













import React, { useState, useEffect } from 'react';
import './TeamSection.css';
import sara from '../assests/teams/sara.png';
import juveria from '../assests/teams/juveria.png';
import abbas from '../assests/teams/abbas.png';
import haseeb from '../assests/teams/haseeb.png';
import junaid from '../assests/teams/junaid.png';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const TeamSection = () => {
  const [scrollY, setScrollY] = useState(0); // State to store the scroll position

  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'Developer', image: sara },
    { id: 2, name: 'Jane Smith', role: 'Designer', image: haseeb },
    { id: 3, name: 'Mike Brown', role: 'Founder & CEO', image: juveria },
    { id: 4, name: 'Emma Wilson', role: 'SEO', image: abbas },
    { id: 5, name: 'Chris Lee', role: 'Designer', image: junaid },
  ];

  useEffect(() => {
    // Listen for the scroll event
    const handleScroll = () => {
      // Set scroll position to state
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="team-main-container">
      <div className="team-members-container">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className={`team-box ${isPrime(index + 1) ? 'prime-box' : 'regular-box'}`}
            style={{
              // Apply dynamic Y position based on scrollY value
              transform: `translateY(${scrollY * -0.02}px)`, // The images move 0.2px for every 1px scrolled
              transition: 'transform 0.9s ease-out', // Smooth transition
            }}
          >
            <div className="image-wrapper">
              <img src={member.image} alt={member.name} className="team-image" />
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>

      <div className="team-info-container">
        <h2>Our Team</h2>
        <p>We have a skilled team ready to tackle any challenge with dedication and expertise.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laudantium aliquid provident natus cupiditate? Ea, repellat, quibusdam consequuntur quo, dolorem nam accusantium quidem expedita et id enim. Labore ullam, est voluptas corporis atque iste quidem veritatis eaque eius error perferendis aspernatur, maxime nobis! Dolorem, laborum!</p>
      </div>
    </div>
  );
};

export default TeamSection;
