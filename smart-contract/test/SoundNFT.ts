import { expect } from "chai";
import hre, { ethers, upgrades } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";

describe("SoundNFT", function () {
  async function deployNFTuneContract() {
    const [owner, admin, artist, addr1, addr2] = await ethers.getSigners();

    const Staff = await hre.ethers.getContractFactory("Staff");
    const staff = await upgrades.deployProxy(Staff, [admin.address], {
      initializer: "initialize",
    });

    await staff.connect(admin).addStaff(artist.address, "artist");

    const SoundNFT = await hre.ethers.getContractFactory("SoundNFT");
    const soundNFT = await upgrades.deployProxy(
      SoundNFT,
      [admin.address, staff.target, "SoundNFT", "SNFT"],
      { initializer: "initialize" }
    );
    return { soundNFT, admin, artist, addr1, addr2, staff };
  }
  it("should return nft's name", async function () {
    const { soundNFT } = await loadFixture(deployNFTuneContract);

    await soundNFT.waitForDeployment();
    console.log(await soundNFT.name());
    expect(await soundNFT.name()).to.equal("SoundNFT");
  });
  it("should mint nft", async function () {
    const { soundNFT, artist } = await loadFixture(deployNFTuneContract);
    await soundNFT
      .connect(artist)
      .safeMint(artist.address, `ipfs://tokenUri${0}`);
    soundNFT.connect(artist);
    expect(await soundNFT.balanceOf(artist.address)).to.equal(1);
    expect(await soundNFT.tokenURI(0)).to.equal(`ipfs://tokenUri${0}`);
  });
  it("should not mint", async function () {
    const { soundNFT, addr1 } = await loadFixture(deployNFTuneContract);
    await expect(
      soundNFT.connect(addr1).safeMint(addr1.address, `ipfs://tokenUri${0}`)
    ).to.be.reverted;
  });
});
