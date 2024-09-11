import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-blue-600 p-4 shadow-xl ">
      <div className="flex items-center max-w-[1200px] mx-auto text-white">
        <div className="w-[100px]"><Link to="/"><img src="src\assets\ecell_logo.png" className='w-full p-2' alt="ecell_logo" /></Link></div>
       
          <nav className=" hidden md:flex list-none gap-10 ml-auto text-[18px] font-semibold">
           <li className="hover:bg-green-400 rounded-sm  p-3 my-auto   hover:duration-700 py-auto  cursor-pointer "><Link to="/" > Home</Link></li>
           <li className="hover:bg-green-400 rounded-sm  p-3 my-auto   hover:duration-700 py-auto  cursor-pointer"><Link to="/about" > About</Link></li>
           <li className="hover:bg-green-400 rounded-sm  p-3 my-auto   hover:duration-700 py-auto  cursor-pointer"><Link to="/team" > Team</Link></li>
           <li className="hover:bg-green-400 rounded-sm  p-3 my-auto   hover:duration-700 py-auto  cursor-pointer"><Link to="/gallery" >Gallery</Link></li>
           <li className="hover:bg-green-400 rounded-sm  p-3 my-auto   hover:duration-700 py-auto  cursor-pointer"><Link to="/contact" > Contact</Link></li>

          </nav>
      
      </div>
    </header>
  );
};

export default Navbar;
