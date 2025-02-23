import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import Footer from '../components/Footer'

const ProfCard = (props) => {
  return (
    <div className="bg-red  flex justify-center flex-col items-center mb-4 text-center   ">
         <img className=' h-[240px] w-[240px]  object-cover  ' loading='lazy' src={props.imgURL} alt="member-img" />
         <h1 className=" mt-2 text-2xl font-semibold">{props.name}</h1>
         <h2 className="text-xs   ">{props.post} </h2>
         {/* <div className="flex justify-center gap-2 mt-5 text-3xl"> 
            <a target='_blank' href={`mailto:${props.email}`}><MdEmail className="hover:text-[#144c8b] hover:scale-150 duration-200" /></a>
              <span>
                <a target='_blank' href={props.linkedIn}><FaLinkedin  className="hover:text-[#144c8b] hover:scale-150 duration-200" /></a>
                </span>
                </div> */}
    </div>

  )
}

export default ProfCard
