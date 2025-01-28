/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let s=0;
    let e=nums.length-1;
    while(s<=e){
        let mid=Math.floor((s+e)/2);
        if(nums[mid]=== target){
            return mid
        }
    //to check the first half of array
        if(nums[s]<=nums[mid]){
            if(nums[s]<=target && target < nums[mid]){
                e=mid-1;
            }else{
                s=mid+1
            }
        }else{ // to check second half of array
            if(nums[mid]<target && target <=nums[e]){
                s=mid+1
            }else{
                e=mid-1
            }
        
    }
    }
    return -1
};