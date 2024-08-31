import { ethers, upgrades, network } from "hardhat";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  // const SoundNFT = await ethers.getContractFactory("SoundNFT");
  // console.log("Deploying SoundNFT to", network.name);
  // const soundNFT = await upgrades.deployProxy(
  //   SoundNFT,
  //   [process.env.ADMIN_ADDRESS, process.env.PROXY_STAFF_ADDRESS, "SoundNFT", "SNFT"],
  //   {
  //     initializer: "initialize",
  //   }
  // );
  // await soundNFT.waitForDeployment();
  // console.log("SoundNFT deployed to:", await soundNFT.getAddress());
  //----------------------------------------------------------------
  // const AlbumFactory = await ethers.getContractFactory("AlbumFactory");
  // console.log("Deploying AlbumFactory to", network.name);
  // const albumFactory = await upgrades.deployProxy(
  //   AlbumFactory,
  //   [process.env.ADMIN_ADDRESS, process.env.PROXY_STAFF_ADDRESS],
  //   {
  //     initializer: "initialize",
  //   }
  // );
  // await albumFactory.waitForDeployment();
  // console.log("AlbumFactory deployed to:", await albumFactory.getAddress());
  //----------------------------------------------------------------
  const SoundToken = await ethers.getContractFactory("SoundToken");
  console.log("Deploying SoundToken to", network.name);
  const soundToken = await upgrades.deployProxy(
    SoundToken,
    [process.env.ADMIN_ADDRESS, process.env.PROXY_STAFF_ADDRESS],
    {
      initializer: "initialize",
    }
  );
  await soundToken.waitForDeployment();
  console.log("SoundToken deployed to:", await soundToken.getAddress());
  //----------------------------------------------------------------
  // const Staff = await ethers.getContractFactory("Staff");
  // console.log("Deploying Staff to", network.name);
  // const staff = await upgrades.deployProxy(Staff, [process.env.ADMIN_ADDRESS], {
  //   initializer: "initialize",
  // });
  // await staff.waitForDeployment();
  // console.log("Staff deployed to:", await staff.getAddress());
}
// spin inform rough banana name art use frost job adjust jump joy

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
