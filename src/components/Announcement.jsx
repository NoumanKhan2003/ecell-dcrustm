import React from 'react'
import Marquee from "react-fast-marquee";

const Announcement = () => {
  return (
    <div className='bg-[#0FFF50] text-black flex justify-between items-center py-[1rem] text-[0.8rem] '>
        <Marquee pauseOnHover speed={70}>
      <div className='mr-[2rem] flex items-center '>
        <span className='mr-[2rem]'>Auditions are going to held soon. Stay connected!</span>
        <span className='mr-[2rem]'>Follow on Insta @ ECELL.DCRUSTM </span>
        <span className='mr-[2rem] underline font-grotesk text-2xl'><a target='_blank'  href="https://forms.gle/KFDi73xKVnSJZWhP8">Register Now!</a></span>
      </div>
      <div className='mr-[2rem] flex items-center '>
        <span className='mr-[2rem]'>Auditions are going to held soon. Stay connected!</span>
        <span className='mr-[2rem]'>Follow on Insta @ ECELL.DCRUSTM </span>
        <span className='mr-[1rem]'> We Are Recruiting...</span>
      </div>
      </Marquee>
    </div>
  )
}

export default Announcement
