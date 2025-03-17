import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";

const SignUpPage = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSignUp = async () => {};
  return (
    <Container
      sx={{
        marginTop: "2rem",
        marginBottom: "4rem",
        height: "100vh",
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
          Sign in to E-Cell(DCRUSTM)
        </Typography>
        <Box component="form" sx={{ mt: 2 }} onSubmit={handleSignUp}>
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
            label="Enter username"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
            value={signUpInfo.email}
          />
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
            Sign in
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
