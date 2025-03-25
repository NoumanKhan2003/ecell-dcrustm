import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Skeleton,
  Card,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../components/Utils";
const PastEventsPage = () => {
  const isLoggedIn = localStorage.getItem("loggedInUser");
  const navigate = useNavigate();
  const [pastEvent, setPastEvent] = useState([]);
  const [loading, setLoading] = useState(true);

  const readPastEventData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/events/pastEvents`
      );
      if (!response.ok) {
        return handleError("Failed to fetch Past Events");
      }
      const data = await response.json();
      setPastEvent(data);
    } catch (error) {
      return handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePastEvent = async (pastEventId, e) => {
    e.stopPropagation();
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/events/deletePastEvent/${pastEventId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete Past Event");
      }

      handleSuccess("Past Event deleted successfully");
      setPastEvent((prevEvents) =>
        prevEvents.filter((pastEvent) => pastEvent._id !== pastEventId)
      );
    } catch (error) {
      handleError(error.message || "An error occurred");
    }
  };
  useEffect(() => {
    readPastEventData();
  }, []);

  return (
    <Container>
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold" }}
        className="md:text-4xl text-[2.5rem] text-[#000000] font-grotesk mx-6"
      >
        Our Past Events
      </Typography>
      {isLoggedIn && (
        <Button
          variant="outlined"
          size="large"
          sx={{
            padding: "0.6rem 1rem",
            height: "fit-content",
            ml: { xs: 0, md: 4 },
            marginTop: { xs: "0.5rem", md: "0.5rem" },
            marginBottom: { xs: "0rem", md: "0rem" },
            width: { xs: "80%", md: "fit-content" },
          }}
          onClick={() => {
            navigate("/pastEventForm");
          }}
        >
          Add past events
        </Button>
      )}
    </Box>
    <Box className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-10">
      {loading
        ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
            <Card key={index} className="bg-gray-300 group  rounded-xl">
              <Skeleton
                variant="rectangular"
                width="100%"
                height={350}
                animation="wave"
              />
            </Card>
          ))
        : pastEvent
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((data) => (
              <div
                key={data._id}
                className="bg-white group relative mx-auto overflow-hidden rounded-xl"
              >
                <Box
                  sx={{ width: "auto", maxHeight: 350, overflow: "hidden" }}
                >
                  <img
                    src={data.image}
                    alt="event-img"
                    loading="lazy"
                    className=" object-contain group-hover:rotate-3 group-hover:scale-105 transition-transform"
                  />
                </Box>
                <div className="from-transparent via-transparent to-black/50 bg-gradient-to-b absolute inset-0 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                  <div className="absolute inset-0 px-9 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 translate-y-[90%] group-hover:translate-y-0 transition-all">
                    <h1 className="text-white font-bold text-3xl pb-3 text-center">
                      {data.title}
                    </h1>
                    <p className="text-white text-center text-[14px]">
                      {data.description}
                    </p>
                    {isLoggedIn && (
                      <Button
                        variant="contained"
                        color="error"
                        onClick={(e) => handleDeletePastEvent(data._id, e)}
                        sx={{ mt: 2 }}
                      >
                        Delete
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
    </Box>
  </Container>
  )
}

export default PastEventsPage;