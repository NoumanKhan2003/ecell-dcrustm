import React from 'react'
import EventCard from '../components/EventCard'
import EventsData from '../components/EventsData'

const EventsPage = () => {
  return (
   

    
    <div className="  max-w-[1240px] mx-auto mt-0 mb-10">
      <h1 className="text-6xl text-[#144c8b] font-bold tracking-tighter pt-8 text-center">Our Events</h1>
      <div className="grid grid-cols-1  mt-10 md:grid-cols-3 gap-9">
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
