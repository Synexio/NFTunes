// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {Test, console} from "../lib/forge-std/src/Test.sol";
import {AlbumFactory} from "../contracts/AlbumFactory.sol";
import {SoundNFT} from "../contracts/SoundNFT.sol";
import {Staff} from "../contracts/Staff.sol";

contract AlbumFactoryTest is Test {

    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    AlbumFactory instance;
    Staff staff;
    address admin;
    address artist;
    address addr1;

    // Create a new instance of the contract, declare owner and random recipient
    function setUp() public {
        instance = new AlbumFactory();
        staff = new Staff();
        // create a random recipient address
        artist = makeAddr("artist");
        admin = makeAddr("admin");
        instance.initialize(admin, address(staff));
        staff.initialize(admin);
        vm.prank(admin);
        staff.addStaff(artist, "artist");
    }

    function testCreateAlbum() public {
        vm.startPrank(artist);
        address newAlbum = instance.createAlbum("ether", "eth", admin, address(staff));
        // forge test -vv to see logs
        SoundNFT albumInstance = SoundNFT(newAlbum);
        assertEq(albumInstance.name(), "ether");
        assertEq(albumInstance.symbol(), "eth");
        vm.stopPrank();
    }

    function testCreateAlbumFail() public {
        vm.startPrank(addr1);
        vm.expectRevert(bytes("Caller is not an artist"));
        instance.createAlbum("ether", "eth", admin, address(staff));
        vm.stopPrank();
    }
    

}
