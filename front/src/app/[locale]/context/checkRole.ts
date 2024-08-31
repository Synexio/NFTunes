// hooks/useUserRole.ts
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { defineChain } from "thirdweb/chains";
import { getContract, readContract } from "thirdweb";
import { client } from "../client";

interface UserRole {
  isAdmin: boolean;
  isArtist: boolean;
  walletAddress: string | null;
}

const contractAddress = "0x46C55a5C3c18eF51c0aAdc9CB88Ea75009a9791d"; // Example contract address

export const useUserRole = (account: any): UserRole => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isArtist, setIsArtist] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    const checkUserRole = async () => {
      if (!account) {
        setWalletAddress(null);
        setIsAdmin(false);
        setIsArtist(false);
        return;
      }

      setWalletAddress(account.address);

      try {
        const contract = getContract({
          client,
          chain: defineChain(80002),
          address: contractAddress,
        });

        const role = await readContract({
          contract,
          method: "function isStaff(address account) view returns (string)",
          params: [account.address],
        });

        setIsAdmin(role === "admin");
        setIsArtist(role === "artist");
      } catch (error) {
        console.error(
          "Error detecting wallet address or fetching role:",
          error
        );
        toast.error("Error fetching role information.");
      }
    };

    checkUserRole();
  }, [account]);

  return { isAdmin, isArtist, walletAddress };
};
