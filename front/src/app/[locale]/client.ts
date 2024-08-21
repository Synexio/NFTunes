import { createThirdwebClient } from "thirdweb";
// import * as dotenv from "dotenv";
// dotenv.config();

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;
// const clientId = "af8de95fc38eef03914471e46e47006f";

if (!clientId) {
  console.log(clientId);
  throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
  clientId: clientId,
});
