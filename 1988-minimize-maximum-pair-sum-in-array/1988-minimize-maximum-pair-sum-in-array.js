/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums=nums.sort((a,b)=>a-b);
    let n=nums.length;
    let max = 0;
    for(let i=0;i<nums.length/2;i++){
        max= max>nums[i]+nums[n-1]?max:nums[i]+nums[n-1]
        n--;
    }
    return max;
};