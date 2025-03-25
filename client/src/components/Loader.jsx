import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

const textAnimation = keyframes`
  0% { letter-spacing: 1px; transform: translateX(0px); }
  40% { letter-spacing: 2px; transform: translateX(26px); }
  80% { letter-spacing: 1px; transform: translateX(32px); }
  90% { letter-spacing: 2px; transform: translateX(0px); }
  100% { letter-spacing: 1px; transform: translateX(0px); }
`;

const loadingAnimation = keyframes`
  0% { width: 16px; transform: translateX(0px); }
  40% { width: 100%; transform: translateX(0px); }
  80% { width: 16px; transform: translateX(64px); }
  90% { width: 100%; transform: translateX(0px); }
  100% { width: 16px; transform: translateX(0px); }
`;

const loadingSecondaryAnimation = keyframes`
  0% { transform: translateX(0px); width: 16px; }
  40% { transform: translateX(0%); width: 80%; }
  80% { width: 100%; transform: translateX(0px); }
  90% { width: 80%; transform: translateX(15px); }
  100% { transform: translateX(0px); width: 16px; }
`;

const Loader = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
      <Box width={250} height={80} position="relative">
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: 0,
            color: "#C8B6FF",
            animation: `${textAnimation} 3.5s ease infinite`,
          }}
        >
          Please Wait
        </Typography>
        <Box
          sx={{
            backgroundColor: "#9A79FF",
            borderRadius: "50px",
            display: "block",
            height: 35,
            width: 45,
            bottom: 0,
            position: "absolute",
            transform: "translateX(64px)",
            animation: `${loadingAnimation} 3.5s ease infinite`,
            "&::before": {
              content: "''",
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "#D1C2FF",
              borderRadius: "inherit",
              animation: `${loadingSecondaryAnimation} 3.5s ease infinite`,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Loader;
