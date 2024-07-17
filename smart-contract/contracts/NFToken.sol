// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/manager/AccessManaged.sol";

contract NFToken is ERC20, ERC20Burnable, AccessManaged {
    constructor(address initialAuthority)
        ERC20("NFToken", "NFO")
        AccessManaged(initialAuthority)
    {}

    function mint(address to, uint256 amount) public restricted {
        _mint(to, amount);
    }
    function burn (address account, uint256 value) public restricted {
        _burn(account, value);
    }
    function transfer(address from, address to, uint256 value) public restricted {
        _transfer(from, to, value);
    }
 }