import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import { useActiveAccount } from "thirdweb/react";
import "react-toastify/dist/ReactToastify.css";

const Register: React.FC = () => {
  const account = useActiveAccount();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const api = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const artistData = {
        address: account?.address as string,
        claimCount: 0,
        status: "inactive",
        currentReward: "none",
        // album: [""],
      };
      const urlArtist = `${api}/artist/create`;

      const responseArtist = await fetch(urlArtist, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(artistData),
      });
      if (responseArtist.ok) {
        const userData = {
          address: account?.address as string,
          lastname: lastname,
          firstname: firstname,
          email: email,
          role: "artist",
        };
        const urlUser = `${api}/user/create`;

        const response = await fetch(urlUser, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        if (response.ok) {
          toast.success("Artist enregistré !");
        } else if (response.status === 409) {
          toast.error("Artist already exists!");
        }
      } else if (responseArtist.status === 409) {
        toast.error("Artist already exists!");
      }
    } catch (error) {
      console.error("Error registering artist", error);
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
        I'm a new RISING STAR 💫
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
          label="Firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          sx={textFieldStyles}
          InputProps={{
            style: { color: "white" },
          }}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          sx={textFieldStyles}
          InputProps={{
            style: { color: "white" },
          }}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={textFieldStyles}
          InputProps={{
            style: { color: "white" },
          }}
        />
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
          Register Artist
        </Button>
      </Box>
      <ToastContainer />
    </Box>
  );
};

const textFieldStyles = {
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
};

export default Register;
