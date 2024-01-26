import React, { useState } from 'react';
import experience from '../../../Experience';
import Carousel from 'react-bootstrap/Carousel';
import './Testimonial.css'

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div>
        <Carousel className='carousal_slide text-center'>
          
            {experience.map((experiences) => 
                <>
                    <div key={experiences.name}>
                        <Carousel.Item>
                            <img src={experiences.image} className='experience-image' />
                            <Carousel.Caption>
                                <h4 className='title_text'>{experiences.name}</h4>
                                <p className='experience_text'>{experiences.experience}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </div>
                </>)}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;


{/* <Carousel.Item>
            <img src={experience[0].image} alt="First Slide" className='experience-image'/>
            <Carousel.Caption>
              <h4 className='title_text'>{experience[0].name}</h4>
              <p className='experience_text'>{experience[0].experience}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={experience[1].image} alt="First Slide" className='experience-image'/>
            <Carousel.Caption>
              <h4 className='title_text'>{experience[1].name}</h4>
              <p className='experience_text'>{experience[1].experience}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={experience[2].image} alt="First Slide" className='experience-image'/>
            <Carousel.Caption>
              <h4 className='title_text'>{experience[2].name}</h4>
              <p className='experience_text'>{experience[2].experience}</p>
            </Carousel.Caption>
  </Carousel.Item> */}