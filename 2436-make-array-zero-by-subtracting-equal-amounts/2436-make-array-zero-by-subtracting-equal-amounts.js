/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const newSet = new Set(nums);
    newSet.delete(0)
    return newSet.size;
};