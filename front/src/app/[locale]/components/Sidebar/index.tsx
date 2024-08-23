import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import logo from "@public/drawing.png";
import Link from "next/link";
import { ConnectButton } from "thirdweb/react";
import { client } from "../../client";

interface SidebarProps {
  setActivePage: (page: "home" | "search") => void;
}

const Sidebar = ({ setActivePage }: SidebarProps) => {
  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        backgroundColor: "#121212",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      {/* Spotify Logo */}
      <Box sx={{ marginBottom: 4 }}>
        <Link href="/home" passHref>
          <Image
            src={logo} // replace with the path to your logo
            alt="Spotify Logo"
            width={100}
            height={50}
          />
        </Link>
      </Box>

      {/* Navigation List */}
      <List>
        <ListItem onClick={() => setActivePage("home")}>
          <ConnectButton
            client={client}
            appMetadata={{
              name: "Example App",
              url: "https://example.com",
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <HomeIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText
            primary="Home"
            primaryTypographyProps={{ color: "white" }}
          />
        </ListItem>

        <ListItem button onClick={() => setActivePage("search")}>
          <ListItemIcon>
            <SearchIcon sx={{ color: "#b3b3b3" }} />
          </ListItemIcon>
          <ListItemText
            primary="Search"
            primaryTypographyProps={{ color: "#b3b3b3" }}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
