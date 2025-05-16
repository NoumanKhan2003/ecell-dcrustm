import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Paper,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { handleError, handleSuccess } from "../components/Utils";
import Loader from "../components/Loader";
const questionTypes = [
  { value: "short_answer", label: "Short Answer" },
  { value: "long_answer", label: "Long Answer" },
  { value: "multiple_choice", label: "Multiple Choice (MCQ)" },
  { value: "single_choice", label: "Single Choice" },
  { value: "file_upload", label: "File Upload (JPG/PDF)" },
];

const defaultQuestion = {
  type: "short_answer",
  options: [""],
  required: false,
};

const EventRegistrationPage = () => {
  const [eventTitle, setEventTitle] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const [eventDescription, setEventDescription] = useState("");
  const [questions, setQuestions] = useState([defaultQuestion]);
  const [formThumbnail, setFormThumbnail] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        text: "",
        type: "short_answer",
        options: [],
        required: false,
      },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    const updated = questions.filter((_, i) => i !== index);
    setQuestions(updated.length > 0 ? updated : [defaultQuestion]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updated = [...questions];
    updated[index][field] = value;

    if (field === "type") {
      if (value === "multiple_choice" || value === "single_choice") {
        updated[index].options = updated[index].options.length
          ? updated[index].options
          : [""];
      } else {
        updated[index].options = [];
      }
    }

    setQuestions(updated);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[oIndex] = value;
    setQuestions(updated);
  };

  const handleDeleteOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    if (updatedQuestions[questionIndex].options.length > 1) {
      updatedQuestions[questionIndex].options.splice(optionIndex, 1);
      setQuestions(updatedQuestions);
    } else {
      handleError("At least one option is required.");
    }
  };

  const handleAddOption = (qIndex) => {
    const updated = [...questions];
    updated[qIndex].options.push("");
    setQuestions(updated);
  };

  const handleThumbnailUpload = (file) => {
    setFormThumbnail(URL.createObjectURL(file));
    setThumbnail(file);
  };

  const validateForm = () => {
    for (let q of questions) {
      if (!q.question || q.question.trim() === "") {
        return false;
      }

      if (
        (q.type === "multiple_choice" || q.type === "single_choice") &&
        (!q.options || q.options.some((opt) => !opt || opt.trim() === ""))
      ) {
        return false;
      }
    }
    return true;
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      handleError("Added fields cannot be empty");
      return;
    }

    const formData = new FormData();
    formData.append("eventTitle", eventTitle);
    formData.append(
      "eventDescription",
      showDescription ? eventDescription : ""
    );
    formData.append("questions", JSON.stringify(questions));
    if (thumbnail) {
      formData.append("image", thumbnail);
    }
    if (!eventTitle || questions.length === 0) {
      return handleError("All Fields are required.");
    }
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/events/addEventRegisterForm`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      if (response.ok) {
        handleSuccess("Form made & saved successfully.");
        setTimeout(() => {
          window.close();
        }, 1000);
      } else {
        handleError(data.message);
      }
    } catch (error) {
      handleError(error.message);
    } finally {
      setLoading(false);
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
        <Container maxWidth="md" sx={{ mt: 10, mb: 3 }}>
          <Paper
            elevation={2}
            sx={{ p: { md: 4, xs: 1 }, borderRadius: 2, bgcolor: "#f9f9f9" }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              gutterBottom
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem" },
                color: "rgb(20, 76, 139)",
              }}
            >
              Create Event Registration Form
            </Typography>

            {/* Event Title & Description */}
            <Box sx={{ mb: 1 }}>
              <TextField
                fullWidth
                required
                label="Event Title"
                variant="outlined"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                sx={{ mb: 1 }}
              />

              <Button
                variant="outlined"
                startIcon={<DescriptionIcon />}
                onClick={() => setShowDescription((prev) => !prev)}
                sx={{
                  mb: 0,
                  borderRadius: 8,
                  display: "flex",
                  justifyContent: "center",
                  margin: "auto",
                  fontSize: "1.2rem",
                }}
                color={showDescription ? "error" : "success"}
              >
                {showDescription ? "Remove Description" : "Add Description"}
              </Button>

              {showDescription && (
                <TextField
                  fullWidth
                  label="Event Description (Optional)"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                  sx={{ mt: 2 }}
                />
              )}
            </Box>

            {/* Thumbnail Upload */}
            <Box sx={{ mb: 4, textAlign: "center" }}>
              <Typography variant="subtitle1" gutterBottom>
                Optional: Event Description & Thumbnail (JPG/PNG)
              </Typography>
              <input
                accept="image/jpeg,image/png"
                type="file"
                style={{ display: "none" }}
                id="form-thumbnail-upload"
                ref={fileInputRef}
                onChange={(e) => handleThumbnailUpload(e.target.files[0])}
              />
              {!formThumbnail ? (
                <label htmlFor="form-thumbnail-upload">
                  <Button
                    variant="outlined"
                    component="span"
                    color="success"
                    startIcon={<UploadFileIcon />}
                    sx={{
                      borderRadius: 8,
                      mt: 1,
                      fontSize: { xs: "0.875rem", sm: "1rem" },
                      padding: { xs: "8px 16px", sm: "10px 20px" },
                    }}
                  >
                    Upload Thumbnail
                  </Button>
                </label>
              ) : (
                <Button
                  variant="outlined"
                  component="span"
                  color="error"
                  startIcon={<DeleteOutlineIcon />}
                  sx={{
                    borderRadius: 8,
                    mt: 0,
                    fontSize: { xs: "0.875rem", md: "1rem" },
                    padding: { xs: "8px 16px", md: "10px 20px" },
                  }}
                  onClick={() => {
                    setFormThumbnail(null);
                    if (fileInputRef.current) {
                      fileInputRef.current.value = null;
                    }
                  }}
                >
                  Remove Thumbnail
                </Button>
              )}
              {formThumbnail && (
                <Box
                  mt={1}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ maxWidth: "100%" }}
                >
                  <img
                    src={formThumbnail}
                    alt="Form Thumbnail"
                    style={{
                      maxHeight: 300,
                      borderRadius: 12,
                      boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
                      objectFit: "contain",
                      width: "100%",
                      maxWidth: "400px",
                    }}
                  />
                </Box>
              )}
            </Box>

            {/* Question Builder */}
            {questions.map((q, index) => (
              <Paper
                key={index}
                elevation={2}
                sx={{
                  p: { md: 3, xs: 1 },
                  mb: 4,
                  borderRadius: 3,
                  borderLeft: "4px solid #1976d2",
                  background: "#fff",
                  position: "relative",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mb: 2 }}
                >
                  <Typography
                    fontWeight="bold"
                    sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
                  >
                    Question {index + 1}
                  </Typography>

                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={q.required}
                          onChange={(e) =>
                            handleQuestionChange(
                              index,
                              "required",
                              e.target.checked
                            )
                          }
                        />
                      }
                      label="Required"
                    />

                    <Button
                      onClick={() => handleRemoveQuestion(index)}
                      startIcon={<DeleteIcon />}
                      color="error"
                      variant="text"
                      disabled={questions.length === 1}
                    >
                      Remove
                    </Button>
                  </Box>
                </Box>

                <TextField
                  fullWidth
                  label="Question"
                  variant="outlined"
                  value={q.question}
                  onChange={(e) =>
                    handleQuestionChange(index, "question", e.target.value)
                  }
                  sx={{
                    mb: 2,
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                  }}
                />

                <Select
                  fullWidth
                  value={q.type}
                  onChange={(e) =>
                    handleQuestionChange(index, "type", e.target.value)
                  }
                  sx={{ mb: 2 }}
                >
                  {questionTypes.map((type) => (
                    <MenuItem key={type.value} value={type.value}>
                      {type.label}
                    </MenuItem>
                  ))}
                </Select>

                {(q.type === "multiple_choice" ||
                  q.type === "single_choice") && (
                  <Box sx={{ pl: 2 }}>
                    {q.options.map((opt, oIndex) => (
                      <Box
                        key={oIndex}
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <TextField
                          fullWidth
                          label={`Option ${oIndex + 1}`}
                          value={opt}
                          onChange={(e) =>
                            handleOptionChange(index, oIndex, e.target.value)
                          }
                        />
                        <Button
                          color="error"
                          onClick={() => handleDeleteOption(index, oIndex)}
                          disabled={q.options.length === 1}
                          sx={{ ml: 1, minWidth: "40px" }}
                        >
                          <DeleteIcon fontSize="small" />
                        </Button>
                      </Box>
                    ))}
                    <Button onClick={() => handleAddOption(index)}>
                      + Add Option
                    </Button>
                  </Box>
                )}

                {q.type === "file_upload" && (
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    📎 Users will have to upload a JPG or PDF file.
                  </Typography>
                )}
              </Paper>
            ))}

            {/* Action Buttons */}
            <Box textAlign="center" mt={2}>
              <Button
                variant="outlined"
                startIcon={<AddCircleOutlineIcon />}
                onClick={handleAddQuestion}
                sx={{
                  borderRadius: 8,
                  mx: 2,
                  px: 3,
                  ":hover": { bgcolor: "#e3f2fd" },
                }}
              >
                Add Question
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={handleSubmitForm}
                sx={{
                  borderRadius: 8,
                  px: 3,
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  mt: { md: 0, xs: 2 },
                }}
              >
                Save Form
              </Button>
            </Box>
          </Paper>
        </Container>
      )}
    </>
  );
};

export default EventRegistrationPage;
