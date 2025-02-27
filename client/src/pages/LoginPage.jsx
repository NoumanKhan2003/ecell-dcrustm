import React from "react";
import { Container, Box, TextField, Button, Typography, Link, Paper } from "@mui/material";

const Form = () => {
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
      <Paper elevation={3} sx={{ padding: 3, maxWidth: 350, width: "100%", borderRadius: 2 }}>
        <Typography variant="h6" align="center" fontWeight={600}>
          Sign in to E-Cell(DCRUSTM)
        </Typography>
        <Box component="form" sx={{ mt: 2 }}>
          <TextField fullWidth label="Enter username" margin="normal" variant="outlined" />
          <TextField fullWidth label="Enter password" type="password" margin="normal" variant="outlined" />
          <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
            Sign in
          </Button>
        </Box>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          No account / Forgot Password ?<br/> Contact Admin for username and password
        </Typography>
      </Paper>
    </Container>
  );
};

export default Form;
