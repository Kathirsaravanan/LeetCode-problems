/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let s=0;
    let e=nums.length-1;
    let mid=0;
    while(s<e){
        mid= Math.floor((s+e)/2);
        if(nums[mid]<nums[e]){
            e= mid;
        }else{
            s=mid+1
        }
        
    }
    return nums[s]
};