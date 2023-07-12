import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import React from "react";

function MainLayout() {
  return (
    <>
      {/* global loading */}
      {/* global loading */}

      {/* login modal */}
      {/* login modal */}

      <Box display="flex" minHeight="100vh">
        {/* header */}
        {/* header */}

        {/* Main */}
        <Box component="main" flexGrow={1} overflow="hidden" minHeight="100vh">
          <Outlet />
        </Box>

        {/* Main */}
      </Box>

      {/* footer */}
      {/* footer  */}
    </>
  );
}

export default MainLayout;
