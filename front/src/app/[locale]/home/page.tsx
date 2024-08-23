"use client";
import { Box, Container, Grid } from "@mui/material";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import SearchPage from "../SearchPage";
import Footer from "../components/Footer";

const Home = () => {
  const [activePage, setActivePage] = useState<"home" | "search">("home");
  return (
    <Box>
      {/* <Header /> */}
      <Container maxWidth="lg" sx={{ display: "flex" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Sidebar setActivePage={setActivePage} />
          </Grid>
          <Grid item xs={12} md={9}>
            {activePage === "home" ? <MainContent /> : <SearchPage />}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;
