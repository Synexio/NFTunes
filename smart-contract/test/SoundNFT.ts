import { expect } from "chai";
import hre, { ethers, upgrades } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";

describe("SoundNFT", function () {
  async function deployNFTuneContract() {
    const [owner, admin, artist, addr1, addr2] = await ethers.getSigners();
    const SoundNFT = await hre.ethers.getContractFactory("SoundNFT");
    const soundNFT = await upgrades.deployProxy(
      SoundNFT,
      [admin.address, artist.address, "SoundNFT", "SNFT"],
      { initializer: "initialize" }
    );
    return { soundNFT, admin, artist, addr1, addr2 };
  }
  it("should return nft's name", async function () {
    const { soundNFT, admin } = await loadFixture(deployNFTuneContract);

    await soundNFT.waitForDeployment();
    console.log(await soundNFT.name());
    expect(await soundNFT.name()).to.equal("SoundNFT");
  });
  it("should mint nft", async function () {
    const { soundNFT, admin, artist } = await loadFixture(deployNFTuneContract);
    await soundNFT
      .connect(artist)
      .safeMint(artist.address, `ipfs://tokenUri${0}`);
    soundNFT.connect(artist);
    expect(await soundNFT.balanceOf(artist.address)).to.equal(1);
    expect(await soundNFT.tokenURI(0)).to.equal(`ipfs://tokenUri${0}`);
  });
});
