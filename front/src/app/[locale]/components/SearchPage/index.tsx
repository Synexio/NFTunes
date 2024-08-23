// components/AlbumCard/SearchPage.tsx
"use client";
import { Box, Button, Typography, TextField, Grid } from "@mui/material";
import React, { useState, ChangeEvent } from "react";
import AudioPlayer from "../AudioPlayer";

// Define type for each song
interface Song {
  id: number;
  title: string;
  url: string;
  artist: string;
  // image?: string;
}

const SearchPage = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Song[]>([]);

  // Simulated music database (replace with actual API call)
  const musicDatabase: Song[] = [
    {
      id: 1,
      title: "Song One",
      url: "http://streaming.tdiradio.com:8000/house.mp3",
      artist: "Artist One",
      // image: "@public/logo.png",
    },
    {
      id: 2,
      title: "Song Two",
      url: "https://pixabay.com/fr/music/beats-velvet-sky-lofi-ambient-231924/",
      artist: "Artist Two",
      // image: "/path/to/album2.jpg",
    },
    {
      id: 3,
      title: "Another Song",
      url: "/music/song3.mp3",
      artist: "Artist Three",
      // image: "/path/to/album3.jpg",
    },
  ];

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);

    if (searchQuery.length > 0) {
      const filteredResults = musicDatabase.filter((song) =>
        song.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  return (
    <>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
          Search
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for artists, songs, or podcasts"
          InputProps={{
            style: {
              color: "white",
            },
          }}
          onChange={handleSearch}
          sx={{
            backgroundColor: "#333",
            borderRadius: 1,
            input: {
              color: "#b3b3b3",
            },
          }}
        />
        <Box>
          <Typography variant="h5" gutterBottom sx={{ marginTop: 5 }}>
            Results
          </Typography>
        </Box>
        <div>
          {results.length > 0 ? (
            <Grid container spacing={2}>
              {musicDatabase.map((track) => (
                <Grid item key={track.id}>
                  <AudioPlayer
                    url={track.url}
                    title={track.title}
                    artist={track.artist}
                    id={track.id} // image={track.image}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </Box>
    </>
  );
};

export default SearchPage;
