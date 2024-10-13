import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import Footer from '../components/Footer'

const ProfCard = (props) => {
  return (
    <div className="bg-red w-[240px] mb-10 text-center   ">
         <img className='w-full h-[240px] object-cover  ' loading='lazy' src={props.imgURL} alt="member-img" />
         <h1 className=" mt-2 text-2xl font-semibold">{props.name}</h1>
         <h2 className="text-xs ">{props.post} </h2>
         
    </div>

  )
}

export default ProfCard
