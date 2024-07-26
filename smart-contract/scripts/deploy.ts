import {ethers, run } from "hardhat";

async function main(){
    // The old way of deploying contracts
    // const PriceFeed = await ethers.getContractFactory("PriceFeed");
    // const pricefeed = await PriceFeed.deploy();
    // await pricefeed.waitForDeployment();

    //The new way of deploying contracts    Name of contract, Contructor Arguments, Overrides
    const pricefeed = await ethers.deployContract("PriceFeed", [], ());

    await pricefeed.waitForDeployment();

    console.log(`PriceFeed contract address : ${pricefeed.target}`)
    console.log("Verifying contract...");

    // Wait for a few confirmations before verifying
    await new Promise(resolve => setTimeout{resolve, 60000});

    // Verifying contract
    await run("verify:verify", {
        address : pricefeed.target,
        constructorArguments: [],
    });
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors
main().catch((error)=> {
    console.error(error);
    process.exitCode = 1
});