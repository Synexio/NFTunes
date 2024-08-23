import { Box, Grid } from "@mui/material";
import ArtistCard from "../ArtistCard";
import AlbumCard from "../AlbumCard";
import SectionHeader from "../SectionHeader";

const popularArtists = [
  { image: "/path/to/artist1.jpg", name: "GIMS", role: "Artist" },
  { image: "/path/to/artist2.jpg", name: "Jul", role: "Artist" },
  { image: "/path/to/artist3.jpg", name: "Ninho", role: "Artist" },
  { image: "/path/to/artist4.jpg", name: "David Guetta", role: "Artist" },
  { image: "/path/to/artist5.jpg", name: "KeBlack", role: "Artist" },
  { image: "/path/to/artist6.jpg", name: "Dadju", role: "Artist" },
];

const popularAlbums = [
  {
    image: "/path/to/album1.jpg",
    title: "HIT ME HARD AND SOFT",
    artist: "Billie Eilish",
  },
  { image: "/path/to/album2.jpg", title: "SPIDER", artist: "GIMS, DYSTINCT" },
  { image: "/path/to/album3.jpg", title: "Imagine", artist: "Carbonne" },
  { image: "/path/to/album4.jpg", title: "Pyramide", artist: "Werenoi" },
  { image: "/path/to/album5.jpg", title: "SOIS PAS TIMIDE", artist: "GIMS" },
  { image: "/path/to/album6.jpg", title: "Destin", artist: "Ninho" },
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
