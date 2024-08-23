// src/app/home/page.tsx
"use client";
import React, { useState } from "react";
import Layout from "../components/Layout";
import SearchPage from "../components/SearchPage";
// import SearchPage from "../search";

const Home: React.FC = () => {
  const [activePage, setActivePage] = useState<"home" | "search">("home"); // Manage active page state

  return (
    <Layout>
      <SearchPage />
      {/* {activePage === "home" ? (
        <MainContent /> // Show MainContent if activePage is "home"
      ) : (
        <SearchPage onBackToHome={() => setActivePage("home")} /> // Show SearchPage if activePage is "search"
      )} */}
    </Layout>
  );
};

export default Home;
