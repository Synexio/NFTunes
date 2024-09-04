// components/AlbumCard/SearchPage.tsx
"use client";
import { Box, Typography, TextField, Grid } from "@mui/material";
import React, { useState, ChangeEvent } from "react";
import { musics } from "../../data/data";
import { Player } from "../Player";
import {MusicAlbum, Music} from "@/interfaces"; // Ensure this is the correct path
import { useRouter } from "next/navigation";

const SearchPage = () => {
  const [query, setQuery] = useState<string>("");
  const [_id, setId] = useState<string>("");
  const [isFull, setIsFull] = useState<boolean>(false);
  const router = useRouter();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filteredResults = musics.filter(
    (music) =>
      music.name.toLowerCase().includes(query.toLowerCase()) ||
      music.author.toLowerCase().includes(query.toLowerCase())
  );

    const handleAlbumClick = (album: MusicAlbum) => {
        // Manually constructing the URL with query parameters
        const query = new URLSearchParams({
            name: album.name,
            _id: album._id,
            author: album.author,
            img: album.img,
        }).toString();

        router.push(`/album/title/${album._id}?${query}`);
    };

  return (
    <Box
      sx={{
        padding: 3,
        backgroundColor: "#121212",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        marginBottom: 30,
      }}
    >
      <Typography variant="h4" gutterBottom>
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
      <div style={{ flexGrow: 1 }}>
        {filteredResults.length > 0 ? (
          <Grid container spacing={2}>
            {filteredResults.map((music) => (
              <Grid item xs={12} sm={6} md={4} key={music.id}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    backgroundColor: "#1e1e1e",
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    "&:hover": {
                      boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
                    },
                    padding: 2,
                  }}
                  onClick={() => setId(music.id)}
                >
                  <img
                    src={music.album_img}
                    alt={music.name}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />
                  <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
                    {music.name}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: "#b3b3b3" }}>
                    {music.author}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            No results found.
          </Typography>
        )}
      </div>
        {_id &&
          <Player
            _id={_id}
            setId={setId}
            setIsFull={setIsFull}
            isFull={isFull}
            windowWidth={window.innerWidth}
          />
        }
    </Box>
  );
};

export default SearchPage;
