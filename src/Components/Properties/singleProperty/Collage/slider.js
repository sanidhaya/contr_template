import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import image1 from '../../../../images/HD-wallpaper-city-street-buildings-traffic-road-asphalt.jpg';
import image2 from '../../../../images/beautiful-sunset-los-angeles-downtown-600nw-1418018357 (1).webp';
import image3 from '../../../../images/istockphoto-478821794-170667a.webp';

const slides = [
  { url: image1, title: 'This is a title', description: 'This is a description' },
  { url: image2, title: 'This is a second title', description: 'This is a second description' },
  { url: image3, title: 'This is a third title', description: 'This is a third description' },
];

const CarouselSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={{ backgroundImage: `url(${slide.url})` }}>
            {/* Content inside each slide */}
            <div className='text-white'>
              <h1 className='text-4xl font-bold'>{slide.title}</h1>
              <p className='text-lg'>{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Left arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-7 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={() => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))} size={30} />
      </div>

      {/* Right arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-7 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={() => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))} size={30} />
      </div>

      {/* Dots navigation */}
      <div className='flex top-4 justify-center py-2'>
        {slides.map((_, index) => (
          <div key={index} onClick={() => setCurrentIndex(index)} className={`text-2xl cursor-pointer ${index === currentIndex ? 'text-white' : 'text-gray-500'}`}>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselSlider;
