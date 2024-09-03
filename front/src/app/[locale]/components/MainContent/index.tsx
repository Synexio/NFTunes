import { useEffect, useState } from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import { MusicAlbum, Music } from "@/interfaces";
import { useRouter } from "next/navigation"; // Ensure you're using the right import
import axios from "axios";
import { Player } from "../Player";
import { toast } from "react-toastify";

function MainContent() {
  const [_id, setId] = useState<string>("");
  const [isFull, setIsFull] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [musics, setMusics] = useState<Music[]>([]);
  const [albums, setAlbums] = useState<MusicAlbum[]>([]);
  const router = useRouter();

  const api = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchMusics = async () => {
      try {
        const response = await axios.get(`${api}/title/`);
        setMusics(response.data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch music data");
      }
    };
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(`${api}/album/`);
        setAlbums(response.data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch music data");
      }
    };
    fetchAlbums();
    fetchMusics();
  }, [api]);

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
        Musics Library
      </Typography>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: 4, width: "100%" }}
      >
        Songs
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
                onClick={() => setId(music._id)}
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
      <Divider
        sx={{ margin: "50px", backgroundColor: "white", height: "2px" }}
      />
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: 7, width: "100%" }}
      >
        Albums
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: "flex-start" }}>
        {albums
          .filter(
            (album) =>
              album.name.toLowerCase().includes(search.toLowerCase()) ||
              album.author.toLowerCase().includes(search.toLowerCase())
          )
          .map((album) => (
            <Grid item xs={6} sm={4} md={3} key={album._id}>
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
                onClick={() => handleAlbumClick(album)}
              >
                <img
                  src={album.img}
                  alt={album.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ marginTop: 1, color: "#ffffff" }}
                >
                  {album.name}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#b3b3b3" }}>
                  {album.author}
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
