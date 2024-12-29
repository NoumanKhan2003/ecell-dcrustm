import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import blogsData from "../assets/blogsData.json";
const BlogsPage = () => {
  return (
    <Container sx={{ marginTop: "4rem" }}>
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
      <Box>
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
      </Box>
    </Container>
  );
};

export default BlogsPage;
