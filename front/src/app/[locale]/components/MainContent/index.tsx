import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Player } from "../Player";
import { toast } from "react-toastify";
import axios from "axios";

interface Music {
  _id: string;
  name: string;
  author: string;
  genre: string;
  audio: string;
  album_img: string;
  tokenId: number;
}

function MainContent() {
  const [_id, setId] = useState<string>("");
  const [isFull, setIsFull] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [musics, setMusics] = useState<Music[]>([]);

  const api = process.env.NEXT_PUBLIC_API_URL;

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch music data
  useEffect(() => {
    const fetchMusics = async () => {
      try {
        const response = await axios.get(`${api}/title/`);
        setMusics(response.data);
        console.log("Fetched music data:", response.data); // Log the fetched data
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch music data");
      }
    };

    fetchMusics();
  }, [api]);

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#ffffff",
        minHeight: "100vh",
        padding: 2,
        marginBottom: 30,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 4,
          width: "100%",
        }}
      >
        All Songs
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: "flex-start" }}>
        {musics
          .filter(
            (music) =>
              music.name.toLowerCase().includes(search.toLowerCase()) ||
              music.author.toLowerCase().includes(search.toLowerCase())
          )
          .map((music) => (
            <Grid item xs={6} sm={4} md={3} key={music._id}>
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
                onClick={() => setId(music._id)} // Set the selected music ID
              >
                <img
                  src={music.album_img}
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

      {_id && (
        <Player
          _id={_id}
          setId={setId}
          setIsFull={setIsFull}
          isFull={isFull}
          windowWidth={windowWidth}
        />
      )}
    </Box>
  );
}

export default MainContent;
