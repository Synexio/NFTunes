// components/AdminGuard.tsx

import React from "react";
import { Box, Typography } from "@mui/material"; // Import MUI components
import { useUserRole } from "../../context/checkRole";
import { useActiveAccount } from "thirdweb/react";

interface AdminGuardProps {
  children: React.ReactNode; // Content to render if the user is an admin
}

const AdminGuard: React.FC<AdminGuardProps> = ({ children }) => {
  const account = useActiveAccount();
  const { isAdmin } = useUserRole(account);

  if (!isAdmin) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#121212",
          color: "white",
          padding: 2,
        }}
      >
        <Typography variant="h6">
          You do not have permission to access this page.
        </Typography>
      </Box>
    );
  }

  return <>{children}</>; // Render children if the user is an admin
};

export default AdminGuard;
