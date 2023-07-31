import React from "react";
import { Typography, Box } from "@mui/material";
import Container from "../components/common/Container";

const AboutPage = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h1" color="primary" align="center" sx={{ mb: 4 }}>
        About
      </Typography>
      <Box sx={{ textAlign: "justify", lineHeight: 1.6 }}>
        This project is a Netflix clone built using React and Material UI. It
        uses the TMDB API to fetch data about movies and TV shows, and it allows
        users to browse, search, and watch content.
      </Box>
      <Typography variant="body1" sx={{ mt: 4 }}>
        The project was built to learn more about React and Material UI, and to
        practice using some of the features such as:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">Create React App</Typography>
        </li>
        <li>
          <Typography variant="body1">Material UI</Typography>
        </li>
        <li>
          <Typography variant="body1">Mongoose</Typography>
        </li>
        <li>
          <Typography variant="body1">ExpressJS</Typography>
        </li>
        <li>
          <Typography variant="body1">React Router</Typography>
        </li>
        <li>
          <Typography variant="body1">Axios</Typography>
        </li>
        <li>
          <Typography variant="body1">ThemovieDB</Typography>
        </li>
        <li>
          <Typography variant="body1">JWT</Typography>
        </li>
      </ul>

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
          The project is open to contributions. If you would like to contribute,
          please fork the project on GitHub and submit a pull request.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" color="primary">
          Thank you for visiting!
        </Typography>
        <Typography variant="body1">
          I hope you enjoy this project. If you have any questions or
          suggestions, please feel free to contact me.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutPage;
