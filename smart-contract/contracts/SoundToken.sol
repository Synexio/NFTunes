// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "./Staff.sol";

contract SoundToken is Initializable, ERC20Upgradeable, ERC20BurnableUpgradeable, AccessControlUpgradeable, UUPSUpgradeable {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    Staff private staffContract;
    
    modifier onlyArtist() {
        require(keccak256(abi.encodePacked(staffContract.isStaff(msg.sender))) == keccak256(abi.encodePacked("artist")), "Caller is not an artist");
        _;
    }

    function initialize(address admin, address staffContractAddress)
        initializer public
    {
        __ERC20_init("SOUND", "SND");
        __ERC20Burnable_init();
        __AccessControl_init();
        __UUPSUpgradeable_init();

        _grantRole(ADMIN_ROLE, admin);
        staffContract = Staff(staffContractAddress);
    }

    function mint(address account, uint256 amount) public onlyRole(ADMIN_ROLE) {
        _mint(account, amount);
    }

    function burn (address to, uint256 amount) public onlyRole(ADMIN_ROLE) {
        _burn(to, amount);
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        onlyRole(ADMIN_ROLE)
        override
    {}
    
    function claim (address from, address to, uint256 amount) public onlyArtist {
        _transfer(from, to, amount);
    }
   
}