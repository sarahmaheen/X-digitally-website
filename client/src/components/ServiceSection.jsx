import React from 'react';
import './ServiceSection.css';

// Import images directly
import dm from '../assests/dm.png'; 
import videoEdit from '../assests/videoEdit.png';
import website from '../assests/website.png';

const ServiceSection = () => {
  const services = [
    {
      title: "Digital Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita mollitia magni cum eaque nihil cumque blanditiis minima et distinctio neque, nulla temporibus, nam dolor? Sapiente distinctio a hic blanditiis esse?",
      imageUrl: dm, // Use the imported image variable here
    },
    {
      title: "Video Edit",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam soluta dolorum dignissimos possimus officiis ut aperiam, repellat, ad alias autem qui fugiat at molestiae eum obcaecati quis aliquam! Assumenda, totam. Sint, dolorum tempora? Totam, tempore dolorum? Animi soluta numquam ab eum nobis praesentium sequi fuga.",
      imageUrl: videoEdit, // Use the imported image variable here
    },
    {
      title: "Website Development",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quia, deserunt a ullam unde, quos veniam voluptate eius itaque, non distinctio voluptatum blanditiis earum dolor architecto? Quibusdam saepe numquam quam eius ex, nobis nisi, minus facilis tenetur, repellat unde! Excepturi animi molestiae sit. Magnam corporis similique accusamus quidem a quibusdam.",
      imageUrl: website, // Use the imported image variable here
    },
  ];

  return (
    <div className="services-page">
      {services.map((service, index) => (
        <div
          className={`service-section ${index % 2 === 1 ? 'reverse' : ''}`} // Alternates the direction
          key={index}
        >
          <div className="service-text">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
          <div className="service-image">
            <img src={service.imageUrl} alt={service.title} />
          </div>
        </div>
      ))}
      {/* <p></p> */}
    </div>
  );
};

export default ServiceSection;
