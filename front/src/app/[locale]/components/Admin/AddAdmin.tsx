import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { ethers } from "ethers";
import { abi as ABI } from "../../../../../../smart-contract/artifacts/contracts/Staff.sol/Staff.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as dotenv from "dotenv";
dotenv.config();

const AddAdminPage: React.FC = () => {
  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminAddress, setAdminAddress] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Check if MetaMask is installed
      if (!window.ethereum) {
        toast.error("Please install MetaMask to interact with this feature.");
        return;
      }

      // Request account access if needed
      await window.ethereum.request({ method: "eth_requestAccounts" });

      // Create a new Web3 provider and signer
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Contract address - Replace with your contract address
      const contractAddress = process.env.STAFF_ADDRESS as string;

      // Create a new contract instance
      const contract = new ethers.Contract(contractAddress, ABI, signer);

      // Call the smart contract function to add a new admin
      const transaction = await contract.addStaff(adminAddress, "admin");
      await transaction.wait(); // Wait for the transaction to be mined

      toast.success("Admin added successfully!");
    } catch (error) {
      console.error("Error adding admin:", error);
      toast.error("There was an error adding the admin.");
    }
  };

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
