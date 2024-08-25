// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;


import {SoundNFT} from "./SoundNFT.sol";
import "./Staff.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract AlbumFactory is UUPSUpgradeable, AccessControlUpgradeable{

    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    address[] public deployedAlbums;
    Staff private staffContract;
    
    modifier onlyArtist() {
        require(keccak256(abi.encodePacked(staffContract.isStaff(msg.sender))) == keccak256(abi.encodePacked("artist")), "Caller is not an artist");
        _;
    }

    function initialize(address admin, address staffContractAddress) public initializer {
        _grantRole(ADMIN_ROLE, admin);
        __UUPSUpgradeable_init();
        staffContract = Staff(staffContractAddress);
    }

    function createAlbum(string memory name, string memory symbol, address admin,address staffContractAddress) public onlyArtist returns (address){
        SoundNFT newAlbum = new SoundNFT();
        newAlbum.initialize(admin, staffContractAddress, name, symbol);
        deployedAlbums.push(address(newAlbum));
        return address(newAlbum);
    }

    function _authorizeUpgrade(address newImplementation) internal onlyRole(ADMIN_ROLE) override {}

}