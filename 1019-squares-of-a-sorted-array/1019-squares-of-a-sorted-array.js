/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let out = [];
    let i=0,j=nums.length-1
    while(i<=j){
        let k=0;
        if(Math.abs(nums[i])<nums[j]){
            out.unshift(nums[j]*nums[j]);
            j--
        }else{
            out.unshift(nums[i]*nums[i]);
            i++
        }
        
    }
    return out;
};