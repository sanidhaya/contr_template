import React from 'react'
import image1 from '../../Site ki bakchodi/15000 sq ft commercial space/WhatsApp Image 2024-02-27 at 11.28.12 AM.jpeg'
import GoogleMaps from './googleMaps/googleMaps'
import './Properties.css'
import SeeAllProperties from './SeeAllProperties/SeeAllProperties'


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
