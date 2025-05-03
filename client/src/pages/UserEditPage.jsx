import React, { useState, useEffect } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { handleError, handleSuccess } from "../components/Utils.js";
import LoaderComponent from "../components/Loader.jsx";

const UserEditPage = () => {
  const { id } = useParams();
  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    userType: "",
    password: "",
  });

  useEffect(() => {
    const fetchUserPreviousData = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/user/userReadOne/${id}`
        );
        if (!res.ok) {
          handleError("Failed to fetch user data");
        }

        const data = await res.json();

        setSignUpInfo({
          name: data.name || "",
          email: data.email || "",
          userType: data.userType || "",
          password: "",
        });
      } catch (error) {
        handleError("Error fetching user:", error.message);
      }
    };
    fetchUserPreviousData();
  }, [id]);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const requestData = {
        name: signUpInfo.name.trim(),
        email: signUpInfo.email.trim(),
        userType: signUpInfo.userType,
      };

      if (signUpInfo.password.trim()) {
        requestData.password = signUpInfo.password.trim();
      }

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/userEdit/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        handleSuccess("User Updated successfully");
        setTimeout(() => {
          navigate("/administration");
        }, 500);
      } else {
        handleError(
          "Failed to update user. Check the data and please try again."
        );
      }
    } catch (error) {
      handleError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);

  return (
    <div>
      <>
        {loading ? (
          <LoaderComponent />
        ) : (
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
              sx={{ padding: 3, maxWidth: 600, width: "100%", borderRadius: 2 }}
            >
              <Typography variant="h5" align="center" fontWeight={600}>
                Update current User data of E-Cell(DCRUSTM)
              </Typography>
              <Box component="form" sx={{ mt: 2 }} onSubmit={handleEditUser}>
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
                  color="success"
                  sx={{ mt: 2 }}
                  type="submit"
                >
                  Update User
                </Button>
              </Box>
              <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                <strong>Note - </strong> This Option is only for Admins of
                E-Cell (DCRUSTM)
              </Typography>
            </Paper>
          </Container>
        )}
      </>
    </div>
  );
};

export default UserEditPage;
