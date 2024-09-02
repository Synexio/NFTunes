import { useEffect, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import axios from "axios";
import { Player } from "../Player";
import { Menu } from "../../svgs";
import SongsSection from "./Songs";
import AlbumsSection from "./Albums";

function MainContent() {
  const [id, setId] = useState<string>("");
  const [isFull, setIsFull] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isSidebar, setIsSidebar] = useState<boolean>(false);
  const [musics, setMusics] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const api = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch all music titles
  useEffect(() => {
    const fetchMusics = async () => {
      setLoading(true);
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
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        {windowWidth <= 820 && (
          <IconButton onClick={() => setIsSidebar(!isSidebar)}>
            <Menu />
          </IconButton>
        )}
        <Typography variant="h4" sx={{ fontWeight: "bold", width: "100%" }}>
          Music Library
        </Typography>
      </Box>

      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}

      <SongsSection setId={setId} />

      {/* Pass the music array to the Player component */}
      <Player
        id={id}
        setId={setId}
        setIsFull={setIsFull}
        isFull={isFull}
        windowWidth={windowWidth}
        musics={musics}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
      />
    </Box>
  );
}

export default MainContent;
