import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isopen ,setIsopen]=useState(false);

  function toggleNavbar(){
     setIsopen(!isopen);
     console.log("clicked toggle button!");
     
  }

  return (
    <header className="bg-white sticky z-[20] shadow-xl ">
      <div className="flex flex-wrap justify-between items-center max-w-[1200px] mx-auto text-black">
        <div className="w-[100px] my-4">
          <Link to="/">
            <img
              src="src\assets\ecell_logo.png"
              className="w-full ml-4 md:ml-0 "
              alt="ecell_logo"
            />
          </Link>
        </div>

        <nav className=" hidden md:flex list-none  ml-auto font-bold text-[20px] ">
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
         
          <li className="hover:text-white   hover:bg-[#144c8b] p-3 my-auto px-7  hover:duration-300 py-auto  cursor-pointer">
            <Link to="/events"> Events</Link>
          </li>
        </nav>

        <div className="scale-150 flex  md:hidden mr-10">
          <button onClick={toggleNavbar}>{isopen?<RxCross2 />:<MdMenu />}</button>
        </div>
        {isopen &&(
          <div className="flex gap-4 basis-full flex-col items-center pb-6  ">
              <Link className="text-xl font-semibold hover:text-[#144c8b] hover:underline" to="/">Home</Link>
            <Link className="text-xl font-semibold hover:text-[#144c8b] hover:underline" to="/about">About</Link>
            <Link className="text-xl font-semibold hover:text-[#144c8b] hover:underline" to="/team">Team</Link>
          
            <Link className="text-xl font-semibold hover:text-[#144c8b] hover:underline" to="/gallery">Gallery</Link>
            <Link className="text-xl font-semibold hover:text-[#144c8b] hover:underline" to="/events">Events</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
