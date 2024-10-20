import React from 'react'
import EventCard from '../components/EventCard'
import EventsData from '../components/EventsData'
import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import currentevent from "../assets/events_posters/empowher_quest.jpg"
import { FaCircle } from "react-icons/fa6";
// ..
AOS.init({
  offset:250,
  duration:1000,
});

const EventsPage = () => {
  return (
    

    
    <div   className="  max-w-[1240px] mx-auto mt-28 mb-10">
      <h1  className="md:text-6xl text-[2.5rem] text-[#144c8b] font-bold font-grotesk tracking-tighter  text-center">Our Events</h1>


      {/* ongoing events section */}
      <div className=' mx-6 '>
        <h3  className="md:text-4xl text-[2.5rem]  font-black font-grotesk tracking-tighter pt-8 text-left mb-6  bg-gradient-to-r from-blue-600  to-green-500  inline-block text-transparent bg-clip-text    ">Ongoing Events  </h3>
        {/* comment out below section/div if no event is going on.. */}
        <div className='flex md:flex-nowrap mt-4 flex-wrap max-w-full rounded-2xl bg-white  shadow-md'>
          <div className='flex justify-center py-4 items-center w-[90%] md:w-[40%] bg-white m-4 '>
            <div className='  w-[100%] h-[100%]  border-2  rounded-xl hover:-rotate-2 hover:scale-105 ease-in-out duration-300 mx-auto '><img className='shadow-lg  w-full h-full  object-cover' src={currentevent} alt="event-img" /></div>
          </div>
          <div className=' w-[90%] md:w-[60%] pt-4 mx-auto px-10 py-10 m-4 flex flex-col justify-evenly gap-10 md:items-start '>
            <h2 className='text-5xl tracking-tighter  font-grotesk font-bold   '>EmpowHer Quest </h2>
             <p className=''>
             E-Cell DCRUSTM, in collaboration with <span className='text-green-500 font-bold'>RITVA (BRAC)</span>, hosted the EmpowHer Quest online quiz on Unstop. Conducted in two rounds, this engaging event celebrated women in entrepreneurship, featuring a ₹2500 prize pool and fostering knowledge-sharing among participants.<br />
             <br />
              <span className='font-semibold'>EmpowHer Quiz (Round 1):</span> 23 Oct 24, 9:00 PM IST – 23 Oct 24, 10:00 PM IST
               <br />
               <span className='font-semibold'>EmpowHer Quest(Round 2):</span> 25 Oct 24, 9:00 PM IST – 25 Oct 24, 9:50 PM IST</p>
             <p className='font-bold text-2xl '>Prize Worth : INR 2500</p>
             {/* <p className='text-red-600'>*Registrations are now closed!</p> */}
             <button className=" bg-[#0065fc] border-black border-2 hover:rounded-full md:w-[40%] w-auto  text-xl text-white py-5 px-8 rounded-md hover:bg-[#144c8b] hover:shadow-lg "><a target='_blank' href="https://unstop.com/p/empowher-quest-e-cell-dcrustm-1186308?lb=xYuBeJR0">Register Here!</a> <FaArrowRight className="inline ml-2 items-center" /></button>
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
