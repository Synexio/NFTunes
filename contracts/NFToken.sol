// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/manager/AccessManagedUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract NFToken is Initializable, ERC20Upgradeable, ERC20BurnableUpgradeable, AccessManagedUpgradeable, UUPSUpgradeable {
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(address initialAuthority) initializer public {
        __ERC20_init("NFToken", "NTK");
        __ERC20Burnable_init();
        __AccessManaged_init(initialAuthority);
        __UUPSUpgradeable_init();
    }

    function mint(address to, uint256 amount) public restricted {
        _mint(to, amount);
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        restricted
        override
    {}
}