import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Container,
  Link,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { useEffect } from "react";
import Nouman from "../assets/team/2025/nouman.jpg";
import Aashish from "../assets/team/2024/aashish.jpg";
import Anubhav from "../assets/team/2024/anubhav.jpg";
import Deepanshu from "../assets/team/2024/deepanshu.jpg";

const contributors = [
  {
    name: "Nouman Khan",
    role: "Full Stack Developer (Lead)",
    description:
      "Lead developer of the E-Cell(DCRUSTM) website, responsible for frontend, backend development and database administration.",
    photo: Nouman,
    linkedin: "https://www.linkedin.com/in/nouman-khan-95923a256",
    email: "noumankhan16859@gmail.com",
  },
  {
    name: "Aashish Joshi",
    role: "Frontend Developer & Designer",
    description:
      "Designed the user interface and developed the initial frontend of Ecell Website.",
    photo: Aashish,
    linkedin: "https://www.linkedin.com/in/aashish-joshi-a72a71228/",
    email: "aashihjoshilak@gmail.com",
  },
  {
    name: "Anubhav Rawat",
    role: "Content Writer",
    description:
      "Created engaging and informative content for the Ecell Dcrustm website.",
    photo: Anubhav,
    linkedin: "http://www.linkedin.com/in/anubhav-rawat-540b8a244",
    email: "anubhavofficial23@gmail.com",
  },
  {
    name: "Deepanshu",
    role: "Content Writer and researcher",
    description:
      "Crafted compelling and well-structured content for the E-Cell DCRUSTM website.",
    photo: Deepanshu,
    linkedin: "https://www.linkedin.com/in/deepanshu-solanki-b1b448146/",
    email: "solankideepanshu2809@gmail.com",
  },
];

const ContributorsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container
      style={{
        padding: "2rem",
        marginTop: "2rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h3"
        textAlign={"center"}
        fontWeight={"bold"}
        color="rgb(20 76 139)"
      >
        E-Cell Website Contributors
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {contributors.map((contributor, index) => (
          <Card
            key={index}
            sx={{
              width: 400,
              minHeight: 250,
              borderRadius: 2,
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 1,
              margin: 2,
            }}
          >
            <Avatar
              src={contributor.photo}
              alt={contributor.name}
              sx={{ width: 100, height: 100, border: "2px solid #ccc" }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" fontWeight={600}>
                {contributor.name}
              </Typography>
              <Typography color="textSecondary">{contributor.role}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {contributor.description}
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Link href={contributor.linkedin}>
                  <LinkedInIcon
                    fontSize="large"
                    sx={{ mx: 1, color: "black" }}
                  />
                </Link>
                <Link href={`mailto:${contributor.email}`}>
                  <EmailIcon fontSize="large" sx={{ mx: 1, color: "grey" }} />
                </Link>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default ContributorsPage;
