import { Box, Typography, Button } from "@mui/material";
import { Subs } from "subs-widget";

const Subscription = () => {
  const handleResponse = (response: { success: boolean; message: string }) => {
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
      TEST
      <Subs
      address={"0x6176d4666693933eF3a73ce38C28de54A611012D"}
      appId="24"
      chain={"bsct"}
      mode="testnet"
      apiKey="fr96nskplu06obzxtjfwmkswdhpfk9"
      color="red"
      width={200}
      defaultPayment="Prenium"
      choice={{
        payment: "Prenium",
        //address token payment
        token: "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd",
      }}
      dataOnSubs={handleResponse}
      />
      </Box>
      </Box>
    );
  };
}

export default Subscription;
