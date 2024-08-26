"use client";
import React from "react";
import { AudioPlayerProvider } from "../../context/audio-player-context"; // Adjust the path as needed
import PlayerAudio from "../../components/Player/PlayerAudio"; // The component that uses the context
import Layout from "../../components/Layout";

const Play: React.FC<{ params: { id: string; locale: string } }> = ({
  params,
}) => {
  const id = parseInt(params.id); // Convert the id to a number
  return (
    <Layout>
      <AudioPlayerProvider>
        <PlayerAudio id={id} /> {/* Pass the id prop as a number */}
      </AudioPlayerProvider>
    </Layout>
  );
};

export default Play;
