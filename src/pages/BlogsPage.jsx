import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import blogsData from "../assets/blogsData/blogsData.json";
import timeManagement from "../assets/blogsData/timeManagement.png";
import failure from "../assets/blogsData/failure.png";
import networking from "../assets/blogsData/networking.png";
import enterpreneurship from "../assets/blogsData/enterpreneurship.png";

const imageMap = {
  timeManagement,
  failure,
  networking,
  enterpreneurship,
};

const BlogsPage = () => {
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
        Our Blogs
      </Typography>
      {/* <Box>
        {blogsData.map((blog, index) => (
          <Box key={index} sx={{ marginBottom: "2rem" }}>
            <Typography
              variant="h4"
              marginBottom={"0.2rem"}
              color="#08194c"
              fontWeight={"bold"}
            >
              {blog.titleMain}
            </Typography>
            <Typography variant="h5" marginBottom={"0.2rem"}>
              {blog.title}
            </Typography>
            <Typography variant="body1" whiteSpace="pre-line">
              {blog.content}
            </Typography>
            {blog.conclusion && (
              <>
                <Typography variant="body1" whiteSpace="pre-line">
                  {blog.conclusion}
                </Typography>
                <Divider sx={{ marginTop: "1rem" }} />
              </>
            )}
          </Box>
        ))}
      </Box> */}
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
          .map((blog, index) => (
            <Card key={blog.id} sx={{ width: 500 }}>
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
    </Container>
  );
};

export default BlogsPage;
