import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Card from "../components/Card";
// import Testimonial from "../components/testimonial";
import Footer from "../components/Footer";
import hero_image from "../assets/hero_image.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { FaArrowRight } from "react-icons/fa";
import Announcement from "../components/Announcement";

import MarqueeText from "../components/MarqueeText";
import Testimonials from "../components/Testimonials";

import brainstormingIcon from "../assets/icons/brainstorming.png";
import networkingIcon from "../assets/icons/networking.png";
import eventsIcon from "../assets/icons/events.png";
import gif from "../assets/Success_factors.gif";
// ..
AOS.init({
  offset: 250,
  duration: 1000,
});

const Homepage = () => {
  const [text] = useTypewriter({
    words: ["Ideation", "Integration", "Elevation"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="  max-w-[1240px] mx-auto mt-28 px-4 ">
        {/*header section*/}
        <div className=" flex justify-center flex-wrap lg:flex  lg:w-full h-auto md:h-[700px] ">
          <div className=" w-[90%]  text-center md:text-left md:w-1/2 md:pt-10  ">
            <h1 className="  text-[#000000] font-semibold tracking-tighter text-[2.5rem] md:text-6xl pb-6   md:pb-10">
              {" "}
              E-Cell DCRUSTM
            </h1>
            <h2 className="  text-gray-800 text-3xl md:text-4xl md:pb-14 pb-5">
              Empower Your <br />
              <span className="text-blue-600">{text}</span>{" "}
              <span className="text-blue-600">
                <Cursor cursorStyle="|" />
              </span>
              <br />
              Journey!
            </h2>
            <p className="  md:text-xl text-gray-800  md:pb-10 mb-8  md:pr-14 px-6 md:pl-0">
              Welcome to the DCRUST Murthal entrepreneurship community, where
              visionary ideas meet collaboration, fueling the next generation of
              groundbreaking innovations!
            </p>
            {/* <button className=" bg-[#0065fc]  text-xl text-white py-5 px-10 rounded-md hover:bg-[#144c8b] hover:shadow-lg"><Link className="" to='/about'>Get Started!</Link><FaArrowRight className="inline ml-2 items-center" /></button> */}
            <Link
              to="/about"
              className="bg-[#0065fc]   md:text-xl text-white py-5 mb-4 px-10 rounded-md hover:rounded-full hover:bg-[#144c8b] hover:border-black border-2 hover:shadow-lg flex items-center justify-center md:justify-start w-fit mx-auto md:mx-0"
            >
              Get Started!
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <div className=" w-[70%] mix-blend-multiply  md:w-1/2 ">
            {/* <img src="https://img.freepik.com/free-vector/people-analyzing-growth-charts-illustrated_23-2148865274.jpg?t=st=1726001405~exp=1726005005~hmac=8d475c66abf9bb193b37e852b15bafd47092641eaa050ded071c30fce6c266a8&w=900" alt="hero-right-image" /> */}
            <img
              className="w-full h-full  object-contain mix-blend-multiply   "
              loading="lazy"
              src={gif}
              alt="hero-right-gif"
            />
          </div>
        </div>
      </div>

      {/* marqueee section */}
      <div className="  mt-[6rem] overflow-hidden py-7  ">
        <div className="">
          <MarqueeText />
        </div>
      </div>

      {/*who are we  section*/}
      <div className=" pt-5 pb-14 ">
        <div className="  max-w-[1240px] mx-auto mt-20 px-4    ">
          <div className="   md:w-full flex   flex-wrap justify-center md:flex-row md:items-center py-10">
            <div className="flex-grow text-center md:text-left w-screen  md:w-1/2 ">
              <h1
                data-aos="fade-down"
                className=" text-5xl  md:text-6xl text-[#000000] text-center md:text-left  font-bold tracking-tighter py-10"
              >
                Who are we?
              </h1>
              <p
                data-aos="fade-down"
                className=" md:text-xl text-center md:text-justify text-gray-800  pb-14 mb-6 px-6 md:px-0 md:pr-16 md:pt-5"
              >
                E-Cell DCRUSTM is a student-led body at DCRUST, Murthal,
                dedicated to connecting entrepreneurs with the startup ecosystem
                and creating a hub for startups to meet, collaborate, and
                innovate. We aim to nurture entrepreneurial minds and drive
                impactful ventures forward.
              </p>

              <Link
                to="/about"
                className="bg-[#0065fc]    hover:border-black border-2 hover:rounded-full text-xl text-white py-5 px-10 rounded-md hover:bg-[#144c8b] hover:shadow-lg flex items-center justify-center md:justify-start w-fit mx-auto md:mx-0"
              >
                Know More!
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="w-[70%]  mx-auto mt-10 md:mt-0 md:w-1/2 ">
              <div className=" mix-blend-multiply">
                <img src={hero_image} alt="who-are-we-img" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*what we do section*/}
      <div className="  max-w-[1240px] mx-auto mt-20 px-4   ">
        <div className="w-full  flex flex-col items-center  md:min-h-[700px]  ">
          <div className="   w-full  flex flex-col items-center">
            <h1
              data-aos="fade-down"
              className=" text-5xl md:text-6xl text-[#000000] font-bold tracking-tighter py-10"
            >
              What we do?
            </h1>
            <p
              data-aos="fade-down"
              className="md:text-xl text-gray-800 text-center  pb-14 mb-6 px-6 md:px-60 pt-5"
            >
              At E-Cell DCRUSTM, we cultivate entrepreneurial spirit by
              providing a platform for innovation, collaboration, and growth.
              Through dynamic brainstorming, networking, and skill-enhancing
              workshops, we turn bold ideas into thriving startups. Our
              initiatives empower students to lead with creativity, teamwork,
              and resilience, shaping a future of endless possibilities.
            </p>
          </div>
          <div className="flex flex-col  pt-3 pb-5   overflow-hidden   md:flex-row md:flex-wrap justify-center px-4  gap-10">
            <Card
              imgURL={brainstormingIcon}
              title="Brainstorming"
              content="We foster innovation through collaborative brainstorming, where teamwork and communication drive the development of cutting-edge ideas."
            />
            <Card
              imgURL={networkingIcon}
              title="Networking"
              content="Our E-Cell builds strong connections, leveraging teamwork and communication to unite entrepreneurs, industry leaders, and investors for growth opportunities."
            />
            <Card
              imgURL={eventsIcon}
              title="Events and Workshops"
              content="We host impactful events and workshops, promoting teamwork and effective communication to equip aspiring entrepreneurs with the skills to turn ideas into reality."
            />
          </div>
        </div>
      </div>

      {/*what people say*/}
      <div className="">
        <div className="  max-w-[1240px] mx-auto mt-20 px-4  ">
          <h1 className=" text-center text-4xl md:text-6xl font-bold  tracking-tighter py-10">
            What people think about us
          </h1>

          <div className="w-full mb-4   ">
            <Testimonials />
          </div>
        </div>
      </div>

      <div className="  ">{/* <Footer /> */}</div>
    </>
  );
};

export default Homepage;
