// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {AlbumFactory} from "../contracts/AlbumFactory.sol";
import {SoundNFT} from "../contracts/SoundNFT.sol";

contract AlbumFactoryTest is Test {

    bytes32 public constant ARTIST_ROLE = keccak256("ARTIST_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    AlbumFactory instance;
    address admin;
    address artist;

    // Create a new instance of the contract, declare owner and random recipient
    function setUp() public {
        instance = new AlbumFactory();
        // create a random recipient address
        artist = makeAddr("artist");
        admin = makeAddr("admin");
        instance.initialize(admin, artist);

    }
    function testInitialize() public view {
        assertTrue(instance.hasRole(instance.ARTIST_ROLE(), artist));
    }

    function testCreateAlbum() public {
        vm.startPrank(artist);
        address newAlbum = instance.createAlbum("ether", "eth", admin, artist);
        // forge test -vv to see logs
        SoundNFT albumInstance = SoundNFT(newAlbum);
        assertEq(albumInstance.name(), "ether");
        assertEq(albumInstance.symbol(), "eth");
        vm.stopPrank();
    }
    

}