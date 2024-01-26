import React from 'react';
import Cards from './Cards/Cards';
import Listings from '../../../Listings';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import './MajorListings.css'

function SampleNextArrow(props){
  const {className, style, onClick} = props;

  return (<div 
          className={className}
          style={{...style, display:"block", background:"red"}}
          onClick={onClick}
          />
  )
}

function SamplePrevArrow(props){
  const {className, style, onClick} = props;

  return(
    <div className={className}
          style={{...style, display:"block", background:"grey"}}
          onClick={onClick}
          />
  )
}

const MajorListings = () => {

  const settings = {
    className : "center",
    dots : true,
    infinite: true,
    slidesToShow: 4,
    initialSlide : 0, 
    centerPadding: "60px"
   }

  return (
    <div className='m-10 mj-listings'>
    <div className='m-10 major_listings'>
      <div className="sliding_card">
      <h1 className="major_listing">Major Listings</h1>
          <Slider {...settings}>
        {Listings.map((Lists) => (
          <>
            {/*console.log(Lists)*/}
            
            <div key={Lists.Title}>
              <Cards Listing={Lists} Listing_Text="The text" />
            </div>
            
          </>
        ))}
        </Slider>
      </div>
    </div>
    </div>
  );
};

export default MajorListings;