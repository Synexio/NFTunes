// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {SoundNFT} from "../contracts/SoundNFT.sol";
import {Staff} from "../contracts/Staff.sol";

contract SoundNFTTest is Test {

    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant ARTIST_ROLE = keccak256("ARTIST_ROLE");

    SoundNFT instance;
    Staff staff;
    address admin;
    address artist;

    // Create a new instance of the contract, declare owner and random recipient
    function setUp() public {
        instance = new SoundNFT();
        staff = new Staff();
        // create a random recipient address
        artist = makeAddr("artist");
        admin = makeAddr("admin");
        instance.initialize(admin, address(staff), "Album", "ALB");
        staff.initialize(admin);
        vm.prank(admin);
        staff.addStaff(artist, "artist");

    }
    function testInitialize() public view {
        assertTrue(instance.hasRole(instance.ADMIN_ROLE(), admin));
        assertEq(instance.name(), "Album");
        assertEq(instance.symbol(), "ALB");
    }

    function testSafeMint() public {
        string memory tokenURI = "ipfs://CID";
        vm.startPrank(artist);
        instance.safeMint(artist, tokenURI);
        assertEq(instance.tokenURI(0), tokenURI); 
        // forge test -vv to see logs
        console.log("Token Name: ", instance.name());
        vm.stopPrank();
    }
    

}