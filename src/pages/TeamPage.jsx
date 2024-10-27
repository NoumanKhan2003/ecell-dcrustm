
import React from 'react';
import MemberCard from '../components/MemberCard';
import Footer from "../components/Footer";
import TeamData24 from '../components/TeamData24';
import TeamData22 from '../components/TeamData22';
import TeamData23 from '../components/TeamData23';
import Accordion from '../components/Accordion';
import ProfCard from '../components/ProfCard';
import dinesh_singh from'../assets/team/prof/dinesh_singh.jpg';
import vc from'../assets/team/prof/vc.jpg';
import suresh_varma from'../assets/team/prof/suresh_varma.jpg';

const TeamPage = () => {
 
  return (
    <div className="flex flex-col min-h-screen mt-20">
      {/* Main content container */}
      <div className="flex-grow  mx-auto mt-[40px] pb-10 flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-[4rem] font-bold font-grotesk text-[#144c8b]">The Team</h1>
          <h2 className="text-[1.5rem] font-grotesk mt-0">GET TO KNOW THE TEAM OF E-CELL</h2>
        </div>
        <div className="mt-24 mb-4">
          <h2 className="text-[1.8rem] font-bold text-[#144c8b] font text-center mb-2">UNDER THE GUIDANCE OF</h2>
          <div className="flex md:flex-col gap-10 flex-wrap items-center justify-center  mt-4">
          <ProfCard name="PROF. SHREE PRAKASH SINGH" post="VICE-CHANCELLOR, DCRUST" imgURL={vc} />
          <ProfCard name="PROF. SURESH VERMA" post="DEAN STUDENT WELFARE, DCRUST" imgURL={suresh_varma} />
          
          </div>
          <h2 className="text-[1.8rem] font-bold font text-[#144c8b] text-center mt-8 mb-2">FACULTY ADVISOR</h2>
          <ProfCard name="PROF. DINESH SINGH" post="PROF.INCHARGE, E-CELL" imgURL={dinesh_singh} email="dineshsingh.cse@dcrustm.org" linkedIn="https://www.linkedin.com/in/dinesh-singh-5ba2743b/" />
        </div>
        <div className="mx-auto">
          <h2 className="text-[1.8rem] font-bold text-center mb-20 text-[#144c8b]">CORE TEAM MEMBERS</h2>
          <div className=" md:mx-auto  grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
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
          <div className='mt-14 mx-auto max-w-screen  gap-7'>
            <Accordion title="TEAM 2023-24" teamData={TeamData23} />
            <Accordion title="TEAM 2021-23 (Founding Team)" teamData={TeamData22} />
          </div>
          
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default TeamPage;
