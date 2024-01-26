import React from 'react'
import './Properties.css'
import image1 from '../../assets/images/slides/gettyimages-1199899108-612x612.jpg'
import GoogleMaps from './googleMaps/googleMaps'
import SeeAllProperties from './SeeAllProperties/SeeAllProperties'
import SingleProperty from './singleProperty/singleProperty'


const Properties = () => {
  return (
    <>
      <div>
        <div className='image-container'>
          <img src={image1} className='background-image' />
        </div>
        <div className='text-overlay'>
          <div className='centered-heading'>
            All Projects 
          </div>
          <div className='adjustable-text '>
            lorem ipsum dorum, this will be a general text about the projects. It is about a new dawn and everyone will take part. 
          </div>
        </div>
      </div>
      {/*-----------------------------------*/}
      <div className='see-properties'>
        <SeeAllProperties />
      </div>
      {/*-----------------------------------*/}
      <div>
        <GoogleMaps />
      </div>
    </>

  )
}

export default Properties
