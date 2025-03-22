import React, { useEffect } from "react";
import EventsData from "../components/EventsData";
import { FaArrowRight } from "react-icons/fa";
import currentevent from "../assets/events_posters/empowher_quest.jpg";
import { FaCircle } from "react-icons/fa6";
import { Box, Container, Typography } from "@mui/material";


const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container sx={{ mt: 8, mb: 8 }}>
      {/* ongoing events section */}
      <Box>
        {/* <Box sx={{textAlign:"center"}}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
            }}
            className="bg-gradient-to-r from-blue-600  to-green-500  inline-block text-transparent bg-clip-text"
          >
            Ongoing Events
          </Typography>
        </Box> */}

        {/* comment out below section/div if no event is going on.. */}

        {/* <div className="flex md:flex-nowrap mt-4 flex-wrap max-w-full rounded-2xl bg-white  shadow-md">
          <Box sx={{height:"auto"}} className="flex justify-center items-center w-[90%] md:w-[40%] bg-white m-4">
            <div className="border-2  rounded-xl hover:-rotate-2 hover:scale-105 ease-in-out duration-300 mx-auto ">
              <img
                className="shadow-lg object-cover"
                src={currentevent}
                alt="event-img"
              />
            </div>
          </Box>
          <div className=" w-[90%] md:w-[60%] pt-4 mx-auto py-7 m-4 flex flex-col gap-5 md:items-start ">
            <Box sx={{textAlign:"center"}}>
            <Typography variant="h3" sx={{fontWeight:"bold"}} className="text-5xl tracking-tighter  font-grotesk font-bold">
              EmpowHer Quest{" "}
            </Typography>
            </Box>
            <p>
              E-Cell DCRUSTM, in collaboration with{" "}
              <span className="text-green-500 font-bold">RITVA (BRAC)</span>,
              hosted the EmpowHer Quest online quiz on Unstop. Conducting in two
              rounds, this engaging event celebrated women in entrepreneurship,
              featuring a ₹2500 prize pool and fostering knowledge-sharing
              among participants.
              <br />
              <br />
              <span className="font-semibold">EmpowHer Quiz (Round 1):</span> 23
              Oct 24, 9:00 PM IST – 23 Oct 24, 10:00 PM IST
              <br />
              <span className="font-semibold">EmpowHer Quest(Round 2):</span> 25
              Oct 24, 9:00 PM IST – 25 Oct 24, 9:50 PM IST
            </p>
            <p className="font-bold text-2xl ">Prize Worth : INR 2500</p>
            <p className="text-red-600">*Registrations are now closed!</p>
            <button className=" bg-[#0065fc] border-black border-2 hover:rounded-full md:w-[40%] w-auto  text-xl text-white py-5 px-8 rounded-md hover:bg-[#144c8b] hover:shadow-lg ">
              <a
                target="_blank"
                href="https://unstop.com/p/empowher-quest-e-cell-dcrustm-1186308?lb=xYuBeJR0"
              >
                Register Here!
              </a>{" "}
              <FaArrowRight className="inline ml-2 items-center" />
            </button>
          </div>
        </div> */}
      </Box>

      {/* past events section */}
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold" }}
          className="md:text-4xl mt-2 text-[2.5rem] text-[#000000] font-grotesk mx-6 pt-8 pb-8"
        >
          All Past Events
        </Typography>
      </Box>

      <Box className="grid grid-cols-1 md:grid-cols-3 gap-9 ">
        {EventsData.map((item) => (
          <div className="bg-red-200 group relative  mx-auto overflow-hidden rounded-xl">
            <div className="w-auto h-[350px] ">
              <img
                src={item.imgURL}
                alt="event-img"
                loading="lazy"
                className=" object-cover group-hover:rotate-3 group-hover:scale-105 transition-transform  "
              />
            </div>
            <div className="from-transparent via-transparent to-black/50 bg-gradient-to-b absolute inset-0 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
              <div className="absolute inset-0 px-9 flex flex-col items-center justify-center translate-y-[90%] group-hover:translate-y-0 transition-all">
                <h1 className=" text-white font-bold text-3xl pb-3 text-center">
                  {item.title}
                </h1>
                <p className="text-white  text-center text-[14px]">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Box>
    </Container>
  );
};

export default EventsPage;
