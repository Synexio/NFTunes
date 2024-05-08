import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
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

  describe("Deployment", function () {
    it("Should initialize properly", async function () {
      const { manager, owner, otherAccount } = await loadFixture(
        deployAccessManager
      );
      await manager.grantRole(2n, otherAccount.address, 0);
      await manager.getAccess(2n, otherAccount.address);
      await manager.labelRole(2n, "ARTIST");
      const artist = await manager.getRoleAdmin(2n);
      console.log("admin", artist);
    });
  });
});
