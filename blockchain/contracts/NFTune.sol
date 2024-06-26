// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/manager/AccessManaged.sol";

contract NFTune is ERC721, ERC721Burnable, AccessManaged {
    uint256 private _nextTokenId;

    constructor(address initialAuthority)
        ERC721("NFTune", "NFU")
        AccessManaged(initialAuthority)
    {}

    function safeMint(address to) public restricted {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
    }
}