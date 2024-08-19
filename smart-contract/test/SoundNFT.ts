import { expect } from "chai";
import hre, { ethers, upgrades } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";

describe("SoundToken", function () {
  async function deployNFTuneContract() {
    const [owner, admin, artist, addr1, addr2] = await ethers.getSigners();
    const SoundToken = await hre.ethers.getContractFactory("SoundToken");
    const soundToken = await upgrades.deployProxy(SoundToken, [owner.address], {
      initializer: "initialize",
    });
    return { soundToken, admin, artist, addr1, addr2 };
  }
  it("should return nft's name", async function () {
    const { soundToken } = await loadFixture(deployNFTuneContract);

    await soundToken.waitForDeployment();
    console.log(await soundToken.name());
    expect(await soundToken.name()).to.equal("SoundToken");
  });
  it("should mint nft", async function () {
    const { soundToken, artist } = await loadFixture(deployNFTuneContract);
    await soundToken
      .connect(artist)
      .mint(artist.address, `ipfs://tokenUri${0}`);
    soundToken.connect(artist);
    expect(await soundToken.balanceOf(artist.address)).to.equal(1);
    expect(await soundToken.tokenURI(0)).to.equal(`ipfs://tokenUri${0}`);
  });
  it("should not mint", async function () {
    const { soundToken, addr1 } = await loadFixture(deployNFTuneContract);
    await expect(
      soundToken.connect(addr1).safeMint(addr1.address, `ipfs://tokenUri${0}`)
    ).to.be.reverted;
  });
});
