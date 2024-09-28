import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/scrollbar';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    autoplay={{ delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
     }} 
    >
      <SwiperSlide><TestimonialCard name="Professor 1" imgURL="https://i.pinimg.com/736x/cf/0b/74/cf0b7475f26c043b55fe50cfb98c15d5.jpg" text="E-Cell DCRUSTM is working to create a culture of innovation and entrepreneurship in the student community. So pleased to see this community grow with the active participation of the student community coupled with an equally passionate group of alumni, faculty, and friends of E-Cell DCRUSTM." /></SwiperSlide>
      <SwiperSlide><TestimonialCard name="Professor 2" imgURL="https://edtech4beginners.com/wp-content/uploads/2021/05/1.png" text="E-Cell DCRUSTM is working to create a culture of innovation and entrepreneurship in the student community. So pleased to see this community grow with the active participation of the student community coupled with an equally passionate group of alumni, faculty, and friends of E-Cell DCRUSTM." /></SwiperSlide>
      <SwiperSlide><TestimonialCard name="Professor 3" imgURL="https://www.adrtoolbox.com/wp-content/uploads/COLLEGE-PROFESSOR.jpg" text="E-Cell DCRUSTM is working to create a culture of innovation and entrepreneurship in the student community. So pleased to see this community grow with the active participation of the student community coupled with an equally passionate group of alumni, faculty, and friends of E-Cell DCRUSTM." /></SwiperSlide>
      
      
    </Swiper>
  )
}

export default Testimonials
