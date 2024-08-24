// pages/album.tsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import AddIcon from "@mui/icons-material/Add";

const AlbumPage: React.FC = () => {
  const [albumName, setAlbumName] = useState("");
  const [albumDescription, setAlbumDescription] = useState("");
  const [albumCover, setAlbumCover] = useState<File | null>(null);

  const handleCoverChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setAlbumCover(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
    console.log("Album Name:", albumName);
    console.log("Album Description:", albumDescription);
    console.log("Album Cover:", albumCover);
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
      <Typography variant="h4" gutterBottom>
        Create New Album
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          maxWidth: 600,
          backgroundColor: "#1f1f1f",
          padding: 4,
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          label="Album Name"
          value={albumName}
          onChange={(e) => setAlbumName(e.target.value)}
          sx={{
            marginBottom: 3,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#333",
              },
              "&:hover fieldset": {
                borderColor: "#555",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#888",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#fff",
            },
          }}
          InputProps={{
            style: { color: "white" },
          }}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Album Description"
          multiline
          rows={4}
          value={albumDescription}
          onChange={(e) => setAlbumDescription(e.target.value)}
          sx={{
            marginBottom: 3,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#333",
              },
              "&:hover fieldset": {
                borderColor: "#555",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#888",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#fff",
            },
          }}
          InputProps={{
            style: { color: "white" },
          }}
        />

        <Box sx={{ marginBottom: 3 }}>
          <InputLabel sx={{ color: "#888" }}>Album Cover</InputLabel>
          <OutlinedInput
            type="file"
            onChange={handleCoverChange}
            startAdornment={
              <InputAdornment position="start">
                <ImageIcon sx={{ color: "white" }} />
              </InputAdornment>
            }
            inputProps={{ accept: "image/*" }}
            sx={{
              width: "100%",
              color: "white",
              borderColor: "#333",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#333",
                },
                "&:hover fieldset": {
                  borderColor: "#555",
                },
              },
            }}
          />
        </Box>

        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{
            backgroundColor: "#b3b3b3",
            color: "white",
            "&:hover": {
              backgroundColor: "gray",
            },
          }}
        >
          Create Album
        </Button>
      </Box>

      {/* <Button
        variant="outlined"
        startIcon={<AddIcon />}
        sx={{
          marginTop: 4,
          color: "#1db954",
          borderColor: "#1db954",
          "&:hover": {
            backgroundColor: "#1ed760",
            borderColor: "#1ed760",
            color: "white",
          },
        }}
      >
        Add Song to Album
      </Button> */}
    </Box>
  );
};

export default AlbumPage;
