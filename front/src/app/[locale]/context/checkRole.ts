// hooks/useUserRole.ts
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getContract, readContract } from "thirdweb"; // Adjust imports to your project structure
import { defineChain } from "thirdweb/chains";
import { client } from "../client";
interface UserRole {
  isAdmin: boolean;
  isArtist: boolean;
  walletAddress: string | null;
}

const contractAddress = "0x9373392ce0d228840C7989A9be5D65F8964C2Fc6"; // Example contract address

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
