import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white   shadow-xl ">
      <div className="flex items-center max-w-[1200px] mx-auto text-black">
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
      </div>
    </header>
  );
};

export default Navbar;
