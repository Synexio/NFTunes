import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { ConnectButton } from "thirdweb/react";
import { client } from "../../client";

const Header = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Spotify
        </Typography>
        <Button color="inherit">Sign up</Button>
        <Button color="inherit">Log in</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

{
  /* <ConnectButton
  client={client}
  appMetadata={{
    name: "Example App",
    url: "https://example.com",
  }}
/>; */
}
