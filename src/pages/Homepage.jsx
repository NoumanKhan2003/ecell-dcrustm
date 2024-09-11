import React from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Card from "../components/Card";

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
      {/*header section*/}
      <div className="flex w-full  h-[700px] ">
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

      <hr />{/*who are we  section*/}

      <div className="w-full flex  h-[550px]">
        <div className="flex-grow w-1/2 bg-white">
          <h1 className="text-6xl font-bold py-10">Who are we?</h1>
          <p className="text-xl text-justify text-gray-800 pb-14 mb-6 pr-16 pt-5">E-Cell DCRUSTM is an institute body run by the students of DCRUST, Murthal devoted to acting as a symbiotic link between the entrepreneurs of E-Cell and the existing startup ecosystem as well as acting as a hub where all the startups can meet ,collaborate and innovate!</p>
          <button className="bg-black text-xl text-white py-5  px-20 rounded-md hover:bg-blue-600 hover:shadow-lg"><Link to='/about'>Know more!</Link></button>

        </div>
        <div className="flex-grow w-1/2 ">
        <div style={{ mixBlendMode: 'multiply' }} className="w-[90%]"><img src="https://img.freepik.com/free-vector/hand-drawn-illustration-people-with-ideas_23-2149164331.jpg?t=st=1726088988~exp=1726092588~hmac=3aa5a4021e013623463bb90a7f5fe56ea93f599a90ed546b75289b3ca457e37e&w=1380" alt="" /></div></div>
      </div>

      <hr />{/*what we do section*/}

      <div className="w-full flex flex-col items-center h-[800px] bg-slate-400">
        <div className="bg-white w-full flex flex-col items-center">
        <h1 className="text-6xl font-bold py-10">What we do?</h1>
        <p className="text-xl text-gray-800 text-center  pb-14 mb-6 px-60 pt-5">Through our vision of "Learn, Build and Scale" we implement various initiatives and events in DCRUSTM to foster the entrepreneurial minds and create a culture of enthralling startups bound for success!</p>
          </div>
        <div className="flex flex-row gap-10">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <hr />

    </div>
  );
};

export default Homepage;
