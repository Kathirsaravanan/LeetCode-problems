/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
   let arr = new Array(nums.length);
    let temp=nums.length-1;
    let i=0;j=nums.length-1;
    while(i<=j){
        if(Math.abs(nums[i])<nums[j]){
            arr[temp]=nums[j]*nums[j];
            j--;
        }else{
            arr[temp]=nums[i]*nums[i];
            i++
        }
        temp--;
    }

    return arr;
};