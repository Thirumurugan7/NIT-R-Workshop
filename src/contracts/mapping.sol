// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DataCalc{


    mapping (string => uint) public NameToAge;

    function setNametoAge(string memory _name, uint _age) public {
        NameToAge[_name] = _age;
    }


    function getNameToAge(string memory _name) view public returns(uint){
        return NameToAge[_name];
    }

}