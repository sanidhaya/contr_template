import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Properties from '../../../Properties';
import Cards from './Cards/Cards';
import './MajorListings.css';

const MajorListings = () => {

  if(window.matchMedia("(max-width : 850px)").matches){
    var settings = {
      className: "center",
      dots: true,
      infinite: true,
      slidesToShow: 1,
      initialSlide: 0,
      rows : 2,
      centerPadding: "20px"
    };
  }else if(window.matchMedia("(min-width : 850px)").matches){
    var settings = {
      className: "center",
      dots: true,
      infinite: true,
      slidesToShow: 4,
      initialSlide: 0,
      rows : 2,
      centerPadding: "60px"
    };
  }

  return (
    <>
    <div className='major-listings-container'>
      <h1 className="major-listing-title">Major Listings</h1>
      <div className="major-listings">
        <div className="sliding-card">
          <Slider {...settings}>
            {Properties.map((list) => (
              <div key={list.Title}>
                <Cards listing={list} text="More about the property" className="slidingcard"/>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    </>
  );
};

export default MajorListings;
