import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSendTransaction } from "thirdweb/react";
import AdminGuard from "./AdminGuard";
import { prepareContractCall } from "thirdweb";
import { contract } from "../../context/contract";
import { useActiveAccount } from "thirdweb/react";

const AddAdminPage: React.FC = () => {
  const api = process.env.NEXT_PUBLIC_API_URL;
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const account = useActiveAccount();

  const { mutate: sendTransaction } = useSendTransaction();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(account);
    try {
      // const requestData = {
      //   address: address,
      //   lastname: lastname,
      //   firstname: firstname,
      //   email: email,
      //   role: "admin",
      // };
      // const url = `${api}/user/create`;
      // const response = await fetch(url, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(requestData),
      // });
      // if (response.ok) {
      const add = prepareContractCall({
        contract,
        method:
          "function addStaff(address account, string role) view returns (string)",
        params: [address as `0x${string}`, "admin"],
      });
      console.log("Prepared Contract Call:", add);
      console.log(sendTransaction(add));
      toast.success("Admin enregistré !");
      // } else if (response.status === 409) {
      //   toast.error("Admin already exists!");
      // } else {
      //   const errorData = await response.json();
      //   toast.error(errorData.message || "An error occurred");
      // }
    } catch (error) {
      console.error("Error registering admin", error);
    }
  };
  return (
    <AdminGuard>
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
            label="Admin Firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
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
            label="Admin Lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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

        <ToastContainer />
      </Box>
    </AdminGuard>
  );
};

export default AddAdminPage;
