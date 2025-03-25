import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../components/Utils";
import { FaArrowRight } from "react-icons/fa";

const PresentEventsPage = () => {
  const isLoggedIn = localStorage.getItem("loggedInUser");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [presentEvent, setPresentEvent] = useState([]);
  const [registrationStatus, setRegistrationStatus] = useState(() => {
    const savedState = localStorage.getItem("registrationStatus");
    return savedState ? JSON.parse(savedState) : {};
  });

  const readPresentEventData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/events/presentEvents`
      );
      if (!response.ok) {
        return handleError("Failed to fetch Present Events");
      }
      const data = await response.json();
      setPresentEvent(data);

      const savedState =
        JSON.parse(localStorage.getItem("registrationStatus")) || {};
      const initialState = { ...savedState };

      data.forEach((event) => {
        if (!(event._id in initialState)) {
          initialState[event._id] = event.registrationStatus || "close";
        }
      });

      setRegistrationStatus(initialState);
      localStorage.setItem("registrationStatus", JSON.stringify(initialState));
    } catch (error) {
      return handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePresentEvent = async (presentEventId, e) => {
    e.stopPropagation();
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/events/deletePresentEvent/${presentEventId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete Present Event");
      }

      handleSuccess("Present Event deleted successfully");
      setPresentEvent((prevEvents) =>
        prevEvents.filter((event) => event._id !== presentEventId)
      );

      const updatedState = { ...registrationStatus };
      delete updatedState[presentEventId];
      setRegistrationStatus(updatedState);
      localStorage.setItem("registrationStatus", JSON.stringify(updatedState));
    } catch (error) {
      handleError(error.message || "An error occurred");
    }
  };

  const handleRegistration = async (eventId) => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/events/toggleRegistration/${eventId}`,
        { method: "POST", headers: { "Content-Type": "application/json" } }
      );

      if (!response.ok) {
        return handleError("Failed to update registration status");
      }

      const data = await response.json();
      handleSuccess("Registration status updated");

      setRegistrationStatus((prevState) => {
        const newState = { ...prevState, [eventId]: data.registrationStatus };
        localStorage.setItem("registrationStatus", JSON.stringify(newState));
        return newState;
      });

      setPresentEvent((prevEvents) =>
        prevEvents.map((event) =>
          event._id === eventId
            ? { ...event, registrationStatus: data.registrationStatus }
            : event
        )
      );
    } catch (error) {
      handleError(error.message || "An error occurred");
    }
  };

  useEffect(() => {
    readPresentEventData();
  }, []);

  return (
    <Container>
      <Box sx={{ mb: 2 }}>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          {presentEvent.length > 0 ? (
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold" }}
              className="bg-gradient-to-r from-blue-600  to-green-500 inline-block text-transparent bg-clip-text"
            >
              Ongoing Events
            </Typography>
          ) : (
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold" }}
              className="bg-gradient-to-r from-blue-600  to-green-500 inline-block text-transparent bg-clip-text"
            >
              No Ongoing Events
            </Typography>
          )}

          {isLoggedIn && (
            <Button
              variant="outlined"
              size="large"
              sx={{
                padding: "0.8rem 1.2rem",
                height: "fit-content",
                ml: { xs: 0, md: 4 },
                marginTop: { xs: "0.5rem", md: "0rem" },
                width: { xs: "80%", md: "fit-content" },
              }}
              onClick={() => navigate("/presentEventForm")}
            >
              Add a New Event
            </Button>
          )}
        </Box>

        {presentEvent.map((data) => (
          <Box
            key={data._id}
            className="flex md:flex-nowrap mt-4 flex-wrap max-w-full rounded-2xl bg-white shadow-md"
          >
            <Box className="flex justify-center items-center w-[90%] md:w-[40%] bg-white m-4">
              <div className="border-2 rounded-xl hover:-rotate-2 hover:scale-105 ease-in-out duration-300 mx-auto">
                <img
                  className="shadow-lg object-cover"
                  src={data.image}
                  alt="event-img"
                />
              </div>
            </Box>
            <div className="w-[90%] md:w-[60%] pt-4 mx-auto py-7 m-4 flex flex-col gap-5 md:items-start">
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold" }}
                  className="text-5xl tracking-tighter font-grotesk font-bold"
                >
                  {data.title}
                </Typography>
              </Box>
              <p>{data.description}</p>
              {data.sections &&
                data.sections.map((section, index) => (
                  <div key={index} className="break-words">
                    <span className="font-semibold">{section.subTitle}</span> :{" "}
                    {section.subContent}
                  </div>
                ))}
              {data.prize && (
                <p className="font-bold text-2xl">Prize Worth : {data.prize}</p>
              )}

              {data.registrationStatus === "open" ? (
                <Button
                  variant="contained"
                  size="large"
                  className="bg-[#0065fc] border-black border-2 hover:rounded-full md:w-[40%] w-auto text-xl text-white py-5 px-8 rounded-md hover:bg-[#144c8b] hover:shadow-lg"
                >
                  <a
                    target="_blank"
                    href={
                      data.registrationLink
                        ? data.registrationLink
                        : "/eventRegistration"
                    }
                  >
                    Register Here!
                  </a>
                  <FaArrowRight className="inline ml-2 items-center" />
                </Button>
              ) : (
                <p className="text-red-600">*Registrations are closed now!</p>
              )}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  width: "95%",
                  gap: 2,
                }}
              >
                {isLoggedIn && (
                  <Button
                    variant="outlined"
                    color="error"
                    size="large"
                    onClick={(e) => handleDeletePresentEvent(data._id, e)}
                    sx={{
                      width: { xs: "90%", md: "fit-content" },
                      margin: { xs: "auto", md: "0" },
                      minWidth: "16rem",
                      borderRadius: 10,
                      p: 1,
                    }}
                  >
                    Delete Event
                  </Button>
                )}
                {isLoggedIn && (
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    onClick={() => handleRegistration(data._id)}
                    sx={{
                      width: { xs: "90%", md: "fit-content" },
                      margin: { xs: "auto", md: "0" },
                      minWidth: "16rem",
                      borderRadius: 10,
                      p: 1,
                    }}
                  >
                    {data.registrationStatus === "open"
                      ? "Close Registration"
                      : "Open Registration"}
                  </Button>
                )}
              </Box>
            </div>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default PresentEventsPage;
