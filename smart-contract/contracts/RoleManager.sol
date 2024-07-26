// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/AccessControl.sol";


contract RoleManager is AccessControl {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant ARTIST_ROLE = keccak256("ARTIST_ROLE");
    bytes32 public constant SUBSCRIBER_ROLE = keccak256("SUBSCRIBER_ROLE");

    mapping(address => bytes32) public roles;

    constructor(address defaultAdmin){
        _grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);
        _grantRole(ADMIN_ROLE, defaultAdmin);
    }
    function convertStringToBytes32(string memory str) public pure returns (bytes32){
        return _convertStringToBytes32(str);
    }

    function addRole(string calldata role, address account) public onlyRole(ADMIN_ROLE){
        _addRole(role, account);
    }

    function removeRole(bytes32 role, address account) public onlyRole(ADMIN_ROLE){
        _removeRole(role, account);
    }

    function getRole(address account) public view onlyRole(ADMIN_ROLE) returns (bytes32) {
       return _getRole(account);
    }

    function _convertStringToBytes32(string memory str) internal pure returns (bytes32){
        return keccak256(abi.encodePacked(str));
    }
    function _addRole(string memory role, address account) internal {
        
        _grantRole(convertStringToBytes32(role), account);
        roles[account] = convertStringToBytes32(role);
    }

    function _removeRole(bytes32 role, address account) internal {
        _revokeRole(role, account);
         delete roles[account];
    }

    function _getRole(address account) internal view returns (bytes32) {
        return roles[account];
    }
}
