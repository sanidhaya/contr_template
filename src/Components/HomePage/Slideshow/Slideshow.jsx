import React, { useState } from 'react'
import image1 from '../../../assets/images/slides/gettyimages-1232572541-612x612.jpg'
import image2 from '../../../assets/images/slides/gettyimages-1199899108-612x612.jpg'
import image3 from '../../../assets/images/slides/gettyimages-1232574287-612x612.jpg'
import { BsChevronCompactLeft,BsChevronCompactRight } from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const slides = [
    {
        url: image1
    },
    {
        url: image2
    },
    {
        url: image3
    },  
];



const Slideshow = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex)
    }
    
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length -1 ;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div style={{backgroundImage : `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
      {/* left arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-7 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' >
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* right arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-7 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' >
        <BsChevronCompactRight onClick={nextSlide} size={30}/>
      </div>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
            <RxDotFilled/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Slideshow
