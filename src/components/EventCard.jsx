import React from 'react'

const EventCard = (props) => {
  return (
    <div className="bg-red-200 group relative mt-4  mx-auto overflow-hidden rounded-xl">
        <div className="w-[300px]  h-[350px] ">
                  <img src={props.imgURL} alt="event-img" className='  h-full w-full object-cover group-hover:rotate-3 group-hover:scale-105 transition-transform  ' />

        </div>
      <div className="from-transparent via-transparent to-black bg-gradient-to-b absolute inset-0 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
        <div className="absolute inset-0 px-9 flex flex-col items-center justify-center translate-y-[75%] group-hover:translate-y-0 transition-all">
        <h1 className=' text-white font-bold text-3xl pb-3 text-center'>{props.title}</h1>
        <p className='text-white  text-center text-[16px]'>{props.description}</p></div>
        </div>
       
    </div>
  )
}

export default EventCard
