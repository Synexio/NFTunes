// src/app/[locale]/player/[id]/page.tsx
"use client";
import React from "react";
import Layout from "../../components/Layout"; // Import your Layout component
import FullPlayer from "../../components/FullPlayer"; // Import your FullPlayer component

const PlayerPage: React.FC<{ params: { id: string; locale: string } }> = ({
  params,
}) => {
  return (
    <Layout>
      <FullPlayer params={params} /> {/* Pass params to FullPlayer */}
    </Layout>
  );
};

export default PlayerPage;
