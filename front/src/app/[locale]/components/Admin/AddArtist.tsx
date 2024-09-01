import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
} from "@mui/material";
import { toast } from "react-toastify";
import axios from "axios";

interface Artist {
  _id: string;
  address: string;
  firstname: string;
  lastname: string;
  email: string;
  status: string;
  claimCount: number;
  currentReward: string;
}

const api = process.env.NEXT_PUBLIC_API_URL; // Your API URL

const ConfirmArtistRegister: React.FC = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get(`${api}/artist/`, {
          params: { status: "inactif" },
        });
        const allArtists = response.data;

        const inactiveArtists = allArtists.filter(
          (artist: Artist) => artist.status === "inactive"
        );
        console.log(inactiveArtists);

        setArtists(inactiveArtists);
      } catch (error) {
        console.error("Error fetching artists:", error);
        toast.error("Error fetching artists");
      }
    };

    fetchArtists();
  }, []);

  const handleSelectArtist = (id: string) => {
    setSelectedArtists((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((artistId) => artistId !== id)
        : [...prevSelected, id]
    );
  };

  const handleConfirmArtists = async () => {
    try {
      const response = await fetch(`${api}/artist/confirm`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ artistIds: selectedArtists }),
      });

      if (response.ok) {
        toast.success("Artists confirmed successfully!");
        setArtists((prevArtists) =>
          prevArtists.filter((artist) => !selectedArtists.includes(artist._id))
        );
        setSelectedArtists([]);
      } else {
        toast.error("Failed to confirm artists");
      }
    } catch (error) {
      console.error("Error confirming artists:", error);
      toast.error("Error confirming artists");
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
        Confirm Artists
      </Typography>

      <Table
        sx={{
          backgroundColor: "#1f1f1f",
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          width: "100%",
          maxWidth: 800,
          marginBottom: 4,
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "white" }}>Select</TableCell>
            <TableCell sx={{ color: "white" }}>Address</TableCell>
            <TableCell sx={{ color: "white" }}>First Name</TableCell>
            <TableCell sx={{ color: "white" }}>Last Name</TableCell>
            <TableCell sx={{ color: "white" }}>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {artists.map((artist) => (
            <TableRow key={artist._id}>
              <TableCell>
                <Checkbox
                  checked={selectedArtists.includes(artist._id)}
                  onChange={() => handleSelectArtist(artist._id)}
                  sx={{ color: "white" }}
                />
              </TableCell>
              <TableCell sx={{ color: "white" }}>{artist.address}</TableCell>
              <TableCell sx={{ color: "white" }}>{artist.firstname}</TableCell>
              <TableCell sx={{ color: "white" }}>{artist.lastname}</TableCell>
              <TableCell sx={{ color: "white" }}>{artist.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button
        variant="contained"
        onClick={handleConfirmArtists}
        disabled={selectedArtists.length === 0}
        sx={{
          backgroundColor: "#b3b3b3",
          color: "white",
          "&:hover": {
            backgroundColor: "gray",
          },
        }}
      >
        Confirm Selected Artists
      </Button>
    </Box>
  );
};

export default ConfirmArtistRegister;
