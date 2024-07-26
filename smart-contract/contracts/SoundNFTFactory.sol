// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;


import {SoundNFT} from "./SoundNFT.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract SoundNFTFactory is UUPSUpgradeable, Initializable {
    
    address public implementation;
    address[] public clonedContracts;

    function initialize(address _implementation) public initializer {
        implementation = _implementation;
    }
    
    function createSoundNFT(string calldata name, string calldata symbol) internal returns (address result){
        TransparentUpgradeableProxy proxy = new TransparentUpgradeableProxy(implementation, address(this), "");
    }

}