import React, { useState } from "react";
import { Typography } from "@mui/material";
import Container from "../components/common/Container.jsx";

const AboutPage = () => {
  const [currentDateTime] = useState(new Date());

  return (
    <Container>
      <Typography variant="h4">About</Typography>
      <Typography>
        This project is a Netflix clone built using React and Material UI. It
        uses the TMDB API to fetch data about movies and TV shows, and it allows
        users to browse, search, and watch content.
      </Typography>
      <Typography>
        The project was built to learn more about React and Material UI, and to
        practice using some of the features of these libraries, such as:
      </Typography>
      <ul>
        <li>Custom hooks</li>
        <li>Context</li>
        <li>Lazy loading</li>
        <li>Portals</li>
        <li>Forwarded refs</li>
        <li>Higher-order components</li>
        <li>Custom themes</li>
        <li>RTK</li>
      </ul>
      <Typography>
        The project is still under development, but it is already functional and
        can be used to watch movies and TV shows.
      </Typography>
      <Typography>
        <b>Features</b>
      </Typography>
      <ul>
        <li>A home page with a carousel of featured movies and TV shows</li>
        <li>A search bar for finding content</li>
        <li>A grid of genres for browsing content</li>
        <li>Detail pages for individual movies and TV shows</li>
        <li>The ability to watch trailers</li>
        <li>The ability to add movies and TV shows to a watchlist</li>
      </ul>
      <Typography>
        <b>Technical Details</b>
      </Typography>
      <ul>
        <li>React</li>
        <li>Material UI</li>
        <li>TypeScript</li>
        <li>TMDB API</li>
      </ul>
      <Typography>
        <b>Contributing</b>
      </Typography>
      <Typography>
        The project is open to contributions. If you would like to contribute,
        please fork the project on GitHub and submit a pull request.
      </Typography>
      <Typography>
        <b>Thank you for visiting!</b>
      </Typography>
      <Typography>
        I hope you enjoy this project. If you have any questions or suggestions,
        please feel free to contact me.
      </Typography>
      <Typography>
        <b>Current Time:</b> {currentDateTime.toLocaleString()}
      </Typography>
    </Container>
  );
};

export default AboutPage;
