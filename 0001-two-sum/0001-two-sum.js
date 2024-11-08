/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    let i=0,j=nums.length-1;
    while(i<=j){
        let comp = target- nums[i];
        if(map.has(comp)){
            return [map.get(comp),i];
        }
        map.set(nums[i],i);
        i++
    }
    
    return [];
};