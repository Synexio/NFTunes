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
import { useActiveAccount, useSendTransaction } from "thirdweb/react";
import { contractFactory as contract } from "../../context/contract";
import { prepareContractCall, sendTransaction } from "thirdweb";

const CreateAlbum: React.FC = () => {
  const [albumName, setAlbumName] = useState("");
  const [author, setAuthor] = useState("");
  const [albumImgFile, setAlbumImgFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const api = process.env.NEXT_PUBLIC_API_URL;
  const account = useActiveAccount();
  const { mutate: sendTransaction } = useSendTransaction();

  const handleAlbumImgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setAlbumImgFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!albumName || !author || !albumImgFile) {
      toast.error("Please fill out all fields and upload album cover.");
      return;
    }

    setLoading(true);
    // try {
    const add = prepareContractCall({
      contract,
      method:
        "function createAlbum(string memory name, string memory symbol, address admin,address staffContractAddress)",
      params: [
        "album",
        "alm",
        "0x6176d4666693933eF3a73ce38C28de54A611012D",
        "0x4BF9FEbb3BF18Ff5cdce8E8271e0752b9e4D62f9",
        // "https://ipfs.io/ipfs/QmZQv1",
      ],
    });
    sendTransaction(add);
    console.log("Prepared Contract Call:", add);
    //   const formData = new FormData();
    //   formData.append("name", albumName);
    //   formData.append("author", author);
    //   formData.append("img", albumImgFile);

    //   const url = `${api}/album/create`;
    //   const response = await axios.post(url, formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });

    //   if (response.status === 200) {

    //     toast.success("Admin enregistré !");
    //     toast.success("Album created successfully!");
    //     setAlbumName("");
    //     setAuthor("");
    //     setAlbumImgFile(null);
    //   } else {
    //     toast.error("An error occurred while creating the album.");
    //   }
    // } catch (error) {
    //   console.error("Error in handleSubmit:", error);
    //   toast.error("An error occurred during the process.");
    // } finally {
    //   setLoading(false);
    // }
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
          {loading ? "Adding..." : "Add Album"}
        </Button>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default CreateAlbum;
