import hre, { upgrades, ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";

describe("Album Factory", function () {
  async function deployNFTFactoryContract() {
    const [owner, admin, artist, addr1, addr2] = await ethers.getSigners();
    const SoundFactory = await hre.ethers.getContractFactory("AlbumFactory");
    const soundFactory = await upgrades.deployProxy(
      SoundFactory,
      [admin.address, artist.address],
      {
        initializer: "initialize",
      }
    );

    return { soundFactory, owner, admin, artist, addr1, addr2 };
  }

  it("should create an album", async function () {
    const { soundFactory, owner, artist, admin } = await loadFixture(
      deployNFTFactoryContract
    );
    const isArtist = await soundFactory.hasRole(
      ethers.keccak256(ethers.toUtf8Bytes("ARTIST_ROLE")),
      artist.address
    );
    expect(isArtist).to.equal(true); // Ensure the artist has the role

    const tx = await soundFactory
      .connect(artist)
      .createAlbum("album1", "abl1", admin.address, artist.address);
    soundFactory.connect(artist);
    const receipt = await tx.wait();
    expect(receipt.status).to.equal(1);
    const deployedAlbumAddress = await soundFactory.deployedAlbums(0);

    console.log("New Album Address:", deployedAlbumAddress);
  });

  it("should not create an album", async function () {
    const { soundFactory, addr1, admin, artist } = await loadFixture(
      deployNFTFactoryContract
    );
    await expect(
      soundFactory
        .connect(addr1)
        .createAlbum("album1", "abl1", admin.address, artist.address)
    ).to.be.reverted;
  });
});
