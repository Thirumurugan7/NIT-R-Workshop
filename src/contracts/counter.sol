// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract Counter{

    uint count;


//increment


function increment() public {
    count++;
}

//decrement

function decrement() public {
    count--;
}




//getCounter


function getCounter() view  public returns (uint){
    return count;
}


}