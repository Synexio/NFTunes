// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {Test, console} from "../lib/forge-std/src/Test.sol";
import {SoundToken} from "../contracts/SoundToken.sol";
import {Staff} from "../contracts/Staff.sol";

contract SoundTokenTest is Test {

    bytes32 public constant ARTIST_ROLE = keccak256("ARTIST_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    SoundToken instance;
    Staff staff;
    address admin;
    address artist;
    address addr1;

    // Create a new instance of the contract, declare owner and random recipient
    function setUp() public {
        instance = new SoundToken();
        staff = new Staff();
        // create a random recipient address
        artist = makeAddr("artist");
        admin = makeAddr("admin");
        addr1 = makeAddr("user");
        staff.initialize(admin);
        vm.prank(admin);
        staff.addStaff(artist, "artist");
        instance.initialize(admin, address(staff));
    }
    function testInitialize() public view {
        assertTrue(instance.hasRole(instance.ADMIN_ROLE(), admin));
    }
    function testAddRole() public{
        vm.startPrank(admin);
        staff.addStaff(artist, "artist");
        vm.stopPrank();
    }

    function testMintSuccess() public {
        vm.prank(admin);

        uint256 amount = 100000000;
        instance.mint(admin, amount);
        // Make sure the balance of the contract is 100
        assertEq(instance.balanceOf(admin), amount);
    }    
    function testBurnSuccess() public {
        vm.startPrank(admin);

        uint256 mintAmount = 100000;
        uint256 burnAmount = 10;

        instance.mint(admin, mintAmount);

        instance.burn(admin, burnAmount);
        assertEq(instance.balanceOf(admin), (mintAmount - burnAmount));
        vm.stopPrank();
    }

    function testClaimSuccess() public {
        vm.prank(admin);
        uint256 mintAmount = 100000000;
        uint256 amount = 100;
        instance.mint(admin, mintAmount);
        vm.stopPrank();

        vm.prank(artist);
        instance.claim(admin, artist, amount);
        assertEq(instance.balanceOf(artist), amount);
    }
    function testClaimFail() public {
        vm.prank(admin);
        uint256 mintAmount = 100000000;
        uint256 amount = 100;
        instance.mint(admin, mintAmount);
        vm.stopPrank();
        // By placing vm.expectRevert before the claim function call, 
        // you ensure the test framework knows to expect a revert, making the test valid
        vm.expectRevert(bytes("Caller is not an artist"));
        vm.prank(addr1);
        instance.claim(admin, artist, amount);
    }
}
