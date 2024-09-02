"use client";
import React from "react";
import Layout from "../../../components/Layout";
import AddAdminPage from "../../../components/Admin/AddAdmin";

const Home: React.FC = () => {
  return (
    <Layout>
      <AddAdminPage />
    </Layout>
  );
};

export default Home;
