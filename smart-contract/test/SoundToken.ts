import { expect } from "chai";
import hre, { ethers, upgrades } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";

describe("SoundToken", function () {
  async function deployNFTuneContract() {
    const [owner, admin, artist, addr1, addr2] = await ethers.getSigners();

    const Staff = await hre.ethers.getContractFactory("Staff");
    const staff = await upgrades.deployProxy(Staff, [admin.address], {
      initializer: "initialize",
    });

    await staff.connect(admin).addStaff(artist.address, "artist");

    const SoundToken = await hre.ethers.getContractFactory("SoundToken");
    const soundToken = await upgrades.deployProxy(
      SoundToken,
      [admin.address, staff.target],
      {
        initializer: "initialize",
      }
    );
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

    // Constraining by the number of arguments is possible, but since a Contract method allows an overrides,
    // it cannot tell whether you were calling burn(addr, amount) or burn(uint256, overrides).
    // If you wish, you can pass empty overrides in to force it to choose based on argument count using burn(addr, amount, { })
    // (now there are 3 arguments, the only possibility is that the 2-parameter option was called with an overrides parameter).
    await soundToken.connect(admin).burn(admin.address, 10000, {});
    expect(
      await soundToken.balanceOf("0x0000000000000000000000000000000000000000")
    ).to.equal(0);
    expect(await soundToken.balanceOf(admin.address)).to.equal(100000 - 10000);
  });
  it("should claim", async function () {
    const { soundToken, artist, admin } = await loadFixture(
      deployNFTuneContract
    );
    await soundToken.connect(admin).mint(admin.address, 1000000);

    await soundToken.connect(artist).claim(admin.address, artist.address, 1000);
    expect(await soundToken.balanceOf(admin.address)).to.equal(1000000 - 1000);

    expect(await soundToken.balanceOf(artist.address)).to.equal(1000);
  });
});
