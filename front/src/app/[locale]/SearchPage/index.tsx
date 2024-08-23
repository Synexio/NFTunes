import { Box, Typography, TextField } from "@mui/material";

const SearchPage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
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
        sx={{
          backgroundColor: "#333",
          borderRadius: 1,
          input: {
            color: "#b3b3b3",
          },
        }}
      />
    </Box>
  );
};

export default SearchPage;
