// src/app/home/page.tsx
"use client";
import React, { useState } from "react";
import Layout from "../../../components/Layout";
import AddAdminPage from "../../../components/Admin/AddAdmin";
// import SearchPage from "../search";

const Home: React.FC = () => {
  // const [activePage, setActivePage] = useState<"home" | "search">("home"); // Manage active page state

  return (
    <Layout>
      <AddAdminPage />
    </Layout>
  );
};

export default Home;
