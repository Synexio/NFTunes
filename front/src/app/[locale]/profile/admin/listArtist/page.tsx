// src/app/home/page.tsx
"use client";
import React from "react";
import Layout from "../../../components/Layout";
import ConfirmArtistRegister from "@/app/[locale]/components/Admin/AddArtist";

const Home: React.FC = () => {
  return (
    <Layout>
      <ConfirmArtistRegister />
    </Layout>
  );
};

export default Home;
