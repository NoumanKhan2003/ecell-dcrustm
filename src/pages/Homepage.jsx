import React from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Card from "../components/Card";
// import Testimonial from "../components/testimonial";
import Footer from "../components/Footer";
import hero_image from '../assets/hero_image.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { FaArrowRight } from "react-icons/fa";
import Announcement from "../components/Announcement";

import MarqueeText from "../components/MarqueeText";
// ..
AOS.init({
  offset:250,
  duration:1000,
});

const Homepage = () => {
  const [text]=useTypewriter(
    {
      words: ['Ideation','Integration','Elevation'],
      loop: true,
      typeSpeed:120,
      deleteSpeed:80,
    }
  );

  return (
    <>
   
    <div className="  max-w-[1240px] mx-auto mt-28 px-4 ">
   
      {/*header section*/}
      <div  className=" flex justify-center flex-wrap lg:flex  lg:w-full h-auto md:h-[700px] ">
        <div className=" w-[90%] text-center md:text-left md:w-1/2 pt-10  ">
            <h1 className="  text-[#144c8b] font-bold tracking-tighter text-[2.5rem] md:text-6xl pb-10   md:pb-14">E-Cell DCRUSTM</h1>
            <h2 className="  text-gray-900 text-5xl pb-14">Accelerate Your <br />
             <span className="text-blue-600" >{text}</span> <span className="text-blue-600"><Cursor cursorStyle="|" /></span>
              <br />Journey!</h2>
            <p className="text-xl  md:text-xl text-gray-800 pb-14 mb-8  md:pr-14">Welcome to the entrepreneurship community of IIT Murthal where we ideate, integrate and elevate the future innovations of the century!</p>
           <button className=" bg-[#0065fc] text-xl text-white py-5 px-10 rounded-md hover:bg-[#144c8b] hover:shadow-lg"><Link to='/'>Get Started!</Link><FaArrowRight className="inline ml-2 items-center" /></button>
        </div>
        <div style={{ mixBlendMode: 'multiply' }} className=" w-[70%]   md:w-1/2 ">
          <img src="https://img.freepik.com/free-vector/people-analyzing-growth-charts-illustrated_23-2148865274.jpg?t=st=1726001405~exp=1726005005~hmac=8d475c66abf9bb193b37e852b15bafd47092641eaa050ded071c30fce6c266a8&w=900" alt="hero-right-image" />
        </div>
      </div>
     </div>

      {/* marqueee section */}
      <div className="  py-[6rem] overflow-hidden   ">
        <div className="">
          <MarqueeText  />
        </div>
        
        
    </div>

      {/*who are we  section*/}
       <div className=" pt-5 pb-14">
      <div className="  max-w-[1240px] mx-auto mt-20 px-4    ">
      <div data-aos="zoom-in" className="   md:w-full flex   flex-wrap justify-center md:flex-row md:items-center py-10">
        <div  className="flex-grow text-center md:text-left w-screen  md:w-1/2 ">
          <h1 className="text-6xl text-[#144c8b] text-center md:text-left  font-bold tracking-tighter py-10">Who are we?</h1>
          <p className=" md:text-xl text-center md:text-justify text-gray-800  pb-14 mb-6 px-6 md:px-0 md:pr-16 md:pt-5">E-Cell DCRUSTM is an institute body run by the students of DCRUST, Murthal devoted to acting as a symbiotic link between the entrepreneurs of E-Cell and the existing startup ecosystem as well as acting as a hub where all the startups can meet ,collaborate and innovate!</p>
          <button className=" bg-[#0065fc]  text-xl text-white py-5 px-10 rounded-md hover:bg-[#144c8b] hover:shadow-lg "><Link to='/about'>Know more!</Link><FaArrowRight className="inline ml-2 items-center" /></button>

        </div>
        <div  className="w-[70%]  mx-auto mt-10 md:mt-0 md:w-1/2 ">
        <div style={{ mixBlendMode: 'multiply' }} className=""><img src={hero_image} alt="" /></div></div>
      </div>
      </div></div>

      {/*what we do section*/}
      <div className="  max-w-[1240px] mx-auto mt-20 px-4   ">
      <div data-aos="zoom-in"  className="w-full  flex flex-col items-center  md:h-[700px]  ">
        <div className=" bg-[#ecf5ff]  w-full  flex flex-col items-center">
        <h1 className="text-6xl text-[#144c8b] font-bold tracking-tighter py-10">What we do?</h1>
        <p className="text-xl text-gray-800 text-center  pb-14 mb-6 px-6 md:px-60 pt-5">Through our vision of "Learn, Build and Scale" we implement various initiatives and events in DCRUSTM to foster the entrepreneurial minds and create a culture of enthralling startups bound for success!</p>
          </div>
        <div className="flex flex-col h-full   overflow-hidden md:flex-row md:flex-wrap justify-center px-4  gap-10">
          <Card imgURL="https://img.freepik.com/free-vector/business-management-vector_53876-44129.jpg?t=st=1726141342~exp=1726144942~hmac=f0127be5641b21665ca3c6462a6fa600ef72640d9e52c6612bd38943af030021&w=900" title="Learn" content="Network with alumni founders, Get incubated in our incubators and seize the opportunity to pitch in front of Angel Investors & VCs!" />
          <Card imgURL="https://img.freepik.com/free-vector/business-management-vector_53876-44129.jpg?t=st=1726141342~exp=1726144942~hmac=f0127be5641b21665ca3c6462a6fa600ef72640d9e52c6612bd38943af030021&w=900" title="Learn" content="Network with alumni founders, Get incubated in our incubators and seize the opportunity to pitch in front of Angel Investors & VCs!" />
          <Card imgURL="https://img.freepik.com/free-vector/business-management-vector_53876-44129.jpg?t=st=1726141342~exp=1726144942~hmac=f0127be5641b21665ca3c6462a6fa600ef72640d9e52c6612bd38943af030021&w=900" title="Learn" content="Network with alumni founders, Get incubated in our incubators and seize the opportunity to pitch in front of Angel Investors & VCs!" />
        </div>
      </div>
      </div>
      
       {/*what people say*/}

       {/* <div className="w-full h-screen md:h-[900px] bg-slate-400 mt-28">
        <div className="flex justify-center"><h1 className="text-6xl font-bold py-10">What people think about us</h1></div>
        <div >
          <Testimonial />
        </div>
       </div> */}
       
       
       
      
    
    
    

    <div className="mt-10  ">
    <Footer />
    </div>
    
     </>
  );
};

export default Homepage;
