import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../components/Utils";

const SignUpPage = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    userType: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    if (
      !signUpInfo.name ||
      !signUpInfo.email ||
      !signUpInfo.password ||
      !signUpInfo.userType
    ) {
      return handleError("All fields are required");
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/admin/adminsignup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: signUpInfo.name.trim(),
            email: signUpInfo.email.trim(),
            userType: signUpInfo.userType,
            password: signUpInfo.password,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        handleSuccess("User Added successfully");
        setTimeout(() => {
          navigate("/administration");
        }, 500);
      } else {
        handleError("Failed to add user. Please try again.");
      }
    } catch (error) {
      handleError("An error occurred. Please try again.");
    }
  };

  return (
    <Container
      sx={{
        marginTop: "4rem",
        marginBottom: "4rem",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{ padding: 3, maxWidth: 500, width: "100%", borderRadius: 2 }}
      >
        <Typography variant="h6" align="center" fontWeight={600}>
          Add User to E-Cell(DCRUSTM)
        </Typography>
        <Box component="form" sx={{ mt: 2 }} onSubmit={handleAddUser}>
          <TextField
            fullWidth
            name="name"
            label="Enter Name of User"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
            value={signUpInfo.name}
          />
          <TextField
            fullWidth
            name="email"
            label="Enter Email of User"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
            value={signUpInfo.email}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="userType" shrink>
              Type of User
            </InputLabel>
            <Select
              labelId="userType"
              id="userType"
              name="userType"
              label="Type of User"
              value={signUpInfo.userType}
              onChange={handleChange}
              variant="outlined"
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select User Type
              </MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Member">Member</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            name="password"
            label="Enter password"
            type="password"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
            value={signUpInfo.password}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            type="submit"
          >
            Sign Up
          </Button>
        </Box>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          <strong>Note - </strong> This Option is only for Admins of E-Cell
          (DCRUSTM)
        </Typography>
      </Paper>
    </Container>
  );
};

export default SignUpPage;
