import React, { useState } from "react";

import MemberCard from "./MemberCard";

const Accordion = ({title, teamData}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="pt-6 bg-white rounded-sm ">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-center mb-4 w-full"
      >
        <span className="md:text-3xl font-semibold text-[#144c8b] ">{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-blue-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
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
      <hr className="pt-2"/>
    </div>
  );
};

export default Accordion;