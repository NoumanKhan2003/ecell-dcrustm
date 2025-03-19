import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../components/Utils.js";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";

const Form = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError("All fields are required");
    }
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/admin/adminLogin`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfo),
      });

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      const result = await response.json();
      const { success, message, jwtToken, name,userType, error } = result;

      if (success) {
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        localStorage.setItem("loggedInUserEmail", email);
        localStorage.setItem("loggedInUserType", userType);
        window.dispatchEvent(new Event("storage"));
        handleSuccess("Login Successfull");
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        handleError(error?.details?.[0]?.message || message || "Login failed");
      }
    } catch (err) {
      handleError(err.message || "Something went wrong");
    }
  };

  return (
    <Container
      sx={{
        marginTop: 0,
        marginBottom: "4rem",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{ padding: 3, maxWidth: 350, width: "100%", borderRadius: 2 }}
      >
        <Typography variant="h6" align="center" fontWeight={600}>
          Sign in to E-Cell(DCRUSTM)
        </Typography>
        <Box component="form" sx={{ mt: 2 }} onSubmit={handleSignin}>
          <TextField
            fullWidth
            name="email"
            label="Enter username"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
            value={loginInfo.email}
          />
          <TextField
            fullWidth
            name="password"
            label="Enter password"
            type="password"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
            value={loginInfo.password}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            type="submit"
          >
            Sign in
          </Button>
        </Box>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          No account / Forgot Password ?<br /> Contact Admin for username and
          password
        </Typography>
      </Paper>
    </Container>
  );
};

export default Form;
