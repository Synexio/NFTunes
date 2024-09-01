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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useActiveAccount } from "thirdweb/react";

import axios from "axios";
import ImageIcon from "@mui/icons-material/Image";
import { prepareContractCall } from "thirdweb";
import { contract } from "../../context/contract";
import AddIcon from "@mui/icons-material/Add";

const AlbumPage: React.FC = () => {
  const account = useActiveAccount();

  const [albumName, setAlbumName] = useState("");
  const [albumDescription, setAlbumDescription] = useState("");
  // const [albumCover, setAlbumCover] = useState<File | null>(null);
  const api = process.env.NEXT_PUBLIC_API_URL;

  // const handleCoverChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files && event.target.files.length > 0) {
  //     setAlbumCover(event.target.files[0]);
  //   }
  // };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const requestData = {
        name: albumName,
        description: albumDescription,
      };

      const url = `${api}/album/create`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data._id);

        // Fetch the current artist data to get the existing albums
        // const artistResponse = await axios.get(
        //   `${api}/artist/address/${account?.address}`
        // );
        // const artist = artistResponse.data;

        // // Prepare the updated albums array
        // const updatedAlbums = [...artist.album, data._id]; // Add the new album ID to the existing albums array

        // Send the PUT request to update the artist's albums
        const update = await axios.put(
          `${api}/artist/address/${account?.address}`,
          {
            albums: [data._id.toString()], // Update with the new albums array
          }
        );
        // if (update.ok) {
        toast.success("Album created and artist updated!");
        // }
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      toast.error("An error occurred during the process.");
    }
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

        {/* <Box sx={{ marginBottom: 3 }}>
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
        </Box> */}

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
