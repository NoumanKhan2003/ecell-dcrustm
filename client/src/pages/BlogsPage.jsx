import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
} from "@mui/material";
import { handleError, handleSuccess } from "../components/Utils.js";

const useBlogsData = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBlogsData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/blogs`);
      if (!response.ok) {
        return handleError("Failed to fetch blogs");
      }
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      return handleError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogsData();
  }, []);

  return { blogs, loading, refreshBlogs: getBlogsData };
};

const BlogsPage = () => {
  const blogsData = useBlogsData();
  const [open, setOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const navigate = useNavigate();

  const handleOpen = (blog) => {
    setSelectedBlog(blog);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBlog(null);
  };

  const handleAddBlog = () => {
    navigate("/blogsForm");
  };

  const handleDeleteBlog = async (e) => {
    e.stopPropagation();

    if (!selectedBlog || !selectedBlog._id) {
      return handleError("Invalid blog selection");
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/blogs/delete/${selectedBlog._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }

      handleSuccess("Blog deleted successfully");
      blogsData.refreshBlogs();
      handleClose();
    } catch (error) {
      handleError(error.message || "An error occurred");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isLoggedIn = localStorage.getItem("loggedInUser");

  return (
    <Container sx={{ marginTop: "2rem", marginBottom: "4rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mx: { xs: "0.5rem", md: "2rem" },
            my: { xs: "1rem", md: "3rem" },
          }}
          textAlign={"center"}
          fontWeight={"bold"}
          color="rgb(20 76 139)"
        >
          Our Latest Blogs
        </Typography>

        {isLoggedIn && (
          <Button
            variant="contained"
            size="large"
            sx={{
              padding: "0.6rem 1rem",
              height: "fit-content",
              marginTop: { xs: "0rem", md: "4rem" },
              marginBottom: { xs: "2rem", md: "0rem" },
            }}
            onClick={handleAddBlog}
          >
            Add new Blog{" "}
          </Button>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          justifyContent: "center",
        }}
      >
        {blogsData.blogs
          .filter((blog) => blog.titleMain && blog.titleMain.trim() !== "")
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((blog) => (
            <Card
              key={blog._id}
              sx={{ width: 500 }}
              onClick={() => handleOpen(blog)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{
                    height: 300,
                    width: 500,
                    objectFit: "cover",
                  }}
                  image={blog.image}
                  alt={blog.titleMain}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {blog.titleMain}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {blog.contentMain}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
      </Box>

      {selectedBlog && (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle>
            <Typography variant="h5">{selectedBlog.titleMain} </Typography>
          </DialogTitle>
          <DialogContent>
            <Typography variant="body">{selectedBlog.contentMain}</Typography>

            {selectedBlog.sections &&
              selectedBlog.sections.map((blog, _id) => (
                <div key={_id}>
                  <Typography
                    variant="h6"
                    marginTop={2}
                    sx={{ fontWeight: "bold" }}
                  >
                    {blog.subTitle}
                  </Typography>
                  <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
                    {blog.subContent}
                  </Typography>
                  <br />
                </div>
              ))}
          </DialogContent>
          <Box
            sx={{ padding: 2, display: "flex", justifyContent: "space-evenly" }}
          >
            <Button variant="outlined" color="primary" onClick={handleClose}>
              Close
            </Button>
            {isLoggedIn && (
              <Button
                variant="outlined"
                color="error"
                onClick={handleDeleteBlog}
              >
                Delete
              </Button>
            )}
          </Box>
        </Dialog>
      )}
    </Container>
  );
};

export default BlogsPage;
