// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract Staff is Initializable, AccessControlUpgradeable, UUPSUpgradeable {
     bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
     mapping (address => string) private _staff;
    
     modifier onlyArtist() {
        require(keccak256(abi.encodePacked(_staff[msg.sender])) != keccak256(abi.encodePacked("artist")), "Caller is not an artist");
        _;
    }

    modifier onlyStaff() {
        require(keccak256(abi.encodePacked(_staff[msg.sender])) != keccak256(abi.encodePacked("admin")) , "Caller is not admin");
        _;
    }

    function initialize(address admin)
        initializer public
    {
        __AccessControl_init();
        __UUPSUpgradeable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        _grantRole(ADMIN_ROLE, admin);
    }

    
    function addStaff(address account, string memory role) public onlyRole(ADMIN_ROLE) {
        _addStaff(account, role);
    }

    function removeStaff(address account) public onlyRole(ADMIN_ROLE) {
        _removeStaff(account);
    }

    function isStaff(address account) public view returns (string memory) {
        return _staff[account];
    }

    function _addStaff(address account, string memory role) internal {
        _staff[account] = role;
    }

    function _removeStaff(address account) internal {
        _staff[account] = "null";
    }
    

    function _authorizeUpgrade(address newImplementation)
        internal
         onlyRole(ADMIN_ROLE)
        override
    {}
}