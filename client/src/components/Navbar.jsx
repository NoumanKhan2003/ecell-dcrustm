import React, { useState , useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import ecell_logo from '../assets/ecell_logo.png';
import Announcement from "./Announcement";
import { MdOutlineArrowOutward } from "react-icons/md";


const Navbar = () => {
  const [isopen ,setIsopen]=useState(false);

  function toggleNavbar(){
     setIsopen(!isopen);
     
     
  }
  function closeNavbar(){
    setIsopen(false);
  }
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // You can adjust the scroll value
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
     <>
     
     
    <header  className={`fixed top-0  z-[20] w-full transition-all duration-300 ${
      isScrolled ? "backdrop-blur-lg bg-white/50 shadow-md" : "bg-white"
    }`}>
      {/* <Announcement /> */}
      <div className="flex flex-wrap  justify-between items-center max-w-[1240px] mx-auto text-black ">
        <div className="w-24 h-full px-4 py-2 my-2 ml-4 md:ml-0  rounded-full bg-white">
          <Link to="/">
            <img
              src={ecell_logo}
              className="w-[100%]  md:ml-0  "
              alt="ecell_logo"
            />
          </Link>
        </div>
        

        <nav className=" hidden md:flex list-none  ml-auto font-medium font-grotesk text-[16px] ">
          <li className="  hover:text-white  hover:bg-[#144c8b] p-3 px-7 my-auto   hover:duration-300 py-auto  cursor-pointer ">
            <Link to="/"> Home</Link>
          </li>
          <li className=" hover:text-white  hover:bg-[#144c8b] p-3 my-auto px-7  hover:duration-300 py-auto  cursor-pointer">
            <Link to="/about"> About</Link>
          </li>
          <li className=" hover:text-white  hover:bg-[#144c8b] p-3 my-auto px-7  hover:duration-300 py-auto  cursor-pointer">
            <Link to="/team"> Team</Link>
          </li>
          <li className=" hover:text-white   hover:bg-[#144c8b] p-3 my-auto px-7  hover:duration-300 py-auto  cursor-pointer">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="hover:text-white     hover:bg-[#144c8b] p-3 my-auto px-7  hover:duration-300 py-auto  cursor-pointer">
            <Link to="/blogs"> Blogs</Link> 
          </li>
          <li className="hover:text-white     hover:bg-[#144c8b] p-3 my-auto px-7  hover:duration-300 py-auto  cursor-pointer">
            <Link to="/events"> Events</Link>
          </li>
          <li className="hover:text-white     hover:bg-[#144c8b] p-3 my-auto px-7  hover:duration-300 py-auto  cursor-pointer">
            <Link to="/login"> Login</Link>
          </li>
        </nav>
        

        <div className="scale-150 flex  md:hidden mr-10">
          <button onClick={toggleNavbar}>{isopen?<RxCross2 />:<MdMenu />}</button>
        </div>
        {isopen &&(
          <div className="flex gap-4 basis-full flex-col items-center pb-6  ">
            <Link  onClick={closeNavbar} className="text-xl font-semibold hover:text-[#144c8b] hover:underline" to="/">Home</Link>
            <Link  onClick={closeNavbar} className="text-xl font-semibold hover:text-[#144c8b] hover:underline" to="/about">About</Link>
            <Link  onClick={closeNavbar} className="text-xl font-semibold hover:text-[#144c8b] hover:underline" to="/team">Team</Link>
            <Link  onClick={closeNavbar} className="text-xl font-semibold hover:text-[#144c8b] hover:underline" to="/gallery">Gallery</Link>
            <Link  onClick={closeNavbar} className="text-xl font-semibold hover:text-[#144c8b] hover:underline" to="/blogs">Blogs</Link>
            <Link  onClick={closeNavbar} className="text-xl font-semibold hover:text-[#144c8b] hover:underline" to="/events">Events</Link>
            <Link  onClick={closeNavbar} className="text-xl font-semibold hover:text-[#144c8b] hover:underline" to="/login">Login</Link>
          </div>
        )}
      </div>
      
    </header>
    </>
  );
};

export default Navbar;
