// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

//import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract MADT is  ERC20{

   constructor() ERC20("MADT", "MADT")  {
        _mint(msg.sender,100000000);
    }
}
