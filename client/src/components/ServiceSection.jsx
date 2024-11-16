import React, { useEffect, useRef } from 'react';
import './ServiceSection.css';

import dm from '../assests/dm.png';
import videoEdit from '../assests/videoEdit.png';
import website from '../assests/website.png';

const ServiceSection = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      imageRefs.current.forEach((img, index) => {
        if (img) {
          // Increase the speed by adjusting the translateY value relative to the scroll position
          const offset = window.scrollY * -0.09; // 0.3 controls the speed; increase for faster scroll effect
          img.style.transform = `translateY(${offset}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Digital Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita mollitia magni cum eaque nihil cumque blanditiis minima et distinctio neque, nulla temporibus, nam dolor? Sapiente distinctio a hic blanditiis esse?",
      imageUrl: dm,
    },
    {
      title: "Video Edit",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam soluta dolorum dignissimos possimus officiis ut aperiam, repellat, ad alias autem qui fugiat at molestiae eum obcaecati quis aliquam! Assumenda, totam.",
      imageUrl: videoEdit,
    },
    {
      title: "Website Development",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quia, deserunt a ullam unde, quos veniam voluptate eius itaque, non distinctio voluptatum blanditiis earum dolor architecto? Quibusdam saepe numquam.",
      imageUrl: website,
    },
  ];

  return (
    <div className="services-page">
      {services.map((service, index) => (
        <div
          className={`service-section ${index % 2 === 1 ? 'reverse' : ''}`}
          key={index}
        >
          <div className="service-text">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
          <div className="service-image">
            <img
              ref={(el) => (imageRefs.current[index] = el)}
              src={service.imageUrl}
              alt={service.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSection;
