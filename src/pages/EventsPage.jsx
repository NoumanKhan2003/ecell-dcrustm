import React from 'react'
import EventCard from '../components/EventCard'
import EventsData from '../components/EventsData'
import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  offset:250,
  duration:1000,
});

const EventsPage = () => {
  return (
   

    
    <div   className="  max-w-[1240px] mx-auto mt-28 mb-10">
      <h1  className="md:text-6xl text-[2.5rem] text-[#144c8b] font-bold font-grotesk tracking-tighter pt-8 text-center">Our Events</h1>


      {/* ongoing events section */}
      <div className=' mx-6 '>
        <h3  className="md:text-4xl text-[2.5rem]  font-black font-grotesk tracking-tighter pt-8 text-left mb-6  bg-gradient-to-r from-blue-600  to-green-500  inline-block text-transparent bg-clip-text   ">Ongoing Events</h3>
        <div className='flex md:flex-nowrap flex-wrap max-w-full rounded-2xl bg-white  shadow-md'>
          <div className='flex justify-center items-center w-[90%] md:w-[40%] bg-white m-4 '>
            <div className='  w-[90%] h-[90%]  border-2 bg-red-200 rounded-xl hover:-rotate-2 hover:scale-105 ease-in-out duration-300 mx-auto '><img className='shadow-lg   w-full h-full  object-cover' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/music-auditions-design-template-e0b7e049c40e1db3c8026b25af65c6ad_screen.jpg?ts=1677375459" alt="event-img" /></div>
          </div>
          <div className=' w-[90%] md:w-[60%] pt-4 mx-auto px-10 py-10 m-4 flex flex-col justify-evenly gap-10 md:items-start '>
            <h2 className='text-5xl tracking-tighter font-grotesk font-bold '>Auditions</h2>
             <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita odio perferendis corporis eum alias odit aliquid itaque quia placeat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla omnis sequi ipsam sapiente obcaecati soluta voluptatem facere odio quaerat quos!</p>
             <p className='font-bold text-2xl '>Prize Worth : 13k</p>
             <button className=" bg-[#0065fc] md:w-[40%] w-[80%]  text-xl text-white py-5 px-8 rounded-md hover:bg-[#144c8b] hover:shadow-lg "><a target='_blank' href="https://forms.gle/KFDi73xKVnSJZWhP8">Register Here!</a> <FaArrowRight className="inline ml-2 items-center" /></button>
          </div>
        </div>
      </div>

      {/* past events section */}
      <div>
        <h3  className="md:text-4xl mt-2 text-[2.5rem] text-[#000000] font-bold font-grotesk tracking-tighter mx-6 pt-8 text-left">Past Events</h3>
      </div>
      
      <div className="grid grid-cols-1  mt-8 md:grid-cols-3 gap-9 ">
         {
            EventsData.map((item)=>
              <EventCard title={item.title} description={item.description} imgURL={item.imgURL} />
            )
         }
         
      </div>
    </div>
    
  )
}

export default EventsPage
