import React from 'react'

const About = () => {
  return (
    <div className=" max-w-[1240px]  mx-auto mt-28 ">
      <div className="flex flex-col  items-center">
        <h1 className="text-6xl text-[#144c8b] font-bold font-grotesk tracking-tighter my-5">About Us</h1>

        <div className="  md:flex flex-row m-4  ">
        <div className='flex hover:shadow-lg hover:scale-105 ease-in-out duration-300  md:w-[50%] flex-col p-5  bg-[#144c8b]  rounded-md m-4'>
        <h2 className="text-4xl mb-4 font-semibold text font text-[#8fe1c3] ">Our Vision</h2>
        <p className =" text-justify  text-white">We envision DCRUST E-Cell as a beacon of innovation and entrepreneurship, where students are inspired to dream big and are equipped with the tools to bring those dreams to life. By creating a supportive and dynamic environment, we aim to become a leading hub for entrepreneurial excellence, bridging the gap between academia and industry, and nurturing the next generation of entrepreneurs who will shape the future. Our vision is to leave a lasting impact on both our campus and the broader startup ecosystem, driving positive change through entrepreneurial ventures.</p>

        </div>
        <div className=' flex hover:shadow-lg flex-col md:w-[50%] p-5 bg-[#144c8b]  rounded-md m-4 hover:scale-105 ease-in-out duration-300 '>
        <h2 className="text-4xl mb-4 font-semibold text text-[#8fe1c3] ">Our Mission</h2>
        <p className =" text-justify text-white">Our mission is to foster a vibrant entrepreneurial ecosystem at DCRUST by empowering students with the skills, resources, and platform they need to innovate and create impactful solutions. Through brainstorming sessions, networking opportunities, and hands-on workshops, we aim to ignite the entrepreneurial spirit in every student, enabling them to turn their ideas into reality. We strive to build a community where collaboration, creativity, and leadership thrive, helping students not only grow as entrepreneurs but also develop skills that prepare them for a successful future.
        </p>

        </div>

        </div>
       
        
      </div>

    </div>
  )
}

export default About
