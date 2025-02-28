import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import ecell_logo from "../assets/ecell_logo.png";
import Announcement from "./Announcement";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../components/Utils.js";

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();

  function toggleNavbar() {
    setIsopen(!isopen);
  }
  function closeNavbar() {
    setIsopen(false);
  }
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      setLoggedInUser(localStorage.getItem("loggedInUser"));
    };
    window.addEventListener("storage", handleStorageChange);
    handleStorageChange();
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    handleError("Admin Logout Successfull");
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  return (
    <>
      <header
        className={`fixed top-0  z-[20] w-full transition-all duration-300 ${
          isScrolled ? "backdrop-blur-lg bg-white/50 shadow-md" : "bg-white"
        }`}
      >
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
            {!loggedInUser ? (
              <li className="hover:text-white     hover:bg-[#43db75] p-3 my-auto px-7  hover:duration-300 py-auto  cursor-pointer">
                <Link to="/login"> Login</Link>
              </li>
            ) : (
              <li
                className="hover:text-white     hover:bg-[#d13d3d] p-3 my-auto px-7  hover:duration-300 py-auto  cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </li>
            )}
          </nav>

          <div className="scale-150 flex  md:hidden mr-10">
            <button onClick={toggleNavbar}>
              {isopen ? <RxCross2 /> : <MdMenu />}
            </button>
          </div>
          {isopen && (
            <div className="flex gap-4 basis-full flex-col items-center pb-6  ">
              <Link
                onClick={closeNavbar}
                className="text-xl font-semibold hover:text-[#144c8b] hover:underline"
                to="/"
              >
                Home
              </Link>
              <Link
                onClick={closeNavbar}
                className="text-xl font-semibold hover:text-[#144c8b] hover:underline"
                to="/about"
              >
                About
              </Link>
              <Link
                onClick={closeNavbar}
                className="text-xl font-semibold hover:text-[#144c8b] hover:underline"
                to="/team"
              >
                Team
              </Link>
              <Link
                onClick={closeNavbar}
                className="text-xl font-semibold hover:text-[#144c8b] hover:underline"
                to="/gallery"
              >
                Gallery
              </Link>
              <Link
                onClick={closeNavbar}
                className="text-xl font-semibold hover:text-[#144c8b] hover:underline"
                to="/blogs"
              >
                Blogs
              </Link>
              <Link
                onClick={closeNavbar}
                className="text-xl font-semibold hover:text-[#144c8b] hover:underline"
                to="/events"
              >
                Events
              </Link>
              {!loggedInUser ? (
                <Link
                  onClick={closeNavbar}
                  className="text-xl font-semibold hover:text-[#47b865] hover:underline"
                  to="/login"
                >
                  Login
                </Link>
              ) : (
                <Link
                  onClick={() => {
                    handleLogout();
                    closeNavbar();
                  }}
                  className="text-xl font-semibold hover:text-[#e44d4d] hover:underline"
                >
                  Logout
                </Link>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
