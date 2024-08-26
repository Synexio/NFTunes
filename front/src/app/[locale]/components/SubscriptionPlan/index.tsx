import { Box, Typography, Button } from "@mui/material";
import { Subs } from "subs-widget";

const Subscription = () => {
  const handleResponse = (response: { success: boolean; message: string }) => {
    console.log("This is what happened", response);
  };

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
          1.99/month
        </Typography>
        {/* <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
            "&:hover": { backgroundColor: "gray" },
          }}
        >
          Subscribe Now
        </Button> */}
        <Subs
          address={"0x8e468E7Cbf7E7E056A7591C796F2dd4C5C255591"}
          appId="4"
          chain={"bsc"}
          mode="testnet"
          apiKey="fr96nskplu06obzxtjfwmkswdhpfk9"
          color="red"
          width={200}
          defaultPayment="30Days"
          choice={{
            payment: "30Days",
            token: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
          }}
          dataOnSubs={handleResponse}
        />
      </Box>
    </Box>
  );
};

export default Subscription;
