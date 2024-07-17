import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { deploy } from "@nomicfoundation/ignition-core";
import { expect } from "chai";

import hre from "hardhat";
import { ethers } from "hardhat";
describe("NFTune", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployAccessManager() {
    // Contracts are deployed using the first signer/account by default
    let [owner, otherAccount] = await hre.ethers.getSigners();
    const ownerAddress = await owner.getAddress();
    const AccessManager = await ethers.getContractFactory("AccessManager");
    const manager = await AccessManager.deploy(ownerAddress);

    return { manager, owner, otherAccount };
  }
  async function deployNFToken() {
    // Contracts are deployed using the first signer/account by default
    let [owner, otherAccount] = await hre.ethers.getSigners();
    const ownerAddress = await owner.getAddress();
    const NFToken = await ethers.getContractFactory("NFToken");
    const nftoken = await NFToken.deploy(ownerAddress);

    return { nftoken, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should initialize properly", async function () {
      const { manager, owner, otherAccount } = await loadFixture(
        deployAccessManager
      );
      const MINTER = 42n;
      const label = await manager.labelRole(MINTER, "MINTER");
      console.log(label.accessList);

      const role = await manager.grantRole(MINTER, otherAccount, 0);
      console.log(role.accessList);

      // console.log(await manager.getAddress());
      it("Should deploy NFToken", async function () {
        const { nftoken, owner, otherAccount } = await loadFixture(
          deployNFToken
        );
        console.log(nftoken.getAddress());
      });
    });
  });
});
