import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Container from "../components/common/Container";
import Logo from "../components/common/Logo";

const AboutPage = () => {
  return (
    <Container maxWidth="md" sx={{ margin: "0 auto", maxWidth: "800px" }}>
      <Stack
        alignItems="center"
        justifyContent="center" // Center horizontally and vertically
        direction={{ xs: "column", md: "row " }}
        sx={{ height: "max-content" }}
      >
        <Logo />
      </Stack>
      <Box sx={{ textAlign: "justify", lineHeight: 1.6 }}>
        Flixxit is an OTT platform for watching movies and TV shows. It provides
        a wide range of content for users to browse, search, and enjoy their
        favorite movies and TV series.
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" color="primary">
          Features
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              A home page with a carousel of featured movies and TV shows
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              A search bar for finding content
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              A grid of genres for browsing content
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Detail pages for individual movies and TV shows
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              The ability to watch trailers
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              The ability to add movies and TV shows to reviews and favorites
            </Typography>
          </li>
        </ul>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" color="primary">
          Contributing
        </Typography>
        <Typography variant="body1">
          The Flixxit project is open to contributions. If you would like to
          contribute, please fork the project on GitHub and submit a pull
          request.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" color="primary">
          Thank you for visiting!
        </Typography>
        <Typography variant="body1">
          We hope you enjoy using Flixxit for your movie and TV show
          entertainment. If you have any questions or suggestions, please feel
          free to contact us.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutPage;
