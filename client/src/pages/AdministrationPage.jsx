import React from "react";
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

const users = [
  { name: "John Doe", email: "john@example.com", role: "Admin" },
  { name: "Jane Smith", email: "jane@example.com", role: "Member" },
  {
    name: "Michael Brown",
    email: "michael@example.com",
    role: "Mentor",
  },
];

const UserManagement = () => {
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
          marginTop: { xs: "3rem", md: "0rem" },
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
                ID
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
            {users.map((user, index) => (
              <TableRow key={index} hover>
                <TableCell>{index + 1}</TableCell>
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

export default UserManagement;
