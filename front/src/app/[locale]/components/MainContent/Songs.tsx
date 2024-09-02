import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import axios from "axios";

interface Music {
  name: string;
  author: string;
  genre: string;
  audio: string;
  album_img: string;
  id: string;
}

interface SongsSectionProps {
  setId: (id: string) => void;
}

const SongsSection: React.FC<SongsSectionProps> = ({ setId }) => {
  const api = process.env.NEXT_PUBLIC_API_URL;
  const [musics, setMusics] = useState<Music[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMusics = async () => {
      try {
        const response = await axios.get(`${api}/title/`);
        setMusics(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch music data");
      } finally {
        setLoading(false);
      }
    };

    fetchMusics();
  }, [api]);

  if (loading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  if (error) {
    return (
      <Typography variant="h6" color="error">
        {error}
      </Typography>
    );
  }

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        All Songs
      </Typography>

      <Grid container spacing={2} sx={{ justifyContent: "flex-start" }}>
        {musics.map((music) => (
          <Grid item xs={6} sm={4} md={3} key={music.id}>
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
              }}
              onClick={() => {
                setId(music.id); // Set the selected ID
              }}
            >
              <img
                src={`${api}${music.album_img}`}
                alt={music.name}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
              <Typography
                variant="subtitle1"
                sx={{ marginTop: 1, color: "#ffffff" }}
              >
                {music.name}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "#b3b3b3" }}>
                {music.author}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SongsSection;
