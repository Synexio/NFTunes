// components/AlbumCard/SearchPage.tsx
"use client";
import { Box, Button, Typography, TextField, Grid } from "@mui/material";
import React, { useState, ChangeEvent } from "react";
import AudioPlayer from "../AudioPlayer";
import { tracks, Song } from "../../data/tracks";

const SearchPage = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Song[]>([]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);

    if (searchQuery.length > 0) {
      const filteredResults = tracks.filter((song) =>
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
              {tracks.map((track) => (
                <Grid item key={track.id}>
                  <AudioPlayer
                    src={track.src}
                    title={track.title}
                    author={track.author}
                    id={track.id} // image={track.image}
                    thumbnail={track.thumbnail}
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
