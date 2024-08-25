import { ethers, upgrades } from "hardhat";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  // TODO Check this address is right before deploying.

  const deployedProxySoundNFT = process.env.PROXY_SOUNDNFT_ADDRESS;

  const SoundNFT = await ethers.getContractFactory("SoundNFT");
  console.log("Upgrading SoundNFT...");

  await upgrades.upgradeProxy(deployedProxySoundNFT as string, SoundNFT);
  console.log("SoundNFT contract upgraded");

  //----------------------------------------------------------------

  // const deployedProxySoundToken = process.env.PROXY_SOUNDTOKEN_ADDRESS;

  // const SoundToken = await ethers.getContractFactory("SoundToken");
  // console.log("Upgrading SoundToken...");

  // await upgrades.upgradeProxy(deployedProxySoundToken as string, SoundToken);
  // console.log("SoundToken contract upgraded");

  //----------------------------------------------------------------

  // const deployedProxyAlbum = process.env.PROXY_ALBUMFACTORY_ADDRESS;

  // const AlbumFactory = await ethers.getContractFactory("AlbumFactory");
  // console.log("Upgrading AlbumFactory...");

  // await upgrades.upgradeProxy(deployedProxyAlbum as string, AlbumFactory);
  // console.log("AlbumFactory contract upgraded");

  //----------------------------------------------------------------

  // const deployedProxyStaff = process.env.PROXY_STAFF_ADDRESS;

  // const Staff = await ethers.getContractFactory("SoundToken");
  // console.log("Upgrading Staff...");

  // await upgrades.upgradeProxy(deployedProxyStaff as string, Staff);
  // console.log("Staff contract upgraded");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
