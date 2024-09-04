import { useRouter } from "@/navigation";
import { Box, Typography, Button } from "@mui/material";
import { Subs } from "subs-widget";
import {useActiveAccount} from "thirdweb/react";

const Subscription = () => {

  const router = useRouter();
  const account = useActiveAccount();
  const api = process.env.NEXT_PUBLIC_API_URL;

  if (!account) {
    router.push("/home");
    return null;
  }

  const address = account.address;
  const fetchUser = async (address: string): Promise<any> => {
      const response = await fetch(`${api}/user/${address}`);
      return await response.json(); // Parse the response as JSON
  };

  async function createSubscription(address: string) {
    console.log(address);

    const user = await fetchUser(address);

    const response = await fetch(`${api}/sub/create`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate: Date.now(),
        lastPayment: Date.now(),
        status: "Abonnement en cours",
        userId: user._id

      })
    });
    console.log("reponse post :", response);
  }

  const handleResponse = (response: { success: boolean; message: string }) => {
    console.log("This is what happened", response);

    if (response.success) {
      createSubscription(address);
    }

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
}

export default Subscription;
