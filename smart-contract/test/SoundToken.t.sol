// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {SoundToken} from "../contracts/SoundToken.sol";

contract SoundTokenTest is Test {

    bytes32 public constant ARTIST_ROLE = keccak256("ARTIST_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    SoundToken instance;
    address admin;
    address artist;

    // Create a new instance of the contract, declare owner and random recipient
    function setUp() public {
        instance = new SoundToken();
        // create a random recipient address
        artist = makeAddr("artist");
        admin = makeAddr("admin");
    }
    function testInitialize() public {
        instance.initialize(admin, artist);
        assertTrue(instance.hasRole(instance.ADMIN_ROLE(), admin));
    }
    function testAddRole() public{
        instance.initialize(admin, artist);
        vm.prank(admin);
        instance.grantRole(ARTIST_ROLE, artist);
        assertTrue(instance.hasRole(instance.ARTIST_ROLE(), artist));
    }

    function testMintSuccess() public {
        instance.initialize(admin, artist);
        vm.prank(admin);

        uint256 amount = 100000000;
        instance.mint(admin, amount);
        // Make sure the balance of the contract is 100
        assertEq(instance.balanceOf(admin), amount);
    }    
    function testBurnSuccess() public {
        instance.initialize(admin);
        vm.startPrank(admin);

        uint256 mintAmount = 100000;
        uint256 burnAmount = 10;

        instance.mint(admin, mintAmount);

        instance.burn(admin, burnAmount);
        assertEq(instance.balanceOf(admin), (mintAmount - burnAmount));
        vm.stopPrank();
    }

    function testClaimSuccess() public {
        instance.initialize(admin);
        vm.startPrank(admin);
        instance.grantRole(ARTIST_ROLE, artist);

        uint256 mintAmount = 100000000;
        uint256 amount = 100;
        instance.mint(admin, mintAmount);

        vm.stopPrank();

        vm.prank(artist);
        instance.claim(admin, artist, amount);
        assertEq(instance.balanceOf(artist), amount);
    }

}