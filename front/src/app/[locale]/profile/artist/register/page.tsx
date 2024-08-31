// src/app/home/page.tsx
"use client";
import React from "react";
import Layout from "../../../components/Layout";
import RegisterArtist from "@/app/[locale]/components/Artist/Register";

const Home: React.FC = () => {
  return (
    <Layout>
      <RegisterArtist />
    </Layout>
  );
};

export default Home;
