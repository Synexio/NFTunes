"use client";
import React from "react";
import TitleList from "../../../components/Artist/TitleList"; // The component that uses the context
import Layout from "../../../components/Layout";

const TitleById: React.FC<{ params: { id: string; locale: string } }> = ({
  params,
}) => {
  const id = params.id; // Keep id as a string, no need to convert

  return (
    <Layout>
      <TitleList _id={id} /> {/* Pass the id prop as a string */}
    </Layout>
  );
};

export default TitleById;
