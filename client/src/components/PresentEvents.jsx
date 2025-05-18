import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Skeleton,
  Stack,
} from "@mui/material";
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

  // Fetch present events data from backend
  const readPresentEventData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/events/presentEvents`
      );
      if (!response.ok) {
        handleError("Failed to fetch Present Events");
        setLoading(false);
        return;
      }
      const data = await response.json();
      setPresentEvent(data);
    } catch (error) {
      handleError(error.message || "An error occurred while fetching events");
    } finally {
      setLoading(false);
    }
  };

  // Delete a present event by ID
  const handleDeletePresentEvent = async (presentEventId, e) => {
    e.stopPropagation();
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/events/deletePresentEvent/${presentEventId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
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

  // Toggle registration open/close status
  const handleRegistration = async (presentEventId, e) => {
    e.stopPropagation();
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/events/toggleRegistration/${presentEventId}`,
        { method: "POST", headers: { "Content-Type": "application/json" } }
      );
      if (!response.ok) {
        return handleError("Failed to update registration status");
      }
      const data = await response.json();
      handleSuccess("Registration status updated");
      readPresentEventData();


      // Update local event registration status immediately
      setPresentEvent((prevEvents) =>
        prevEvents.map((event) =>
          event._id === presentEventId
            ? { ...event, registrationStatus: data.status }
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
        <Box sx={{ mt: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {presentEvent.length > 0 && !loading && (
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold" }}
                className="bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text"
              >
                Ongoing Events
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
          {loading ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: { md: "row", xs: "column" },
                gap: { md: 5, xs: 0 },
                p: { md: 5, xs: 1 },
                bgcolor: "background.paper",
                borderRadius: 2,
                boxShadow: 1,
                width: "100%",
                maxWidth: "100%",
                my: 3,
              }}
            >
              {/* Skeleton Image */}
              <Skeleton
                variant="rounded"
                sx={{
                  width: { md: "40%", xs: "100%" },
                  height: { md: 450, xs: 400 },
                }}
              />

              {/* Skeleton Text */}
              <Stack spacing={1} flex={1}>
                <Skeleton variant="text" width="60%" height={40} />
                <Skeleton variant="text" width="90%" />
                <Skeleton variant="text" width="80%" />
                <Skeleton variant="text" width="85%" />
                <Skeleton variant="text" width="70%" />
                <Skeleton variant="text" width="50%" />
                <Skeleton variant="text" width="90%" />
                <Skeleton variant="text" width="80%" />
                <Skeleton variant="text" width="85%" />
                <Skeleton variant="text" width="70%" />
                <Skeleton variant="text" width="50%" />

                <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                  <Skeleton
                    variant="rectangular"
                    width={120}
                    height={40}
                    sx={{ borderRadius: 20 }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width={140}
                    height={40}
                    sx={{ borderRadius: 20 }}
                  />
                </Box>
              </Stack>
            </Box>
          ) : presentEvent.length > 0 ? (
            presentEvent
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((data) => (
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
                  <div className="w-[90%] md:w-[60%] pt-4 mx-auto py-7 m-4 flex flex-col gap-3 md:items-start">
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
                        <div key={index} className="break-words whitespace-pre-line">
                          <span className="font-semibold">
                            {section.subTitle}
                          </span>{" "}
                         {section.subContent}
                        </div>
                      ))}
                    {data.prize && (
                      <p className="font-bold text-2xl">
                        Prize Worth : {data.prize}
                      </p>
                    )}

                    {data.registrationStatus === "open" ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={
                          data.registrationLink ? data.registrationLink
                            : `/showEventRegistrationForm/${data.eventId}`
                        }
                      >
                        <Button
                          variant="contained"
                          size="large"
                          className="bg-[#0065fc] border-black border-2 hover:rounded-full md:w-[100%] w-auto text-xl text-white py-5 px-8 rounded-md hover:bg-[#144c8b] hover:shadow-lg"
                        >
                          Register Here!
                          <FaArrowRight className="inline ml-2 items-center" />
                        </Button>
                      </a>
                    ) : (
                      <p className="text-red-600">
                        *Registrations are closed now!
                      </p>
                    )}

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        width: "90%",
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
                          onClick={(e) => handleRegistration(data._id, e)}
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
              ))
          ) : (
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mt: 4 }}
              color="text.secondary"
            >
              {" "}
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default PresentEventsPage;
