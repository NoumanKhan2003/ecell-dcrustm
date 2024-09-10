import React from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Homepage = () => {
  const [text]=useTypewriter(
    {
      words: ['Ideate','Integrate','Elevate'],
      loop: true,
      typeSpeed:120,
      deleteSpeed:80,
    }
  );

  return (
    <div className="max-w-[1240px] m mx-auto mt-0">
      <div className="flex w-full  h-[800px] ">
        <div className="w-1/2 pt-10  ">
            <h1 className="text-black font-bold text-6xl pb-14">E-Cell IIT Murthal</h1>
            <h2 className="text-gray-600 text-5xl pb-14">Accelerate Your <br />
             <span className="text-blue-600" >{text}</span> <span className="text-blue-600"><Cursor cursorStyle=">" /></span>
              <br />Journey</h2>
            <p className="text-2xl text-gray-800 pb-14 mb-8 pr-4">Welcome to the entrepreneurship community of IIT Murthal where we ideate, integrate and elevate the future innovations of the century!</p>
           <button className="bg-blue-600 text-3xl text-white py-5 p-20 rounded-md hover:bg-green-500 hover:shadow-lg"><Link to='/contact'>Get Started!</Link></button>
        </div>
        <div style={{ mixBlendMode: 'multiply' }} className="w-1/2 ">
          <img src="https://img.freepik.com/free-vector/people-analyzing-growth-charts-illustrated_23-2148865274.jpg?t=st=1726001405~exp=1726005005~hmac=8d475c66abf9bb193b37e852b15bafd47092641eaa050ded071c30fce6c266a8&w=900" alt="hero-right-image" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
