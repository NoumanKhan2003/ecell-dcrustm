import React from 'react'
import MemberCard from '../components/MemberCard'
import Footer from "../components/Footer";

const TeamPage = () => {
  return (
    <>
    <div className="  mx-auto mt-[80px] h-[1600px] pb-10 flex flex-col justify-center">
      <div className="text-center">
        <h1 className="text-[4rem] font-bold text-[#144c8b] ">The Team</h1>
        <h2 className="text-[1.5rem] mt-0">GET TO KNOW THE TEAM OF E-CELL</h2>
      </div>
      <div className="my-32 ">
        <h2 className="text-[1.8rem] font-bold text-center" >UNDER THE GUIDANCE OF</h2>
        <div className="flex flex-row  flex-wrap justify-center mt-4">
          <MemberCard name="DINESH SINGH" post="PROF.INCHARGE,E-CELL" imgURL="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=sUg9EhsAAAAJ&citpid=3" email="" linkedIn="" />
        </div>
      </div>
      <div className="   mx-auto h-screen">
      <h2 className="text-[1.8rem] font-bold text-center mb-20 text-[#144c8b] " >CORE TEAM MEMBERS</h2>
        <div className="mx-20 md:mx-auto grid grid-cols-1    md:grid-cols-3 gap-16 md:gap-28">
        <MemberCard name="ANUBHAV RAWAT" post="PROF.INCHARGE,E-CELL" imgURL="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=sUg9EhsAAAAJ&citpid=3" email="" linkedIn="" />
        <MemberCard name="AASHISH JOSHI" post="PROF.INCHARGE,E-CELL" imgURL="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=sUg9EhsAAAAJ&citpid=3" email="" linkedIn="" />
        <MemberCard name="DINESH SINGH" post="PROF.INCHARGE,E-CELL" imgURL="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=sUg9EhsAAAAJ&citpid=3" email="" linkedIn="" />
        <MemberCard name="DINESH SINGH" post="PROF.INCHARGE,E-CELL" imgURL="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=sUg9EhsAAAAJ&citpid=3" email="" linkedIn="" />
        <MemberCard name="DINESH SINGH" post="PROF.INCHARGE,E-CELL" imgURL="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=sUg9EhsAAAAJ&citpid=3" email="" linkedIn="" />
        <MemberCard name="DINESH SINGH" post="PROF.INCHARGE,E-CELL" imgURL="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=sUg9EhsAAAAJ&citpid=3" email="" linkedIn="" />
        <MemberCard name="DINESH SINGH" post="PROF.INCHARGE,E-CELL" imgURL="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=sUg9EhsAAAAJ&citpid=3" email="" linkedIn="" />
        <MemberCard name="DINESH SINGH" post="PROF.INCHARGE,E-CELL" imgURL="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=sUg9EhsAAAAJ&citpid=3" email="" linkedIn="" />
        <MemberCard name="DINESH SINGH" post="PROF.INCHARGE,E-CELL" imgURL="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=sUg9EhsAAAAJ&citpid=3" email="" linkedIn="" />
        <MemberCard name="DINESH SINGH" post="PROF.INCHARGE,E-CELL" imgURL="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=sUg9EhsAAAAJ&citpid=3" email="" linkedIn="" />
        <MemberCard name="DINESH SINGH" post="PROF.INCHARGE,E-CELL" imgURL="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=sUg9EhsAAAAJ&citpid=3" email="" linkedIn="" />
        <MemberCard name="DINESH SINGH" post="PROF.INCHARGE,E-CELL" imgURL="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=sUg9EhsAAAAJ&citpid=3" email="" linkedIn="" />
        </div>
      </div>
      
    </div>
   
    </>
  )
}

export default TeamPage
