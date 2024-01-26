import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {FreeMode} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

import image1 from '../../../../assets/images/slides/gettyimages-1199899108-612x612.jpg'
import image2 from '../../../../assets/images/slides/gettyimages-1232572541-612x612.jpg'
import image3 from '../../../../assets/images/slides/gettyimages-1232574287-612x612.jpg'

const slides = [
    {image:{image1},title:"This is a title",description:"This is a description"},
    {image:{image2},title:"This is a second title",description:"This is a second description"},
    {image:{image3},title:"This is a third title",description:"This is a third description"}
  ]
  

const CardSlider = () => {
  return (
    <div className='container py-4 px-4 justify-content-center '>
      <Swiper 
      freeMode={true}
      grabCursor={true}
      modules={[FreeMode]}
      className='mySwiper'
      slidesPerView={3}
      spaceBetween={30}>
      <SwiperSlide>
        <h1>Slide 1</h1>
      </SwiperSlide>
      <SwiperSlide>
        <h1>Slide 2</h1>
      </SwiperSlide>
      <SwiperSlide>
        <h1>Slide 3</h1>
      </SwiperSlide>
      <SwiperSlide>
        <h1>Slide 4</h1>
      </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CardSlider
