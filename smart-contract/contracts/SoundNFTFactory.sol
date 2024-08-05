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
        _grantRole(ARTIST_ROLE, msg.sender);
        // _setupRole(ADMIN_ROLE, msg.sender);
        // Definir une adresse admin
        __UUPSUpgradeable_init();
    }

    function createAlbum(
        // string memory name, string memory symbol, address admin, address artist
        ) public returns (address){
        address newAlbum = address(new SoundNFT());
        deployedAlbums.push(newAlbum);
        return newAlbum;
    }

    function _authorizeUpgrade(address newImplementation) internal onlyRole(ADMIN_ROLE) override {}

}