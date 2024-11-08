/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    let i=0,j=nums.length;
    while(i<=j){
        const pairIndex = map.get(nums[i]);
        if(pairIndex || pairIndex=== 0){
            return [pairIndex+1,i+1]
        }
        const difference = target- nums[i];
        map.set(difference,i);
        i++;
    }
    return [];
};