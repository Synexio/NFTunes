// src/app/home/page.tsx
"use client";
import React from "react";
import Layout from "../../../components/Layout";
import ArtistManagement from "@/app/[locale]/components/Admin/ArtistManagement";

const Home: React.FC = () => {
  return (
    <Layout>
      <ArtistManagement />
    </Layout>
  );
};

export default Home;
