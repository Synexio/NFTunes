"use client"; // Use client-side rendering for this component
import React, { useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import Sidebar from "../Sidebar"; // Import Sidebar component
import Footer from "../Footer"; // Import Footer component

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activePage, setActivePage] = useState<"home">("home"); // Define active page state

  return (
    <Box>
      <Container maxWidth="lg" sx={{ display: "flex" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Sidebar setActivePage={setActivePage} /> {/* Sidebar */}
          </Grid>
          <Grid item xs={12} md={9}>
            {children} {/* Render child components */}
          </Grid>
        </Grid>
      </Container>
      <Footer /> {/* Footer */}
    </Box>
  );
};

export default Layout;
