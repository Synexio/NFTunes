import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="body2" color="textSecondary">
        © 2024 Spotify AB
      </Typography>
      <Link href="#" color="inherit" sx={{ mx: 1 }}>
        About
      </Link>
      <Link href="#" color="inherit" sx={{ mx: 1 }}>
        Jobs
      </Link>
      {/* Add more footer links */}
    </Box>
  );
};

export default Footer;
