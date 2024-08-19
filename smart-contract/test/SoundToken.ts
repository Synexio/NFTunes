import { expect } from "chai";
import hre, { ethers, upgrades } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";

describe("SoundToken", function () {
  async function deployNFTuneContract() {
    const [owner, admin, artist, addr1, addr2] = await ethers.getSigners();
    const SoundToken = await hre.ethers.getContractFactory("SoundToken");
    const soundToken = await upgrades.deployProxy(SoundToken, [admin.address], {
      initializer: "initialize",
    });
    return { soundToken, admin, artist, addr1, addr2 };
  }

  it("should mint nft", async function () {
    const { soundToken, admin } = await loadFixture(deployNFTuneContract);
    await soundToken.connect(admin).mint(admin.address, 100000);
    expect(await soundToken.balanceOf(admin.address)).to.equal(100000);
  });
  it("should not mint", async function () {
    const { soundToken, addr1 } = await loadFixture(deployNFTuneContract);
    await expect(soundToken.connect(addr1).mint(addr1.address, 1000)).to.be
      .reverted;
  });
  it("should burn token", async function () {
    const { soundToken, admin } = await loadFixture(deployNFTuneContract);
    await soundToken.connect(admin).mint(admin.address, 100000);
    expect(await soundToken.balanceOf(admin.address)).to.equal(100000);

    await soundToken.connect(admin).burn("0x0000000", 1000);
    expect(await soundToken.balanceOf("0x0000000")).to.equal(1000);
    expect(await soundToken.balanceOf(admin.address)).to.equal(100000 - 1000);
  });
});
