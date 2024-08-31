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
  //   it("should mint nft", async function () {
  //     const { staff, artist } = await loadFixture(deployNFTuneContract);
  //     await staff.connect(artist).safeMint(artist.address, `ipfs://tokenUri${0}`);
  //     staff.connect(artist);
  //     expect(await staff.balanceOf(artist.address)).to.equal(1);
  //     expect(await staff.tokenURI(0)).to.equal(`ipfs://tokenUri${0}`);
  //   });
  //   it("should not mint", async function () {
  //     const { staff, addr1 } = await loadFixture(deployNFTuneContract);
  //     await expect(
  //       staff.connect(addr1).safeMint(addr1.address, `ipfs://tokenUri${0}`)
  //     ).to.be.reverted;
  //   });
});
