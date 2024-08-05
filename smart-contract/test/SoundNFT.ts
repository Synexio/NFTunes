import { expect } from "chai";
import hre, { ethers, upgrades } from "hardhat";

describe("SoundNFT", function () {
  it("should return name", async function () {
    const [owner, admin, artist, addr1, addr2] = await ethers.getSigners();
    const SoundNFT = await hre.ethers.getContractFactory("SoundNFT");
    const soundNFT = await upgrades.deployProxy(
      SoundNFT,
      [admin.address, artist.address, "SoundNFT", "SNFT"],
      { initializer: "initialize" }
    );

    await soundNFT.waitForDeployment();
    console.log(await soundNFT.name());
    expect(await soundNFT.name()).to.equal("SoundNFT");
  });
});
