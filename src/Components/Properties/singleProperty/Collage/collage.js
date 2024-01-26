import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Slide = styled.div`
    width: 100%;
`;

const Collage = ({images}) => {
    
    const settings = {
        dots : true,
        infinite: true,
        speed : 500,
        slidesToShow: 1,
        slidesToScroll : 1
    };

  return (
    <Slider {...settings}>
        {images.map((src, index) => (
            <Slide key={index}>
                <Image src={src} alt={`Image ${index + 1}`} />
            </Slide>
        ) )}
    </Slider>
  )
}

export default Collage
