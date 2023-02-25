// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract BasicProgramming{
    bool public ans;
    //reverse(1331) == 1331
    function palindrome(int n) public{
        int temp = n;
        int rev = 0;
        while(temp > 0){
            int rem = temp % 10;
            rev = rev * 10 + rem;
            temp = temp / 10;
        }
        ans=(rev == n);
    }
    //153 == 1*1*1 + 5*5*5 + 3*3*3
    function armstrong(int n) public{
        int temp = n;
        int sum = 0;
        while(temp > 0){
            int rem = temp % 10;
            sum = sum + rem * rem * rem;
            temp = temp / 10;
        }
        ans=(sum == n);
    }
    //28 == 1+2+4+7+14
    function perfect(int n) public{
        int temp = n;
        int sum = 0;
        for(int i=1; i<temp; i++){
            if(temp % i == 0){
                sum = sum + i;
            }
        }
        ans=(sum == n);
    }
    function getAns() public view returns (bool){
        return ans;
    }
}