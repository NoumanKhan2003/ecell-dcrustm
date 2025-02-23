import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md"; 

import MemberCard from "./MemberCard";

const Accordion = ({title, teamData}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="pt-6 mt-4 md:px-12 pb-2 bg-white rounded-sm  ">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-center mb-4 w-full "
      >
        <span className="md:text-3xl hover:text-black font-semibold text-[#144c8b] ">{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <MdKeyboardArrowDown
          className={`ml-8 transition-transform duration-300 ease-out ${
            accordionOpen ? "rotate-180" : "rotate-0"
          }`}
          size={24}  
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden ">
        <div className="mx-20 md:mx-auto px-3 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
            {/* List your team members here */}
            {
              teamData.map((item)=>{

              
                return(
                  <MemberCard name={item.name} post={item.post} imgURL={item.imgURL} email={item.email} linkedIn={item.linkedIn} />
                )
              }
              )
            }
            
           
            {/* Add more team members here */}
           </div>
          </div>
        
      </div>
    
    </div>
  );
};

export default Accordion;