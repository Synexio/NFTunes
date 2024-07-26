// SPDX-License-Identifier : MIT

pragma solidity ^0.8.19;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract SoundNFTProxy is ERC721 {
    constructor (address _logic, address owner2, string uri) public ERC721Token(owner1, owner2, uri){}

}
// DELEGATECALL : This is used for upgradeable smart contracts design patterns
// keep the msg.sender, msg.value and data send