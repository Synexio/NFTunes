import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import VerifyArtist from "./VerifyArtist";

const ArtistManagement: React.FC = () => {
  const [showConfirmed, setShowConfirmed] = useState<boolean>(false);

  const handleToggle = () => {
    setShowConfirmed(!showConfirmed);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
        color: "white",
        padding: 4,
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ marginBottom: 1 }}>
        {showConfirmed ? "Confirmed Artists" : "Not Confirmed Artists"}
      </Typography>

      <Box sx={{ marginBottom: 2 }}>
        <Button
          variant="contained"
          onClick={handleToggle}
          sx={{
            backgroundColor: showConfirmed ? "gray" : "#b3b3b3",
            color: "white",
            "&:hover": {
              backgroundColor: showConfirmed ? "#b3b3b3" : "gray",
            },
          }}
        >
          {showConfirmed
            ? "Show Not Confirmed Artists"
            : "Show Confirmed Artists"}
        </Button>
      </Box>

      <VerifyArtist showConfirmed={showConfirmed} />
    </Box>
  );
};

export default ArtistManagement;
