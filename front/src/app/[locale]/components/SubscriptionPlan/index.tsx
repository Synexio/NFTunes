import { Box, Typography, Button } from "@mui/material";

const Subscription = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
        color: "white",
      }}
    >
      <Box
        sx={{
          width: 500,
          padding: 4,
          borderRadius: 2,
          backgroundColor: "#1f1f1f",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Subscribe to Prenium
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Unlimited music to enjoy with no ads and no interruptions.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Unlock gift and advantages with your favorite artist.
        </Typography>
        <Typography variant="h5" sx={{ margin: "20px 0" }}>
          $9.99/month
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
            "&:hover": { backgroundColor: "gray" },
          }}
        >
          Subscribe Now
        </Button>
      </Box>
    </Box>
  );
};

export default Subscription;
