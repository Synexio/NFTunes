import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import ImageIcon from "@mui/icons-material/Image";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";

const AddSong: React.FC = () => {
  const [songName, setSongName] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [albumImgFile, setAlbumImgFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const api = process.env.NEXT_PUBLIC_API_URL;

  const handleAudioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setAudioFile(event.target.files[0]);
    }
  };

  const handleAlbumImgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setAlbumImgFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!songName || !author || !genre || !audioFile || !albumImgFile) {
      toast.error(
        "Please fill out all fields and upload both audio and album cover files."
      );
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", songName);
      formData.append("author", author);
      formData.append("genre", genre);
      formData.append("audio", audioFile);
      formData.append("album_img", albumImgFile);

      const url = `${api}/title/create`;
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        toast.success("Song created successfully!");
        console.log("Song ID:", response.data._id);
        // Reset form fields
        setSongName("");
        setAuthor("");
        setGenre("");
        setAudioFile(null);
        setAlbumImgFile(null);
      } else {
        toast.error("An error occurred while creating the song.");
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      toast.error("An error occurred during the process.");
    } finally {
      setLoading(false);
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
        Add New Song
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
          label="Song Name"
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
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
          label="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
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
          label="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
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
          <InputLabel sx={{ color: "#888" }}>Upload Audio File</InputLabel>
          <OutlinedInput
            type="file"
            onChange={handleAudioChange}
            startAdornment={
              <InputAdornment position="start">
                <AudiotrackIcon sx={{ color: "white" }} />
              </InputAdornment>
            }
            inputProps={{ accept: "audio/*" }}
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

        <Box sx={{ marginBottom: 3 }}>
          <InputLabel sx={{ color: "#888" }}>Upload Album Cover</InputLabel>
          <OutlinedInput
            type="file"
            onChange={handleAlbumImgChange}
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
          disabled={loading}
          sx={{
            backgroundColor: loading ? "#ccc" : "#b3b3b3",
            color: "white",
            "&:hover": {
              backgroundColor: "gray",
            },
          }}
        >
          {loading ? "Adding..." : "Add Song"}
        </Button>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default AddSong;
