// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


/**state container -> with functions to mutate it */
contract HelloWorld {
    function hello() public pure returns (string memory){
        return "Hello, world!";
    }
}