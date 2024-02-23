import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import './Slideshow.css';

const Slideshow = ({ images }) => {
  const slides = images.map((image, index) => ({ image, id: index }));

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
        nextSlide()
    },2000)
    return () => clearInterval(intervalId)
        },
        [current,length]
    )

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {slides.map((slide, index) => (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && <img src={slide.image} alt='travel image' className='image' />}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Slideshow;
