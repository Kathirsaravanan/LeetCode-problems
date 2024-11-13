/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        if(map[nums[i]]){
            map[nums[i]]++
        }else{
            map[nums[i]]=1
        }
    }
    let majority = 0
    let max=0;
    for(let i in map){
        if(map[i]>majority){
            majority = parseInt(map[i]);
            max=parseInt(i)
        }
    }
    return max
};