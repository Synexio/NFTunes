import hre, { upgrades, ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";

describe("Album Factory", function () {
  async function deployNFTFactoryContract() {
    const [owner, admin, artist, addr1] = await ethers.getSigners();

    const Staff = await hre.ethers.getContractFactory("Staff");
    const staff = await upgrades.deployProxy(Staff, [admin.address], {
      initializer: "initialize",
    });

    const SoundFactory = await hre.ethers.getContractFactory("AlbumFactory");
    const soundFactory = await upgrades.deployProxy(
      SoundFactory,
      [admin.address, staff.target],
      {
        initializer: "initialize",
      }
    );

    console.log("Staff deployed to:", staff.target);

    // Add an artist
    await staff.connect(admin).addStaff(artist.address, "artist");

    return {
      soundFactory,
      owner,
      admin,
      artist, // addr1 is now the artist
      addr1,
      staff,
    };
  }

  it("should create an album", async function () {
    const { soundFactory, artist, admin, staff } = await loadFixture(
      deployNFTFactoryContract
    );

    const tx = await soundFactory
      .connect(artist)
      .createAlbum("album1", "abl1", admin.address, staff.target);

    const receipt = await tx.wait();

    expect(receipt.status).to.equal(1); // Ensure the transaction succeeded

    const deployedAlbumAddress = await soundFactory.deployedAlbums(0);
    console.log("New Album Address:", deployedAlbumAddress);

    expect(deployedAlbumAddress).to.properAddress; // Check that the album was deployed
  });

  it("should not create an album", async function () {
    const { soundFactory, staff, addr1, admin } = await loadFixture(
      deployNFTFactoryContract
    );
    await expect(
      soundFactory
        .connect(addr1)
        .createAlbum("ether", "eth", admin.address, staff.target)
    ).to.be.revertedWith("Caller is not an artist");
  });
});
