import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black max-w-screen h-[400px] md:h-[400px] text-white flex flex-col items-center  ">
      <div className=" text-center md:text-left md:w-[1200px] h-[300px] pt-4  grid md:grid-cols-3 grid-cols-1 w-[90%] ml-auto">
        <div className=" "><h1 className="font-semibold text-2xl text-blue-100 pt-16 ">Contact us</h1>
        <p className="text-gray-400 pr-10">Deenbandhu Chhotu Ram University of Science and Technology, Murthal-Haryana ,India</p>
        <p>PIN:131027</p><p>Email:<span className="text-gray-400"> ecell.dcrustm@gmail.com </span> </p> </div>
        
        <div className="hidden md:block"><h1 className="font-semibold text-2xl pt-5 md:pt-16 text-blue-100 ">Important</h1>
        <ul className='text-gray-400'>
            <li><Link className="hover:underline hover:text-blue-200 " to="/">Home</Link></li>
            <li><Link className="hover:underline hover:text-blue-200 " to="/about">About</Link></li>
            <li><Link className="hover:underline hover:text-blue-200 " to="/">Team</Link></li>
            <li><Link className="hover:underline hover:text-blue-200 " to="/">Gallery</Link></li>
            <li><Link className="hover:underline hover:text-blue-200 " to="/">Contact</Link></li>
        </ul></div>
       
       
        <div className=" hidden md:block lg:visible  pt-5 md:pt-24">
        <ul className='text-gray-400'>
            <li><Link className="hover:underline hover:text-blue-200 " to="/">Who are we?</Link></li>
            <li><Link className="hover:underline hover:text-blue-200 " to="/about">What we do?</Link></li>
            <li><Link className="hover:underline hover:text-blue-200 " to="/">Home</Link></li>
            <li><Link className="hover:underline hover:text-blue-200 " to="/">Home</Link></li>
            <li><Link className="hover:underline hover:text-blue-200 " to="/">Home</Link></li>
        </ul>
        </div>
        
    </div>
    <div className="  flex flex-row mx-auto justify-center ">
            <a  href=""><FaLinkedin  className="h-full w-12 text-blue-400 hover:scale-150 px-2 duration-300 ease-in-out " /></a>
            <a  href=""><FaInstagram className="h-full w-12 text-blue-400 hover:scale-150 px-2 duration-300 ease-in-out "  /></a>
            <a  href=""><FaYoutube   className="h-full w-12 text-blue-400 hover:scale-150 px-2 duration-300 ease-in-out " /></a>
        </div>
    </div>
  )
}

export default Footer
