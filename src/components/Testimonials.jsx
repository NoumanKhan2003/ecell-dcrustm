import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/scrollbar';
import TestimonialCard from './TestimonialCard';

import mohit_yadav from "../assets/team/2022/mohit.jpg"
import Navdeep_kamboj from"../assets/guests/Navdeep_kamboj.jpeg"
import gourav_goel from"../assets/guests/gourav_goel.jpeg"
import harsh_tageja from"../assets/guests/harsh_tageja.jpeg"

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
      <SwiperSlide><TestimonialCard name="Navdeep Kamboj (Founder, Glazia Windoors Pvt. Ltd.)" imgURL={Navdeep_kamboj} text="It was a privilege to return to my alma mater, DCRUST, Murthal, and engage with the E-Cell club. The enthusiasm and curiosity of the students about entrepreneurship were inspiring. The session was a great opportunity to discuss the challenges and rewards of starting a venture, and I was impressed by their eagerness to explore the startup ecosystem. Such initiatives are vital in keeping students motivated and informed about the opportunities that entrepreneurship holds. I look forward to seeing more of these interactive sessions, fostering innovation and creativity among the next generation of entrepreneurs." /></SwiperSlide>

      <SwiperSlide><TestimonialCard name="Gourav Goel (Guest speaker & Alumni)" imgURL={gourav_goel} text="I appreciate E-Cell's efforts in promoting entrepreneurship through informative sessions and inspiring talks. Their initiatives have provided valuable insights and encouraged students to explore innovative ideas. Thank you, E-Cell, for your contributions to our college community." /></SwiperSlide>

      <SwiperSlide><TestimonialCard name="Harsh Tageja (Guest speaker & Alumni)" imgURL={harsh_tageja} text="I have a great experience with E-cell whether its the events it organises or its amazing people. If a work has to be done there is always a system for that to be done in E-cell and thats the best part about it." /></SwiperSlide>
      
      <SwiperSlide><TestimonialCard name="Mohit Yadav (Founder, Advanced Baba)" imgURL={mohit_yadav} text="The team worked hard to build a great society for budding entrepreneurs. We hosted events that students loved, which motivated us to work even harder. ECELL DCRUST became one of the most respected groups on campus, filled with talented and dedicated people. The experience taught me a lot about entrepreneurship and gave me valuable skills. Even now, after graduating, I stay in touch with the ECELL network. When I'm hiring for my startup, I always look to ECELL DCRUST first because I know how capable its members are." /></SwiperSlide>
      
    </Swiper>
  )
}

export default Testimonials
