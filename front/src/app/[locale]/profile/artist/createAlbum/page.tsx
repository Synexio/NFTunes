"use client";
import React from "react";
import Layout from "../../../components/Layout";
import CreateAlbum from "../../../components/Artist/CreateAlbum";

const Home: React.FC = () => {
  return (
    <Layout>
      <CreateAlbum />
    </Layout>
  );
};

export default Home;
