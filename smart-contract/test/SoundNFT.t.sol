// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {SoundNFT} from "../contracts/SoundNFT.sol";

contract SoundNFTTest is Test {

    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant ARTIST_ROLE = keccak256("ARTIST_ROLE");

    SoundNFT instance;
    address admin;
    address artist;

    // Create a new instance of the contract, declare owner and random recipient
    function setUp() public {
        instance = new SoundNFT();
        // create a random recipient address
        artist = makeAddr("artist");
        admin = makeAddr("admin");
    }
    function testInitialize() public {
        instance.initialize(admin, artist, "Album", "ALB");
        assertTrue(instance.hasRole(instance.ADMIN_ROLE(), admin));
        assertTrue(instance.hasRole(instance.ARTIST_ROLE(), artist));
        assertEq(instance.name(), "Album");
        assertEq(instance.symbol(), "ALB");
    }

    function testSafeMint() public {
        string memory tokenURI = "ipfs://CID";
        instance.initialize(admin, artist,"Album1", "ALB1");
        vm.startPrank(artist);
        instance.safeMint(artist, tokenURI);
        assertEq(instance.tokenURI(0), tokenURI); 
        // forge test -vv to see logs
        console.log("Token Name: ", instance.name());
        vm.stopPrank();
    }
    

}