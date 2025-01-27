/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let s=0; let e=nums.length-1;
    let l=-1; let r=-1;
    //to find first position
    while(s<=e){
       let mid=Math.floor((s+e)/2)
        if(nums[mid]===target){
            l=mid;
            e=mid-1;
        }else if(nums[mid]>target){
            e=mid-1
        }else{
            s=mid+1
        }
    }
    s=0;
    e=nums.length-1
    //to find last position
    while(s<=e){
       let mid=Math.floor((s+e)/2)
        if(nums[mid]===target){
            r=mid;
            s=mid+1
        }else if(nums[mid]>target){
            e=mid-1;
        }else{
            s=mid+1 
        }
    }
    return [l,r]
};