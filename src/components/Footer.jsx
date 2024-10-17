import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentDate=new Date().getFullYear();
  
  
  
  return (
    <div className="bg-black  max-w-screen h-[400px] md:h-[400px] text-white  ">
      <div className="md:mx-auto text-center max-w-full md:text-left md:max-w-[1200px] min-h-[300px] pt-4   flex flex-row justify-evenly  ">
        <div className=" mx-auto md:mx-0"><h1 className="font-semibold text-xl text-blue-100 pt-16 pb-3 ">CONTACT US</h1>
        <p className="text-gray-400 md: ">Deenbandhu Chhotu Ram University of <br /> Science and Technology, Murthal-Haryana, India</p>
        <p>PIN: <span className='text-gray-400'>131027</span></p><p>Email:<span className="text-gray-400"> ecell@dcrustm.org </span> </p> </div>
        
        <div className="hidden md:block"><h1 className="font-semibold text-xl pt-5 md:pt-16 text-blue-100 pb-3 ">QUICK LINKS</h1>
        <ul className='text-gray-400'>
            <li><Link className="hover:underline hover:text-blue-200 " to="/about">About</Link></li>
            <li><Link className="hover:underline hover:text-blue-200 " to="/team">Team</Link></li>
            <li><Link className="hover:underline hover:text-blue-200 " to="/gallery">Gallery</Link></li>
            <li><Link className="hover:underline hover:text-blue-200 " to="/events">Events</Link></li>
        </ul></div>
       
       
        {/* <div className=" hidden md:block lg:visible  pt-5 md:pt-24">
        <ul className='text-gray-400'>
            <li><Link className="hover:underline hover:text-blue-200 " to="/">Who are we?</Link></li>
            <li><Link className="hover:underline hover:text-blue-200 " to="/about">What we do?</Link></li>
            <li><Link className="hover:underline hover:text-blue-200 " to="/">Home</Link></li>
            <li><Link className="hover:underline hover:text-blue-200 " to="/">Home</Link></li>
            <li><Link className="hover:underline hover:text-blue-200 " to="/">Home</Link></li>
        </ul>
        </div> */}
        
    </div>
    <div className="  flex flex-row mx-auto justify-center ">
            <a  href="https://www.linkedin.com/in/e-cell-dcrustm-6b73b0240/" target='_blank'><FaLinkedin  className="h-full w-12 text-blue-400 hover:scale-150 px-2 duration-300 ease-in-out " /></a>
            <a  href="https://www.instagram.com/ecell.dcrustm/" target='_blank'><FaInstagram className="h-full w-12 text-blue-400 hover:scale-150 px-2 duration-300 ease-in-out "  /></a>
            <a  href="https://youtube.com/@synergyentrepreneurshipcel6475?si=HjJfmJkESxwgqa5L" target='_blank'><FaYoutube   className="h-full w-12 text-blue-400 hover:scale-150 px-2 duration-300 ease-in-out " /></a>
        </div>
    <div className='flex text-[0.6rem] md:text-[0.85rem] flex-col justify-center items-center  py-4 bg-gray-900  mt-6 '>
      <p className=' text-gray-500 mb-2'>© {currentDate} ECELL DCRUSTM. All rights reserved.</p>
      <p className=' text-gray-500'> Designed & Developed by  <a target='_blank' className='text-white ' href="https://ecell-dcrustm-web-team.vercel.app/">Ecell DCRUSTM Web Team</a></p>
    </div>
    </div>
  )
}

export default Footer
