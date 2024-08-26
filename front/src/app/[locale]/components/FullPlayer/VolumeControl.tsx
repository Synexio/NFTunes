// src/components/VolumeControl.tsx
import React, { useEffect } from "react";
import { IconButton, Slider, Box } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (newVolume: number) => void;
  isMuted: boolean;
  onMuteToggle: () => void;
}

const VolumeControl: React.FC<VolumeControlProps> = ({
  volume,
  onVolumeChange,
  isMuted,
  onMuteToggle,
}) => {
  const handleVolumeChange = (event: Event, newValue: number | number[]) => {
    onVolumeChange(newValue as number);
  };

  return (
    <Box sx={{ marginTop: 2, display: "flex", alignItems: "center" }}>
      <IconButton onClick={onMuteToggle}>
        {isMuted ? (
          <VolumeOffIcon fontSize="large" />
        ) : (
          <VolumeUpIcon fontSize="large" />
        )}
      </IconButton>
      <Slider
        value={isMuted ? 0 : volume}
        onChange={handleVolumeChange}
        min={0}
        max={100}
        sx={{ width: 200, marginLeft: 1 }}
      />
    </Box>
  );
};

export default VolumeControl;
