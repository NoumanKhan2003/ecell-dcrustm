import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-[#0753be]   shadow-xl ">
      <div className="flex items-center max-w-[1200px] mx-auto text-white">
        <div className="w-[100px] my-4">
          <Link to="/">
            <img
              src="src\assets\ecell_logo.png"
              className="w-full p-2"
              alt="ecell_logo"
            />
          </Link>
        </div>

        <nav className=" hidden md:flex list-none  ml-auto text-[20px] ">
          <li className=" hover:bg-[#e8f1f2] hover:text-black p-3 px-7 my-auto   hover:duration-300 py-auto  cursor-pointer ">
            <Link to="/"> Home</Link>
          </li>
          <li className="hover:bg-[#e8f1f2] hover:text-black p-3 my-auto px-7  hover:duration-300 py-auto  cursor-pointer">
            <Link to="/about"> About</Link>
          </li>
          <li className="hover:bg-[#e8f1f2] hover:text-black p-3 my-auto px-7  hover:duration-300 py-auto  cursor-pointer">
            <Link to="/team"> Team</Link>
          </li>
          <li className="hover:bg-[#e8f1f2] hover:text-black p-3 my-auto px-7  hover:duration-300 py-auto  cursor-pointer">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="hover:bg-[#e8f1f2] hover:text-black p-3 my-auto px-7  hover:duration-300 py-auto  cursor-pointer">
            <Link to="/contact"> Contact</Link>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
