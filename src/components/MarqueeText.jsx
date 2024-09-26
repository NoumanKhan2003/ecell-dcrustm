import React from 'react'
import Marquee from "react-fast-marquee";

const MarqueeText = () => {
  return (
    <>
    
   
    <div className='  rotate-2 overflow-hidden   bg-white text-[#286cff] flex justify-between items-center py-[1rem] text-[3rem] '>
        <Marquee pauseOnClick direction="right" speed={120}>
      <div className='mr-[2rem] flex items-center  '>
        <span className=' font-grotesk mr-[2rem]'>You are the future Entrepreneurs.</span>
        <span className=' font-grotesk mr-[2rem]'> You will create the solutions.</span>
        <span className=' font-grotesk mr-[2rem]'>Future Leaders.</span>
      </div>
      <div className='mr-[2rem] flex items-center '>
      <span className=' font-grotesk mr-[2rem]'>You are the future Entrepreneurs.</span>
        <span className=' font-grotesk mr-[2rem]'> You will create the solutions.</span>
        <span className=' font-grotesk mr-[1rem]'>Future Leaders.</span>
      </div>
      </Marquee>
    </div>
    <div className='  -rotate-2 shadow-lg overflow-hidden  bg-[#2e62ff] text-white flex justify-between items-center py-[1rem] text-[3rem] '>
        <Marquee pauseOnClick direction="left" speed={120}>
      <div className='mr-[2rem] flex items-center '>
        <span className='mr-[2rem]'>You are the future Entrepreneurs.</span>
        <span className='mr-[2rem]'> You will create the solutions.</span>
        <span className='mr-[2rem]'>Future Leaders.</span>
      </div>
      <div className='mr-[2rem] flex items-center '>
      <span className='mr-[2rem]'>You are the future Entrepreneurs.</span>
        <span className='mr-[2rem]'> You will create the solutions.</span>
        <span className='mr-[1rem]'>Future Leaders.</span>
      </div>
      </Marquee>
    </div>
    </>
  )
}

export default MarqueeText
