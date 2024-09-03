import { defineChain } from "thirdweb/chains";
import { getContract } from "thirdweb";
import { client } from "../client";

export const contractStaff = getContract({
  client,
  chain: defineChain(80002),
  address: "0x9373392ce0d228840C7989A9be5D65F8964C2Fc6",
});
export const contractNFT = getContract({
  client,
  chain: defineChain(80002),
  address: "0x4AC41f8E9FCf72795436d2296d51f57aEb9d135a",
});

export const contractToken = getContract({
  client,
  chain: defineChain(80002),
  address: "0x38f2D784C01e177139e0AdD6a4ac97E6776470F0",
});

export const contractFactory = getContract({
  client,
  chain: defineChain(80002),
  address: "0xD882e3726eF4E3c4FAE6D6126bdB59da4C9fe02c",
});
