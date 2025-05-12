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
} from "@mui/material";

const EventRegistrationFormPage = () => {
  const { id } = useParams();
  const [eventForm, setEventForm] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchEventForm = async () => {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/events/eventRegistrationForm/${id}`
      );
      const data = await response.json();
      setEventForm(data);
    };
    fetchEventForm();
  }, [id]);

  const handleInputChange = (e, questionId) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [questionId]: type === "checkbox" ? checked : value,
    }));
  };

  const renderQuestion = (question, index) => {
    switch (question.type) {
      case "text":
        return (
          <TextField
            key={index}
            label={question.question}
            variant="outlined"
            fullWidth
            required={question.required}
            name={`question_${index}`}
            value={formData[`question_${index}`] || ""}
            onChange={(e) => handleInputChange(e, `question_${index}`)}
          />
        );

      case "radio":
        return (
          <FormControl
            key={index}
            component="fieldset"
            fullWidth
            required={question.required}
          >
            <FormLabel component="legend">{question.question}</FormLabel>
            <RadioGroup
              name={`question_${index}`}
              value={formData[`question_${index}`] || ""}
              onChange={(e) => handleInputChange(e, `question_${index}`)}
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

      case "checkbox":
        return (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                name={`question_${index}`}
                checked={formData[`question_${index}`] || false}
                onChange={(e) => handleInputChange(e, `question_${index}`)}
              />
            }
            label={question.question}
          />
        );
      default:
        return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/submit-event-form/${id}`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log(result); 
  };

  if (!eventForm) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5">{eventForm.eventTitle}</Typography>
      <Typography variant="body1">{eventForm.eventDescription}</Typography>

      {eventForm.questions.map((question, index) =>
        renderQuestion(question, index)
      )}

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default EventRegistrationFormPage;
