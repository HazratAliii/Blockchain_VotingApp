// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

contract VoteCount {
    uint candidate1 = 0;
    uint candidate2 = 0;
    uint candidate3 = 0;

    function get1() public returns (uint) {
        return candidate1 += 1;
    }
    function get2() public returns (uint) {
        return candidate2 += 1;
    }
    function get3() public returns (uint) {
        return candidate3 += 1;
    }
    
}