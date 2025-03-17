import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const AdministrationPage = () => {
  const [users, setUsers] = useState([]);

  const getUsersData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/admin`);
      if (!response.ok) {
        throw new Error("Failed to fetch Users Data");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 1,
        mb: 8,
        minHeight: "100vh",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mx: { xs: "0.5rem", md: "0rem" },
          my: { xs: "1rem", md: "0rem" },
          marginTop: { xs: "3rem", md: "2rem" },
        }}
        textAlign={"center"}
        fontWeight={"bold"}
        color="rgb(20 76 139)"
      >
        E-Cell(DCRUSTM) Registered Users List
      </Typography>

      <Button
        variant="contained"
        size="large"
        color="success"
        sx={{
          padding: "0.6rem 1rem",
          marginTop: { xs: "0rem", md: "1rem" },
          marginBottom: { xs: "2rem", md: "1rem" },
          minWidth: { xs: "90%", md: "50vw" },
          margin: "auto",
        }}
      >
        Add New User
      </Button>

      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#1976d2", color: "#fff" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Sr. No.
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Email
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Role
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Remove User
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, _id) => (
              <TableRow key={_id} hover>
                <TableCell>{_id +1}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button color="warning" variant="outlined">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AdministrationPage;
