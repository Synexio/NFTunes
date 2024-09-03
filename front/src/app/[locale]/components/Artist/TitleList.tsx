import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress,
  Button,
} from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation"; // Import useRouter
import axios from "axios";
import { Player } from "../Player"; // Adjust the import according to your project structure

interface Title {
  _id: string;
  name: string;
  author: string;
  genre: string;
  album_img: string;
}

interface TitleListProps {
  _id: string; // The album id
}

const TitleList: React.FC<TitleListProps> = ({ _id }) => {
  const [titles, setTitles] = useState<Title[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedMusicId, setSelectedMusicId] = useState<string>(""); // State to store the selected music ID
  const [isFull, setIsFull] = useState<boolean>(false); // Full-screen state
  const searchParams = useSearchParams();
  const router = useRouter(); // Use the router for navigation
  const api = process.env.NEXT_PUBLIC_API_URL; // Ensure this is set in your .env

  // Extract query parameters
  const name = searchParams.get("name") || "Album";
  const author = searchParams.get("author") || "Unknown";
  const img = searchParams.get("img") || "";

  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const response = await axios.get(`${api}/album/${_id}`); // Fetch album data
        console.log("API Response:", response.data);

        // Get the array of title IDs
        const titleIds = response.data.titles; // This should be an array of title IDs
        console.log("Title IDs:", titleIds);

        // Fetch details for each title concurrently
        const titlesData = await Promise.all(
          titleIds.map(async (titleId: string) => {
            const titleResponse = await axios.get(`${api}/title/${titleId}`);
            return titleResponse.data; // Return the title data
          })
        );

        setTitles(titlesData); // Update the titles state
      } catch (error) {
        console.error("Error fetching titles:", error);
      } finally {
        setLoading(false);
      }
    };

    if (_id) {
      fetchTitles();
    }
  }, [_id, api]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#121212",
          color: "white",
        }}
      >
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "white",
        padding: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between", // Space between elements
          alignItems: "center",
          marginBottom: "16px", // Space below the album details
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {img && (
            <img
              src={img as string}
              alt={name as string}
              style={{
                width: "30%",
                height: "auto",
                borderRadius: "8px",
                marginRight: "16px", // Space between image and text
              }}
            />
          )}
          <Box>
            <Typography variant="h4" gutterBottom>
              {name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              by {author}
            </Typography>
          </Box>
        </Box>
        {/* Add Song Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginLeft: "auto", // Push the button to the right
          }}
          onClick={() => {
            router.push(`/profile/artist/createSong?albumId=${_id}`); // Navigate to AddSong page with album ID
          }}
        >
          + Add Song
        </Button>
      </Box>

      <Typography variant="h5" gutterBottom>
        Titles
      </Typography>
      <List>
        {titles.map((title) => (
          <React.Fragment key={title._id}>
            <ListItem
              alignItems="flex-start"
              button
              onClick={() => setSelectedMusicId(title._id)} // Set the selected music ID when clicked
            >
              <ListItemText
                primary={title.name}
                secondary={`Author: ${title.author} | Genre: ${title.genre}`}
                sx={{
                  "& .MuiListItemText-primary": { color: "white" },
                  "& .MuiListItemText-secondary": { color: "#b3b3b3" },
                }}
              />
            </ListItem>
            <Divider
              component="li"
              sx={{ backgroundColor: "white", height: 2 }}
            />
          </React.Fragment>
        ))}
      </List>

      {/* Include the Player component at the bottom */}
      {selectedMusicId && (
        <Player
          _id={selectedMusicId}
          setId={setSelectedMusicId}
          setIsFull={setIsFull}
          isFull={isFull}
          windowWidth={window.innerWidth} // Optionally pass the window width
        />
      )}
    </Box>
  );
};

export default TitleList;
