import React, { useState, useEffect } from "react";
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
import blogsData from "../assets/blogsData/blogsData.json";
import timeManagement from "../assets/blogsData/timeManagement.png";
import failure from "../assets/blogsData/failure.png";
import networking from "../assets/blogsData/networking.png";
import enterpreneurship from "../assets/blogsData/enterpreneurship.png";
import leanStartup from "../assets/blogsData/leanStartup.png";
import buisnessModel from "../assets/blogsData/buisnessModel.png";
import branding from "../assets/blogsData/branding.png";
import crowdfunding from "../assets/blogsData/crowdfunding.jpg";

const imageMap = {
  timeManagement,
  failure,
  networking,
  enterpreneurship,
  leanStartup,
  buisnessModel,
  branding,
  crowdfunding,
};

const BlogsPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleOpen = (blog) => {
    setSelectedBlog(blog);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBlog(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container sx={{ marginTop: "4rem", marginBottom: "4rem" }}>
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

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          justifyContent: "center",
        }}
      >
        {blogsData
          .filter((blog) => blog.titleMain && blog.titleMain.trim() !== "")
          .map((blog) => (
            <Card
              key={blog.id}
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
                  image={imageMap[blog.image]}
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
            <Typography variant="body">
              {selectedBlog.contentMain}
            </Typography>

            {selectedBlog.sections &&
              selectedBlog.sections.map((blog, index) => (
                <div key={index}>
                  <Typography variant="h6" marginTop={2} sx={{ fontWeight: "bold" }}>
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
                    {blog.content}
                  </Typography>
                  <br />
                </div>
              ))}

            {selectedBlog.conclusion && (
              <>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Conclusion
                </Typography>
                <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
                  {selectedBlog.conclusion}
                </Typography>
              </>
            )}
          </DialogContent>
          <Box textAlign="center" sx={{ padding: 2 }}>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Dialog>
      )}
    </Container>
  );
};

export default BlogsPage;
