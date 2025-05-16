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

const EventRegistrationFormPage = () => {
  const { id } = useParams();
  const [eventForm, setEventForm] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchEventForm = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/events/eventRegistrationForm/${id}`
      );
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

  const renderQuestion = (question, index) => {
    const key = `question_${index}`;

    return (
      <Box key={index} mb={3}>
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
                  name={key}
                  value={formData[key] || ""}
                  onChange={(e) => handleInputChange(e, key)}
                  multiline={question.type === "long_answer"}
                  rows={question.type === "long_answer" ? 4 : 1}
                />
              );

            case "single_choice":
              return (
                <FormControl fullWidth required={question.required}>
                  <FormLabel>{question.question}</FormLabel>
                  <RadioGroup
                    name={key}
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
                  <FormLabel>{question.question}</FormLabel>
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
                  <FormLabel>{question.question}</FormLabel>
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
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    const response = await fetch(`/api/submit-event-form/${id}`, {
      method: "POST",
      body: form,
    });

    const result = await response.json();
    console.log(result);
  };

  if (!eventForm) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 10, mb: 6 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Box mb={3}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {eventForm.eventTitle}
          </Typography>
          {eventForm.eventDescription && (
            <Typography variant="body1" color="text.secondary">
              {eventForm.eventDescription}
            </Typography>
          )}
          {eventForm.thumbnailPath && (
            <Box
              sx={{
                width: "90%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
              }}
            >
              <img
                src={eventForm.thumbnailPath}
                alt="Thumnail Image"
                style={{ height: "100%", width: "100%" }}
              />
            </Box>
          )}
        </Box>

        <Divider sx={{ mb: 4 }} />

        <form onSubmit={handleSubmit}>
          {eventForm.questions.map((question, index) =>
            renderQuestion(question, index)
          )}

          <Box mt={4} textAlign="right">
            <Button type="submit" variant="contained" size="large">
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default EventRegistrationFormPage;
