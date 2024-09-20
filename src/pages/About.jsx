import React from 'react'

const About = () => {
  return (
    <div className=" max-w-[1240px]  mx-auto mt-4">
      <div className="flex flex-col  items-center">
        <h1 className="text-6xl text-[#144c8b] font-bold tracking-tighter my-5">About Us</h1>

        <div className="  md:flex flex-row m-4  ">
        <div className='flex hover:shadow-lg hover:scale-105 ease-in-out duration-300  md:w-[50%] flex-col p-5  bg-[#144c8b]  rounded-md m-4'>
        <h2 className="text-4xl mb-4 font-semibold text text-[#8fe1c3] ">Our Vision</h2>
        <p className =" text-justify  text-white">Entrepreneurship in India is yet to reveal its hidden potential. It will not only help India to frontier with the world leaders but also unlock the quality of brains that we are so proud of. With this idea, The Entrepreneurship Development Cell, IIT Delhi wishes to inculcate and Enrich the entrepreneurial environment in India by creating an easily accessible and exhaustive set of resources for the entrepreneurs, which including the students, the budding professionals, mentors, angel investors and the venture capitalists through various fun-filled yet educating sessions such as Startup Showcases, competitions, eTalks and so on and so forth.</p>

        </div>
        <div className=' flex hover:shadow-lg flex-col md:w-[50%] p-5 bg-[#144c8b]  rounded-md m-4 hover:scale-105 ease-in-out duration-300 '>
        <h2 className="text-4xl mb-4 font-semibold text text-[#8fe1c3] ">Our Mission</h2>
        <p className =" text-justify text-white">To create a sustainable and diverse entrepreneurial ecosystem where the young and the elderly come together to take entrepreneurship a step ahead in India.</p>

        </div>

        </div>
       
        
      </div>

    </div>
  )
}

export default About
