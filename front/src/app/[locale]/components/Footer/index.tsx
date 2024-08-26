import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{ mt: 4, textAlign: "center", color: "white", margin: "auto auto" }}
    >
      <Typography variant="body2">
        © 2024 ESGI 5IBC Alexandre Hannagan - Anais Zhang - Paul Bisset
      </Typography>
      {/* <Link href="#" color="inherit" sx={{ mx: 1 }}>
        About
      </Link>
      <Link href="#" color="inherit" sx={{ mx: 1 }}>
        Jobs
      </Link> */}
      {/* Add more footer links */}
    </Box>
  );
};

export default Footer;
