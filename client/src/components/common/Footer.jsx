import { Paper, Stack } from "@mui/material";
import React from "react";
import Container from "./Container";
import Logo from "./Logo";

const Footer = () => {
  return (
    <Container>
      <Paper square={true} sx={{ backgroundImage: "unset", padding: "0.5rem" }}>
        <Stack
          alignItems="center"
          justifyContent="center" // Center horizontally and vertically
          direction={{ xs: "column", md: "row " }}
          sx={{ height: "max-content" }}
        >
          <Logo />
        </Stack>
      </Paper>
    </Container>
  );
};

export default Footer;
