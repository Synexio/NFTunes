// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {Staff} from "../contracts/Staff.sol";

contract SoundNFTTest is Test {

    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    Staff instance;
    address admin;
    address artist;

    // Create a new instance of the contract, declare owner and random recipient
    function setUp() public {
        instance = new Staff();
        // create a random recipient address
        admin = makeAddr("admin");
        artist = makeAddr("artist");
    }
    function testInitialize() public {
        instance.initialize(admin);
        assertTrue(instance.hasRole(instance.ADMIN_ROLE(), admin));
    }

    function testAddStaff() public {
        instance.initialize(admin);
        vm.startPrank(admin);
        instance.addStaff(artist, "artist");
        assertEq(instance.isStaff(artist), "artist");
        vm.stopPrank();
    }
    function testRemoveStaff() public {
        instance.initialize(admin);
        vm.startPrank(admin);
        instance.removeStaff(artist, "");
        assertEq(instance.isStaff(artist), "");
        vm.stopPrank();
    }
}