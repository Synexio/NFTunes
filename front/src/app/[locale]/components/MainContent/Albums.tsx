import { Box, Grid, Typography } from "@mui/material";
import { musics } from "../../data/data";

interface AlbumsSectionProps {
  setId: (id: string) => void;
}

const AlbumsSection: React.FC<AlbumsSectionProps> = ({ setId }) => {
  // Get unique albums
  const uniqueAlbums = Array.from(
    new Set(musics.map((music) => music.album_img))
  );

  return (
    <Box sx={{ marginTop: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        All Albums
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: "flex-start" }}>
        {uniqueAlbums.map((albumImg, index) => {
          const music = musics.find((m) => m.album_img === albumImg);

          // Check if music is undefined
          if (!music) return null;

          return (
            <Grid item xs={6} sm={4} md={3} key={index}>
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
                onClick={() => setId(music.id)}
              >
                <img
                  src={albumImg}
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
          );
        })}
      </Grid>
    </Box>
  );
};

export default AlbumsSection;
