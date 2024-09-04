import { expect } from "chai";
import hre, { ethers, upgrades } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";

describe("Staff", function () {
  async function deployNFTuneContract() {
    const [owner, admin, artist, addr1, addr2] = await ethers.getSigners();

    const Staff = await hre.ethers.getContractFactory("Staff");
    const staff = await upgrades.deployProxy(Staff, [admin.address], {
      initializer: "initialize",
    });

    return { admin, artist, addr1, addr2, staff };
  }
  it("should add staff", async function () {
    const { staff, admin, artist } = await loadFixture(deployNFTuneContract);
    await staff.connect(admin).addStaff(artist.address, "artist");
    expect(await staff.isStaff(artist.address)).to.equal("artist");
  });
  it("should remove staff", async function () {
    const { staff, admin, artist } = await loadFixture(deployNFTuneContract);
    await staff.connect(admin).removeStaff(artist.address);
    expect(await staff.isStaff(artist.address)).to.equal("null");
  });
});
