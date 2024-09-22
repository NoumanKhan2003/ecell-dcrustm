import React from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Card from "../components/Card";
// import Testimonial from "../components/testimonial";
import Footer from "../components/Footer";

const Homepage = () => {
  const [text]=useTypewriter(
    {
      words: ['Ideate','Integrate','Elevate'],
      loop: true,
      typeSpeed:120,
      deleteSpeed:80,
    }
  );

  return (
    <>
    <div className=" max-w-[1240px] mx-auto mt-0">
      {/*header section*/}
      <div className=" flex justify-center flex-wrap lg:flex  lg:w-full h-100% md:h-[700px] ">
        <div className=" w-[100vw] text-center md:text-left md:w-1/2 pt-10  ">
            <h1 className=" text-[#144c8b] font-bold tracking-tighter text-5xl md:text-6xl pb-14">E-Cell IIT Murthal</h1>
            <h2 className="text-gray-900 text-5xl pb-14">Accelerate Your <br />
             <span className="text-blue-600" >{text}</span> <span className="text-blue-600"><Cursor cursorStyle=">" /></span>
              <br />Journey</h2>
            <p className="text-xl md:text-2xl text-gray-800 pb-14 mb-8  md:pr-4">Welcome to the entrepreneurship community of IIT Murthal where we ideate, integrate and elevate the future innovations of the century!</p>
           <button className=" bg-[#0065fc] text-3xl text-white py-5 p-20 rounded-md hover:bg-[#144c8b] hover:shadow-lg"><Link to='/contact'>Get Started!</Link></button>
        </div>
        <div style={{ mixBlendMode: 'multiply' }} className=" w-[60%]  md:w-1/2 ">
          <img src="https://img.freepik.com/free-vector/people-analyzing-growth-charts-illustrated_23-2148865274.jpg?t=st=1726001405~exp=1726005005~hmac=8d475c66abf9bb193b37e852b15bafd47092641eaa050ded071c30fce6c266a8&w=900" alt="hero-right-image" />
        </div>
      </div>

      {/*who are we  section*/}

      <div className="   w-full flex flex-col md:flex-row md:items-center  h-[700px]">
        <div className="flex-grow  md:w-1/2 bg-[#ecf5ff]">
          <h1 className="text-6xl text-[#144c8b] text-center md:text-left  font-bold tracking-tighter py-10">Who are we?</h1>
          <p className=" md:text-xl text-center md:text-justify text-gray-800  pb-14 mb-6 px-6 md:px-0 md:pr-16 md:pt-5">E-Cell DCRUSTM is an institute body run by the students of DCRUST, Murthal devoted to acting as a symbiotic link between the entrepreneurs of E-Cell and the existing startup ecosystem as well as acting as a hub where all the startups can meet ,collaborate and innovate!</p>
          <button className="bg-[#0065fc] md:text-xl mx-36 md:mx-0 text-white py-5 px-10 md:px-20 rounded-md hover:bg-[#144c8b] hover:shadow-lg"><Link to='/about'>Know more!</Link></button>

        </div>
        <div className="flex-grow w-1/2 ">
        <div style={{ mixBlendMode: 'multiply' }} className=" w-[400px] mx-10 md:w-[90%]"><img src="src\assets\hero-image.png" alt="" /></div></div>
      </div>

      {/*what we do section*/}

      <div className="w-full flex flex-col items-center md:h-[700px]  ">
        <div className=" bg-[#ecf5ff] w-full flex flex-col items-center">
        <h1 className="text-6xl text-[#144c8b] font-bold tracking-tighter py-10">What we do?</h1>
        <p className="text-xl text-gray-800 text-center  pb-14 mb-6 px-6 md:px-60 pt-5">Through our vision of "Learn, Build and Scale" we implement various initiatives and events in DCRUSTM to foster the entrepreneurial minds and create a culture of enthralling startups bound for success!</p>
          </div>
        <div className="flex flex-col md:flex-row flex-wrap gap-10">
          <Card imgURL="https://img.freepik.com/free-vector/business-management-vector_53876-44129.jpg?t=st=1726141342~exp=1726144942~hmac=f0127be5641b21665ca3c6462a6fa600ef72640d9e52c6612bd38943af030021&w=900" title="Learn" content="Network with alumni founders, Get incubated in our incubators and seize the opportunity to pitch in front of Angel Investors & VCs!" />
          <Card imgURL="https://img.freepik.com/free-vector/business-management-vector_53876-44129.jpg?t=st=1726141342~exp=1726144942~hmac=f0127be5641b21665ca3c6462a6fa600ef72640d9e52c6612bd38943af030021&w=900" title="Learn" content="Network with alumni founders, Get incubated in our incubators and seize the opportunity to pitch in front of Angel Investors & VCs!" />
          <Card imgURL="https://img.freepik.com/free-vector/business-management-vector_53876-44129.jpg?t=st=1726141342~exp=1726144942~hmac=f0127be5641b21665ca3c6462a6fa600ef72640d9e52c6612bd38943af030021&w=900" title="Learn" content="Network with alumni founders, Get incubated in our incubators and seize the opportunity to pitch in front of Angel Investors & VCs!" />
        </div>
      </div>
      <hr /> {/*what people say*/}

       {/* <div className="w-full h-screen md:h-[900px] bg-slate-400 mt-28">
        <div className="flex justify-center"><h1 className="text-6xl font-bold py-10">What people think about us</h1></div>
        <div >
          <Testimonial />
        </div>
       </div> */}
       
      
    </div>
    <div className="mt-10">
    <Footer />
    </div>
     
     </>
  );
};

export default Homepage;
