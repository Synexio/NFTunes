import React, { useState, useEffect } from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import Image from "next/image";
import logo from "@public/drawing.png";
import Link from "next/link";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "../../client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserRole } from "../../context/checkRole";

interface SidebarProps {
  setActivePage: (page: "home") => void;
}

const Sidebar = ({ setActivePage }: SidebarProps) => {
  const account = useActiveAccount();
  const { isAdmin, isArtist, walletAddress } = useUserRole(account);
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
      <Link href="/home" passHref>
        <Box sx={{ marginBottom: 4 }}>
          <Image src={logo} alt="Logo" width={100} height={50} />
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
        {!isAdmin && (
          <>
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

            <Link href="/profile/artist/register" passHref>
              <ListItem>
                <ListItemIcon>
                  <LibraryAddIcon sx={{ color: "#b3b3b3" }} />
                </ListItemIcon>
                <ListItemText
                  primary="I'm a talented ARTIST ⭐️"
                  primaryTypographyProps={{ color: "#b3b3b3" }}
                />
              </ListItem>
            </Link>
          </>
        )}
        {isArtist && (
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
        )}
        {isAdmin && (
          <>
            <Link href="/profile/admin/addAdmin" passHref>
              <ListItem>
                <ListItemIcon>
                  <AddIcon sx={{ color: "#b3b3b3" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Add Admin"
                  primaryTypographyProps={{ color: "#b3b3b3" }}
                />
              </ListItem>
            </Link>
            <Link href="/profile/admin/listArtist" passHref>
              <ListItem>
                <ListItemIcon>
                  <FormatListBulletedIcon sx={{ color: "#b3b3b3" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Artists"
                  primaryTypographyProps={{ color: "#b3b3b3" }}
                />
              </ListItem>
            </Link>
          </>
        )}
      </List>

      <ToastContainer />
    </Box>
  );
};

export default Sidebar;
