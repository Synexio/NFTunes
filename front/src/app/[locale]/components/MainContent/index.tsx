import { Box, Grid } from "@mui/material";
import ArtistCard from "../ArtistCard";
import AlbumCard from "../AlbumCard";
import SectionHeader from "../SectionHeader";

const popularArtists = [
  { image: "", name: "GIMS", role: "Artist" },
  { image: "", name: "Jul", role: "Artist" },
  { image: "", name: "Ninho", role: "Artist" },
  { image: "", name: "David Guetta", role: "Artist" },
  { image: "", name: "KeBlack", role: "Artist" },
  { image: "", name: "Dadju", role: "Artist" },
];

const popularAlbums = [
  {
    image: "",
    title: "HIT ME HARD AND SOFT",
    artist: "Billie Eilish",
  },
  { image: "", title: "SPIDER", artist: "GIMS, DYSTINCT" },
  { image: "", title: "Imagine", artist: "Carbonne" },
  { image: "", title: "Pyramide", artist: "Werenoi" },
  { image: "", title: "SOIS PAS TIMIDE", artist: "GIMS" },
  { image: "", title: "Destin", artist: "Ninho" },
];

const MainContent = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <SectionHeader title="Popular artists" />
      <Grid container spacing={2} sx={{ marginBottom: 4 }}>
        {popularArtists.map((artist, index) => (
          <Grid item key={index}>
            <ArtistCard {...artist} />
          </Grid>
        ))}
      </Grid>

      <SectionHeader title="Popular albums" />
      <Grid container spacing={2} sx={{ marginBottom: 4 }}>
        {popularAlbums.map((album, index) => (
          <Grid item key={index}>
            <AlbumCard {...album} />
          </Grid>
        ))}
      </Grid>

      {/* Repeat similar structure for Popular Radio section */}
      {/* Add additional sections as needed */}
    </Box>
  );
};

export default MainContent;
