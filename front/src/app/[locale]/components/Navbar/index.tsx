import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ConnectButton } from "thirdweb/react";
import { client } from "../../client";
import './navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon
              onClick={() => setIsOpen(!isOpen)}
            />
          </IconButton>
          <nav className={isOpen ? 'isOpen' : ''}>
            { isOpen && (
              <>
                <a href="/">Slash</a>
                <a href="/fr/home">Home</a>
              </>
            )}
          </nav>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NFTunes
          </Typography>
          <ConnectButton
            client={client}
            appMetadata={{
              name: "Example App",
              url: "https://example.com",
            }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
