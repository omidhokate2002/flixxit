import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import React from "react";
import GlobalLoading from "../common/GlobalLoading.jsx";
import Footer from "../common/Footer.jsx";
import Topbar from "../common/Topbar.jsx";
import AuthModal from "../common/AuthModal.jsx";

function MainLayout() {
  return (
    <>
      {/* global-loading */}
      <GlobalLoading />
      {/* global-loading */}

      {/* login modal */}
      <AuthModal />
      {/* login modal */}

      <Box display="flex" minHeight="100vh">
        {/* header */}
        <Topbar />
        {/* header */}

        {/* Main */}
        <Box component="main" flexGrow={1} overflow="hidden" minHeight="100vh">
          <Outlet />
        </Box>
        {/* Main */}
      </Box>

      {/* footer */}
      <Footer />
      {/* footer  */}
    </>
  );
}

export default MainLayout;
