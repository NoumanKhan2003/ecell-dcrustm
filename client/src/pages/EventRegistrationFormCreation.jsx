import React, { useState, useEffect } from "react";
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

const questionTypes = [
  { value: "short_answer", label: "Short Answer" },
  { value: "long_answer", label: "Long Answer" },
  { value: "multiple_choice", label: "Multiple Choice (MCQ)" },
  { value: "single_choice", label: "Single Choice" },
  { value: "file_upload", label: "File Upload (JPG/PDF)" },
];

const defaultQuestion = {
  question: "",
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
  const [formThumbnailFile, setFormThumbnailFile] = useState(null);

  const handleAddQuestion = () => {
    setQuestions([...questions, { ...defaultQuestion }]);
  };

  const handleRemoveQuestion = (index) => {
    const updated = questions.filter((_, i) => i !== index);
    setQuestions(updated.length > 0 ? updated : [defaultQuestion]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updated = [...questions];
    updated[index][field] = value;

    if (
      field === "type" &&
      value !== "multiple_choice" &&
      value !== "single_choice"
    ) {
      updated[index].options = [""];
    }

    setQuestions(updated);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[oIndex] = value;
    setQuestions(updated);
  };

  const handleAddOption = (qIndex) => {
    const updated = [...questions];
    updated[qIndex].options.push("");
    setQuestions(updated);
  };

  const handleThumbnailUpload = (file) => {
    setFormThumbnail(URL.createObjectURL(file));
    setFormThumbnailFile(file);
  };

  const handleSubmitForm = () => {
    console.log("Form Structure:", {
      eventTitle,
      eventDescription: showDescription ? eventDescription : "",
      thumbnail: formThumbnailFile,
      questions,
    });
    alert("Form structure saved (check console)");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 10, mb: 6 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 4, bgcolor: "#f9f9f9" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
          sx={{ fontSize: { xs: "2rem", sm: "2.5rem" } }}
        >
          Create Event Registration Form
        </Typography>

        {/* Event Title & Description */}
        <Box sx={{ mb: 6 }}>
          <TextField
            fullWidth
            required
            label="Event Title"
            variant="outlined"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            sx={{ mb: 2 }}
          />

          <Button
            variant="outlined"
            startIcon={<DescriptionIcon />}
            onClick={() => setShowDescription((prev) => !prev)}
            sx={{
              mb: 2,
              borderRadius: 8,
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              fontSize: "1.2rem",
            }}
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
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography variant="subtitle1" gutterBottom>
            Optional: Upload Form Thumbnail (JPG/PDF)
          </Typography>
          <input
            accept="image/jpeg,image/png"
            type="file"
            style={{ display: "none" }}
            id="form-thumbnail-upload"
            onChange={(e) => handleThumbnailUpload(e.target.files[0])}
          />
          <label htmlFor="form-thumbnail-upload">
            <Button
              variant="outlined"
              component="span"
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
          {formThumbnail && (
            <Box
              mt={4}
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
              p: 3,
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

            {(q.type === "multiple_choice" || q.type === "single_choice") && (
              <Box sx={{ pl: 2 }}>
                {q.options.map((opt, oIndex) => (
                  <TextField
                    key={oIndex}
                    fullWidth
                    label={`Option ${oIndex + 1}`}
                    value={opt}
                    onChange={(e) =>
                      handleOptionChange(index, oIndex, e.target.value)
                    }
                    sx={{ mb: 1 }}
                  />
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
        <Box textAlign="center" mt={4}>
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
            color="primary"
            onClick={handleSubmitForm}
            sx={{
              borderRadius: 8,
              px: 4,
              fontSize: { xs: "0.875rem", sm: "1rem" },
              padding: { xs: "8px 16px", sm: "10px 20px" },
            }}
          >
            Save Form
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default EventRegistrationPage;
