import React from 'react';
import { useParams } from 'react-router-dom';
import services from '../../Services';
import ContactForm from '../ContactUs/ContactForm/ContactForm';
import './Services.css';

const Services = () => {
  const { id } = useParams();
  const matchedService = services.find(item => item.id == id);

  const serviceText = matchedService ? matchedService.text : "Service not found";
  const serviceImage = matchedService ? matchedService.image : null;

  const backgroundStyle = {
    backgroundImage: `url(${serviceImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh', // Set the height to cover the entire viewport
  };

  return (
    <>
      <div style={backgroundStyle} className='service-page'>
        <div className='service_heading text-top'>
          Service {id}
        </div> 
        <div className='service_content text_left'>
          {/*will be placed towards the left*/}
          {serviceText}
          Lorem ipsum dalorem abc def gjkcnaerncakejrnfciarusvbuinsrlekfviu iehfvsurkjvniruwe iucfehiwerfbrwev
        </div>
        <div className='service_contactus text_right'>
          {/*will be placed towards the right*/}
          <div className='text-white'>
          Contact Us for more information!
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default Services;
