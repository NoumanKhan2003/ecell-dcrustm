import React from 'react'

const TestimonialCard = ({imgURL, name, text}) => {
  return (
    <div className='max-w-full mx-12 min-h-[70vw] md:min-h-[35vw]   rounded-xl  flex flex-col items-center justify-evenly px-5 mb-8 md:px-20 text-center '>
      <div className='w-[16vw] h-[16vw] md:w-[10vw] md:h-[10vw] mb-4 '><img  className='w-full   object-cover h-full rounded-full' src={imgURL} alt="author-img" /></div>
      <p className='text-sm md:text-xl font-grotesk '>{text}</p>
      <p className=' font-grotesk text-[1rem] mt-2 text-blue-800 font-semibold '>- {name}</p>
    </div>
  )
}

export default TestimonialCard
