import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import './Collage.css'

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Slide = styled.div`
    width: 100%;
`;

const Collage = ({slides}) => {
    
    const settings = {
        dots : true,
        infinite: true,
        speed : 500,
        slidesToShow: 1,
        slidesToScroll : 1,
        autoplay : true,
        autoplaySpeed: 2500,
        pauseOnHover : true
    };

  return (
    <Slider {...settings}>
        {slides.map((slide, index) => (
            <Slide key={index} >
                <Image src={slide.url} alt={`Image ${index + 1}`} />
            </Slide>
        ))}
    </Slider>
  )
}

export default Collage

{/*
{images.map((url, index) => (
    <Slide key={index}>
        <Image src={url} alt={`Image ${index + 1}`} />
    </Slide>
) )}

*/}