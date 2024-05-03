// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/manager/AccessManagedUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract NFTune is Initializable, ERC721Upgradeable, ERC721BurnableUpgradeable, AccessManagedUpgradeable, UUPSUpgradeable {
    uint256 private _nextTokenId;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(address initialAuthority) initializer public {
        __ERC721_init("NFTune", "NTU");
        __ERC721Burnable_init();
        __AccessManaged_init(initialAuthority);
        __UUPSUpgradeable_init();
    }

    function safeMint(address to) public restricted {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        restricted
        override
    {}
}