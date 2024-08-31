import React, { useState, useEffect } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { ethers } from "ethers";
import { abi as ABI } from "../../../../../../smart-contract/artifacts/contracts/Staff.sol/Staff.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useActiveAccount } from "thirdweb/react";
import { getContract, readContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { client } from "../../client";

import { config } from "dotenv";
config();

const AddAdminPage: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const account = useActiveAccount();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isArtist, setIsArtist] = useState(false);
  const contractAddress = "0x9373392ce0d228840C7989A9be5D65F8964C2Fc6";

  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminAddress, setAdminAddress] = useState("");
  useEffect(() => {
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();

      try {
        // Check if MetaMask is installed
        if (!account) {
          setWalletAddress(null);
          setIsAdmin(false);
          setIsArtist(false);
          toast.info("No account connected");
          return;
        }
        console.log("wallet address", account.address);
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
        if (role === "admin") {
          setIsAdmin(true);
          setIsArtist(false); // Assuming one role at a time
        } else if (role === "artist") {
          setIsArtist(true);
          setIsAdmin(false);
        } else {
          setIsAdmin(false);
          setIsArtist(false);
        }
        // Call the smart contract function to add a new admin
        const transaction = await contract.addStaff(adminAddress, "admin");
        await transaction.wait(); // Wait for the transaction to be mined

        toast.success("Admin added successfully!");
      } catch (error) {
        console.error("Error adding admin:", error);
        toast.error("There was an error adding the admin.");
      }
    };
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
        color: "white",
        padding: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Add New Admin
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          maxWidth: 600,
          backgroundColor: "#1f1f1f",
          padding: 4,
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          label="Admin Name"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
          sx={{
            marginBottom: 3,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#333",
              },
              "&:hover fieldset": {
                borderColor: "#555",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#888",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#fff",
            },
          }}
          InputProps={{
            style: { color: "white" },
          }}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Admin Email"
          value={adminEmail}
          onChange={(e) => setAdminEmail(e.target.value)}
          sx={{
            marginBottom: 3,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#333",
              },
              "&:hover fieldset": {
                borderColor: "#555",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#888",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#fff",
            },
          }}
          InputProps={{
            style: { color: "white" },
          }}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Admin Address"
          value={adminAddress}
          onChange={(e) => setAdminAddress(e.target.value)}
          sx={{
            marginBottom: 3,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#333",
              },
              "&:hover fieldset": {
                borderColor: "#555",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#888",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#fff",
            },
          }}
          InputProps={{
            style: { color: "white" },
          }}
        />

        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{
            backgroundColor: "#b3b3b3",
            color: "white",
            "&:hover": {
              backgroundColor: "gray",
            },
          }}
        >
          Add Admin
        </Button>
      </Box>

      {/* Toast Container for notifications */}
      <ToastContainer />
    </Box>
  );
};

export default AddAdminPage;
