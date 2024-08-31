import { defineChain } from "thirdweb/chains";
import { getContract } from "thirdweb";
import { client } from "../client";

export const contract = getContract({
  client,
  chain: defineChain(80002),
  address: "0x9373392ce0d228840C7989A9be5D65F8964C2Fc6",
});
