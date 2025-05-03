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
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../components/Utils";

const AdministrationHome = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const getUsersData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user`);
      if (!response.ok) {
        throw new Error("Failed to fetch Users Data");
      }
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDeleteUser = async (user) => {
    if (!user) {
      return handleError("Invalid User selection");
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/userDelete/${user._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete User");
      }
      handleSuccess("User deleted successfully");
      setUser((prevUsers) => prevUsers.filter((u) => u._id !== user._id));
    } catch (error) {
      handleError(error.message || "An error occurred");
    }
  };

  const handleEditUser = (user) => {
    if (user && user._id) {
      navigate(`/editUser/${user._id}`);
    } else {
      console.error("Invalid user object:", user);
    }
  };
  
  
  const handleAddUser = () => {
    navigate("/signupUser");
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <Container
      sx={{
        mt: 4,
        mb: 8,
        minHeight: "100vh",
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
        onClick={handleAddUser}
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
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Edit User
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((user, _id) => (
              <TableRow key={_id} hover>
                <TableCell>{_id + 1}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.userType}</TableCell>
                <TableCell>
                  <Button
                    color="warning"
                    variant="outlined"
                    onClick={() => handleDeleteUser(user)}
                  >
                    Delete
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                  key={user._id}
                    color="warning"
                    variant="outlined"
                    onClick={() => handleEditUser(user)}
                  >
                    Edit
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

export default AdministrationHome;
