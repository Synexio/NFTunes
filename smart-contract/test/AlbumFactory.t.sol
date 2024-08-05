// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {SoundNFTFactory} from "../contracts/SoundNFTFactory.sol";
import {SoundNFT} from "../contracts/SoundNFT.sol";

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
    }
    function testInitialize() public {
        instance.initialize();
        assertTrue(instance.hasRole(instance.ARTIST_ROLE(), address(this)));
    }

    function testCreateAlbum() public {
        vm.startPrank(admin);
        instance.hasRole(instance.ARTIST_ROLE(), artist);
        vm.stopPrank();
        vm.startPrank(artist);
        address newAlbum = instance.createAlbum("ether", "eth", admin, artist);
        // forge test -vv to see logs
        SoundNFT albumInstance = SoundNFT(newAlbum);

        assertEq(albumInstance.name(), "ether");
        assertEq(albumInstance.symbol(), "eth");

        vm.stopPrank();
    }
    

}