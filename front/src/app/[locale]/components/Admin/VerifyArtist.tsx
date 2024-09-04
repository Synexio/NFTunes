import React, { useState, useEffect } from "react";
import {
  Box,
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
import AdminGuard from "./AdminGuard";

interface Artist {
  _id: string;
  address: string;
  status: string;
}

interface User {
  firstname: string;
  lastname: string;
  email: string;
}

interface VerifyArtistProps {
  showConfirmed: boolean;
}

const api = process.env.NEXT_PUBLIC_API_URL;

const VerifyArtist: React.FC<VerifyArtistProps> = ({ showConfirmed }) => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [userDetails, setUserDetails] = useState<{ [key: string]: User }>({});
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const status = showConfirmed ? "active" : "inactive"; // Corrected status for inactive artists
        const response = await axios.get(
          `${api}/artist/search?status=${status}`
        );
        const allArtists = response.data;

        await fetchUserDetails(allArtists);

        setArtists(allArtists);
      } catch (error) {
        console.error("Error fetching artists:", error);
        toast.error("Error fetching artists");
      }
    };

    const fetchUserDetails = async (artists: Artist[]) => {
      const userDetailPromises = artists.map(async (artist) => {
        try {
          const response = await axios.get(
            `${api}/user/artist/${artist.address}`
          );
          return { [artist.address]: response.data };
        } catch (error) {
          console.error(
            `Error fetching user info for address ${artist.address}:`,
            error
          );
          return null;
        }
      });

      const userDetailResults = await Promise.all(userDetailPromises);
      const userDetailsMap: { [key: string]: User } = {};

      userDetailResults.forEach((userDetail) => {
        if (userDetail) {
          Object.assign(userDetailsMap, userDetail);
        }
      });

      setUserDetails(userDetailsMap);
    };

    fetchArtists();
  }, [showConfirmed]);

  const handleSelectArtist = (id: string) => {
    setSelectedArtists((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((artistId) => artistId !== id)
        : [...prevSelected, id]
    );
  };

  const handleConfirmArtists = async () => {
    try {
      toast.success("Admin enregistré !");
      const promises = selectedArtists.map((artistId) =>
        fetch(`${api}/artist/${artistId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "active" }),
        })
      );

      const responses = await Promise.all(promises);

      const allSuccessful = responses.every((response) => response.ok);

      if (allSuccessful) {
        toast.success("Artists confirmed successfully!");
        setArtists((prevArtists) =>
          prevArtists.filter((artist) => !selectedArtists.includes(artist._id))
        );
        setSelectedArtists([]);
      } else {
        toast.error("Failed to confirm some artists");
      }
    } catch (error) {
      console.error("Error confirming artists:", error);
      toast.error("Error confirming artists");
    }
  };
  return (
    <AdminGuard>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#121212",
          color: "white",
          padding: 4,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            overflowY: "auto", // Enable scrolling for the table container
            maxHeight: "400px",
            width: "100%",
            border: "1px solid #333",
          }}
        >
          <Table
            sx={{
              backgroundColor: "#1f1f1f",
              borderRadius: 2,
              width: "100%",
              tableLayout: "fixed",
            }}
          >
            <TableHead>
              <TableRow>
                {showConfirmed ??
                  <TableCell sx={{ color: "white", width: "50px" }}>
                    Select
                  </TableCell>
                }
                <TableCell sx={{ color: "white", width: "150px" }}>
                  Address
                </TableCell>
                <TableCell sx={{ color: "white", width: "100px" }}>
                  First Name
                </TableCell>
                <TableCell sx={{ color: "white", width: "100px" }}>
                  Last Name
                </TableCell>
                <TableCell sx={{ color: "white", width: "200px" }}>
                  Email
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {artists.map((artist) => {
                const userInfo = userDetails[artist.address] || {};
                return (
                  <TableRow key={artist._id}>
                    {showConfirmed ??
                      <TableCell>
                        <Checkbox
                          checked={selectedArtists.includes(artist._id)}
                          onChange={() => handleSelectArtist(artist._id)}
                          sx={{ color: "white" }}
                        />
                      </TableCell>
                    }
                    <TableCell
                      sx={{
                        color: "white",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {artist.address}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {userInfo.firstname || "N/A"}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {userInfo.lastname || "N/A"}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {userInfo.email}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>

        {!showConfirmed && (
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
              marginTop: 2,
            }}
          >
            Confirm Selected Artists
          </Button>
        )}
      </Box>
    </AdminGuard>
  );
};

export default VerifyArtist;
