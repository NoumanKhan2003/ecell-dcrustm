import React from 'react'
import EventCard from '../components/EventCard'
import EventsData from '../components/EventsData'
import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import currentevent from "../assets/events_posters/adventure.jpg"
import { FaCircle } from "react-icons/fa6";
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
        <h3  className="md:text-4xl text-[2.5rem]  font-black font-grotesk tracking-tighter pt-8 text-left mb-6  bg-gradient-to-r from-blue-600  to-green-500  inline-block text-transparent bg-clip-text    ">Ongoing Events  </h3>
        {/* comment out below section/div if no event is going on.. */}
        <div className='flex md:flex-nowrap mt-4 flex-wrap max-w-full rounded-2xl bg-white  shadow-md'>
          <div className='flex justify-center py-4 items-center w-[90%] md:w-[40%] bg-white m-4 '>
            <div className='  w-[90%] h-[100%]  border-2  rounded-xl hover:-rotate-2 hover:scale-105 ease-in-out duration-300 mx-auto '><img className='shadow-lg  w-full h-full  object-cover' src={currentevent} alt="event-img" /></div>
          </div>
          <div className=' w-[90%] md:w-[60%] pt-4 mx-auto px-10 py-10 m-4 flex flex-col justify-evenly gap-10 md:items-start '>
            <h2 className='text-5xl tracking-tighter  font-grotesk font-bold   '>Adventure </h2>
             <p className=''>
                    This event is in collaboration with <span className=' text-blue-800'>Ecell IITRoorkee. </span><br />
              Pitch deck Submission: 09 Oct 24, 12:00 PM IST – 11 Oct 24, 11:59 PM IST
               <br />
               Advertisement Creation: 13 Oct 24, 12:01 AM IST – 15 Oct 24, 11:59 PM IST</p>
             <p className='font-bold text-2xl '>Prize Worth : 20K</p>
             <p className='text-red-600'>*Registrations are now closed!</p>
             <button className=" bg-[#747474] border-black border-2 hover:rounded-full md:w-[40%] w-[90%]  text-xl text-white py-5 px-8 rounded-md hover:bg-[#144c8b] hover:shadow-lg "><a target='_blank' href="https://unstop.com/competitions/adventure-iit-roorkee-1173151">Register Here!</a> <FaArrowRight className="inline ml-2 items-center" /></button>
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
