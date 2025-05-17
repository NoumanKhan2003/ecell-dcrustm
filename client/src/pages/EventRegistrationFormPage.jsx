import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Typography,
  Container,
  Box,
  Paper,
  Divider,
} from "@mui/material";
import Loader from "../components/Loader";
import { handleError, handleSuccess } from "../components/Utils";
import Linkify from "linkify-react";

const EventRegistrationFormPage = () => {
  console.log("in the even button register")
  const { id } = useParams();
  const [eventForm, setEventForm] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setloading] = useState(false);
  const options = {
    // target: "_blank",
    // rel: "noopener noreferrer",
    className: "text-black hover:text-green-800 underline",
  };
  useEffect(() => {
    const fetchEventForm = async () => {
      const response = await fetch(
        // `${import.meta.env.VITE_BACKEND_URL}/events/eventRegistrationForm/${id}`
       `https://ecell-dcrustm-api.vercel.app/events/eventRegistrationForm/${id}`
      );
      console.log(response)
      const data = await response.json();
      setEventForm(data);
    };
    fetchEventForm();
  }, [id]);

  const handleInputChange = (e, questionId) => {
    const { type, value, checked, files } = e.target;
    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [questionId]: files[0],
      }));
    } else if (type === "checkbox" && e.target.name.startsWith("multi_")) {
      setFormData((prevData) => {
        const current = prevData[questionId] || [];
        return {
          ...prevData,
          [questionId]: checked
            ? [...current, value]
            : current.filter((v) => v !== value),
        };
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [questionId]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleClear = () => {
    setFormData({});
  };

  const renderQuestion = (question, index) => {
    const key = `question_${index}`;

    return (
      <Box key={index} mb={4}>
        {(() => {
          switch (question.type) {
            case "short_answer":
            case "long_answer":
              return (
                <TextField
                  label={question.question}
                  variant="outlined"
                  fullWidth
                  required={question.required}
                  name={`question_${index}`}
                  value={formData[key] || ""}
                  onChange={(e) => handleInputChange(e, key)}
                  multiline={question.type === "long_answer"}
                  rows={question.type === "long_answer" ? 4 : 1}
                />
              );

            case "single_choice":
              return (
                <FormControl fullWidth required={question.required}>
                  <FormLabel sx={{ mb: 1 }}>{question.question}</FormLabel>
                  <RadioGroup
                    name={`question_${index}`}
                    value={formData[key] || ""}
                    onChange={(e) => handleInputChange(e, key)}
                  >
                    {question.options.map((option, i) => (
                      <FormControlLabel
                        key={i}
                        value={option}
                        control={<Radio />}
                        label={option}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              );

            case "multiple_choice":
              return (
                <FormControl fullWidth>
                  <FormLabel sx={{ mb: 1 }}>{question.question}</FormLabel>
                  {question.options.map((option, i) => (
                    <FormControlLabel
                      key={i}
                      control={
                        <Checkbox
                          name={`multi_${key}`}
                          value={option}
                          checked={
                            (formData[key] && formData[key].includes(option)) ||
                            false
                          }
                          onChange={(e) => handleInputChange(e, key)}
                        />
                      }
                      label={option}
                    />
                  ))}
                </FormControl>
              );

            case "file_upload":
              return (
                <FormControl fullWidth>
                  <FormLabel sx={{ mb: 1 }}>{question.question}</FormLabel>
                  <input
                    type="file"
                    style={{ marginTop: "8px" }}
                    onChange={(e) => handleInputChange(e, key)}
                  />
                </FormControl>
              );

            default:
              return null;
          }
        })()}
      </Box>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const responses = Object.entries(formData).map(([key, value]) => {
        const index = parseInt(key.split("_")[1]);
        const matchedQuestion = eventForm?.questions?.[index];

        return {
          questionId: matchedQuestion?._id || "Unknown ID",
          question: matchedQuestion?.question || "Unknown Question",
          answer: value,
        };
      });
      const payload = {
        eventTitle: eventForm?.eventTitle,
        eventId: eventForm?._id,
        responses,
      };

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/events/postEventRegistrationForm`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",  // todo : check it later on
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        handleError(data.message || "An error occurred");
      } else {
        handleSuccess("Registration Successful");
        setFormData({});
        setTimeout(() => {
          window.close();
        }, 1000);
      }
    } catch (error) {
      handleError(error.message || "Something went wrong");
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container maxWidth="lg" sx={{ mt: 9, mb: 8 }}>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            fontWeight="bold"
            sx={{
              mb: 3,
              fontSize: { md: "3.5rem", xs: "2.5rem" },
              color: "rgb(20 76 139)",
            }}
          >
            Register Now
          </Typography>
          <Paper
            elevation={4}
            sx={{
              p: { xs: 3, md: 3 },
              px: { md: 5 },
              borderRadius: 3,
              borderTop: "0.2rem solid rgb(20 76 139)",
              borderBottom: "0.2rem solid rgb(20 76 139)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ mb: 2, fontSize: { md: "3rem", xs: "2rem" } }}
              >
                {eventForm?.eventTitle?.toUpperCase() || "UNTITLED EVENT"}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                gap: 4,
                mb: 4,
              }}
            >
              {eventForm?.thumbnailPath && (
                <Box
                  sx={{
                    flex: { xs: "0 0 100%", sm: "0 0 45%" },
                    maxHeight: 700,
                    overflow: "hidden",
                    borderRadius: 2,
                  }}
                >
                  <img
                    src={eventForm.thumbnailPath}
                    alt="Thumbnail"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "inherit",
                      display: "block",
                    }}
                  />
                </Box>
              )}

              <Box
                sx={{
                  // flex: { xs: "0 0 100%", sm: "0 0 55%" },
                  textAlign: { xs: "center", sm: "left" },
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    maxWidth: "90%",
                    whiteSpace: "pre-line",
                    fontSize: { md: "1.2rem", xs: "1rem" },
                  }}
                >
                  <Linkify options={options}>
                    {eventForm?.eventDescription}
                  </Linkify>{" "}
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ mb: 1 }} />
            <Typography
              variant="h4"
              sx={{ display: "flex", justifyContent: "center", my: 2 }}
            >
              Fill the Form to Register for Event
            </Typography>

            <form onSubmit={handleSubmit}>
              {eventForm?.questions.map((question, index) =>
                renderQuestion(question, index)
              )}

              <Box
                mt={4}
                display="flex"
                justifyContent="center"
                gap={2}
                flexWrap="wrap"
              >
                <Button
                  type="button"
                  variant="outlined"
                  color="warning"
                  size="large"
                  onClick={handleClear}
                  sx={{ minWidth: 130 }}
                >
                  Clear Form
                </Button>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ minWidth: 130 }}
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Paper>
        </Container>
      )}{" "}
    </>
  );
};

export default EventRegistrationFormPage;
