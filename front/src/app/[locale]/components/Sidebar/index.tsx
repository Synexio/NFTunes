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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ethers } from "ethers";
import { abi as ABI } from "../../../../../../smart-contract/artifacts/contracts/Staff.sol/Staff.json";

interface SidebarProps {
  setActivePage: (page: "home") => void;
}

const Sidebar = ({ setActivePage }: SidebarProps) => {
  // const [adminName, setAdminName] = useState("");
  // const [adminEmail, setAdminEmail] = useState("");
  // const [adminAddress, setAdminAddress] = useState("");

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   try {
  //     // Check if MetaMask is installed
  //     if (!window.ethereum) {
  //       toast.error("Please install MetaMask to interact with this feature.");
  //       return;
  //     }

  //     // Request account access if needed
  //     await window.ethereum.request({ method: "eth_requestAccounts" });

  //     // Create a new Web3 provider and signer
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     console.log(signer);

  //     // Contract address - Replace with your contract address
  //     const contractAddress = "0x46C55a5C3c18eF51c0aAdc9CB88Ea75009a9791d";

  //     // Create a new contract instance
  //     const contract = new ethers.Contract(contractAddress, ABI, signer);

  //     // Call the smart contract function to add a new admin
  //     const transaction = await contract.addStaff(adminAddress, "artist");
  //     await transaction.wait(); // Wait for the transaction to be mined

  //     toast.success("Admin added successfully!");
  //   } catch (error) {
  //     console.error("Error adding admin:", error);
  //     toast.error("There was an error adding the admin.");
  //   }
  // };

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
