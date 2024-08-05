// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;


import {SoundNFT} from "./SoundNFT.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract SoundNFTFactory is UUPSUpgradeable, AccessControlUpgradeable{

    bytes32 public constant ARTIST_ROLE = keccak256("ARTIST_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");


    address[] public deployedAlbums;

    function initialize() public initializer {
        __UUPSUpgradeable_init();
    }

    function createAlbum(
        // string memory name, string memory symbol, address admin, address artist
        ) public onlyRole(ARTIST_ROLE) {
        address newAlbum = address(new SoundNFT());
        deployedAlbums.push(newAlbum);
    }

    function _authorizeUpgrade(address newImplementation) internal onlyRole(ADMIN_ROLE) override{}

}