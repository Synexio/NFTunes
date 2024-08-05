// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import {Test, console} from "forge-std/Test.sol";
import {SoundNFTFactory} from "../contracts/SoundNFTFactory.sol";

contract AlbumFactoryTest is Test {

    bytes32 public constant ARTIST_ROLE = keccak256("ARTIST_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    SoundNFTFactory instance;
    address admin;
    address artist;

    // Create a new instance of the contract, declare owner and random recipient
    function setUp() public {
        instance = new SoundNFTFactory();
        // create a random recipient address
        artist = makeAddr("artist");
        admin = makeAddr("admin");
    instance = new SoundNFTFactory();
        instance.initialize(admin);

        vm.prank(admin);
        instance.grantRole(instance.ARTIST_ROLE(), artist);
    }

    function testInitialize() public {
        instance.initialize(admin);
        assertTrue(instance.hasRole(instance.ADMIN_ROLE(), admin));
    }

    function testCreateAlbum() public {
        vm.startPrank(artist);
        instance.createAlbum("AlbumName", "ALB", artist);
        console.log(address(instance));
        vm.stopPrank();
    }

}