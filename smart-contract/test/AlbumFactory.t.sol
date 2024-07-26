// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import {Test, console} from "forge-std/Test.sol";
import {SoundNFTFactory} from "../contracts/SoundNFTFactory.sol";

contract AlbumFactoryTest is Test {

    bytes32 public constant ARTIST_ROLE = keccak256("ARTIST_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    // SoundNFTFactory instance;
    // address admin;
    // address artist;

    // // Create a new instance of the contract, declare owner and random recipient
    // function setUp() public {
    //     instance = new SoundNFTFactory();
    //     // create a random recipient address
    //     artist = makeAddr("artist");
    //     admin = makeAddr("admin");
    // }
    // function testInitialize() public {
    //     instance.initialize();
    //     assertTrue(instance.hasRole(instance.ARTIST_ROLE(), address(this)));
    // }

    // function testCreateAlbum() public {
    //     vm.startPrank(artist);
    //     instance.createAlbum("Album", "ALB").
    //     assertEq(instance.tokenURI(0), tokenURI); 
    //     // forge test -vv to see logs
    //     console.log("Token Name: ", instance.name());
    //     vm.stopPrank();
    // }
    

}