import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import logo from "@public/drawing.png";
import Link from "next/link";
import { ConnectButton } from "thirdweb/react";
import { client } from "../../client";

interface SidebarProps {
  setActivePage: (page: "home") => void;
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
      <Link href="/home" passHref>
        <Box sx={{ marginBottom: 4 }}>
          <Image src={logo} alt="Spotify Logo" width={100} height={50} />
        </Box>
      </Link>

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

        {/* Home Link */}
        <Link href="/home" passHref>
          <ListItem onClick={() => setActivePage("home")}>
            <ListItemIcon>
              <HomeIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              primaryTypographyProps={{ color: "white" }}
            />
          </ListItem>
        </Link>

        {/* Search Link */}
        <Link href="/search" passHref>
          <ListItem>
            <ListItemIcon>
              <SearchIcon sx={{ color: "#b3b3b3" }} />
            </ListItemIcon>
            <ListItemText
              primary="Search"
              primaryTypographyProps={{ color: "#b3b3b3" }}
            />
          </ListItem>
        </Link>
        <Link href="/subscription" passHref>
          <ListItem>
            <ListItemIcon>
              <FavoriteIcon sx={{ color: "#b3b3b3" }} />
            </ListItemIcon>
            <ListItemText
              primary="Subscribe"
              primaryTypographyProps={{ color: "#b3b3b3" }}
            />
          </ListItem>
        </Link>
        <Link href="/profile/artist/createAlbum" passHref>
          <ListItem>
            <ListItemIcon>
              <AddIcon sx={{ color: "#b3b3b3" }} />
            </ListItemIcon>
            <ListItemText
              primary="Add Album"
              primaryTypographyProps={{ color: "#b3b3b3" }}
            />
          </ListItem>
        </Link>
      </List>
    </Box>
  );
};

export default Sidebar;
