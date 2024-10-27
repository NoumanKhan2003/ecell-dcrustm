import React from "react";

const About = () => {
  return (
    <div className=" max-w-[1240px]  mx-auto mt-28 ">
      <div className="flex flex-col  items-center">
        <h1 className="text-6xl text-[#144c8b] font-bold font-grotesk tracking-tighter my-5">
          About Us
        </h1>

        <div className="  md:flex flex-row flex-wrap m-4 gap-10  ">
          {/* about dcrust  */}
        <div className="bg-white flex flex-wrap md:flex-nowrap hover:shadow-xl  mt-10 mb-10 rounded-xl overflow-hidden ">
            <div className="w-full md:w-[50%]  h-[200px]  md:min-h-[500px]">
              <img 
                className="object-cover  w-full h-full"
                src="https://images.shiksha.com/mediadata/images/1532934986phpVgWnJk.jpeg"
                alt="our-vision-img"
              />
            </div>
            <div className=" flex  md:w-[60%] flex-col p-5 bg-[#ffffff]  rounded-md m-4 hover:scale-105 ease-in-out duration-300 ">
              <h2 className="text-3xl mb-4 tracking-tighter uppercase font-semibold text text-[#144c8b] ">
                About DCRUST
              </h2>
              <p className=" text-justify text-black">
              Deenbandhu Chhotu Ram University of Science & Technology, Murthal came into being on 6th November 2006  by upgrading erstwhile Chhotu Ram State College of Engineering, Murthal through an Act 29 of 2006 of the Legislature of the state of Haryana with the vision to facilitate and promote studies and research in emerging areas of higher education with focus on new frontiers of science, engineering, technology, architecture and management studies, humanities, and also to achieve excellence in these and connected fields. The University has been considered eligible for grants under Section 12(B) of UGC Act, 1956 in March, 2009. The University has got affiliating status and the technical and professional College/Institutes located in the District Sonepat have been affiliated to the University. Six B.Tech programmes of the University have also been accredited by National Board of Accreditation (NBA). University has a Central Instrumentation Laboratory which is available to scholars belong to different deptts or outside institute as central research facility.
              </p>
            </div>
          </div>
          {/* our vision  */}
          <div className="bg-white flex flex-wrap md:flex-nowrap hover:shadow-xl rounded-xl overflow-hidden  ">
            <div className="flex  md:w-[60%] hover:scale-105 ease-in-out duration-300   flex-col p-5  bg-[#ffffff]  rounded-md m-4">
              <h2 className="text-3xl mb-4 font-semibold uppercase tracking-tighter text font text-[#144c8b] ">
                Our Vision
              </h2>
              <p className=" text-justify  text-black">
                We envision DCRUST E-Cell as a beacon of innovation and
                entrepreneurship, where students are inspired to dream big and
                are equipped with the tools to bring those dreams to life. By
                creating a supportive and dynamic environment, we aim to become
                a leading hub for entrepreneurial excellence, bridging the gap
                between academia and industry, and nurturing the next generation
                of entrepreneurs who will shape the future. Our vision is to
                leave a lasting impact on both our campus and the broader
                startup ecosystem, driving positive change through
                entrepreneurial ventures.
              </p>
            </div>
            <div className="w-full md:w-[50%] h-[200px] md:min-h-[400px]  overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src="https://plus.unsplash.com/premium_photo-1676750395664-3ac0783ae2c2?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="our-vision-img"
              />
            </div>
          </div>

          {/* our mission */}
          <div className="bg-white flex flex-wrap md:flex-nowrap hover:shadow-xl  mt-10 mb-10 rounded-xl overflow-hidden ">
            <div className="w-full md:w-[50%]  h-[200px] md:min-h-[400px]">
              <img
                className="object-cover w-full h-full"
                src="https://images.pexels.com/photos/4609024/pexels-photo-4609024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="our-vision-img"
              />
            </div>
            <div className=" flex  md:w-[60%] flex-col p-5 bg-[#ffffff]  rounded-md m-4 hover:scale-105 ease-in-out duration-300 ">
              <h2 className="text-3xl mb-4 tracking-tighter uppercase font-semibold text text-[#144c8b] ">
                Our Mission
              </h2>
              <p className=" text-justify text-black">
                Our mission is to foster a vibrant entrepreneurial ecosystem at
                DCRUST by empowering students with the skills, resources, and
                platform they need to innovate and create impactful solutions.
                Through brainstorming sessions, networking opportunities, and
                hands-on workshops, we aim to ignite the entrepreneurial spirit
                in every student, enabling them to turn their ideas into
                reality. We strive to build a community where collaboration,
                creativity, and leadership thrive, helping students not only
                grow as entrepreneurs but also develop skills that prepare them
                for a successful future.
              </p>
            </div>
          </div>

          {/* ... */}
        </div>
      </div>
    </div>
  );
};

export default About;
