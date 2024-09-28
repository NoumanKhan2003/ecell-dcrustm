
import React from 'react';
import MemberCard from '../components/MemberCard';
import Footer from "../components/Footer";
import TeamData24 from '../components/TeamData24';
import TeamData22 from '../components/TeamData22';
import TeamData23 from '../components/TeamData23';
import Accordion from '../components/Accordion';

const TeamPage = () => {
 
  return (
    <div className="flex flex-col min-h-screen mt-20">
      {/* Main content container */}
      <div className="flex-grow  mx-auto mt-[80px] pb-10 flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-[4rem] font-bold font-grotesk text-[#144c8b]">The Team</h1>
          <h2 className="text-[1.5rem] font-grotesk mt-0">GET TO KNOW THE TEAM OF E-CELL</h2>
        </div>
        <div className="my-32">
          <h2 className="text-[1.8rem] font-bold font text-center">UNDER THE GUIDANCE OF</h2>
          <div className="flex flex-row flex-wrap justify-center mt-4">
            <MemberCard name="DINESH SINGH" post="PROF.INCHARGE, E-CELL" imgURL="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=sUg9EhsAAAAJ&citpid=3" email="" linkedIn="" />
          </div>
        </div>
        <div className="mx-auto">
          <h2 className="text-[1.8rem] font-bold text-center mb-20 text-[#144c8b]">CORE TEAM MEMBERS</h2>
          <div className="mx-20 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-28">
            {/* List your team members here */}
            {
              TeamData24.map((item)=>{

              
                return(
                  <MemberCard name={item.name} post={item.post} imgURL={item.imgURL} email={item.email} linkedIn={item.linkedIn} />
                )
              }
              )
            }
            
           
            {/* Add more team members here */}
           
          </div>
          <div className='mt-14 mx-auto max-w-screen bg-red-400 gap-7'>
            <Accordion title="TEAM 2023" teamData={TeamData23} />
            <Accordion title="TEAM 2021 & 22 (Founders Batch)" teamData={TeamData22} />
          </div>
          
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TeamPage;
