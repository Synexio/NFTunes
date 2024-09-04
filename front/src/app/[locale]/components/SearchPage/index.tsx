"use client";
import { Box, Typography, TextField, Grid } from "@mui/material";
import React, { useState, ChangeEvent, useEffect } from "react";
import { Player } from "../Player";
import { MusicAlbum, Music } from "@/interfaces";
import { useRouter } from "next/navigation";
import axios from "axios";

const SearchPage = () => {
  const [query, setQuery] = useState<string>("");
  const [_id, setId] = useState<string>("");
  const [isFull, setIsFull] = useState<boolean>(false);
  const [filteredResults, setFilteredResults] = useState<Music[]>([]);
  const router = useRouter();
  const api = process.env.NEXT_PUBLIC_API_URL;

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    const fetchMusics = async () => {
      try {
        const titlesResponse = await axios.get(`${api}/title`);
        const albumsResponse = await axios.get(`${api}/album`);

        // Combine titles and albums into one array
        const combinedResults = [
          ...titlesResponse.data.map((item: any) => ({
            _id: item._id,
            name: item.name,
            author: item.author,
            album_img: item.album_img,
            type: "title", // you can add a type to distinguish between title and album
          })),
          // ...albumsResponse.data.map((item: any) => ({
          //   _id: item._id,
          //   name: item.name,
          //   author: item.author,
          //   img: item.img,
          //   type: "album", // you can add a type to distinguish between title and album
          // })),
        ];

        setFilteredResults(combinedResults);
      } catch (error) {
        console.error("Error fetching musics:", error);
      }
    };

    fetchMusics();
  }, [api]);

  const filteredData = filteredResults.filter(
    (music) =>
      music.name.toLowerCase().includes(query.toLowerCase()) ||
      music.author.toLowerCase().includes(query.toLowerCase())
  );

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
        {filteredData.length > 0 ? (
          <Grid container spacing={2}>
            {filteredData.map((music) => (
              <Grid item xs={12} sm={6} md={4} key={music._id}>
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
                  onClick={() => setId(music._id)}
                >
                  <img
                    src={music.album_img}
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
      {_id && (
        <Player
          _id={_id}
          setId={setId}
          setIsFull={setIsFull}
          isFull={isFull}
          windowWidth={window.innerWidth}
        />
      )}
    </Box>
  );
};

export default SearchPage;
