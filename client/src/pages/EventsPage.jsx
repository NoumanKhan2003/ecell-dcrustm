import React, { useEffect } from "react";
import { Container } from "@mui/material";
import PresentEventsPage from "../components/PresentEvents";
import PastEventsPage from "../components/PastEvents";
const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container sx={{ mt: 8, mb: 8 }}>
      <PresentEventsPage />
      <PastEventsPage />
    </Container>
  );
};

export default EventsPage;
