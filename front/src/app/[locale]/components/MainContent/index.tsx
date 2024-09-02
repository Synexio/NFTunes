import { useEffect, useState } from "react";
import { Box, Grid, Typography, InputBase, IconButton } from "@mui/material";
import { musics } from "../../data/data";
import { Player } from "../Player";
import { Menu } from "../../svgs";

function MainContent() {
  const [id, setId] = useState<string>("");
  const [isFull, setIsFull] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isSidebar, setIsSidebar] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        {isSearch ? (
          <>
            {windowWidth <= 820 && (
              <IconButton onClick={() => setIsSidebar(!isSidebar)}>
                <Menu />
              </IconButton>
            )}
            <InputBase
              sx={{
                backgroundColor: "#f0f0f0",
                padding: "0 10px",
                borderRadius: 1,
                width: "100%",
              }}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
              placeholder="Search"
            />
            <Typography variant="h6" sx={{ marginLeft: 2 }}>
              Search for music name or author
            </Typography>
          </>
        ) : (
          <>
            {windowWidth <= 820 && (
              <IconButton onClick={() => setIsSidebar(!isSidebar)}>
                <Menu />
              </IconButton>
            )}
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
          </>
        )}
      </Box>

      <Grid container spacing={2} sx={{ justifyContent: "flex-start" }}>
        {musics
          .filter(
            (music) =>
              music.name.toLowerCase().includes(search.toLowerCase()) ||
              music.author.toLowerCase().includes(search.toLowerCase())
          )
          .map((music) => (
            <Grid item xs={6} sm={4} md={3} key={music.id}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  backgroundColor: "#1e1e1e", // Slightly lighter than sidebar for contrast
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
                  },
                }}
                onClick={() => setId(music.id)}
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

      <Player
        id={id}
        setId={setId}
        setIsFull={setIsFull}
        isFull={isFull}
        windowWidth={windowWidth}
      />
    </Box>
  );
}

export default MainContent;
